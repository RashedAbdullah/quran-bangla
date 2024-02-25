/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import { navigations } from "./navigtaions";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdNightlight } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import "./toggleDark.css";
import { Avatar, Divider } from "@mui/material";
import { signOut } from "firebase/auth";
import { ThemeContext } from "../../contexts/themeProvider";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const { isOn, setIsOn } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor = isOn ? "#1c1c1c" : "#ffffff";
  }, [isOn]);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  function SwitchTheme({ isOn, ...props }) {
    const className = `switch ${isOn ? "on" : "off"}`;

    const variants = {
      open: { x: 0 },
      closed: { x: "70%" },
    };

    return (
      <motion.div animate className={className} {...props}>
        <motion.div
          animate={isOn ? "open" : "closed"}
          variants={variants}
          className="flex items-center justify-center"
        >
          {isOn ? (
            <LuSunMoon color="#043333" />
          ) : (
            <MdNightlight color="#043333" />
          )}
        </motion.div>
      </motion.div>
    );
  }

  const [isShowUser, setIsShowUser] = useState(false);

  const handleUser = () => {
    setIsShowUser(!isShowUser);
  };

  const hanldeSignOut = () => {
    signOut(auth);
    setIsShowUser(false);
    navigate("signin");
  };

  const hanldeProfile = () => {
    navigate("/user");
    setIsShowUser(false);
  };

  return (
    <div className={`fixed w-full z-10`}>
      {/* Mobile menu */}
      <MobileMenu open={open} setOpen={setOpen} classNames={classNames} />

      <header
        className={`relative ${
          !isOn
            ? "backdrop-blur-md text-textBlack"
            : "bg-primaryHover text-textWhite"
        }  shadow-lg`}
      >
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div>
            <div className="flex h-16 justify-between items-center">
              {!open && (
                <button
                  type="button"
                  className="relative rounded-md bg-textWhite p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}

              {/* User info */}
              <div className="ml-4 flex lg:ml-0">
                {user ? (
                  <>
                    <button onClick={handleUser}>
                      {user.photoURL ? (
                        <Avatar alt="user profile" src={user.photoURL} />
                      ) : (
                        <FaUserAlt
                          size={"25px"}
                          color={isOn ? "black" : "white"}
                        />
                      )}
                    </button>
                    {isShowUser && (
                      <ul className=" absolute top-14 left-[145px] bg-primaryHover p-2 rounded dark:bg-gradient-to-br from-gray-200 to-gray-50 shadow-md dark:text-slate-900">
                        <li>
                          <button onClick={hanldeProfile} className="py-2 px-1">
                            Profile
                          </button>
                        </li>
                        <Divider component="li" />
                        <li>
                          <button onClick={hanldeSignOut} className="py-2 px-1">
                            Sign out
                          </button>
                        </li>
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink to="/signin">
                    <span className="sr-only">sign in</span>
                    <FaSignInAlt size={"25px"} />
                  </NavLink>
                )}
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-center">
                <div className="flex h-full space-x-8 gap-8">
                  {navigations.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.navlink}
                      className={`flex items-center text-lg font-medium hover:text-gray-500`}
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </Popover.Group>
              <div>
                <SwitchTheme isOn={isOn} onClick={handleToggle} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
