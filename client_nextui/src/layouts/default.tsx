import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen overflow-x--hidden">
      <Navbar />
      <main className="container mx-auto max-w-max px-6 flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
