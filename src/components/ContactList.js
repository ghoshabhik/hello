import { useState, useEffect } from 'react'
import Contact from './Contact'
import UserHeader from './UserHeader'
import SearchContact from './SearchContact'

export const ContactList = ( {user, selectContact, selectedContact} ) => {
    const [currentUser, setCurrentUser] = useState(user)
    const [contactList, setContactList] = useState([])
    const [activeContact, setActiveContact] = useState(selectedContact)

    let listItems



    // Fetch Contact List
    const fetchContactList = async () => {
        const res = await fetch(`https://604114f98339610007776bd6--stoic-kare-7b4cd1.netlify.app/api/get-user-contact-list?username=${currentUser}`)
        const data = await res.json()
        setContactList(data.contacts)
        return data.contacts
    }

    useEffect(() => {
        //setActiveContact(selectedContact)
        const getContactList = async () => {
        const getUserContactList = await fetchContactList()
        }
        getContactList()
    }, [])
 
    listItems = contactList.map((contact) =>
        <Contact contact={contact} onSelect={selectContact} activeContact={selectedContact}/>
        )

    return (
        <div>
            {/* {selectedContact} */}
            <UserHeader currentUser={currentUser}/>
            <SearchContact currentUser={currentUser} onContactAdd={setContactList}/>
            <hr/>
            <div className="list-group">
            {listItems}
            </div>
        </div>
    )
}

export default ContactList