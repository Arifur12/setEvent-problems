import React, { useState } from "react";
import "./App.css";
import Events from "./components/Events";
import Modal from "./components/Modal";
import Title from "./components/Title";

function App() {
  const [showModal, setShowModal] = useState(false);
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
  const handleClose = () => {
    setShowModal(false);
  };
  console.log(showModal);

  return (
    <div className="App">
      <Title />
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

      {showEvents && <Events handleClick={handleClick} events={events}>
      </Events>
        // events.map((event, index) => (
        //   // if useState true then it shows
        //   <React.Fragment key={event.id}>
        //     <h1>
        //       {event.title} and index is {event.id}
        //     </h1>
        //     <button onClick={() => handleClick(event.id)}>delete me</button>
        //   </React.Fragment>
        // ))
      }

      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>get 10% off</h2>
          <p>never BEEN more convenient</p>
        </Modal>
      )}
      {!showModal && (
        <div>
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            open MOdal
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
