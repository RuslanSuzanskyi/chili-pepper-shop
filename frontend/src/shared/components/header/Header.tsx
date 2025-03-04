import Container from "../Container";
import NavItem from "./components/NavItem";
import Search from "./components/Searh";

const navigation = [
  { label: "Головна", path: "/" },
  { label: "Про нас", path: "/about" },
  { label: "Контакти", path: "/contact" },
];

export default function Header() {
  return (
    <header className="grow-0 shrink-0 sticky top-0 w-full bg-white">
      <Container>
        <nav>
          <ul>
            {navigation.map((item) => (
              <NavItem key={item.path} {...item}/>
            ))}
          </ul>
          <Search />
        </nav>
      </Container>
    </header>
  );
};