
export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      <div id="custom-modal-root"></div>
    </>
  );
}
