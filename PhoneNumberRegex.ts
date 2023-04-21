export class PhoneNumberRegex {
    phoneNumberRegex: RegExp = /^\(+[0-9]{2}\)\-\(+[0-9]{10}\)/;

    validate(regex: string): boolean {
        return this.phoneNumberRegex.test(regex);
    }
}