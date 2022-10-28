 
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import ToDoList from './components/ToDoList';
import Weather from './components/Weather';
import UpDate from './components/UpDate';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/ToDoList' element={<ToDoList />} />
            <Route path='/update/:id' element={<UpDate />} />
            <Route path='/addtodo' element={<AddToDo />} />
            <Route path='/Weather' element={<Weather />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
