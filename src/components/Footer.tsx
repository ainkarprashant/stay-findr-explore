import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Hotel Akshay</h3>
                <p className="text-sm text-muted-foreground">Chinese Corner</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Serving authentic Chinese cuisine since 2008. Experience the best 
              Indo-Chinese flavors in the city with fresh ingredients and traditional recipes.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">orders@hotelakshay.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">123 Food Street, City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">11:00 AM - 10:30 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#menu" className="block text-muted-foreground hover:text-primary transition-colors">
                Menu
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Hotel Akshay Chinese Corner. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ for great food lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;