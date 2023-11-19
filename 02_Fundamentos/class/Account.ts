
export abstract class Account {
    private name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    // getters
    getName = (): string => this.name;
    getAccountNumber = (): number => this.accountNumber;
    getBalance = (): number => this.balance;

    // setters
    setName = (name: string) => { this.name = name; };
    // setAccountNumber = (accountNumber: number) => { this.accountNumber = accountNumber; };
    setBalance = (balance: number) => { this.balance = balance; };

    // methods
    deposit = (): void => {
        if (this.validateStatus())
            console.log(`OK ${this.name}, você depositou`);
    };
    withdraw = (): void => { console.log(`${this.name}, você sacou`); };
    showBalance = (): void => { console.log(`Seu saudo é ${this.balance} `); };

    private validateStatus = (): boolean => {
        if (this.status) return this.status;

        throw new Error('Conta inválida');
    };
}
