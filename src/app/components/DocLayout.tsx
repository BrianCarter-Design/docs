import { Link, useLocation } from "react-router";
import { ChevronRight, ChevronDown, Home, ExternalLink } from "lucide-react";
import { useState, type ReactNode } from "react";

export interface SidebarItem {
  title: string;
  to?: string;
  href?: string;
  external?: boolean;
  children?: SidebarItem[];
}

export interface TocItem {
  title: string;
  href: string;
  indent?: boolean;
}

interface DocLayoutProps {
  breadcrumbs: { label: string; to?: string }[];
  sidebar: SidebarItem[];
  toc?: TocItem[];
  children: ReactNode;
}

function SidebarLink({ item }: { item: SidebarItem }) {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const isActive = item.to && location.pathname === item.to;

  if (item.children && item.children.length > 0) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={`w-full text-left text-[13px] px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 cursor-pointer ${
            isActive
              ? "text-[#00EF8B] bg-[#00EF8B]/5"
              : "text-white/50 hover:text-white/70 hover:bg-white/[0.03]"
          }`}
        >
          <ChevronDown className={`w-3 h-3 shrink-0 transition-transform ${open ? "" : "-rotate-90"}`} />
          {item.to ? (
            <Link to={item.to} className="flex-1" onClick={(e) => e.stopPropagation()}>
              {item.title}
            </Link>
          ) : (
            <span className="flex-1">{item.title}</span>
          )}
        </button>
        {open && (
          <div className="ml-3 border-l border-white/[0.06] pl-1 mt-0.5">
            {item.children.map((child) => (
              <SidebarLink key={child.title} item={child} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (item.to) {
    return (
      <Link
        to={item.to}
        className={`text-[13px] px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 ${
          isActive
            ? "text-[#00EF8B] bg-[#00EF8B]/5"
            : "text-white/50 hover:text-white/70 hover:bg-white/[0.03]"
        }`}
      >
        {item.title}
        {item.external && <ExternalLink className="w-3 h-3 opacity-50" />}
      </Link>
    );
  }

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[13px] px-3 py-1.5 rounded-md transition-colors flex items-center gap-1 text-white/50 hover:text-white/70 hover:bg-white/[0.03]"
      >
        {item.title}
        <ExternalLink className="w-3 h-3 opacity-50" />
      </a>
    );
  }

  return (
    <span className="text-[13px] px-3 py-1.5 text-white/30">{item.title}</span>
  );
}

export function DocLayout({ breadcrumbs, sidebar, toc, children }: DocLayoutProps) {
  return (
    <div className="text-white/90 font-['Epilogue',sans-serif]">
      <div className="max-w-[1400px] mx-auto flex">
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-[220px] shrink-0 border-r border-white/[0.04] py-6 px-4">
          <nav className="flex flex-col gap-0.5 sticky top-[76px]">
            {sidebar.map((item) => (
              <SidebarLink key={item.title} item={item} />
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-10 py-6 max-w-[760px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] text-white/40 mb-8">
            <Link to="/" className="hover:text-white/60 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white/60 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#00EF8B]/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>

          {children}

          <hr className="border-white/[0.06] mt-10" />
        </main>

        {/* Right Sidebar - TOC */}
        {toc && toc.length > 0 && (
          <aside className="hidden xl:block w-[220px] shrink-0 py-6 px-4">
            <div className="sticky top-[76px]">
              <nav className="flex flex-col gap-0.5">
                {toc.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`text-[12px] py-1 transition-colors ${
                      item.indent
                        ? "pl-4 text-white/30 hover:text-white/50"
                        : "text-white/50 hover:text-white/70"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}