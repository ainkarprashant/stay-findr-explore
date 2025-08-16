import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Sweet & Sour Chicken",
      price: "₹280",
      description: "Crispy chicken with bell peppers in tangy sauce",
      image: "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%236b7280'%3ESweet %26 Sour Chicken%3C/text%3E%3C/svg%3E",
      popular: true
    },
    {
      name: "Kung Pao Chicken",
      price: "₹320",
      description: "Spicy chicken with peanuts and dried chilies",
      image: "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%236b7280'%3EKung Pao Chicken%3C/text%3E%3C/svg%3E",
      popular: false
    },
    {
      name: "Hakka Noodles",
      price: "₹180",
      description: "Stir-fried noodles with fresh vegetables",
      image: "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%236b7280'%3EHakka Noodles%3C/text%3E%3C/svg%3E",
      popular: true
    },
    {
      name: "Manchurian Dry",
      price: "₹240",
      description: "Crispy vegetable balls in spicy sauce",
      image: "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%236b7280'%3EManchurian Dry%3C/text%3E%3C/svg%3E",
      popular: false
    },
    {
      name: "Fried Rice",
      price: "₹200",
      description: "Wok-fried rice with egg and vegetables",
      image: "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%236b7280'%3EFried Rice%3C/text%3E%3C/svg%3E",
      popular: true
    },
    {
      name: "Honey Chilli Potato",
      price: "₹160",
      description: "Crispy potato strips with honey glaze",
      image: "data:image/svg+xml,%3Csvg width='300' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='14' text-anchor='middle' dy='.3em' fill='%236b7280'%3EHoney Chilli Potato%3C/text%3E%3C/svg%3E",
      popular: false
    }
  ];

  return (
    <section id="menu" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Dishes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular dishes crafted with authentic Chinese flavors and fresh ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {dish.popular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{dish.name}</h3>
                  <span className="text-xl font-bold text-primary">{dish.price}</span>
                </div>
                <p className="text-muted-foreground">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;