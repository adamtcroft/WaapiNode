const autobahn = require('autobahn');

class Wwise {
    constructor() {
        this.connection = new autobahn.Connection({
            url: 'ws://localhost:8080/waapi',
            realm: 'realm1',
            protocols: ['wamp.2.json']
        });
        this.connection.onopen = (session) => {
            session.call('ak.wwise.core.getInfo').then(session.log);
            //let res = session.call('ak.wwise.core.getInfo', [], {});

            //console.log("Response: " + res);
            /*
            session.call('ak.wwise.core.getInfo', [], {}).then(
                function (res) {
                    console.log(res);
                    return res;
                },
                function (error) {
                    return error;
                }
            ).then(
                () => {
                    connection.close();
                }
            );
            */
        };
    }

    talkToWwise() {
        this.connection.open();
    }
}

module.exports = Wwise;