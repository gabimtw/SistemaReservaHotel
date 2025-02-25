class Hotel {
    constructor(Nome,Email,Endereço,Cidade,Estado,Telefone,DDD){
        this.Nome = Nome
        this.Email = Email
        this.Endereço = Endereço
        this.Cidade = Cidade
        this.Estado = Estado
        this.Telefone = Telefone
        this.DDD = DDD
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

    setDDD(DDD) {
        this.DDD = DDD;
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

    getDDD() {
        return this.DDD;
    }
}
export default Hotel