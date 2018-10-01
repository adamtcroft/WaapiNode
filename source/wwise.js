const autobahn = require('autobahn');

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
                    return res;
                },
                function (error) {
                    console.log(error);
                    return error;
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