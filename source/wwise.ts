import * as autobahn from 'autobahn';
import {ak} from 'waapi';
import * as waapi from 'waapi';
import { WwisePacket } from './wwisepacket';
import { WwiseFunctions } from './wwisefunctions';

export class Wwise
{
    connection:autobahn.Connection;
    packet:WwisePacket;
    public dataFromWwise;
    public connectionError;

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

        this.packet.functionCall = WwiseFunctions.getInfo;
        this.send(this.packet);
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
                    return this.recieveResponse(res);
                },

                function (error)
                {
                    return this.receiveError(error);
                }
            );
        };

        this.connection.open();
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
}