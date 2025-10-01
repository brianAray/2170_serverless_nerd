import { Route, Routes } from 'react-router-dom'
import ComponentOne from './Components/ComponentOne/ComponentOne'
import Events from './Components/Events/Events'
import List from './Components/Lists/List'
import ParentComponent from './Components/Props/ParentComponent/ParentComponent'
import NavBar from './Components/NavBar/NavBar'

function App() {

  return (
    <>
      {/* <h1>Hello World</h1> */}
      {/* <ComponentOne/>
      <Events/>
      <List/>
      <ParentComponent/> */} 

      <NavBar/>

      <Routes>
        <Route path="/" element={<ComponentOne/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/lists" element={<List/>}></Route>
        <Route path="/props" element={<ParentComponent/>}></Route>
      </Routes>
    </>
  )
}

export default App
