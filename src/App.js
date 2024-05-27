import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoList from './Components/ToDo/ToDoList';
import Login from './Components/Authentication/Login';
import ToDoDetailedView from './Components/ToDo/ToDoDetailedView';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<ToDoDetailedView />} />
      </Routes>
    </Router>
  );
}

export default App;
