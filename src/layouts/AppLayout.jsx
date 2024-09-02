import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

function AppLayout() {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>Learn Code</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="faq">Faq</NavLink>
            </li>
            <li>
              <NavLink to="contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="user">profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default AppLayout;
