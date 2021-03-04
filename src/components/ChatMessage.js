import React from 'react'

export const ChatMessage = ({recepient, sender, messages, timeStamp}) => {

    let classes = recepient === sender ? 'd-flex justify-content-start' : 'd-flex justify-content-end'
    let senderAlias = recepient === sender ? sender : 'You'
    return (
        <li className="list-group-item">
            <div className={`${classes}`}>
                <strong>{senderAlias}: {" "}</strong> {messages} -- {timeStamp}
            </div>
        </li>
    )
}

export default ChatMessage