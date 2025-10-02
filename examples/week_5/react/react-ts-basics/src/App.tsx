import { Route, Routes } from 'react-router-dom'
import ComponentOne from './Components/ComponentOne/ComponentOne'
import Events from './Components/Events/Events'
import List from './Components/Lists/List'
import ParentComponent from './Components/Props/ParentComponent/ParentComponent'
import NavBar from './Components/NavBar/NavBar'
import Hooks from './Components/Hooks/Hooks'
import PokeDemo from './Components/PokeDemo/PokeDemo'
import { useState } from 'react'
import Dashboard from './Components/useEffect/Dashboard'
import { UserContext } from './Components/useEffect/context'
import axios from 'axios'

export interface User {
  isSubscribed: boolean;
  name: string;
}

function App() {

  axios.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer your_token_here';
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  axios.interceptors.response.use((response) => {
    // modify the response data before resolving the promise
    return response;
  }, (error) => {
    // handle errors globally
    console.error(error);
    return Promise.reject(error);
  })

  const [user, setUser] = useState<User>({
    isSubscribed: true,
    name: 'Revature'
  })

  return (
    <>

      <UserContext.Provider value={user}>
        <NavBar/>

        <Dashboard/>

        <Routes>
          <Route path="/" element={<ComponentOne/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/lists" element={<List/>}></Route>
          <Route path="/props" element={<ParentComponent/>}></Route>
          <Route path="/hooks" element={<Hooks/>}></Route>
          <Route path="/poke" element={<PokeDemo/>}></Route>
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
