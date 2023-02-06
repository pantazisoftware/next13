import Code from "../../ui/code";
import Link from "next/link";
import ComponentDetails from "../../ui/componentDetails";

async function getComponent({ slug }) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/components/records?filter=(slug='${slug}')&expand=category`,
    { cache: "no-store" }
  );
  return res.json();
}
export default async function Page({ params: { slug } }) {
  const component = await getComponent({ slug });
  if (!component) {
    return (
      <>
        <div>
          <h2 className="font-bold text-xl">404 Not Found</h2>
          <p className="text-slate-500">
            The page you are looking for doesn't exist, go back home
          </p>
        </div>
      </>
    );
  } else {
    return (
      <div className="max-w-5xl mx-auto">
        <Link
          href="/components"
          className="inline-flex space-x-2 items-center font-medium  text-slate-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-6 h-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span>Components</span>
        </Link>
        <h1 className="text-3xl font-bold py-4">{component?.items[0]?.name}</h1>

        {/* <span className="bg-slate-100 rounded-lg p-2 text-sm">
          #{component.items[0]?.expand?.category?.name}
        </span> */}
        <ComponentDetails code={component.items[0]?.code}
          language={component.items[0]?.language} />
        
      </div>
    );
  }
}
