import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Navegação estrutural (Breadcrumb)" className="py-2 text-xs font-mono">
      <ol className="flex flex-wrap items-center gap-2 text-gray-300">
        <li>
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white uppercase font-bold text-[11px] tracking-wider"
            title="Ir para a página inicial"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Início</span>
          </button>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-[#e31937] flex-shrink-0" aria-hidden="true" />
            {item.current || !item.href ? (
              <span
                className="text-white font-bold uppercase text-[11px] tracking-wider"
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => item.href && onNavigate(item.href)}
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white uppercase font-bold text-[11px] tracking-wider"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

