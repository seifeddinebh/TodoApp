import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpDate() {
  const navigate = useNavigate()
  const params = useParams()
  const [updateform, setupdateform] = useState(
    {
      nom: '',
      description: ''
    }
  )
  // + d explication pour le code  (id)

  const handlechange = (event) => {
    const { id, value } = event.target
    console.log(event.target.id);
    setupdateform(() => {
      return { ...updateform, [id]: value }
    }
    )
  }

  useEffect(() => {// c est quoi le role de Use Effect ( rafraichissement de la page ) // faire un nouveau projet
    const fetch = async () => {
      const todo = await axios.get(`http://localhost:3000/Todo/${params.id}`)// params : ya9ra id en parametre ds l URL
      setupdateform(todo.data) // 
    }
    fetch()
  }, [params.id]) // ?? a chaque fois il trouve l id en parametre il lance le UseEffect

  const handlesubmit = async () => {// c est quoi le role de handlesubmit => Action du bouton // pour quoi il n y pas de id en parametre
    await axios.put(`http://localhost:3000/Todo/${params.id}`, updateform)
    navigate('/ToDoList')
  }

  return (
    <div><form>


      <div className="mb-3">
        <label htmlFor="nom" className="form-label"></label>
        <input type="email" onChange={handlechange} className="form-control" id="nom" aria-describedby="emailHelp" value={updateform.nom} />

      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">  </label>
        <input type="text" onChange={handlechange} className="form-control" value={updateform.description} id="description" />
      </div>


      <button type="submit" className="btn btn-primary w-100" onClick={handlesubmit} >update todo</button>
    </form></div>
  )
}

export default UpDate