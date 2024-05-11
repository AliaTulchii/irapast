import "./styles/main.css";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
// import { motion } from 'framer-motion';
import AnimRoutes from "./components/animroutes/AnimRoutes";


function App() {
  return (
    <>      
      <Router>
        
        <AnimRoutes />
        
      </Router>
      
    </>
  );
}

export default App;
