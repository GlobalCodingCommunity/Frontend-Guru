import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-10 gap-4 p-5">
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="/todolist"
        >
          Todo List
        </Link>
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="/accordion"
        >
          Accordion
        </Link>
        <Link
          className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          href="/temperature"
        >
          Temperature Converter
        </Link>
      </div>
    </main>
  );
}
