import Code from "../../ui/code";

async function getComponent(id) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/components/records/${id}`
  );
  return res.json();
}
export default async function Page({ params: { id } }) {
  const component = await getComponent(id);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">{component.name}</h1>

      <Code source={component.code} />
    </div>
  );
}
