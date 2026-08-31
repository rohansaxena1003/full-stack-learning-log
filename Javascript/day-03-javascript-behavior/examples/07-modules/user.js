export function createIdGenerator() {
    let id = 0;

    return function () {
        id++;
        return id;
    };
}