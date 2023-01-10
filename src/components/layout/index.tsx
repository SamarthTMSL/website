import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";

export default function Layout({ children }: any): JSX.Element {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
