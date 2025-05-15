import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav>
        <div className="flex justify-between items-center py-4 px-2 lg:px-10">
            <div className="flex lg:flex-1">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/moving.gif" alt="Blink AI" width={40} height={40} />
                <span className="font-sourcesans font-bold text-xl">Blink AI</span>
              </Link>
            </div>
            <div className="flex md:gap-12 gap-4">
                <Link href="/#features">Features</Link>
                <Link href="/#pricing">Pricing</Link>
                <Link href="/#contact">Contact</Link>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-full">Get Started</button>
        </div>
    </nav>
  )
}