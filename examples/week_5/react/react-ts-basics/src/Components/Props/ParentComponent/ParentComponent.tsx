import Button from '../ChildComponent/Button'

function ParentComponent() {
  return (
    <>
        <h1>Parent Component</h1>
        <Button bgColor="red" isRound={false}/>
        <Button bgColor="lightblue" isRound={true}/>
    </>
  )
}

export default ParentComponent