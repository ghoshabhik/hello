import { useState, useEffect } from 'react'
import './../App.css';

export const Contact = ( {contact, onSelect, activeContact} ) => {
    //const [active, setActive] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        onSelect(e.target.id)
        //setActive(e.target.id)
        console.log(e.target.id)
    }
    let classes = (activeContact ===  contact ? ' active': '');
    return (
        <button 
        type="button" 
        className={`list-group-item list-group-item-action ${classes}`} 
        key={contact}
        onClick={ e=> handleClick(e)} 
        id={contact}>
            {contact}-<span className="text-muted" style={{fontSize: "10px"}} id={contact}>ONLINE STATUS</span>
        </button>
    )
}

export default Contact