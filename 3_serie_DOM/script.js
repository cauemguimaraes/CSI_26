$(document).ready(function () {
    // Função para selecionar um elemento e aplicar a classe 'selected'
    $("#dom-tree").on("click", ".element", function (e) {
        e.stopPropagation(); // Impede a propagação do clique para os pais
        $(".element").removeClass("selected");
        $(this).addClass("selected");
    });

    // Adicionar um filho ao elemento selecionado
    $("#addChildButton").click(function () {
        const $selectedElement = $(".selected");

        if ($selectedElement.length === 0) {
            alert("Selecione um elemento primeiro.");
            return;
        }

        const newElement = $("<li class='element'>Novo Filho</li>");
        const ul = $("<ul></ul>");
        ul.append(newElement);
        $selectedElement.append(ul);
    });

    // Adicionar um irmão ao elemento selecionado
    $("#addSiblingButton").click(function () {
        const $selectedElement = $(".selected");

        if ($selectedElement.length === 0) {
            alert("Selecione um elemento primeiro.");
            return;
        }

        const newElement = $("<li class='element'>Novo Irmão</li>");
        $selectedElement.after(newElement);
    });

    // Remover o elemento selecionado (e seus filhos)
    $("#removeButton").click(function () {
        const $selectedElement = $(".selected");

        if ($selectedElement.length === 0) {
            alert("Selecione um elemento primeiro.");
            return;
        }

        $selectedElement.remove();
    });

    // Mudar a cor do elemento selecionado
    $("#changeColorButton").click(function () {
        const $selectedElement = $(".selected");

        if ($selectedElement.length === 0) {
            alert("Selecione um elemento primeiro.");
            return;
        }

        const newColor = prompt("Digite uma nova cor (por exemplo, 'red'):");
        $selectedElement.css("background-color", newColor);
    });

    // Mudar o nome do elemento selecionado
    $("#changeNameButton").click(function () {
        const $selectedElement = $(".selected");

        if ($selectedElement.length === 0) {
            alert("Selecione um elemento primeiro.");
            return;
        }

        const newName = prompt("Digite um novo nome para o elemento:");
        $selectedElement.text(newName);
    });
});


