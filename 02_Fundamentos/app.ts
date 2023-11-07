import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Jonas', 10)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('Cucci', 15)
console.log(companyAccount)

peopleAccount.deposit()
companyAccount.deposit()

peopleAccount.withdraw()
companyAccount.withdraw()
