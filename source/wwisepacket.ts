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
    copy = "ak.wwise.core.object.copy",
    get = "ak.wwise.core.object.get",
    create = "ak.wwise.core.object.create",
    delete = "ak.wwise.core.object.delete",
    executeActionOnEvent = "ak.soundengine.executeActionOnEvent",
    postEvent = "ak.soundengine.postEvent",
    postMsgMonitor = "ak.soundengine.postMsgMonitor",
    postTrigger = "ak.soundengine.postTrigger",
    registerGameObj = "ak.soundengine.registerGameObj",
    resetRTPCValue = "ak.soundegine.resetRTPCValue",
    seekOnEvent = "ak.soundengine.seekOnEvent"
}