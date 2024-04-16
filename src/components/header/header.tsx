"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type ActivePage = "about me" | "blog" | "works";

interface PageOptions {
  name: string;
  href: string;
}

export const Header = (): JSX.Element => {
  const [activePage, setActivePage] = useState<ActivePage>("about me");

  const pathname = usePathname();

  const pages: PageOptions[] = [
    { name: "About me", href: "/" },
    { name: "Works", href: "/works" },
    { name: "Blog", href: "/blog" },
  ];

  // Set active page based on the current pathname
  useEffect(() => {
    const activePage = pages.find((page) => page.href === pathname)?.name || "about me";
    setActivePage(activePage.toLowerCase() as ActivePage);
  }, [pathname]);

  const handleChangePage = (page: ActivePage): void => {
    setActivePage(page);
  };

  return (
    <header className="container py-2 w-full fixed z-50 top-0 left-0">
      <nav className="container py-4 px-8 flex rounded-full justify-end gap-8 backdrop-blur-xl bg-white/30 tracking-wide">
        {pages.map(({ name, href }) => (
          <Link
            key={name}
            className={`${
              activePage === name.toLowerCase() ? "text-primary" : "text-dark"
            } text-medium lg:text-xl font-medium hover:text-primary transition-color duration-200`}
            href={href}
            onClick={() => handleChangePage(name.toLowerCase() as ActivePage)}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
