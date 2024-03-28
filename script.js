const list = document.querySelector('.tasks__list');
const add = document.querySelector('.form__button--add-task');
const remove = document.querySelector('.task__button--remove-task');

const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements (array) {
  list.innerHTML = '';

  for (let i = 0; i < array.length; i++){
    let item = createTaskItem (array[i].title, array[i].type);
    list.appendChild(item);
  }
}

function createTaskItem (title, type) {
  const li = document.createElement("li");
  li.classList.add("task__item");

  const div = document.createElement("div");
  div.classList.add("task-info__container");
  
  const span = document.createElement("span");
  span.classList.add("task-type"); 
  if (type == "Urgente") {
    span.classList.add("span-urgent")
  } else if (type == "Normal"){
    span.classList.add("span-normal")
  } else {
    span.classList.add("span-important")
  };

  const p = document.createElement("p");
  p.innerText = title;

  const button = document.createElement("button");
  button.classList.add("task__button--remove-task");

  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(button);

  button.addEventListener('click', () => {
    const newObject = {title: p.innerText , type: type}; 
    
    console.log(newObject);
    console.log(tasks[0]);

    // if (tasks[0] == newObject) {
    //   console.log(`o valor do indice é 0`)
    // } else {
    //   console.log(`O indice não é 0`)
    // }
    // "O motivo pelo qual (tasks[0] == newObject) não é verdadeiro é porque você está comparando dois objetos distintos. Embora possam ter as mesmas propriedades e valores, eles são dois objetos diferentes na memória. 


    const index = tasks.findIndex(task => task.title === newObject.title && task.type === newObject.type);
    console.log(index);

    tasks.splice(index, 1)
  
    renderElements(tasks);
  })

  return li;
}

renderElements(tasks);

add.addEventListener('click', (event) => {
  event.preventDefault();
  const text = document.querySelector('.form__input--text');
  const priority = document.querySelector('.form__input--priority');

  const newObject = {title: text.value, type: priority.value}; 
  
  if ((text.value.length != 0) && (priority.value.length != 0)){
    tasks.unshift(newObject);
    renderElements(tasks);
  } else {
    alert('Faltou preencher um dos campos!');
  }
  
  text.value = '';
  priority.value = '';
  return
});



