import { Link } from "react-router-dom";
import { NavItemsProps } from "../../../types/navItemsTypes";

export default function NavItem({label, path}: NavItemsProps) {
  return (
    <li>
      <Link to={path}>
        {label}
      </Link>
    </li>
  )
};