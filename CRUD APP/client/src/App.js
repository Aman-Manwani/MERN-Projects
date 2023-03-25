import Navbar from "./components/navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import AddUsers from "./components/addUsers/AddUsers";
import AllUsers from "./components/allUsers/AllUsers";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<AddUsers/>}></Route>
        <Route path="/all" element={<AllUsers/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
