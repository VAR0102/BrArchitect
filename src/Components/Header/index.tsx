import "../../app/Main/style.css";

function Header() {
  return (
    <header className="navbar">
      <button className="br-architect">
        <span className="br-bold">Br</span> Architects
      </button>
      <div className="right-buttons">
        <button>Projects</button>
        <button>About</button>
        <button>Contact</button>
      </div>
    </header>
  );
}

export default Header;
