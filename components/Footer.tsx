import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative min-h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/footer.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-col relative z-10 justify-center pl-30 pt-36">
        <Link href="/">
          <div className="flex items-center gap-2 mb-12">
            <Image src="/images/icon.png" alt="icon" width={30} height={30} />
            <div className="flex items-center gap-2">
              <div className="text-3xl font-medium text-slate-900 font-['Hiragino_Sans']">
                anusha
              </div>
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </Link>
        <div className="flex gap-8">
          <Link
            href="/"
            className="text-2xl  text-golden-foreground hover:text-golden-foreground/80 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-2xl  text-golden-foreground hover:text-golden-foreground/80 transition-colors"
          >
            About
          </Link>
          <Link
            href="#work"
            className="text-2xl  text-golden-foreground hover:text-golden-foreground/80 transition-colors"
          >
            Work
          </Link>
          <Link
            href="#FAQ"
            className="text-2xl  text-golden-foreground hover:text-golden-foreground/80 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="text-2xl  text-golden-foreground hover:text-golden-foreground/80 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
