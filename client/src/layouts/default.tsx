import { Navbar } from "@/components/nav_components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen overflow-x--hidden">
      <Navbar />
      <main className="flex justify-center px-6 flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
}
