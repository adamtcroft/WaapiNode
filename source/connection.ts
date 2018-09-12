import * as autobahn from 'autobahn';
import {ak} from 'waapi';
import * as waapi from 'waapi';

export class Connection
{
    connection:autobahn.Connection;

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
    }

    send()
    {
        this.connection.onopen = function(session)
        {
            console.log('wamp connection opened');

            session.call(ak.wwise.core.getInfo, [], {}).then(
                function (res)
                {
                    console.log(res);
                },

                function (error)
                {
                    console.log(error);
                }
            );
        };

        this.connection.open();
    }
}