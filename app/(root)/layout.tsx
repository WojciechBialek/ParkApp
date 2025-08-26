import Image from 'next/image';

import { PageHeader } from '../components/Header/Header';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div           
      style={{
        color: 'var(--primary-blue)',
        fontFamily: 'var(--font-dm-sans)',
      }}
    >
      <PageHeader
        backUrl="/"
        headerHeadline="Otwórz bramę"
      />
      <main className="">{children}</main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-between px-[24px] py-[16px] mt-[16px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/footer-icon.svg"
            alt="Globe icon"
            width={24}
            height={29}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/footer-icon.svg"
            alt="Globe icon"
            width={24}
            height={29}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/footer-icon.svg"
            alt="Globe icon"
            width={24}
            height={29}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/icons/footer-icon.svg"
            alt="Globe icon"
            width={24}
            height={29}
          />
        </a>
      </footer>
    </div>
  );
}
