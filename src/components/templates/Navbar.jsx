import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors hover:text-green-500"
        >
          Call for Paper
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors hover:text-green-500"
        >
          Paper Submission
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors hover:text-green-500"
        >
          Important Dates
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors hover:text-green-500"
        >
          Registration
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors hover:text-green-500"
        >
          Speakers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors hover:text-green-500"
        >
          Committees
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="black"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center transition-colors hover:text-green-500"
        >
          About
        </a>
      </Typography>
    </ul>
  );
};

const NavbarSimple = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto">
      <div className="flex items-center justify-center text-blue-gray-900">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavbarSimple;
