export class WwisePacket {
    functionCall: Functions;
    arguments;
    options;

    constructor(functionCall) {
        this.functionCall = functionCall;
    }
}


export enum Functions {
    "ak.wwise.core.getInfo",
}
