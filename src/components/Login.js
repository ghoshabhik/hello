import { useState } from 'react'
import { useHistory } from 'react-router-dom';

export const Login = ( {setUser} ) => {

    const [username, setUsername] = useState("")
    const [msg, setMsg] = useState("")
    const history = useHistory();
    const logIn = (path) => {
        setUser(username)
        history.push(path)
    }

    const handleLogInButton = async (e) =>{
        const res = await fetch(`https://604114f98339610007776bd6--stoic-kare-7b4cd1.netlify.app/api/check-user-exists?username=${username}`)
        //console.log(res)
        const data = await res.json()
        //console.log(data)
        if(data){
            //console.log(data)
            setMsg(`logging in..`)
            setTimeout(
                () => logIn('/hello/home'), 
                1000
              );
        } else {
            console.log(data)
            setMsg(`${username}: is not a registered user`)
            //logIn('/')
        }
        
    } 

    const handleRegisterButton = async (e) =>{
        if(username.length < 4){
            setMsg(`Username must be atleast 4 characters long`)
        } else {
            const res = await fetch(`https://604114f98339610007776bd6--stoic-kare-7b4cd1.netlify.app/api/check-user-exists?username=${username}`)
            //console.log(res)
            const data = await res.json()
            //console.log(data)
            if(!data){
                //console.log(data)
                const register = await fetch(`https://604114f98339610007776bd6--stoic-kare-7b4cd1.netlify.app/api/register-user`,{
                    method: 'POST',
                    body: JSON.stringify({username: `${username}`})
                })
                const registerdata = await register.json()
                setMsg(`registering..`)
                setTimeout(
                    () => logIn('/hello/home'), 
                    2000
                );
                
            } else {
                console.log(data)
                setMsg(`${username}: is already registered`)
                //logIn('/')
            }
        }
        
        
    } 

    return (
        <div className="d-flex justify-content-center" >
            <div className="border border-success rounded m-5 p-5  bg-light">
                <div className="d-flex justify-content-center" style={{fontSize:"80px"}}>Hello</div>
                <h5 className="m-1">Please login/register with an username</h5>
                <div>
                    <input className="m-1" 
                        type="text" 
                        size="56" 
                        value={username} 
                        onChange={(e) => {
                            setUsername(e.target.value)
                            //console.log(username)
                        }}
                    >
                </input>
                </div>   
                <p>
                    <button className="btn btn-secondary m-1" onClick={ (e) => handleLogInButton(e) }>Login with this username</button>
                    <button className="btn btn-dark m-1" onClick={ (e) => handleRegisterButton(e) }>Register with this username</button><br/>
                    <span className="text-danger">{msg}</span>
                </p>
                
            </div>
        </div>
        
    )
}

export default Login
