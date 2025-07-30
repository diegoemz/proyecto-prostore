import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';
import CategoryDrawer from './category-drawer';
import Search from './search';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="wrapper flex items-center justify-between h-16">
        {/* Left Section - Logo & Categories */}
        <div className="flex items-center gap-2 md:gap-4">
          <CategoryDrawer />
          
          <Link 
            href="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label={`Ir al inicio de ${APP_NAME}`}
          >
            <div className="relative flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt={`${APP_NAME} logo`}
                height={40}
                width={40}
                priority={true}
                className="rounded-lg"
              />
            </div>
            
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-xl leading-tight text-foreground">
                {APP_NAME}
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                Tu tienda online
              </span>
            </div>
          </Link>
        </div>

        {/* Center Section - Search (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <Search />
        </div>

        {/* Right Section - Menu */}
        <div className="flex items-center">
          <Menu />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden border-t bg-background/95">
        <div className="wrapper py-3">
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;