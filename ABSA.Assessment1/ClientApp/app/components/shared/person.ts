import { IdentityType } from "./identity-type-enum"

export class Person {
    surname: string;
    firstNames: string;
    identityType: number;//– Passport - 2 or Identity Document - 1
    identityNumber: number;
    dateOfBirth : Date
}