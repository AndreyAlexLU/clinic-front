// @flow

export type PatientType = {|
    id: string,
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
