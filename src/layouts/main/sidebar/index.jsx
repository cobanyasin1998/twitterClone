import Logo from "~/layouts/main/sidebar/logo/logo.jsx";
import Menu from "./menu";

export default function Sidebar() {
  return (
    <aside className="w-[275px] min-h-screen ">
      <Logo />
      <Menu />
    </aside>
  );
}
