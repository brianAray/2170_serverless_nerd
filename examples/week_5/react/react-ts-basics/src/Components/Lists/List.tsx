
type Person = {
    firstName: string,
    lastName: string
}

const DUMMY_DATA : Person[] = [
    {
        firstName: "Mike",
        lastName: "Jones"
    },
    {
        firstName: "Jim",
        lastName: "Jones"
    },
    {
        firstName: "Dan",
        lastName: "Jones"
    },
    {
        firstName: "Luke",
        lastName: "Jones"
    }
]

function List() {
  return (
    <>
        {
            /*
                To display each item in an array to the DOM, we use the map function
                The map function transforms each item in an array
            */

            DUMMY_DATA.map((obj:Person, index: number) => {
                return (
                    <div key={index}>
                        <div>{obj.firstName}</div>
                        <div>{obj.lastName}</div>
                        <button>Click</button>
                    </div>
                )
            })
        }
    </>
        
    )

}

export default List