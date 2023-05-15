import Navbar from "./Components/Navbar";
import "./style.css";
import Content from "./Components/Content";
const Main = () => {
  return (
    <>
      <Navbar />
    
      <div className="main">
        <Content/>
  
      </div>
     
      
    </>
  );
};

export default Main;
