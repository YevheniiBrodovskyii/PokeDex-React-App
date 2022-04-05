function Header() {
  return (
    <nav>
      <div className="nav-wrapper purple darken-4">
        <a href="#" className="brand-logo center">
          <img src="./pokemon_logo.png" alt="pokemon_logo" className="logo" />
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="badges.html">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
