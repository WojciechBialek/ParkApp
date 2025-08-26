import Link from "next/link";
import Image from 'next/image'

export const PageHeader = ({
  backUrl,
  headerHeadline,
}: {
  backUrl?: string;
  headerHeadline: string;
}) => {
  return (
    <header
      className="w-full flex items-start px-4 pt-[50px] pb-4 mb-[80px] rounded-b-2xl relative overflow-hidden"
      style={{
        background: 'linear-gradient(to top, #FADF99, #FFB034)',
        color: 'var(--primary-blue)',
        height: '280px',
      }}
    >
      {backUrl && (
        <Link 
          href={backUrl} 
          className="rounded-full border-3 p-1 mr-4 z-10"
          style={{ borderColor: 'var(--primary-blue)' }}
        >
          <Image
            src="/icons/back-arrow.svg"
            alt="Back"
            width={16}
            height={21}
          />
        </Link>
      )}
      <h1 
        className="text-[32px] leading-[40px] font-bold font-[family-name:var(--font-poppins)] whitespace-pre-line"
        style={{ fontWeight: 700 }}
      >
        {headerHeadline.replace(' ', '\n')}
      </h1>
      
      <div className="absolute bottom-2 right-0 z-0">
        <Image
          src="/images/keys.svg"
          alt="Keys"
          width={226}
          height={230}
        />
      </div>
    </header>
  );
};
