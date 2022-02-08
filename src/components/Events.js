    export default function Events({handleClick,events}) {
    

    return (
        <div>
            {
            events.map((event, index) => (
          // if useState true then it shows
          <div key={event.id}>
            <h1>
              {event.title} and index is {event.id}
            </h1>
            <button onClick={() => handleClick(event.id)}>delete me</button>
          </div>
        ))
    }
        </div>
    )
}
