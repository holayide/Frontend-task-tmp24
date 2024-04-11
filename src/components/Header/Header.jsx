import "./Header.css";
import menu from "../Assets/menu.svg";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <h1>Frontend Practice</h1>
        <nav>
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Projects</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">FAQ</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
            <li>
              <a href="/#">Newsletter</a>
            </li>
          </ul>
        </nav>
        <div className="menuImage">
          <img src={menu} alt="Menu" />
        </div>
      </div>
      <hr />
    </div>
  );
}
