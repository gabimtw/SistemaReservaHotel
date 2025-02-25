class Clientes {
    constructor(Id,Nome,CPF,Email,Telefone,DDD,Endereço,Data_nascimento){
        this.Id = Id
        this.Nome = Nome
        this.CPF = CPF
        this.Email = Email
        this.Telefone = Telefone
        this.Endereço = Endereço
        this.Data_nascimento = Data_nascimento
        this.DDD = DDD
    }
    setId(Id){
        this.Id = Id
    }
    setNome(Nome){
        this.Nome = Nome
    }
    setCPF(CPF){
        this.CPF = CPF
    }
    setEmail(Email){
        this.Email = Email
    }
    setDDD(DDD){
        this.DDD = DDD
    }
    setTelefone(Telefone){
        this.Telefone = Telefone
    }
    setEndereço(Endereço){
        this.Endereço = Endereço
    }
    setData_nascimento(){
        this.Data_nascimento = this.Data_nascimento
    }

    getId(){
        return this.Id
    }
    getNome(){
        return this.Nome
    }
    getCPF(){
        return this.CPF
    }
    getEmail(){
        return this.Email
    }
    getDDD(){
        return this.DDD
    }
    getTelefone(){
        return this.Telefone
    }
    getEndereço(){
        return this.Endereço
    }
    getData_nascimento(){
        return this.Data_nascimento
    }
}
export default Clientes