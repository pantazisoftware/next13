import Link from "next/link";

async function getComponents() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/components/records",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Page() {
  const components = await getComponents();

  return (
    <>
      <h1 className="text-2xl font-bold">Components page</h1>
      <p className="text-slate-500">Show list of all components</p>
      <div className="flex flex-col space-y-2 py-2 max-w-sm">
        {components["items"].map((component) => {
          return (
            <div
              id={component.id}
              className="border border-slate-200 rounded-lg p-4">
              <a href={`/components/${component.id}`} className="font-medium">
                {component.name}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
