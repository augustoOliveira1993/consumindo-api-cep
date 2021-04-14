const preencherFormulario = (endereco) => {
    document.getElementById('endereço').value = endereco.logradouro
    document.getElementById('numero').value = endereco.gia
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade
    document.getElementById('estado').value = endereco.uf
   
}

const limparFormulario = () => {
    document.getElementById('endereço').value = ''
    document.getElementById('numero').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''
   
}
const eNumero = (numero) => /^[0-9]+$/.test(numero)
const cepValido = (cep) => cep.length == 8 && !!cep && eNumero(cep)

const pesquisarCEP = async () => {
    limparFormulario()
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`
    if (cepValido(cep)) {
        const dados = await fetch(url)
        const endereco = await dados.json()
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereço').value = 'CEP não encontrado!'
        } else {
            preencherFormulario(endereco)
        }
    } else {
        document.getElementById('endereço').value = 'CEP incorreto'
    }
    

}
const cep = document.getElementById('cep').addEventListener('focusout', pesquisarCEP)