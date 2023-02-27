class WorkerMessage
{
    Command: string
    Data: string

    constructor(Command: string, Data: string)
    {
        this.Command = Command
        this.Data = Data
    }
}

export {WorkerMessage}