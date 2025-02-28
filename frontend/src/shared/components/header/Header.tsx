// import SeachInput from "./SeachInput";

import NavItem from "./components/NavItem";

const navigation = [
  { label: "Головна", path: "/" },
  { label: "Про нас", path: "/about" },
  { label: "Контакти", path: "/contact" },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {navigation.map((item) => (
            <NavItem key={item.path} {...item}/>
          ))}
        </ul>
      </nav>
      {/* <SeachInput /> */}
    </header>
  );
};