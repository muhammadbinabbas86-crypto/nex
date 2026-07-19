import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export default function Page({ children, title, description }: PageProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description]);

  return <>{children}</>;
}
