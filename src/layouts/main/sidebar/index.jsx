import Logo from "~/layouts/main/sidebar/logo/logo.jsx";
import Menu from "./menu";
import Account from "./account";

export default function Sidebar() {
  return (
    <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col overflow-auto">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
}
