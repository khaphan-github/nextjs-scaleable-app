import AdminLayout from "@/lib/ui/layout/admin-layout";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminLayout >
      {children}
    </AdminLayout>
  );
}
