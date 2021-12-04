import { Link } from "react-router-dom";

const NavBar = (props: any) => {
  return (
    <div className="navbar">
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
    </div>
  );
};

export default NavBar;
