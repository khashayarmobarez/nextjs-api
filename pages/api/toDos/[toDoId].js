import { todos } from "@/data/todos"


// dynamic route
export default function handler(req, res) {
    const { toDoId } = req.query
    const toDo = todos.find((todo) => todo.id === +toDoId)
    console.log(toDo)
    res.status(200).json(toDo)
}