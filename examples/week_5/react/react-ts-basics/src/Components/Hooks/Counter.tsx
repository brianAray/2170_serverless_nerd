
function Counter(props: any) {

    function updateCount(event: any){
        props.setState({...props.state, count: parseInt(event.target.value)})
    }

  return (
    <>
        <button onClick={props.incrementCount}>Increment</button>
        {/* // <button onClick={() => props.setState({...state, count: state.count - 1})}>Decrement</button> */}

        <h3>Count: {props.state.count}</h3>

        <h3>Set Count</h3>
        <input onChange={updateCount} type="number"></input>
    
    </>
  
)
}

export default Counter