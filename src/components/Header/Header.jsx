import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/About">About</Link>
      <br />
      <Link to="/User">User</Link>
      <br />
      <Link to="/Contract">Contract</Link>
    </div>
  );
};

export default Header;
