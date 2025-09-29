// TODO Q1
const inRange = (input: string, min: number, max: number) => {
    if(input.length > max || input.length < min) return false

    return true
};

export { inRange };

