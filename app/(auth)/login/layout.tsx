import { PageHeader } from '@/components/Header/Header';

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
        headerHeadline="Zaloguj"
      />
      <main className="">{children}</main>
    </div>
  );
}
