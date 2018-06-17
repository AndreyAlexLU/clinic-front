// @flow

export type User = {|
    login: string,
    roleId: number,
    password?: string
    firstName: string,
    lastName: string,
    middleName: ?string,
    birthDate: string,
    sex: number,
    passportSeries: string,
    passportNumber: string,
    passportIssueDate: string,
    passportAuthority: string,
    address: string,
    telephoneNumber: string,
    email: ?string,
|};
