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
      <nav class="navStyle" style={navStyle}>
        <Link class="navLink" to="/">
          <div>Home page</div>
        </Link>
        <Link class="navLink" to="/create">
          <div>Create Account</div>
        </Link>
        <Link class="navLink" to="/Transaction">
          <div>Transactions</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;