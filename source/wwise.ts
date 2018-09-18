import * as autobahn from 'autobahn';
import {ak} from 'waapi';
import * as waapi from 'waapi';
import { WwisePacket } from './wwisepacket';
import { WwiseFunctions } from './wwisefunctions';

export class Wwise
{
    connection:autobahn.Connection;
    packet:WwisePacket;
    self = this;
    public dataFromWwise:any = "init";
    public connectionError:any = "init";

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

        this.packet = new WwisePacket(WwiseFunctions.getInfo);
        this.send(this.packet);
    }

    send(WwisePacket)
    {
        this.connection.onopen = (session) =>
        {
            console.log('wamp connection opened');

            session.call(WwisePacket.functionCall, [], {}).then(
                (res) =>
                {
                    console.log(res);
                    this.dataFromWwise = res;
                    console.log(this.dataFromWwise);
                },
                (error) =>
                {
                    this.connectionError = JSON.parse(error);
                }
            );
        };

        this.connection.open();
    }
}