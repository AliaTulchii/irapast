import "./styles/main.css";
import { React} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimRoutes from "./components/animroutes/AnimRoutes";
// import Loader from "./components/loader/Loader";


function App() {
  return (
    // <Suspense fallback={<Loader/>}>      
      <Router basename="/irapast">        
        <AnimRoutes />        
      </Router>
      
    // </Suspense>
  );
}

export default App;
