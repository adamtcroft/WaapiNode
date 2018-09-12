export class WwisePacket {
    functionCall: Functions;
    arguments;
    options;

    constructor(functionCall) {
        this.functionCall = functionCall.value;
    }
}


export enum Functions {
    getInfo = "ak.wwise.core.getInfo",
}
