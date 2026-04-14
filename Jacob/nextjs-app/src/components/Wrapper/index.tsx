import Link from "next/link";

const Wrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="mx-auto max-w-xl px-6 py-16">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 inline-block"
        >
          ← Home
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 mb-8">
          {title}
        </h1>
        {children}
      </main>
    </div>
  );
};

export default Wrapper;
