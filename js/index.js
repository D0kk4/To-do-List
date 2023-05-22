const tasks = [];

// ativa e desativa o display para adicionar as informações da task
let display = document.getElementById("Confirmtask");
display.style.display = "none";

function displayON() {
  if (display.style.display === "none") {
    display.style.display = "";
  } else {
    display.style.display = "none";
  }
}

function displayOFF() {
  if (display.style.display === "") {
    display.style.display = "none";
    nameTask = document.getElementById("nameTask").value = "";
    descriptionTask = document.getElementById("descriptionTask").value = "";
    limiteDate = document.getElementById("limiteDate").value = "";
  } else {
    display.style.display = "";
  }
}

info = {};

function creatTask() {
  // cria a "carta recado" da anotação

  info = {}; //objeto que vai receber os valores inseridos pelo usuario.

  // criação dos elementos para criar uma nova tarefa.
  info.nameTask = document.getElementById("nameTask").value;
  info.descriptionTask = document.getElementById("descriptionTask").value;
  info.limiteDate = document.getElementById("limiteDate").value;
  allTasks = document.getElementById("all-tasks");

  tasks.push(info.nameTask);

  const div = document.createElement("div");
  div.className = "options";

  const li = document.createElement("li");
  li.id = info.nameTask;
  li.className = "task";

  const h1 = document.createElement("h1");
  h1.innerText = info.nameTask;
  h1.className = "title";

  const p = document.createElement("p");
  p.innerText = info.descriptionTask;
  p.className = "paragraph";

  const h2 = document.createElement("h2");
  h2.innerText = `Data para concluir: ${info.limiteDate}`;

  const divH1 = document.createElement("div");
  divH1.className = "divH1";
  const divP = document.createElement("div");
  divP.className = "divP";
  const divH2 = document.createElement("div");
  divH2.className = "divH2";

  const buttonRemovetask = document.createElement("button");
  buttonRemovetask.id = "remove-task";
  const spanRemove = document.createElement("span");
  spanRemove.className = "material-symbols-outlined";
  spanRemove.innerText = "delete";

  buttonRemovetask.addEventListener("click", function () {
    var li = this.parentNode.parentNode; // Obtém o elemento <li> pai do botão
    li.parentNode.removeChild(li); // Remove o elemento <li> da lista
  });

  const buttonCompleteTask = document.createElement("button");
  buttonCompleteTask.id = "task-completed";
  buttonCompleteTask.addEventListener("click", function () {
    completeTask(info.nameTask); // Chama a função completeTask passando o ID da tarefa
  });
  const spanAdd = document.createElement("span");
  spanAdd.className = "material-symbols-outlined";
  spanAdd.innerText = "check";

  if (
    document.getElementById("nameTask").value == "" ||
    document.getElementById("descriptionTask").value == ""
  ) {
    alert(
      "Por favor preencha os campos\n" + "Nome da tarefa e Descrição da tarefa"
    );
  } else {
    //faz a ligação do nó de cada elemento com o parentNode
    li.appendChild(h1);
    li.appendChild(p);
    li.appendChild(h2);
    div.appendChild(buttonRemovetask);
    div.appendChild(buttonCompleteTask);
    buttonRemovetask.appendChild(spanRemove);
    buttonCompleteTask.appendChild(spanAdd);
    li.appendChild(div);
    allTasks.appendChild(li);

    //limpa o campo de input apos confirmar a informação.
    nameTask = document.getElementById("nameTask").value = "";
    descriptionTask = document.getElementById("descriptionTask").value = "";
    limiteDate = document.getElementById("limiteDate").value = "";

    let display = document.getElementById("Confirmtask");
    display.style.display = "none";
  }

}
//Deleta a task selecionada.
function deleteTask(liId) {
  var li = document.getElementById(liId);
  li.parentNode.removeChild(li);
}

//adiciona o nome de todas as tasks dentro do array
console.log(tasks);

//pesquisa as tarefas, todas as tarefas que não foram pesquisadas somem e aparecem somente as pesquisadas
const input = document.getElementById("new-task");
input.addEventListener("input", function() {
  let searchTerm = input.value.toLowerCase(); // Obtém o valor da pesquisa em letras minúsculas
  let tasks = document.getElementsByClassName("task"); // Obtém todos os elementos com a classe "task"

  for (var i = 0; i < tasks.length; i++) {
    var taskName = tasks[i].getElementsByTagName("h1")[0].innerText.toLowerCase(); // Obtém o nome da tarefa em letras minúsculas

    if (taskName.includes(searchTerm)) {
      tasks[i].style.display = ""; // Mostra o elemento se o nome da tarefa corresponder à pesquisa
    } else {
      tasks[i].style.display = "none"; // Oculta o elemento se o nome da tarefa não corresponder à pesquisa
    }
  }
});

// ...

function completeTask(taskId) {
  var taskElement = document.getElementById(taskId);
  var buttons = taskElement.getElementsByClassName("options")[0].getElementsByTagName("button");

  taskElement.classList.add("completed"); // Adiciona a classe "completed" à tarefa concluída

  // Altera a cor da tarefa e dos botões para verde
  taskElement.style.backgroundColor = "green";
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "green";
  }
}

// ...


