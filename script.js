/* eslint-disable */
const selectInput = document.getElementById('texto-tarefa');
const selectOl = document.getElementById('lista-tarefas');
const selectButton = document.getElementById('criar-tarefa');
let selectLi = document.querySelectorAll('.list')[0];
//======================================================================================================================

// adicionar tarefa a lista
selectButton.addEventListener('click', function() {//ADICIONANDO EVENTO AO BUTTON COM UMA FUNÇAO
// PEGANDO O VALOR PASSADO PARA O INPUT
let valorInput = selectInput.value;
//CRIANDO MEU ELEMENTO LI FILHO DE OL
let criaLi = document.createElement('li');
//PASSANDO O TEXTO DO INPUT PARA MINHA LI |innerText = PARA MOSTRA O TEXTO PASSADO
criaLi.innerText = valorInput;
//ADICIONANDO UMA CLASS A MINHAS LI
criaLi.classList.add('list');
//ADICIONANDO MINHA LI COMO FILHA DE OL NO MEU HTML
selectOl.appendChild(criaLi);
//LIMPANDO MEU INPUT PARA RECEBER NOVO VALOR
selectInput.value = '';
})
//======================================================================================================================
//mudando a cor de cada li clicada

//ADICIONANDO EVENTO CLICK  A LI 
selectLi = document.addEventListener('click', function(cor) {
    //SE cor NO MESMO ELEMETO CLICADO TIVER A CLASSE LIST
    if (cor.target.classList.contains('list')) {
        //cor NO MESMO ELEMENTO CLICADO VAI ALTERA O BACKGROUND
       cor.target.style.backgroundColor = 'gray'
    }
    // SE NAO DA FALSO
  },false);
  
   


/* alert(valorInput)  */
















