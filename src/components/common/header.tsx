import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center py-4 px-2 lg:px-10">
        <div className="flex">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/moving.gif" alt="Blink AI" width={40} height={40} />
            <span className="font-sourcesans font-semibold text-2xl text-white">
              Blink AI
            </span>
          </Link>
        </div>
        <div className="flex md:gap-12 gap-4">
          <Link
            href="/#features"
            className="text-white font-medium hover:opacity-80"
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className="text-white font-medium hover:opacity-80"
          >
            Pricing
          </Link>
          <Link
            href="/#contact"
            className="text-white font-medium hover:opacity-80"
          >
            Contact
          </Link>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-full transition duration-300 hover:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
}
