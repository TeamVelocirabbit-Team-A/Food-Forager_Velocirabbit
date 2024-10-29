// import { Link } from "@nextui-org/link";
import HeroSearch from "@/components/search_components/hero-search";
import { Navbar } from "@/components/nav_components/navbar";
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
      <main className="flex flex-row justify-center flex-wrap mx-52 flex-grow border-6 border-pink-600">
        {children}
      </main>
      <Footer />
    </div>
  );
}
