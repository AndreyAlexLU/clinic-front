// @flow

export function getFullName(obj: Object) {
    const {
        firstName, lastName, middleName,
    } = obj;
    if (middleName && middleName !== 'undefined') {
        return `${lastName} ${firstName} ${middleName}`;
    } else {
        return `${lastName} ${firstName}`;
    }
}
