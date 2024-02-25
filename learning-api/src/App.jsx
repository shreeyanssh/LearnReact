import { Link } from "react-router-dom";
import Home from "./Home";
import Show from "./Show";
import {Routes, Route} from "react-router-dom";
import Services from "./Services";

function App() {
  return (
    <div className="container ml-5">
      <nav className="flex justify-center gap-10 m-5">
        <Link to="/">Home</Link>
        <Link to= "/services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>

      <hr />

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/show" element = {<Show/>}/>
        <Route path = "/services" element = {<Services/>}/>
      </Routes>
    </div>


  );
}

export default App;
