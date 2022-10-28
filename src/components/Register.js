import axios from 'axios';
import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate()

  return (
    <div>
      
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: ""
        }}
        validate={values => {
          const errors = {};
          if (!values.firstname) {
            errors.firstname = 'Required';
          }
          if (!values.lastname) {
            errors.lastname = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }else if(values.password && values.password.length <6){
            errors.password = 'Password is too short';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={async(values, { setSubmitting }) => {
          try {
              const users = await axios.get('http://localhost:3000/users')
              console.log(users)
            const trouve = await users.data.find((user)=>user.email === values.email)
            if (trouve){
              alert('user existe vérifier votre email')
            } else {
              await axios.post('http://localhost:3000/users' , values)
              navigate('/login')
            }
            }catch(error) {
              console.log(error)
            }
          setSubmitting(false);
        }}
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
          // <div class="form-group">
          // <label for="exampleInputEmail1">Email address</label>
          <form onSubmit={handleSubmit} className='w-50 m-auto'>
            <h1>Register</h1>
            <div class="form-group">
             <label for="staticEmail" class="col-sm-2 col-form-label">Nom</label><br></br>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              className='form-control'
              onBlur={handleBlur}
              value={values.firstname}
            />
            
           <p style={{color:'red'}}> {errors.firstname && touched.firstname && errors.firstname}</p>
            </div>
            <div class="form-group">
            <label for="staticEmail" class="col-sm-2 col-form-label">Prenom</label><br></br>
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              className='form-control'
              onBlur={handleBlur}
              value={values.lastname}
            />
            {errors.lastname && touched.lastname && errors.lastname}
            </div>
            <div class="form-group">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label><br></br>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className='form-control'
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            </div>
            <div class="form-group">
            <label for="staticEmail" class="col-sm-2 col-form-label">PassWord</label><br></br>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className='form-control'
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            </div>
            <button type="submit" className='btn btn-success' disabled={isSubmitting}>
              Submit
            </button>
          </form>

        )}
      </Formik>
     </div>
  )
}

export default Register







// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Register() {

// const navigate = useNavigate()

//     const [registerform, setregisterform] = useState(
//         {
//             firstname: "",
//             lastname: "",
//             email: "",
//             password: "",

//         }
//     )
//      // + d explication pour le code  (id)

//     const handlechange = (event) => {
//         const { id, value } = event.target
//          console.log(event.target.id);
//         setregisterform(() => {
//           return { ...registerform, [id]: value }
//         }
//         )
//       }
// const handlesubmit = async ()=>{
//  try {
//   const users = await axios.get('http://localhost:3000/users')
//   console.log(users)
// const trouve = await users.data.find((user)=>user.email === registerform.email)
// if (trouve!=null)
// {
//   alert('user existe vérifier votre email')
// } else 
// {
//   await axios.post('http://localhost:3000/users' , registerform)
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
//       <label htmlFor="firstname" className="form-label">firstname</label>
//       <input type="text" onChange={handlechange} className="form-control" id="firstname" aria-describedby="emailHelp" />
       
//     </div>
//     <div className="mb-3">
//       <label htmlFor="lastname" className="form-label">lastname</label>
//       <input type="text"  onChange={handlechange} className="form-control" id="lastname" />
//     </div>
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

// export default Register



// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function Register() {

// const navigate = useNavigate()

//     const [registerform, setregisterform] = useState(
//         {
//             firstname: "",
//             lastname: "",
//             email: "",
//             password: "",

//         }
//     )
//      // + d explication pour le code  (id)

//     const handlechange = (event) => {
//         const { id, value } = event.target
//          console.log(event.target.id);
//         setregisterform(() => {
//           return { ...registerform, [id]: value }
//         }
//         )
//       }
// const handlesubmit = async ()=>{
//  try {
//   const users = await axios.get('http://localhost:3000/users')
//   console.log(users)
// const trouve = await users.data.find((user)=>user.email === registerform.email)
// if (trouve!=null)
// {
//   alert('user existe vérifier votre email')
// } else 
// {
//   await axios.post('http://localhost:3000/users' , registerform)
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
//       <label htmlFor="firstname" className="form-label">firstname</label>
//       <input type="text" onChange={handlechange} className="form-control" id="firstname" aria-describedby="emailHelp" />
       
//     </div>
//     <div className="mb-3">
//       <label htmlFor="lastname" className="form-label">lastname</label>
//       <input type="text"  onChange={handlechange} className="form-control" id="lastname" />
//     </div>
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

// export default Register