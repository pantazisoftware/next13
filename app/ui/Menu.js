import MenuLink from "./MenuLink";

async function getMenu() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/navigation/records",
    { cache: "no-store" }
  );
  return res.json();
}
export default async function Menu() {
  const menus = await getMenu();
  return (
    <div className="flex flex-row items-center space-x-4">
      {menus["items"].map((menu) => {
        return <MenuLink key={menu.id} href={menu.slug} name={menu.name} />;
      })}
    </div>
  );
}
