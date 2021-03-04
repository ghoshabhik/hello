import { useState, useEffect } from 'react'
import ContactList from './ContactList'
import ChatArea from './ChatArea'
import SendMessage from './SendMessage'
export const ChatBox = ( {setUser} ) => {
    const [currentUser, setCurrentUser] = useState(setUser)
    const [selectedContact, setSelectedContact] = useState("")
    const [newMessage, setNewMessage] = useState({})
    
    return (
        <div className="row border border-success rounded" style={{backgroundColor: "#EDEDED", height:"840px", width:"100%"}}>
            
            <div className="col-3">
            
                <ContactList user={currentUser} selectContact={setSelectedContact} selectedContact={selectedContact}/>
            </div>
            <div className="col-9 " style={{margin:"0px", padding: "6px"}}>
            {/* Chat Context - {currentUser} -- {selectedContact} */}
                <ChatArea chatContext={selectedContact} currentSender={currentUser} updateForNewMessage={newMessage}/>
                <SendMessage chatContext={selectedContact} currentSender={currentUser} updateStateChatBox={setNewMessage}/>
            </div>
            <div className="mb-2">💡 VERSION: 0.0.1. Next version will include: Group chat and multimedia messages</div>
        </div>
    )
}

export default ChatBox