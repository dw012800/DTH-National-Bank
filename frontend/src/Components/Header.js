import { Link } from "react-router-dom";


function Header() {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",      };
return (
    <header>
      <h1>Mobile and computer based banking
      </h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>Home page</div>
        </Link>
        <Link to="/create">
          <div>Create Account</div>
        </Link>
        <Link to="/Transaction">
          <div>Transactions</div>
        </Link>
        <Link to="/log">
          <div>Login</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;