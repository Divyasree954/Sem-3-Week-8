import { Routes, Route } from 'react-router-dom';
import SignupForm from './Components/SignupForm/Signup';
import LoginForm from './Components/LoginForm/LoginForm'
import Todo from './Components/Todo/TodoList'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignupForm/>}  />
        <Route path='/login' element={<LoginForm/>} />
        {/* <Route path='/home' element={<Home/>}/> */}
        <Route path='/home' element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
