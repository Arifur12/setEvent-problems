import { useState } from "react";
import "./App.css";

function App() {
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "Mario and Luigi", id: 1 },
    { title: "Mario and DK", id: 2 },
    { title: "Wario", id: 3 },
  ]);
  console.log(showEvents);
  const handleClick = (id) => {
    setEvents((prevEvent) => {
      return prevEvent.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  return (
    <div className="App">
      {!showEvents && (
        // use bracket after {useState && (jsx)}
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}

      {showEvents &&
        events.map((event, index) => (
          // if useState true then it shows
          <div key={event.id}>
            <h1>
              {event.title} and index is {event.id}
            </h1>
            <button onClick={() => handleClick(event.id)}>delete me</button>
          </div>
        ))}
    </div>
  );
}

export default App;
