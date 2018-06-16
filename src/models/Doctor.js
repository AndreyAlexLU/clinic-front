// @flow

export type DoctorType = {|
    personalNumber: number,
    firstName: string,
    lastName: string,
    middleName: ?string,
    specializationId: string,
    education: string,
    experience: number,
    birthDate: string,
    sex: number,
    passportSeries: string,
    passportNumber: string,
    passportIssueDate: string,
    passportAuthority: string,
    address: string,
    telephoneNumber: string,
    email: ?string,
    status: string,
|};
