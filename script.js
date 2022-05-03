/* eslint-disable */
const selectInput = document.getElementById('texto-tarefa');
const selectOl = document.getElementById('lista-tarefas');
const selectli = document.getElementsByClassName('list');
const selectButton = document.getElementById('criar-tarefa');
const buttonLimpar = document.getElementById('apaga-tudo');
const buttonApagaFeito = document.getElementById('remover-finalizados');
const ClassCompleted = document.getElementsByClassName('completed')
const ButtonSalva = document.getElementById('salvar-tarefas')


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
    if (event.target.classList.contains('completed')) {
      //EVENT REMOVE A CLASS SE  NO ELEMENTO CLICADO (target) TIVER E
      event.target.classList.remove('completed');
    } else {
      // SE NAO TIVER EVENT NO ELEMENTO CLICADO (target) ADICIONA
      event.target.classList.add('completed');
    };
  });
}
tarefaConcluida()

//REMOVE TUDA DA LISTA |W3SCHOOL
buttonLimpar.addEventListener('click', () => {
  //O hasChildNodes()método da Nodeinterface retorna um valor booleano indicando se o dado Nodepossui nós filhos ou não.
  while (selectOl.hasChildNodes()) {
    //firstChild : retorna o primeiro nó filho. 
    selectOl.removeChild(selectOl.firstChild);
  }

})

//REMOVE SOMENTE TAREFAS FEITA
buttonApagaFeito.addEventListener('click', () => {
  //PERCORRENDO  AS CLASS COMPLETED| COMEÇANDO PELO FIM DO ARRAY PARA IVITAR ERROS JA QUE ESTAMOS REMOVENDO ELEMENTOS -->https://cursos.alura.com.br/forum/topico-excluir-todos-os-elementos-com-uma-classe-159597#:~:text=O%20comando%20document.,desta%20lista%20e%20remov%C3%AA%2Dlos.
  for (let index = ClassCompleted.length - 1; index >= 0; index -= 1) {
    //RRMOVE A CADA POSIÇAO DO INDEX
    ClassCompleted[index].remove()
  }

});
//SALVANDO NO LOCALSTRAGE
//pegando minha ol 
let lista = document.getElementById('lista-tarefas');
//adicionando evento
ButtonSalva.addEventListener('click', function() {
  //salvando minha ol com as  li's 
    localStorage.setItem('salve',lista.innerHTML)
  })

//EXIBINDO ITENS SALVOS NO LOCALSTRAGE
//variavel q pega os item salvos no localstorage
let salve = localStorage.getItem('salve');
//se tiver item salvo
  if(salve) {
    //minha ol recebe os item salvo
      document.getElementById('lista-tarefas').innerHTML = salve
  }

  



//=========================================REQUISITO 12 OUTRA FORMA=============================================
/* let salvos = JSON.parse(localStorage.getItem("teste")) || [];
//SALVANDO NO LOCALSTRAGE
ButtonSalva.addEventListener('click', () => {
  const selectli = document.getElementsByClassName('list');
  for (let index = 0; index < selectli.length; index++) {
    let element = selectli[index].innerText
   
    salvos.push(element)

    localStorage.setItem("teste", JSON.stringify(salvos))
  }


}
)

//EXIBINDO ITENS SALVOS NO LOCALSTRAGE
function perarOsSalvos() {
  if (salvos.length > 0) {

    for (let index = 0; index < salvos.length; index++) {
      let exibir = salvos[index];
      let criaLi = document.createElement('li');
      criaLi.innerText = exibir;
      selectOl.appendChild(criaLi);

    }

  }

}

perarOsSalvos() */


