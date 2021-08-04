//Criando objeto de array para armazenar os valores do select.

const locaisDeTrabalho = {
    arrLocaisDeTrabalho:['Prédio 1', 'Prédio 2', 'Prédio 3'],
};

//Ultilizando sessionStorage.setItem passando dois parametros (variavel e o metodo Json.stringify com o objeto localTrabalho)

sessionStorage.setItem('locais',JSON.stringify(locaisDeTrabalho))
const locais = sessionStorage.getItem('locais')
const listaDeLocais = JSON.parse(locais).arrLocaisDeTrabalho;



var select = document.getElementById('predios');
listaDeLocais.forEach( item => { 
    var opcao = document.createElement('option');
    opcao.innerHTML = item;
    opcao.value = item;
    select.appendChild(opcao);
});

// Função criada para atribuir o evento onClick ao button, criando elementos da table com manipulação de DOM
// e atribuindo valores a eles. 

function clicando() {
    var elemento_pai = document.getElementById('valor');
    var opcaoTexto = select.options[select.selectedIndex].text;
    var input = document.getElementById('campo')
    var texto = input.value;
    var nova = document.createElement('tr')
    var element_td_one = document.createElement('td')
    var element_td_two = document.createElement('td')
    var element_td_tree = document.createElement('td')
    
    

    elemento_pai.appendChild(nova);
    nova.appendChild(element_td_one);
    element_td_one.innerHTML = opcaoTexto;
    nova.appendChild(element_td_two)
    element_td_two.innerHTML = texto;
    nova.appendChild(element_td_tree);
    
    
    //Criando elementos (img,select,option), atribuindo valores a eles e adicionando ao elemento pai
    //Atribuindo array de valores ao options,percorrendo o array,criando elemento (option) e atrbiuindo valor ao option.

    var img_edit = document.createElement('img');
    var newSelect = document.createElement('select');
    newSelect.id = 'selectid';
    var options = ['Prédio 1', 'Prédio 2','Prédio 3']
        options.forEach((item) => {
        var option = document.createElement('option');
        option.innerHTML = item;
        option.className =
        newSelect.appendChild(option);  
    })
    
    // Criando elementos (imgs,input) e atribuindo valores a eles, atribuindo evento onclick a imagem(pen) que representa a edição de dois elementos.

    var img_check = document.createElement('img');
    var input_edit = document.createElement('input');
    input_edit.id = 'inputid';
    img_check.src = 'img/check-solid.svg';
    img_check.className = 'pen-solid';

    img_edit.src = 'img/pen-solid.svg';
    img_edit.className = 'pen-solid';
    img_edit.id = 'img_edit';
    element_td_tree.appendChild(img_edit);
    img_edit.onclick = function() {
        element_td_tree.removeChild(img_trash);
        element_td_one.removeChild(element_td_one.firstChild);
        element_td_one.appendChild(newSelect);
        element_td_tree.removeChild(img_edit);
        element_td_tree.appendChild(img_check);
        element_td_tree.appendChild(img_trash);
        const valueInput = element_td_two.innerHTML;
        element_td_two.innerHTML = '';
        input_edit.value = valueInput; 
        element_td_two.appendChild(input_edit)
    }

    // Criando um elemento img, atribuindo uma src da imagem para o elemento e atribuindo uma class.
    // Função para clicar no icone da lixeira e remover os elementos da tabela.

    var img_trash = document.createElement('img');
    img_trash.src = 'img/trash-alt-regular.svg';
    img_trash.className = 'trash-alt-regular';
    element_td_tree.appendChild(img_trash);
    img_trash.onclick = function() {
        elemento_pai.removeChild(nova);
    }

    //check event edit 
    // Função com a lógica para editar os campos local de trabalho e predio da tabela.

    img_check.onclick = function() {
        const optionValue = document.getElementById('selectid') 
        const valueSelect = optionValue.value;   
        element_td_one.removeChild(optionValue);
        element_td_one.innerHTML = valueSelect;
        const checkInput = document.getElementById('inputid')
        const valueInput = checkInput.value;
        element_td_two.removeChild(checkInput);
        element_td_two.innerHTML = valueInput;
        element_td_tree.removeChild(img_trash);
        element_td_tree.removeChild(img_check);
        element_td_tree.appendChild(img_edit);
        element_td_tree.appendChild(img_trash);
    }

}