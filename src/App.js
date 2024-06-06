import "./styles/main.css";
import { React} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimRoutes from "./components/animroutes/AnimRoutes";



function App() {
  return (
      <Router>        
        <AnimRoutes />        
      </Router>
  );
}

export default App;
