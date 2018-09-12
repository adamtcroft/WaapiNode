export class WwisePacket
{
    functionCall:any;
    arguments;
    options;

    constructor(functionCall)
    {
        this.functionCall = functionCall;
    }
}