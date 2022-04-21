

export function getMethodsFromType(type: Function) {
    return Object.entries(Object.getOwnPropertyDescriptors(type.prototype))
        .filter(([name, descriptor]) => typeof descriptor.value === 'function')
        .filter(([name, descriptor]) => name !== 'constructor')
        .map(([name, descriptor]) => name);
}