import { Link } from "@nextui-org/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex items-center justify-center py-3 border-t-1 bg-slate-400 border-slate-500">
      <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
        title="nextui.org homepage"
      >
        <span className="text-default-600">Powered by</span>
        <p className="text-primary">NextUI</p>
      </Link>
    </footer>
  );
};

export default Footer;
