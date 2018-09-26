const autobahn = require('autobahn');
const waapi = require('waapi');
const waapiClient = require('waapi-client');
const { WwiseFunctions } = require("./wwisefunctions");
const { WwisePacket } = require("./wwisepacket");


export class Wwise {
    connection;
    packet;
    dataFromWwise;
    connectionError;

    constructor() {
        this.connection = new autobahn.connection({
            url: 'ws://localhost:8080/waapi',
            realm: 'realm1',
            protocols: ['wamp.2.json']
        });

        this.packet = new WwisePacket(WwiseFunctions.getInfo);
        this.send(this.packet);
    }

    send(packet)
    {
        this.connection.onopen = (session) =>
        {
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