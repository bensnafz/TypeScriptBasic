
const func = <T>(args: T) => {
    return args
};

interface Song{
    name: string
}
const user = func<string>('john')
user.toUpperCase()