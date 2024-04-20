import Link from 'next/link';
import { Menu, Package2 } from 'lucide-react';

import { Button } from '@/components/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/sheet';

import { NextPage } from 'next';
import { ThemeToggle } from '@/components/theme-toggle';

const RootTemplate: NextPage = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="/articles/ssr"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Articles (SSR)
          </Link>
          <Link
            href="/articles/csr"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Articles (CSR)
          </Link>
        </nav>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link href="/" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="/articles/ssr"
                className="text-muted-foreground hover:text-foreground"
              >
                Articles (SSR)
              </Link>
              <Link
                href="/articles/csr"
                className="text-muted-foreground hover:text-foreground"
              >
                Articles (CSR)
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  );
};

export default RootTemplate;
