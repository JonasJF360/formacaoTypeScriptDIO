import { Account } from "./Account"


export class CompanyAccount extends Account {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = () => { console.log('Você pegou um emprestimo') }
    deposit = (): void => { console.log(`A empresa ${this.getName()} depositou`) }
    withdraw = (): void => { console.log(`A empresa ${this.getName()} sacou`) }
}
