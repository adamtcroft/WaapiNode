"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autobahn = require("autobahn");
const waapi_1 = require("waapi");
class Connection {
    constructor() {
        this.connection = new autobahn.Connection({
            url: 'ws://localhost:8080/waapi',
            realm: 'realm1',
            protocols: ['wamp.2.json']
        });
    }
    send() {
        this.connection.onopen = function (session) {
            console.log('wamp connection opened');
            session.call(waapi_1.ak.wwise.core.getInfo, [], {}).then(function (res) {
                console.log(res);
            }, function (error) {
                console.log(error);
            });
        };
        this.connection.open();
    }
}
exports.Connection = Connection;
