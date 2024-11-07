import { FC } from "react";
import { routes } from "../../constants/routes";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollWatch } from "../../hooks/useScrollWatch";
import logoIcon from "../../assets/images/icons/logo.svg";
import { scrollLevel } from "../../constants/data";

const Header: FC = () => {
  const { pathname } = useLocation();
  const scrollPosition = useScrollWatch();

  return (
    <header className="container fixed top-[50px] left-0 right-0 flex justify-end z-10">
      <motion.img
        alt="logo"
        src={logoIcon}
        initial={{
          width: 150,
          top: "230px",
          left: "82%",
          scale: 1,
        }}
        animate={{
          ...(scrollPosition < scrollLevel && pathname === "/"
            ? { scale: 4.3 }
            : { top: 0, left: 0, scale: 1 }),
        }}
        className="max-w-[650px] ease-out origin-top-right absolute"
      />
      <motion.nav
        initial={{ translateY: "-78px" }}
        className="flex justify-end gap-[32px] items-center"
        animate={{ translateY: "0px" }}
        transition={{ ease: [0, 0, 0.2, 1], duration: 1, delay: 0.3 }}
      >
        {routes
          .filter((route) => route.label)
          .map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className="[&.active]:text-green"
            >
              {route.label}
            </NavLink>
          ))}
      </motion.nav>
    </header>
  );
};

export default Header;
