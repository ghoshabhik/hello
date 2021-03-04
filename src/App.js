import { useState, useEffect } from 'react'
import './App.css';
import TopBar from './components/TopBar'
import Login from './components/Login'
import ChatBox from './components/ChatBox'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  const [currentUser, setCurrentUser] = useState("")
  

  const setUser = (user) => {
    console.log(user)
    setCurrentUser(user)
  }

  

  

  return (
    <Router >
      <Route path='/hello' exact render = { (props) => (
          <>
            <Login setUser={setUser}/>
            
          </>
        ) }
      />

      <Route path='/hello/home' render = {(props) => (
          <>
          <div className="App">
            <div className="container" style={{ height: "100vh"}} >
              <div>
                <div>&copy; abhik</div>
                <div></div>
                <div className="mt-4">
                  <ChatBox setUser={currentUser}/> 
                  {/* <div>Current User: {currentUser}</div> */}
                </div>
              </div>
            </div>
         </div>
          </>
        )}
      />  
    </Router>
  );
}

export default App;
