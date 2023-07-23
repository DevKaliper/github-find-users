import { useEffect, useState } from "react"
import FindUser from "./components/FindUser"
import Header from "./components/Header"
import ShowUser from "./components/ShowUser"
import service from "./services/servicesUser";

function App() {
  const [user, setUser] = useState("")
  const [userData, setUserData] = useState({})

  const handleSubmit = () => {
    service.getUser(user).then(usuarios => {setUserData(usuarios)
      console.log(userData)
    })
  }

  return (
    <>
      <Header />
      <FindUser user={user}  setUser={setUser} handleSubmit={handleSubmit}/>
      <ShowUser userData={userData} />
    
    </>
  )
}

export default App
