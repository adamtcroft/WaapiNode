import * as autobahn from 'autobahn';
export declare class Connection {
    connection: autobahn.Connection;
    constructor();
    send(): void;
}
