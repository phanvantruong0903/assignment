import React from 'react';
import LoginForm from './components/Login';
import CourseList from './components/CourseList'
import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom"

const App = () => {
  return (
    <>
    <div className="App">
    </div>

    <Router>
      <Routes>
        <Route exact path='/' element={<LoginForm />}></Route>
        <Route exact path='/admin' element={<CourseList />}></Route>

      </Routes>
    </Router>
    </>
  );
};



export default App;
