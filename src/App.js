import ReactDOM from 'react-dom'
import { createContext } from "react";
import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Heading from './Heading'
import Body from './Body'
import Picture from './Picture';
const FirstName = createContext()
const LastName = createContext()
const App = () => {
  return (
    <FirstName.Provider value={"muhammad"}>
      <LastName.Provider value={"muneeb"}>
        <>

 
          <NavBar /><br />
          <div style={{ 'padding': '20px', 'marginTop': '30px', 'height': '1500px' }}>
            <SideBar /><br />
            <Heading /><br />
            <Body />
            <Picture/>
          </div>
        </>
      </LastName.Provider>
    </FirstName.Provider>
  )

}
export default App
export { FirstName, LastName }