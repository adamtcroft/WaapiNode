export class WwisePacket {
    functionCall: Functions;
    arguments;
    options;

    constructor(functionCall) {
        this.functionCall = functionCall;
    }
}


export enum Functions {
    getInfo = "ak.wwise.core.getInfo",
}
