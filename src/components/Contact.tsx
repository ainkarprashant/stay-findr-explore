import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"]
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Food Street, Downtown", "Near City Mall, 400001"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sun: 11:00 AM - 10:30 PM", "No holidays"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["orders@hotelakshay.com", "info@hotelakshay.com"]
    }
  ];

  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground">
            Get in touch with us for reservations, orders, or any queries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Find Us</h3>
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Interactive Map Coming Soon</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Order</h3>
              <p className="text-muted-foreground mb-6">
                Call us directly for quick orders and table reservations. Our team is ready to serve you!
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 98765 43210
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;