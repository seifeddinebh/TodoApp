import React from 'react'

function Weather() {
  return (
    <div>This is Weather Page</div>
  )
}

export default Weather

// import {useState} from 'react';
// import axios from 'axios'

// const Weather = () => {

//  const [temperature,settemperature] = useState('');
//  const [location, setlocation] = useState('');
//  const [IsLoading, setIsLoading] = useState(false)


// const handeleclick =()=>{
    
//         axios
//         .get(`http://api.weatherstack.com/current?access_key=3ad490972ca62027b8d67ce49fdb9370&query=${location}`,setIsLoading(true))
//         .then((response)=>{settemperature(response.data.current.temperature);},setIsLoading(false))
//          .catch(err=>{
//              setIsLoading(true)
//       console.log("error")
//          })

         
         
      

// }




//     return (  
//         <div>
//             <h1 className=' text-3xl font-bold mt-10'>
//       Cliquer ici pour obtenir la temperature</h1>
//       <label className='mt-6'>Ecrivez la localisation: </label>
//       <input value={location} type="text" className='border-2 border-red-200 mt-6 ' onChange={(e)=>setlocation(e.target.value)}></input><br/>
//             <button onClick={handeleclick} className='border-x-purple-900 border-8 mt-4 '>Clicez</button>
//       {IsLoading && <div>Loading...</div>}
//         <p className='mt-5 font-medium'>La temperature est :{temperature} °C <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="red" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thermometer"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg> </p>
//         </div>
//     );
// }
 
// export default Weather;
