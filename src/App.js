import "./styles/main.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimRoutes from "./components/animroutes/AnimRoutes";


function App() {
  return (
    <>      
      <Router basename="/irapast">        
        <AnimRoutes />        
      </Router>
      
    </>
  );
}

export default App;
