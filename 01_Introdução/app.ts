/*// Tipos de Tipagens:

    // ideal a ser feito
    let a: string = 'a'
    let b: number = 12
    let x: boolean = true

    // Não é o ideal más pode ser feiro
    let m: string | number = 2
    m = 'Jonas'
    let n: any = true
*/
/* // Declarando objetos com arrays:

    interface Pessoa {
        nome: string,
        idade: number,
        profissao?: string
    }

    const pessoa: Pessoa = {
        nome: 'Jonas',
        idade: 32
    }

    const outraPessoa: Pessoa = {
        nome: 'Adriele',
        idade: 32,
        profissao: 'fofoqueira'
    }

    const arrayPessoa: Pessoa[] = [
        pessoa,
        outraPessoa
    ]

    const arrayNum: Array<number> = [
        1, 2, 3, 4, 5
    ]
*/
/*// Condicionais (Decisões):
    const num: number = 13

    if (num > 15) {
        console.log('Número é maior do que 15!')
    } else if (num === 15) {
        console.log('Número é 15!')
    } else {
        console.log('Número é menor que 15!')
    }
*/
/*// Objetos literais para condições
    const typeUser = {
        admin: 'Seja bem vindo admin',
        student: 'Você é estudante',
        viewer: 'Você pode visualizar apenas'
    }

    function validateUser(user: string) {
        console.log(typeUser[user as keyof typeof typeUser])
    }

    const usuario = 'admin'

    validateUser(usuario)
*/
/*// Estruturas de repetição:
    for (let i = 0; i < 5; i++)
        console.log(i)
    const numeros: number[] = [1, 2, 3, 4, 5]
    
    for (let num of numeros) {
        let n: number = num
        let temp: string = ''
        
        while (n) {
            temp += `${n}`
            n--
        }
        console.log(temp)
    }
*/
/*// Trabalhando com arrays:
    const numArray: Array<number> = [5, 6, 7, 8, 9]
    const strArray: string[] = ['s', 'b', 'c', 'd']

    // console.log(numArray[2])
    // console.log(strArray[3])
    // console.log(strArray.length)

    // numArray.forEach(num => { if (num > 2) console.log(num) })

    numArray.map(num => { if (num % 2 === 0) console.log(num) })
*/