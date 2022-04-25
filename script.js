/* eslint-disable */
const selectInput = document.getElementById('texto-tarefa');
const selectOl = document.getElementById('lista-tarefas');
const selectButton = document.getElementById('criar-tarefa');
//======================================================================================================================

// adicionar tarefa a lista
selectButton.addEventListener('click', function() {//ADICIONANDO EVENTO AO BUTTON COM UMA FUNÇAO
// PEGANDO O VALOR PASSADO PARA O INPUT
let valorInput = selectInput.value;
//CRIANDO MEU ELEMENTO LI FILHO DE OL
let criaLi = document.createElement('li');
//PASSANDO O TEXTO DO INPUT PARA MINHA LI |innerText = PARA MOSTRA O TEXTO PASSADO
criaLi.innerText = valorInput;
//ADICIONANDO MINHA LI COMO FILHA DE OL NO MEU HTML
selectOl.appendChild(criaLi);
//LIMPANDO MEU INPUT PARA RECEBER NOVO VALOR
selectInput.value = '';
})
//======================================================================================================================


/* alert(valorInput)  */
