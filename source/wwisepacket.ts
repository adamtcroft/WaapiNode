import {WwiseFunctions} from './wwisefunctions';

export class WwisePacket {
    functionCall: WwiseFunctions;
    arguments;
    options;

    constructor(functionCall) {
        this.functionCall = functionCall;
    }
}