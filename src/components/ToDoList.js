import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ToDoList() {
  const [Todos , settodos]=useState([]) // tableau ( tableau des objets ??) ?? Todo ( base de donne ) ?? Todos initialiséee a vide 
  
 
  const fetchdata = async()=>{ // fetchdata / fonction flechée 
    const todos = await axios.get('http://localhost:3000/Todo')
    settodos(todos.data) // ?? Todo et todos // difference  ( recuperer la data de la base de donnée )
    console.log(todos)
  }
   // !! Comment on a transformer le data en Tableau des Objets  pour le parcours
  useEffect(() => { // useEffect

 
fetchdata()
  } ,[])



    const handledelete = (id) => {
      try {
    
        axios.delete(`http://localhost:3000/Todo/${id}`)
        fetchdata()
       
      }catch(error){
console.log(error)
      }
    }

    return (
          <div>
            <Link to="/addtodo" className='btn btn-primary' >Ajouter Todo</Link>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
 {         Todos.map((todo)=>{ 
          // link {todo.id} ?? 
          // Quel est la difference entre Todo et todo +  Affichage du tablea de la base de donnee
          // yab3eth fel les id en parametre fel URL pour les recuperer avec use.params
  return(
                <tr key={todo.id}>
                  <th>{todo.id}</th>
                  <td>{todo.nom}</td>
                  <td>{todo.description}</td>
                  <td> <Link  className='btn btn-success' value="update" to={`/update/${todo.id}`}  >update</Link> <button onClick={()=>handledelete(todo.id)}  className='btn btn-danger' >delete</button></td> 
                </tr>
  ) }
)
}
              </tbody>
            </table>
          </div>

        )
    }

  
      export default ToDoList





// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// function ToDoList() {
//   const [Todos , settodos]=useState([]) // tableau ( tableau des objets ??) ?? Todo ( base de donne ) ?? Todos initialiséee a vide 
  
 
//   const fetchdata = async()=>{ // fetchdata / fonction flechée 
//     const todos = await axios.get('http://localhost:3000/Todo')
//     settodos(todos.data) // ?? Todo et todos // difference  ( recuperer la data de la base de donnée )
//     console.log(todos)
//   }
//    // !! Comment on a transformer le data en Tableau des Objets  pour le parcours
//   useEffect(() => { // useEffect

 
// fetchdata()
//   } ,[])



//     const handledelete = (id) => {
//       try {
    
//         axios.delete(`http://localhost:3000/Todo/${id}`)
//         fetchdata()
       
//       }catch(error){
// console.log(error)
//       }
//     }

//     return (
//           <div>
//             <Link to="/addtodo" className='btn btn-primary' >Ajouter Todo</Link>
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">id</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Description</th>
//                   <th scope="col">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="table-group-divider">
//  {         Todos.map((todo)=>{ 
//           // link {todo.id} ?? 
//           // Quel est la difference entre Todo et todo +  Affichage du tablea de la base de donnee
//           // yab3eth fel les id en parametre fel URL pour les recuperer avec use.params
//   return(
//                 <tr key={todo.id}>
//                   <th>{todo.id}</th>
//                   <td>{todo.nom}</td>
//                   <td>{todo.description}</td>
//                   <td> <Link  className='btn btn-success' value="update" to={`/update/${todo.id}`}  >update</Link> <button onClick={()=>handledelete(todo.id)}  className='btn btn-danger' >delete</button></td> 
//                 </tr>
//   ) }
// )
// }
//               </tbody>
//             </table>
//           </div>

//         )
//     }

  
//       export default ToDoList