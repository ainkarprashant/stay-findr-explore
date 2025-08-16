import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-card shadow-sm border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="border-b border-border py-2">
          <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>123 Food Street, City</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Open: 11:00 AM - 10:30 PM</span>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Hotel Akshay</h1>
              <p className="text-sm text-muted-foreground">Chinese Corner</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>Home</Link>
            <Link to="/menu" className={`transition-colors ${location.pathname === '/menu' ? 'text-primary' : 'text-foreground hover:text-primary'}`}>Menu</Link>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <Button className="hidden md:inline-flex">Order Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;