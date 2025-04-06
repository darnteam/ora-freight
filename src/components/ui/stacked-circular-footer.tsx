import { Icons } from "./icons"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

function StackedCircularFooter() {
  // Handler for navigation links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.href.includes('#/')) {
      // For SPA route links that change the page
      // We don't need to do anything here since router will handle it
      return;
    } else if (e.currentTarget.href.includes('#')) {
      // For anchor links within the same page
      const targetId = e.currentTarget.href.split('#').pop();
      const targetElement = document.getElementById(targetId || '');
      
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-neutral-100 dark:bg-neutral-900 p-8">
            <Icons.logo />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#/" onClick={handleNavLinkClick} className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Home</a>
            <a href="#features" onClick={handleNavLinkClick} className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Features</a>
            <a href="#/services" onClick={handleNavLinkClick} className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Services</a>
            <a href="#/about" onClick={handleNavLinkClick} className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">About</a>
            <a href="#/contact" onClick={handleNavLinkClick} className="text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Contact</a>
          </nav>
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" className="rounded-full" />
              </div>
              <Button type="submit" className="rounded-full">Subscribe</Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Ora Freight. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
