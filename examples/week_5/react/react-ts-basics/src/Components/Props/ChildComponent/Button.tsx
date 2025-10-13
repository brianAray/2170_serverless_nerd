
/*
    What are props?
        - stands for properties
        - Allows us to retrieve data from the parent component to the child component
        - Read only from the child side
*/

type ButtonProps = {
    bgColor: string,
    isRound: boolean
}

function Button(props: ButtonProps) {
  return (
    <button style={{
        backgroundColor: props.bgColor,
        color: "white",
        border: "none",
        borderRadius: props.isRound ? "6px" : "0px",
        padding: "8px",
        fontSize: "20px"
    }}>Click Me</button>
  )
}

export default Button