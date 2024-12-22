import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-5">
      <div className="text-3xl">Tailwind Theme</div>
      <div className="flex flex-col items-center">
        <Link href={'/darkorlightmode'}>Light Or Dark Mode</Link>
        <Link href={'/tailwindTheme'}>Tailwind Theme</Link>
      </div>
    </div>
  );
}
