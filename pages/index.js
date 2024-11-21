import { useEffect, useState } from "react";



export default function Home() {

  const [toDos, setToDos ] = useState([])
  const [addToDo, setAddToDo] = useState('')

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/toDos')
      const data = await res.json()

      setToDos(data)
    }

    fetchData()

  },[])

  
  const clickHandler = async () => {
    event.preventDefault();

    const res = await fetch('api/toDos', {
      method: 'POST',
      body: JSON.stringify({todo: addToDo}),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
  };

  const deleteHandler = async () => {
    const res = await fetch('/api/toDos', {
      method: 'DELETE',
    });
    const data = await res.json();
    setToDos(data.data)
  };

  const replaceAll = async () => {
    const res = await fetch('/api/toDos', {
      method: 'PUT',
      body: JSON.stringify([
        {id:7 , title: 'todo 7'},
        {id:8 , title: 'todo 8'},
      ]),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    console.log(data);
    setToDos(data.data)
  };


  return (
    <div className="w-full flex flex-col min-h-[100dvh]">
      <ul>
        {toDos.map((task) => 
          <li key={task.id}>{task.title}</li>
        )}
      </ul>
      <div>
        <input value={addToDo} onChange={(e) => setAddToDo(e.target.value)} />
        <button onClick={clickHandler} >create to do</button>
      </div>
      <div >
        <button onClick={deleteHandler}>delete all</button>
      </div>
      <div>
        <button onClick={replaceAll}>replace all</button>
      </div>
    </div>
  );
}
