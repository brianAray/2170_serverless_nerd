import React from 'react'

function Events() {

    function clickEventTriggered() {
        console.log("Click button triggered");
    }

    function hoverEventTriggered() {
        console.log("Hover button triggered");
    }

    function inputChanged(event: React.ChangeEvent<HTMLInputElement>) {
        // console.log("Input changed");
        console.log(event.target.value);
    }

  return (
    <>
        <button onClick={clickEventTriggered}>Click Event</button>
        <button onMouseOver={hoverEventTriggered}>Hover Event</button>
        <input type="text" placeholder='Username' onChange={inputChanged}/>
    </>
  )
}

export default Events