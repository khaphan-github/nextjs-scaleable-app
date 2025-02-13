export default function AdminLayout({
  children,
  analytic,
  revernue,
}: Readonly<{
  children: React.ReactNode;
  analytic: React.ReactNode;
  revernue: React.ReactNode;
}>) {
  return (
    <section>
      {children}
      {analytic}
      {revernue}
    </section>
  );
}
