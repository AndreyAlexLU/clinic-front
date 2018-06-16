// @flow

export function getFullName(firstName: string, lastName: string, middleName: ?string) {
    if (middleName) {
        return `${lastName} ${firstName} ${middleName}`;
    } else {
        return `${lastName} ${firstName}`;
    }
}
