import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <div className="text-3xl">Tailwind Theme</div>
      <div className="flex flex-col">
        <Link href={'/darkorlightmode'}>Light Or Dark Mode</Link>
      </div>
    </div>
  );
}
