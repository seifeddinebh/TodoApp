import axios from 'axios'
import { Formik } from 'formik'
import React from 'react'

function Login() {
  return (
    <div><h1>Login</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {// d ou il vas recuperer les valeurs
        const errors = {}; // ??
        if (!values.email) {// ??
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        console.log(values)
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => { // props values ?? 
        try{
            const users = await axios.get('http://localhost:3000/users')
            const trouve = users.data.find((user)=>user.email ===values.email && user.password === values.password)
           
            if (trouve != null){
               alert('bienvenue')
            }
           else{
               alert('vérifier email and password')
           }
           }catch(error){
               console.log(error);
           }
    
      }}
    >
      {({ // cette partie du code  a expliquer 
        values,
        errors,
        touched,
        handleChange,
        handleBlur, // ??
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        
        <form onSubmit={handleSubmit}>
          <div class="form-group">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label><br></br>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          </div>
          <div class="form-group">
          <label for="staticEmail" class="col-sm-2 col-form-label">Password</label><br></br>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password} 
          </div> 
          <button type="submit" disabled={isSubmitting}> 
            Submit 
          </button>
        </form>
      )}
    </Formik>
    </div>
  )
}

export default Login




// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Login() {

// const navigate = useNavigate()

//     const [userform, setUserform] = useState(
//         {
           
//             email: "",
//             password: "",

//         }
//     )
//      // + d explication pour le code  (id)

//     const handlechange = (event) => {
//         const { id, value } = event.target
//          console.log(event.target.id);
//         setregisterform(() => {
//           return { ...userform, [id]: value }
//         }
//         )
//       }
// const handlesubmit = async ()=>{
//  try {
//   const users = await axios.get('http://localhost:3000/users')
//   console.log(users)
// const trouve = await users.data.find((user)=>user.email === userform.email && user.password === userform.password)
// if (trouve!=null)
// {
//   alert('user existe vérifier votre email ou password')
// } else 
// {
//   await axios.post('http://localhost:3000/users' , userform)
//   navigate('/login')
// }
// }catch(error)
// {
//   console.log(error)
// }

// //


// }



//   return (
//     <form>

//     <div className="mb-3">
//       <label htmlFor="email" className="form-label">email</label>
//       <input type="email"  onChange={handlechange} className="form-control" id="email" />
//     </div>
//     <div className="mb-3">
//       <label htmlFor="password" className="form-label">Password</label>
//       <input type="password"  onChange={handlechange} className="form-control" id="password" />
//     </div>
//     <button type="submit" onClick={handlesubmit} className="btn btn-primary w-100"> submit</button>
//   </form>
//   )
// }

// export default Login

