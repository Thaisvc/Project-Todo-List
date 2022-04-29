/* eslint-disable */
const selectInput = document.getElementById('texto-tarefa');
const selectOl = document.getElementById('lista-tarefas');
const selectButton = document.getElementById('criar-tarefa');
const selectLi = document.getElementById('lista-tarefas').children;
/* const selectCompleted = document.getElementsByClassName('completed'); */
//======================================================================================================================

// adicionar tarefa a lista

selectButton.addEventListener('click', function creates() {//ADICIONANDO EVENTO AO BUTTON COM UMA FUNÇAO
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
  //SELECIONANDO MINHA PRIMEIRA CALSS LIST E ADICIONANDO A CLASS SELECTED
  document.querySelector('.list').classList.add('selected')
  //SELECIONANDO TODAS AS CLASS LIST
  seleciona = document.getElementsByClassName('list');
  //FUNÇAO PARA SDD E REMOVER A CLASS SELECTED E A CLASS COR
  function remove() {
    //PERCORRENDO TODAS AS CLASS LIST
    for (let index = 0; index < seleciona.length; index += 1) {
      //GUARDANDO A POSICAO
      let posicao = seleciona[index];
      //ADICIONANDO UM ESCUTADOR DE EVENTO A ADA POSICAO
      posicao.addEventListener('click', function (event) {
        //SELECIONANDO MINHA CLASS SELECTED/REMOVENDO A CLASS SELECTED E COR COSA TIVER /A CADA CLICK
        document.querySelector('.selected').classList.remove('selected', 'cor');
        //ADICIONADO CLASS SELECTED E COR SE NAO TIVER/A CADA CLICK
        event.target.classList.add('selected', 'cor');

      });
    }
  }
  remove();

  //LIMPANDO MEU INPUT PARA RECEBER NOVO VALOR
  selectInput.value = '';
    
})
//======================================================================================================================
//MARCA E DESMARCA TAREFA
function tarefaConcluida() {
  //USANDO MEU DOCUMENT PQ PERMITE Q EU ACESSE QUALQUER PARTE DO MEU DOCUMENTO COM O EVENTO DE DUPLOCLICK
  document.addEventListener("dblclick", (event) => {
    //ESPECIFICANDO O Q EU QUERO SE OUVER DUPLOCLICK E MEU ELEMENTO CLICADO TIVER A CLASS COMPLETED ENTAO
    if(event.target.classList.contains('completed')){
      //EVENT REMOVE A CLASS SE  NO ELEMENTO CLICADO (target) TIVER E
      event.target.classList.remove('completed');
  }else{
    // SE NAO TIVER EVENT NO ELEMENTO CLICADO (target) ADICIONA
      event.target.classList.add('completed');
  };
});  
} 
tarefaConcluida()
