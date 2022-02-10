import { useState } from 'react';
import './NewEventForm.css';


export default function NewEventForm({addEvent}) {

// forgot to add the addEvent prop 
// forgot to destructure { } the prop
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')


    // const handleChange=(e)=>{
    //     console.log(e.target.value);
    // }
    const resetForm = () => {
        setTitle('')
        setDate('')
        
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      resetForm()
      const event = {
        title: title,
        id: Math.random()*1000,
        date:date
      }
      addEvent(event);
      console.log(event);
    }


  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
        <label >
            <span>Event Title:</span>
            <input type="text"
             onChange={(e)=>{setTitle(e.target.value)}}
             value={title}
            //  controlled input
             />
        </label>
        <label>
            <span>Event Date:</span>
            <input type="date" onChange={(e)=>{setDate(e.target.value)}}
            value={date}
            />
        </label>
        <button>submit</button>

        <p>title-{title} , date -{date} </p>
        <br />
        <p onClick={resetForm}>reset</p>
        
    </form>
  )
}
