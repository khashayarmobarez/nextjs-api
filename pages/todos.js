import { todos } from '@/data/todos';
import React from 'react'

function Todos({data}) {
  return (
    <div>
        {data.map(todo => 
            <h2 key={todo.id}>{todo.title}</h2>
        )}
    </div>
  )
}

export default Todos



export async function getStaticProps() {

// the below method is wrong when using next api
//  const res = await fetch('/api/todos');
//  const data = await res.json();

// used the data from database in here
    return {
      props: {
        data: todos
      },
    };
  
}