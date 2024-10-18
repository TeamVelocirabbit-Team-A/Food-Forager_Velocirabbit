// import { Link } from "@nextui-org/link";
import HeroSearch from "@/components/nav_components/hero-search";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function HeroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen overflow-x-hidden">
      <Navbar />
      <HeroSearch />
      <main className="container mx-auto max-w-max px-6 flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
