import Link from "next/link";
import Component from "../ui/Component";

async function getComponents() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/components/records?sort=-created&expand=category",
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Page() {
  const components = await getComponents();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">Components page</h1>
      <p className="text-slate-500">Show list of all components</p>
      <div className="grid grid-cols-12 gap-4 py-4">
        {components["items"]?.map((component) => {
          return (
            <div
              className="col-span-12 sm:col-span-6 xl:col-span-4"
              key={component.id}>
              <Component component={component} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
