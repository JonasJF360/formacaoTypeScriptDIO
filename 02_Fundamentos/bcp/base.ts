class Pessoa {
    name: string
    age: number

    constructor(_name: string, _age: number) {
        this.name = _name
        this.age = _age
    }

    aboutUser = () => {
        return `User name = ${this.name}, Age = ${this.age}`
    }
}

const users: Array<Pessoa> = [
    new Pessoa('Jonas', 31),
    new Pessoa('Adriele', 33),
    new Pessoa('Edson', 38),
    new Pessoa('Valdineia', 41),
    new Pessoa('Laura', 59),
    new Pessoa('Manoel', 77),
    new Pessoa('Lenir', 58),
    new Pessoa('Aldair', 55),
]

for(const user of users) {
    console.log(user.aboutUser())
}