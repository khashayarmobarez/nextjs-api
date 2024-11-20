import { useEffect, useState } from "react";



export default function Home() {

  const [toDos, setToDos ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/toDos')
      const data = await res.json()

      setToDos(data)
    }

    fetchData()

  },[])



  return (
    <div className="w-full flex flex-col min-h-[100dvh]">
      <ul>
        {toDos.map((task) => 
          <li key={task.id}>{task.title}</li>
        )}
      </ul>
    </div>
  );
}
