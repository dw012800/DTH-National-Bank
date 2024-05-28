import { Link } from "react-router-dom";


function Header() {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",

};
return (
    <header>
      <h1>Mobile and computer based banking
      </h1>
      <nav className="navStyle" style={navStyle}>
        <Link className="navLink" to="/">
          <div>Home page</div>
        </Link>
        <Link className="navLink" to="/create">
          <div>Create Account</div>
        </Link>
        <Link className="navLink" to="/Transaction/:id">
          <div>Transactions</div>
        </Link>
        <Link className="navLink" to="/log">
          <div>Login</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;