import axios from 'axios';
import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function AddToDo () {
  const navigate = useNavigate()

  return (
    <div>
      <h1>  ADD to DO  </h1>
      <Formik
        initialValues={{
          nom: "",
          description: "",
          
        }}
        validate={values => {
          const errors = {};
          if (!values.nom) {
            errors.nom = 'Required';}
            else if(values.nom && values.nom.length < 10 ){
              errors.nom = 'nom is too short';
            }
  
          if (!values.description) {
            errors.description = 'Required';}
            else if(values.description && values.description.length < 10 ){
              errors.description = 'description is too short';
            }
            return errors;
        }}
         
        onSubmit={async(values, { setSubmitting }) => {
          try {

   
            axios.post('http://localhost:3000/Todo' , values) 
            navigate('/ToDoList')
          }catch(error)
          {
            console.log(error);
          }
          setSubmitting(false);
          }
          
        }
            >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nom}
            />
            {errors.nom && touched.nom && errors.nom}
            <input
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description && errors.description}
            
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
     </div>
  )
}

export default AddToDo




// s

// import axios from 'axios';
// import React, { useState } from 'react'
// import {  useNavigate } from 'react-router-dom';

// function AddToDo() {

// const navigate = useNavigate()
//     const [todoform , setTodoform] =useState({ // kifech ya3rafha e TodoForm ( ou bien fera'3 par defaut ?? )
//         nom :'',
//         description:''
//     })

//     const handlechange = (event)=>{ 
//       // Ecoute sur l' event du champs
//       // Re_expliquer en relation avec la base  de donnée
//         const { id, value } = event.target
//         console.log(event.target.id);
//        setTodoform(() => {
//          return { ...todoform, [id]: value }
//        }
//        ) 
//     }

//     const handlesubmit = async () =>{
//       try {

   
//       axios.post('http://localhost:3000/Todo' , todoform) // todoform en parametre ??
//       // post = Ajouter dans todoform # difference entre Put et Post ??
//       navigate('/ToDoList')
//     }catch(error)
//     {
//       console.log(error);
//     }
//     }

//   return (
//     <form>


//     <div className="mb-3">
//       <label htmlFor="nom" className="form-label"> Nom ToDo </label>
//       <input type="text" onChange={handlechange} className="form-control" id="nom" aria-describedby="emailHelp" />
       
//     </div>
//     <div className="mb-3">
//       <label htmlFor="description" className="form-label"> Description </label>
//       <input type="text"  onChange={handlechange} className="form-control" id="description" />
//     </div>

    
//     <button  type="submit" onClick={handlesubmit} className="btn btn-primary w-100" >Ajouter Produit</button>
//   </form>
//   )
// }

// export default AddToDo



// import axios from 'axios';
// import React, { useState } from 'react'
// import {  useNavigate } from 'react-router-dom';

// function AddToDo() {

// const navigate = useNavigate()
//     const [todoform , setTodoform] =useState({ // kifech ya3rafha e TodoForm ( ou bien fera'3 par defaut ?? )
//         nom :'',
//         description:''
//     })

//     const handlechange = (event)=>{ 
//       // Ecoute sur l' event du champs
//       // Re_expliquer en relation avec la base  de donnée
//         const { id, value } = event.target
//         console.log(event.target.id);
//        setTodoform(() => {
//          return { ...todoform, [id]: value }
//        }
//        ) 
//     }

//     const handlesubmit = async () =>{
//       try {

   
//       axios.post('http://localhost:3000/Todo' , todoform) // todoform en parametre ??
//       // post = Ajouter dans todoform # difference entre Put et Post ??
//       navigate('/ToDoList')
//     }catch(error)
//     {
//       console.log(error);
//     }
//     }

//   return (
//     <form>


//     <div className="mb-3">
//       <label htmlFor="nom" className="form-label"> Nom ToDo </label>
//       <input type="text" onChange={handlechange} className="form-control" id="nom" aria-describedby="emailHelp" />
       
//     </div>
//     <div className="mb-3">
//       <label htmlFor="description" className="form-label"> Description </label>
//       <input type="text"  onChange={handlechange} className="form-control" id="description" />
//     </div>

    
//     <button  type="submit" onClick={handlesubmit} className="btn btn-primary w-100" >Ajouter Produit</button>
//   </form>
//   )
// }

// export default AddToDo