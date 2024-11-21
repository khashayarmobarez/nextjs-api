import { todos } from "@/data/todos"

export default function handler (req,res) {
    if(req.method === 'GET') {
        res.status(200).json(todos);
    } else if(req.method === 'POST') {
        const todo = req.body.todo;

        // store data
        const newToDo = {
            id: todos.length + 1,
            title: todo
        }

        res.status(201).json({
            message:'success',
            data: newToDo
        })
    } else if( req.method === 'DELETE') {
        res.status(200).json({
            message: 'delete successfuly',
            data: []
        })
    }
}