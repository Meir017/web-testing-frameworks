

export function getMethodsFromType(type: Function) {
    return Object.getOwnPropertyNames(type.prototype)
        .filter(name => typeof type.prototype[name] === 'function')
        .filter(name => name !== 'constructor');
}