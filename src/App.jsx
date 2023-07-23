import { useState } from "react";
import FindUser from "./components/FindUser";
import Header from "./components/Header";
import ShowUser from "./components/ShowUser";
import service from "./services/servicesUser";
import { Footer } from "./components/Footer";

function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");
  const [errror, setError] = useState(false);

  const handleSubmit = () => {
    service
      .getUser(user)
      .then((usuarios) => {
        setUserData(usuarios);
        setError(false);
  
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      }); 
  };

  

  return (
    <>
      <Header />
      <FindUser
        user={user}
        setUser={setUser}
        handleSubmit={handleSubmit}
      />
      {userData ? (
        <ShowUser userData={userData} errror={errror} />
      ) : (
        <h1 className="text-center font-mono text-5xl ">
          No User to search...
        </h1>
      )}
      <Footer />
    </>
  );
}

export default App;
