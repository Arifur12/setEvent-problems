import { useState } from 'react';
import './App.css';

function App() {
  
  const [events, setEvents]= useState([
    {title: 'Mario and Luigi', id:1},
    {title: 'Mario and DK', id:2},
    {title: 'Wario', id:3}
  ]);
  const handleClick= (id) =>{
    
    setEvents((prevEvent)=>{
      return prevEvent.filter((event)=>{
        console.log(prevEvent);
        return id  !== event.id;
        
      })
    })
    console.log(id);
    
  }

  return (
    <div className="App">
      {events.map((event,index)=>(
        <div key={event.id}>
          <h1>{event.title} and index is {event.id}</h1>
          <button onClick={()=>handleClick(event.id)}>delete me</button>
        </div>
      ))}  
    </div>
  );
}

export default App;
