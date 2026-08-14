import Image from "next/image";
import Link from "next/link";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/anusha-agrawal-951a0717b/",
  instagram: "https://www.instagram.com/mylittlebubbble/",
  email: "anushagarwal98@gmail.com",
};

export function MobileGate() {
  return (
    <div className="md:hidden fixed inset-0 z-[10001] flex flex-col bg-[#31685A] font-[family-name:var(--font-fraunces)]">
      {/* Card */}
      <div className="mx-5 mt-10 rounded-[2rem] bg-[#F7F1E4] px-8 pt-10 pb-14">
        <Image
          src="/images/icon.png"
          alt="Anusha logo"
          width={56}
          height={56}
          className="mb-8"
        />

        <h1 className="text-[24px] leading-snug text-neutral-900">
          <span className="italic">Hi,</span> I am Anusha
          <br />
          Welcome to my <span className="italic">world!</span>
        </h1>

        <p className="mt-8 text-[32px] leading-[1.3] text-[#31685A]">
          This site shines brightest on a bigger screen. Hop onto your laptop
          for the full experience! ✦
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-end justify-between px-6 pb-8">
        <div className="text-[#F7F1E4]">
          <div className="text-2xl">Anusha Agrawal</div>
          <Link
            href={`mailto:${LINKS.email}`}
            className="mt-1 block text-sm opacity-90"
          >
            {LINKS.email}
          </Link>
        </div>

        <div className="flex items-center gap-4 pb-1 text-[#F7F1E4]">
          <Link href={LINKS.linkedin} aria-label="LinkedIn" target="_blank">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </Link>
          <Link href={LINKS.instagram} aria-label="Instagram" target="_blank">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.88 5.88 0 0 0-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
              <path d="M12 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
              <circle cx="18.41" cy="5.59" r="1.44" />
            </svg>
          </Link>
          <Link href={`mailto:${LINKS.email}`} aria-label="Email">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
              <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
