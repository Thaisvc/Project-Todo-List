/* eslint-disable */

window.onload = function(){

    let taskList = document.getElementById('lista-tarefas');
    let textImput = document.getElementById('texto-tarefa');

    document.getElementById('criar-tarefa').addEventListener('click', function(){

        let itemList = document.createElement('li');
        itemList.classList.add('item-lista');
        itemList.innerText = textImput.value;

        taskList.appendChild(itemList);

        textImput.value = '';    
    });

    document.addEventListener('click', function(event){

        if(event.target.classList.contains('item-lista')){

            removeClass('item-lista', 'selected');

            event.target.classList.add('selected'); 

            let classItem = document.getElementsByClassName('item-lista');

            for(i = 0; i < classItem.length; i += 1){
                classItem[i].style.backgroundColor = '';
            }
            
            document.getElementsByClassName('selected')[0].style.backgroundColor = 'gray';
        };
    });

    function removeClass(nameClass, nameClassRemove){

        let className = document.getElementsByClassName(nameClass);

        for(i = 0; i < className.length; i += 1){
            className[i].classList.remove(nameClassRemove);
        };
    };

    document.addEventListener('dblclick', function(event){

        if(event.target.classList.contains('item-lista')){
            if(event.target.classList.contains('completed')){
                event.target.classList.remove('completed');
                event.target.style.textDecoration = '';
            }else{
                event.target.classList.add('completed');
                event.target.style.textDecoration = 'line-through solid black';
            };
        }

    });
    
    document.getElementById('apaga-tudo').addEventListener('click', function(){

        while(taskList.hasChildNodes()){
            taskList.removeChild(taskList.firstChild);       
        }
    });

    document.getElementById('remover-finalizados').addEventListener('click', function(){

        let classItem = document.getElementsByClassName('item-lista');

        let indexRemove = []; //Verifico todos os index que contém a class 'completed' e adiciono a um array
        for(i = 0; i < classItem.length; i += 1){
            if(classItem[i].classList.contains('completed')){
                indexRemove.push(i);
            }
        }
        
        let count = 0; //Removo o item no index referentes aos valores do array, porém decremento a variavel count, pois a cada passagem do for, os index vão ocupar os valores dos index removidos
        for(j of indexRemove){
            taskList.removeChild(classItem[j - count]);
            count += 1;
        }        
    });   
}