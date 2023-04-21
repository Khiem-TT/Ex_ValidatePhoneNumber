import {PhoneNumberRegex} from "./PhoneNumberRegex";

let phoneNumberRegexTest = new PhoneNumberRegex();
let phoneNumbersList: string[] = ['(84)-(0978489648)', '(a8)-(22222222)'];

phoneNumbersList.forEach(item => {
    let result = phoneNumberRegexTest.validate(item);
    console.log(`${item}: ${result}`);
})