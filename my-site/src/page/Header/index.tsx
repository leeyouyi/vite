import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

const Header = (): JSX.Element => {
  const menuList = [
    {
      name: "首頁",
      path: "/",
    },
    {
      name: "關於我們",
      path: "/about",
    },
  ];
  return (
    <div className="w-full h-[50px] bg-lime-300 fixed top-0 dark:bg-lime-100 dark:text-black">
      <ul className="h-full flex justify-center items-center">
        {menuList.map((item) => (
          <li key={item.name} className="h-full flex items-center px-2">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
        <ModeToggle />
      </ul>
    </div>
  );
};

export default Header;
