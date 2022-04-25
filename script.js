/* eslint-disable */
const selectInput = document.getElementById('texto-tarefa');
const selectOl = document.getElementById('lista-tarefas');
const selectButton = document.getElementById('criar-tarefa');
/* document.querySelectorAll('.list')[0]; */
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
    //LIMPANDO MEU INPUT PARA RECEBER NOVO VALOR
    selectInput.value = '';
})
//======================================================================================================================
//mudando a cor de cada li clicada
let selectLi = document.addEventListener('click', function (event) {
// SE EVENT NO ELEMETO CLICADO (target) CONTER A CLASS LIST
    if (event.target.classList.contains('list')) {
        //REMOVE CLASS LIST E SELECTED 
        removeClass('list', 'selected');
        //EVENT NO ELEMETO CLICADO ADICIONA A CLASS SELECTED
        event.target.classList.add('selected');
        //SELECIONA MINHA LI PELA CLASS LIST
        let classItem = document.getElementsByClassName('list');
        //PERCORRO ELA
        for (i = 0; i < classItem.length; i += 1) {
            //ATRIBUI BACKGROUD BRANCO PARA CADA POSSIÇAO
            classItem[i].style.backgroundColor = '';
        }
        //SELECIONA A CLASS SELECTED E ADICIONA A COR 
        document.getElementsByClassName('selected')[0].style.backgroundColor = 'gray';
    };
});
//remove a class
function removeClass(nameClass, nameClassRemove) {
//SELECIONADO CLASS SELECTED
    let className = document.getElementsByClassName(nameClass);
// PERCORRO ELA E REMOVO O CLASS SELECTED
    for (i = 0; i < className.length; i += 1) {
        className[i].classList.remove(nameClassRemove);
    };
};
















