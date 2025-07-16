import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, Heart, MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { WhatsAppButton } from '@/components/WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { itemCount } = useCart();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-[var(--shadow-elegant)]">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-saffron" />
                <span>Free delivery within 10km</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-saffron" />
                <span>Open: 9 AM - 9 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <Instagram className="w-4 h-4 hover:text-saffron cursor-pointer" />
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-saffron to-golden rounded-full flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Mithai Maya</h1>
                <p className="text-sm text-muted-foreground">Traditional Sweet Shop</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-6">
                <Link to="/" className="hover:text-saffron transition-colors">Home</Link>
                <Link to="/products" className="hover:text-saffron transition-colors">Products</Link>
                <Link to="/about" className="hover:text-saffron transition-colors">About</Link>
                <Link to="/contact" className="hover:text-saffron transition-colors">Contact</Link>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/login">
                  <User className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button variant="ghost" size="icon" className="relative" asChild>
                <Link to="/cart">
                  <ShoppingCart className="w-5 h-5" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full p-0 flex items-center justify-center bg-saffron text-white text-xs">
                      {itemCount}
                    </Badge>
                  )}
                </Link>
              </Button>

              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-saffron/10 to-golden/10 border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-saffron to-golden rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-lg">Mithai Maya</h3>
                  <p className="text-sm text-muted-foreground">Traditional Sweet Shop</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Bringing authentic Indian sweets and tradition to your doorstep with love and quality.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/products" className="hover:text-saffron transition-colors">All Products</Link></li>
                <li><Link to="/about" className="hover:text-saffron transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-saffron transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Policies</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-saffron transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-saffron transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-saffron transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-saffron transition-colors">Refund Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-saffron" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-saffron" />
                  <span>123 Sweet Street, Mumbai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-saffron" />
                  <span>9 AM - 9 PM Daily</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Mithai Maya. All rights reserved. Made with ❤️ for sweet lovers.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};