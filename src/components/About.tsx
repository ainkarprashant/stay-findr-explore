import { Award, Users, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Happy Customers"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: Clock,
      number: "Fast",
      label: "Service"
    }
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">About Hotel Akshay Chinese Corner</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Since 2008, Hotel Akshay Chinese Corner has been serving authentic Chinese cuisine 
              with a commitment to quality and taste. Our experienced chefs bring traditional 
              cooking techniques and fresh ingredients together to create unforgettable dining experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in Indo-Chinese cuisine that perfectly balances traditional Chinese 
              flavors with Indian spices, creating unique dishes that have made us a favorite 
              among food lovers in the city.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="data:image/svg+xml,%3Csvg width='500' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='18' text-anchor='middle' dy='.3em' fill='%236b7280'%3ERestaurant Interior%3C/text%3E%3C/svg%3E"
              alt="Restaurant Interior"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;