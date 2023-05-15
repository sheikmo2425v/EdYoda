const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="top right">
        <div>
          <p className="logo">EDYODA</p>
        </div>

        <select className="form-select select1">
          <option value="course">Courses</option>
        </select>
        <select className="form-select select2">
          <option value="Programs">Programs</option>
        </select>
        </div>
       
         <div className="top left">
        
          <img className="search" src="./images/search.png" alt="search" width="20" height="20" />
         

      
         
        <p className="login">Login</p>
        <p className="join " >Join Now</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
