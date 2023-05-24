$(document).ready(function () {
    var tarefas = [];

    function atualizaLista() {
        var lista = $("#tarefas");
        lista.empty();

        for (var i = 0; i < tarefas.length; i++) {
            var tarefa = tarefas[i];
            var itemDaLista = $("<li>");
            var nomeDaTarefa = $("<span>").text(tarefa.name);

            if (tarefa.completed) {
                itemDaLista.addClass("completed");
            }

            itemDaLista.append(nomeDaTarefa);
            lista.append(itemDaLista);
        }
    }

    $("#form-tarefa").on("submit", function (event) {
        event.preventDefault();

        var nomeDaTarefa = $("#nome-tarefa").val();
        if (nomeDaTarefa) {
            var tarefa = {
                name: nomeDaTarefa,
                completed: false
            };

            tarefas.push(tarefa);
            $("#nome-tarefa").val("");

            atualizaLista();
        }
    });

    function createTaskClickHandler() {
        $(this).toggleClass("completed");
      }

      $(document).on("click", "#tarefas li", createTaskClickHandler);
});