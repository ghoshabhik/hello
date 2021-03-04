import ChatMessage from './ChatMessage'
import { useState, useEffect } from 'react'

export const ChatArea = ({chatContext, currentSender, updateForNewMessage}) => {
    const [msgArray, setMsgArray] = useState([])


    useEffect( async () =>{
        if(chatContext == ""){
            console.log(`${chatContext} -- Will not make the api call`)
        } else{
            console.log(`${chatContext} -- Will make the api call`)
            const res = await fetch(`https://604114f98339610007776bd6--stoic-kare-7b4cd1.netlify.app/api/get-message-by-sender-recepient-ids?recepientId=${chatContext}&senderId=${currentSender}`)
            const data = await res.json()
            setMsgArray(data)
            console.log(data)
        }
    },[chatContext, updateForNewMessage])

    let listItems = msgArray.map((msg) =>
        <ChatMessage recepient={chatContext} sender={msg.senderId} messages={msg.textMessage} timeStamp={msg.timeStamp}/>
        )

    return (
        <div>
            <div className="border w-100 mt-5" style={{backgroundColor:"#E5DDD5",  height:"690px", overflow:"hidden", overflowY:"scroll"}}>
                <ul className="list-group" >
                    {/* <li className="list-group-item"><div className="d-flex justify-content-end">{currentSender}--{chatContext}Hello</div></li>
                    <li className="list-group-item"><div className="d-flex justify-content-start">Right aligned text on all viewport sizes.</div></li>
                    <li className="list-group-item"><div className="d-flex justify-content-end">Right aligned text on all viewport sizes.</div></li> */}
                    {/* <ChatMessage recepient={chatContext} sender={currentSender} messages={msgArray}/> */}
                    {listItems}
                </ul>
            </div>
        </div>
    )
}
export default ChatArea