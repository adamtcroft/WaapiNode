const autobahn = require('autobahn');
//const waapi = require('waapi');
//const waapiClient = require('waapi-client');
//const { WwiseFunctions } = require("./wwisefunctions");
//const { WwisePacket } = require("./wwisepacket");

class Wwise {
    constructor() {
        this.connection = new autobahn.Connection({
            url: 'ws://localhost:8080/waapi',
            realm: 'realm1',
            protocols: ['wamp.2.json']
        });
    }

    send() {
        this.connection.onopen = (session) => {
            session.call('ak.wwise.core.getInfo', [], {}).then(
                function (res) {
                    console.log(res);
                },
                function (error) {
                    console.log(error);
                }
            ).then(
                {
                    function() {
                        connection.close();
                    }
                }
            );
        };

        this.connection.open();
    }
}

module.exports = Wwise;