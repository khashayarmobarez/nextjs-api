import { todos } from "@/data/todos"


// dynamic route
export default function handler(req, res) {
    if(req.method === "GET") {
        const { toDoId } = req.query
        const toDo = todos.find((todo) => todo.id === +toDoId)
        res.status(200).json(toDo)
    } else if(req.method === 'PATCH') {
        const { toDoId } = req.query
        const { title } = req.body
        // if the data in the body was string, do the below
        // const title = req.body['title']
        const index = todos.findIndex((todo) => todo.id === +toDoId)
        todos[index] = { id: +toDoId, title }
        res.status(200).json(todos[index])
    }
}