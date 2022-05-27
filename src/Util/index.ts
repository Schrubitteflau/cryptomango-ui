export function toError(error: any): Error
{
    if (error instanceof Error)
    {
        return error;
    }
    if (typeof error.message !== "undefined")
    {
        return new Error(error.message);
    }
    return new Error(error);
}
