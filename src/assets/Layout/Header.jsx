import "../CSS/header_footer.css";

const Header = ({ first, second, third, forth }) => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src="/Icon.png" alt="icon" />
          </div>
          <nav>
            <div className="btn">
              <i className="fa fa-times close-btn" />
            </div>
            <li>
              <a href="#">{first}</a>
            </li>
            <li>
              <a href="#">{second}</a>
            </li>
            <li>
              <a href="#">{third}</a>
            </li>
            <li>
              <a href="#">{forth}</a>
            </li>
          </nav>
          <div className="btn">
            <i className="fa fa-bars menu-btn" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
