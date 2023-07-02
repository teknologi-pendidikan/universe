import symbol_horizontal from "assets/symbol-horizontal.svg";
import AtomLink from "components/atom.link";
import Image from "next/image";

const NAVLINK = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/about",
    label: "About",
  },
];

type Props = {
  colorLogo?: string;
  extendRootNavbar?: string;
};

function Navbar(props: Props) {
  return (
    <header
      id="navbar-wrapper"
      className="py-12 text-xl bg-gray-100 text-gray-800"
    >
      <div className="container mx-auto flex flex-row items-center justify-center lg:justify-between">
        <Image src={symbol_horizontal} alt="logo" width={200} height={50} />
        <nav className="hidden lg:block space-x-8 items-center">
          {NAVLINK.map((item, index) => (
            <AtomLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
