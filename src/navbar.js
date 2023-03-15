import logo from "./logo192.png";
import "./style.css";

function Navbar() {
  return (
    <div class="ui top fixed inverted borderless menu">
      <div class="item">
        <img src={logo} alt="react" />
      </div>
      <a className="active item">React</a>
      <a class="item">Docs</a>
      <a class="item">Tutorial</a>
      <a class="item">Blog</a>
      <a class="item">Community</a>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search" />
            <i class="search link icon"></i>
          </div>
        </div>
        <a class="item">v18.2.0</a>
        <a class="item">Languages</a>
        <a class="item">GitHub</a>
      </div>
    </div>
  );
}
export default Navbar;
