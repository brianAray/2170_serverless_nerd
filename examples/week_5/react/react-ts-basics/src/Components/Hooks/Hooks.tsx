import { useEffect, useState } from 'react'
import Counter from './Counter';

/*
    What is a hook?
        - Extra methods added to functional components to provide the same functionality as class components

    Hooks:
        - useState()
            - Allows us to create state variables
            - State are variables tha are directly tied to a component
*/

function Hooks() {

    // let isVisible = true;

    // let [visibility, setVisibility] = useState(false);
    // let [count, setCount] = useState(0);
    let [state, setState] = useState({
        visibility: false,
        count: 0
    });

    function toggleTextVisibility(){
        // console.log("toggle works");
        setState({...state, visibility: !state.visibility});
    }

    // useEffect(() => {
    //     console.log(state.count);
    // }, [state.count]);

    useEffect(() => {
        async function getDitto(){
            let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
            let responseBody = await response.json();

            console.log(responseBody);
        }

        getDitto();
    }, [])

    let incrementCount = () => setState({...state, count: state.count + 1})

  return (
    <>
        <button onClick={toggleTextVisibility}>Toggle</button>

        {
            state.visibility ? <h2>Am I visible?</h2> : <></>
        }
        <br></br>

        <Counter incrementCount={incrementCount} setState={setState} state={state}/>



    </>
  )
}

export default Hooks