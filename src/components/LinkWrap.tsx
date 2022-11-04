import { Link } from "react-router-dom";
import { ReactNode } from "react";

import { useLocation } from "react-router-dom";

interface DrawerLink {
  linkFunction: () => void;
  drawerNumber: number;
  destination: string;
  children: ReactNode;
}
const LinkWrap = ({
  linkFunction,
  drawerNumber,
  destination,
  children,
}: DrawerLink) => {
    const location = useLocation();
  return (
    <div
      className={`drawerItem d${drawerNumber}${
        location.pathname === destination ? " highLight" : ""
      }`}
    >
      <Link
        to={destination}
        onClick={() => linkFunction()}
        onMouseOver={(event) => event.currentTarget.click()}
      >
        {children}
      </Link>
    </div>
  );
};

export default LinkWrap;
