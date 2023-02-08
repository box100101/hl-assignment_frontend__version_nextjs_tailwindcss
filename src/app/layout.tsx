import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className="zero:text-[8px] e-sm:text-[10px] 
      sm:text-[12px] md:text-[14px] font-body min-h-screen bg-[var(--color-white)]"
      lang="en"
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
