import * as autobahn from 'autobahn';
import {ak} from 'waapi';
import * as waapi from 'waapi';
import { WwisePacket } from './wwisepacket';
import { WwiseFunctions } from './wwisefunctions';

export class Wwise
{
    connection:autobahn.Connection;
    packet:WwisePacket;
    public dataFromWwise:any;
    public connectionError:any;

    constructor()
    {
        this.connection = new autobahn.Connection
        (
            {
                url: 'ws://localhost:8080/waapi',
                realm: 'realm1',
                protocols: ['wamp.2.json']
            }
        );

        this.dataFromWwise = "init";
        this.connectionError = "init";

        this.packet = new WwisePacket(WwiseFunctions.getInfo);
        this.send(this.packet);
    }

    receiveResponse(response)
    {
        this.dataFromWwise = JSON.parse(response);
        return this.dataFromWwise;
    }

    receiveError(error)
    {
        this.connectionError = error;
        return this.connectionError;
    }

    send(WwisePacket)
    {
        this.dataFromWwise = null;
        this.connectionError = null;
        this.connection.onopen = function(session)
        {
            console.log('wamp connection opened');

            session.call(WwisePacket.functionCall, [], {}).then(
                function (res)
                {
                    this.dataFromWwise = res;
                },

                function (error)
                {
                    this.connectionError = JSON.parse(error);
                }
            );
        };

        this.connection.open();
    }
}