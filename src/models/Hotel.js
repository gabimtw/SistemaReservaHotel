class Hotel {
    constructor(id,Nome,Email,Endereço,Cidade,Estado,Telefone){
        this.id = id
        this.Nome = Nome
        this.Email = Email
        this.Endereço = Endereço
        this.Cidade = Cidade
        this.Estado = Estado
        this.Telefone = Telefone
    }
    setid(id){
        this.id = id
    }

    setNome(){
        this.Nome = Nome
    }
    setEmail(Email) {
        this.Email = Email;
    }

    setEndereço(Endereço) {
        this.Endereço = Endereço;
    }

    setCidade(Cidade) {
        this.Cidade = Cidade;
    }

    setEstado(Estado) {
        this.Estado = Estado;
    }

    setTelefone(Telefone) {
        this.Telefone = Telefone;
    }

    getid(){
        return this.id
    }

    getNome() {
        return this.Nome;
    }

    getEmail() {
        return this.Email;
    }

    getEndereço() {
        return this.Endereço;
    }

    getCidade() {
        return this.Cidade;
    }

    getEstado() {
        return this.Estado;
    }

    getTelefone() {
        return this.Telefone;
    }

}
export default Hotel