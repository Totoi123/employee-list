import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Employee List</h1>
        </div>

        <div className="links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/employee">
            <a>Employee Listing</a>
          </Link>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
