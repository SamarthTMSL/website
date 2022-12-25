import Navbar from "@/layout/Navbar";

export default function Layout({ children }: any): JSX.Element {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
