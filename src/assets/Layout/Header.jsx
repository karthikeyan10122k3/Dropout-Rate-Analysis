import headerStyle from "../CSS/layout/header_footer.module.css";

const Header = ({ first, second, third, forth }) => {
  return (
    <header>
      <div className={headerStyle.container}>
        <div className={headerStyle.navbar}>
          <div className={headerStyle.logo}>
            <img src="/Icon.png" alt="icon" />
          </div>
          <nav>
            <div className={headerStyle.btn}>
              <i className="fa fa-times close-btn" />
            </div>
            <li>
              <a style={{textDecoration: "underline"}} href="#">{first}</a>
            </li>
            <li>
              <a href="#">{second}</a>
            </li>
            <li>
              <a href="#">{third}</a>
            </li>
            <li>
              <a href="http://localhost:5173/contactUs">{forth}</a>
            </li>
          </nav>
          <div className={headerStyle.btn}>
            <i className="fa fa-bars menu-btn" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
