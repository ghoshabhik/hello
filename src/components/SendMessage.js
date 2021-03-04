import { useState, useEffect } from 'react'

export const SendMessage = ({chatContext, currentSender, updateStateChatBox}) => {

    const [messageText, setMessageText] = useState("")

    const handleSendButton = async (e) => {
        //e.preventDefault()
        console.log('Message: ',messageText)
        const sentMessage = await fetch(`https://604114f98339610007776bd6--stoic-kare-7b4cd1.netlify.app/api/create-message`,{
                    method: 'POST',
                    body: JSON.stringify(
                        {
                            textMessage: messageText,
                            senderId: currentSender,
                            recepientIds:[chatContext]
                        })
                })
                const messageData = await sentMessage.json()
                updateStateChatBox(messageData)
        setMessageText("")        
    }


    return (
        <div className="mt-2 mr-2">
            <div className="input-group mb-3 mr-2">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Type your messages"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)} 
            onKeyPress={event => {
                if (event.key === 'Enter') {
                  console.log('Enter Pressed')
                  handleSendButton(event)
                }
              }}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" 
                onClick={
                    (e) => {
                        e.preventDefault()
                        handleSendButton(e)
                        }}>
                Send</button>
            </div>
            {/* {messageText} */}
            </div>
        </div>
    )
}

export default SendMessage
