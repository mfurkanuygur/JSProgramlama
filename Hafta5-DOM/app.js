let todos = []

const input = document.createElement("input")
input.placeholder = "Add todo"

const addButton = document.createElement("button")
addButton.textContent = "Add Todo"
addButton.addEventListener("click", () => {

    if (input.value.trim() !== "") {
        const id = crypto.randomUUID()
        todos.push({
            id: id,
            todoName: input.value,
            isDone: false
        })
        const li = document.createElement("li")
        li.textContent = input.value
        ul.append(li)
        li.addEventListener("click", () => {
            li.style.textDecoration = "line-through"
            li.style.color = "green"
        })
        li.addEventListener("dblclick", () => {
            todos = todos.filter(t => t.id !== id)
            li.remove()
        })
        input.value = ""
    }
    else {
        alert("Boş görev eklenemez")
    }


})

const ul = document.createElement("ul")


document.body.append(input)
document.body.append(addButton)
document.body.append(ul)