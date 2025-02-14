import GuestLayout from "@/lib/ui/layout/guest-layout";

export default function Layout(props: {
  children: React.ReactNode;
}) {
  return (
    <GuestLayout>
      {props.children}
    </GuestLayout>
  );
}
