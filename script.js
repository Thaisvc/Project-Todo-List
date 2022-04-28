/* eslint-disable */
const selectInput = document.getElementById('texto-tarefa');
const selectOl = document.getElementById('lista-tarefas');
const selectButton = document.getElementById('criar-tarefa');
/* document.querySelector('.list');  */
//======================================================================================================================

// adicionar tarefa a lista
selectButton.addEventListener('click', function () {//ADICIONANDO EVENTO AO BUTTON COM UMA FUNÇAO
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
  //SE MINHA LI TIVER SIDO CRIADA
  if (selectOl.appendChild(criaLi)) {
    //ADICIONO NOVA CLASS
    document.querySelector('.list').classList.add('selected')
    seleciona = document.getElementsByClassName('list');
    function remove() {
      for (let index = 0; index < seleciona.length; index += 1) {
        let posicao = seleciona[index];
        posicao.addEventListener('click', function (event) {
          document.querySelector('.selected').classList.remove('selected', 'cor');
          event.target.classList.add('selected', 'cor');

        });
      }
    }
    remove();
  }
  //LIMPANDO MEU INPUT PARA RECEBER NOVO VALOR
  selectInput.value = '';
})
//======================================================================================================================
//mudando a cor de cada li clicada



















