import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export const UserLayout = () => {
  const userId = 1;
  const navigate = useNavigate();

  const logOutHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="info">Info</NavLink>
          </li>
          <li>
            <NavLink to={`edit/${userId}`}>Edit</NavLink>
          </li>
          <li onClick={logOutHandler}>Logout</li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
