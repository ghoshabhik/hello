import { useState, useEffect } from 'react'
export const SearchContact = ({currentUser, onContactAdd}) => {

    const [user, setUser] = useState(currentUser)
    const [searchTerm, setSearchTerm] = useState("")
    const [msg, setMsg] = useState("")
    const [searchResult, setSearchResult] = useState([])


    const checkIfUserExists = async (q, currentusername) => {
        const res = await fetch(`https://604114f98339610007776bd6--stoic-kare-7b4cd1.netlify.app/api/check-user-exists?username=${q}`)
        const data = await res.json()
        if(data){
            if(q == currentUser){
                setMsg('Cannot add your own username to contactlist')
            }
            else{
                if(data.contacts.includes(currentUser)){
                    setMsg(`${q}: is already in your contact list..`)
                }
                else{
                    setMsg(`${q}: found..`)
                    const addContact = await fetch(`https://604114f98339610007776bd6--stoic-kare-7b4cd1.netlify.app/api/add-user-to-contact-list`,{
                        method: 'POST',
                        body: JSON.stringify({username: `${user}`, contactname: `${q}`})
                    })
                    const contactData = await addContact.json()
                    onContactAdd(contactData.user1.contacts)
                    setMsg(`${q}: added to contact list..`)
                    console.log(contactData.user1.contacts)
                }
                
            }
            
        } else {
            setMsg(`${q}: not found..`)
        }
    }
    
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchTerm)
        console.log('user', currentUser)
        checkIfUserExists(searchTerm, user)
    }

    return (
        <div>
            <form>
                <div className="col-auto">
                    <div className="input-group mb-2">
                        
                        <input type="text" 
                        className="form-control" 
                        id="inlineFormInputGroup" 
                        placeholder="Add user to contact list" 
                        onChange={(e) => setSearchTerm(e.target.value)}/>
                        <button className="btn btn-secondary" onClick={ (e) => handleSearch(e)}>➕</button>
                    </div>
                    
                </div>
            </form>
            <span className="text-dark">{msg}</span>
        </div>
    )
}

export default SearchContact