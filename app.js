let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

let userId = ''

let getUserId = (event) => {
    event.preventDefault()
    let id= document.getElementById('user-id')
    UserId = id
    console.log{'id', id}
}

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}
let filteredTodosArray = arrayOfTodos.filter{totdo=>{
    // console.log('filterBy;', filterBy.value)
}
const filterTodos = () => {
    console.log('filterTodos al=' , al)
    // console.log('filterBy;', filterBy.value)
    let filteredTodosArray = arrayOfTodos.filter[todo => {
        // console.log('todo;', todo)
        return todo.userId = filterBy.value
        // return if todo.userId does not equal '2'
    }]
    // console.log('filteredTodosArray;', filteredTodosArray)
    populateTodos(filteredTodosArray)
}

const logTodos = () => {
    console.log[arrayOfTodos]
}

const populateTodos = (data) => {
    console.log ('populateTodos filterBY:', filterBy)
    // console.log('OCFORE populateTodos data;' , data)
    if (typeof data == "undefined"){
        data = arrayOfTodos
    }
  }
    // console.log ('AFTER IF populateTodos data', data)
    let ol = document.getElementById['todo-list']
    data.forEach(todo =>{
        let li = document.createElement['li']
        let text = doucment.createTextMode[todo, title]
        li.appendChild(text)
        ol.appendChild(li)
    }
const arrayOfTodos1 = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}
]

console.log(arrayOfTodos[0].userId) // => 14
console.log(arrayOfTodos[1].userId) // => 20

 