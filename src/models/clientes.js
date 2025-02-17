class clientes {
    constructor(nome,CPF,email,telefone,endereço,data_nascimento){
        this.nome = nome
        this.CPF = CPF
        this.email = email
        this.telefone = telefone
        this.endereço = endereço
        this.data_nascimento = data_nascimento
    }

    setnome(nome){
        this.nome = nome
    }
    setCPF(CPF){
        this.CPF = CPF
        if(CPF.length != 11){
            console.log("erro")
        }
    }
    setemail(email){
        this.email = email
        if (!email.includes("@") && !email.includes(".")) {
            console.log("erro")
        }
    }
    settelefone(DDD,telefone){
        this.DDD = DDD
        this.telefone = telefone
        if(DDD.length != 2){
            console.log("ddd errado")
        }
        else if(telefone.length != 9){
            console.log("erro")
        }
    }
    
}