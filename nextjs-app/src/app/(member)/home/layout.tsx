export default function MemberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      This is home guest layout
      {children}
    </>
  );
}
