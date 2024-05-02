const form = document.getElementById('form-agenda')
let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()

})

function adicionaLinha (){
    const nomeAgenda = document.getElementById('nome-agenda')
    const telAgenda = document.getElementById('tel-agenda')

    let linha = '<tr>'
    linha += `<td>${nomeAgenda.value}</td>`
    linha += `<td>${telAgenda.value}</td>`
    linha += `</tr>`

    linhas += linha

    nomeAgenda.value = ''
    telAgenda.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}