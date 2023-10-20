import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/shippingships">Ships</Link>
        </li>
        <li>
          <Link to="haulers">Haulers</Link>
        </li>
        <li>
          <Link to="docks">Docks</Link>
        </li>
      </ul>
    </div>
  );
};
