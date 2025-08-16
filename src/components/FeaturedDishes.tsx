import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

// Import food images
import sweetSourChickenImg from "@/assets/sweet-sour-chicken.jpg";
import kungPaoChickenImg from "@/assets/kung-pao-chicken.jpg";
import hakkaNoodlesImg from "@/assets/hakka-noodles.jpg";
import manchurianDryImg from "@/assets/manchurian-dry.jpg";
import friedRiceImg from "@/assets/fried-rice.jpg";
import honeyChilliPotatoImg from "@/assets/honey-chilli-potato.jpg";
import chilliChickenImg from "@/assets/chilli-chicken.jpg";
import schezwanNoodlesImg from "@/assets/schezwan-noodles.jpg";
import springRollsImg from "@/assets/spring-rolls.jpg";
import mapoTofuImg from "@/assets/mapo-tofu.jpg";
import hotSourSoupImg from "@/assets/hot-sour-soup.jpg";
import dimSumImg from "@/assets/dim-sum.jpg";

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Sweet & Sour Chicken",
      price: "₹280",
      description: "Crispy chicken with bell peppers in tangy sauce",
      image: sweetSourChickenImg,
      category: "Chicken",
      popular: true
    },
    {
      name: "Kung Pao Chicken",
      price: "₹320",
      description: "Spicy chicken with peanuts and dried chilies",
      image: kungPaoChickenImg,
      category: "Chicken",
      popular: false
    },
    {
      name: "Chilli Chicken",
      price: "₹300",
      description: "Spicy boneless chicken in Indo-Chinese style",
      image: chilliChickenImg,
      category: "Chicken",
      popular: true
    },
    {
      name: "Hakka Noodles",
      price: "₹180",
      description: "Stir-fried noodles with fresh vegetables",
      image: hakkaNoodlesImg,
      category: "Noodles",
      popular: true
    },
    {
      name: "Schezwan Noodles",
      price: "₹220",
      description: "Spicy Sichuan style noodles with vegetables",
      image: schezwanNoodlesImg,
      category: "Noodles",
      popular: true
    },
    {
      name: "Fried Rice",
      price: "₹200",
      description: "Wok-fried rice with egg and vegetables",
      image: friedRiceImg,
      category: "Rice",
      popular: true
    },
    {
      name: "Manchurian Dry",
      price: "₹240",
      description: "Crispy vegetable balls in spicy sauce",
      image: manchurianDryImg,
      category: "Vegetarian",
      popular: false
    },
    {
      name: "Honey Chilli Potato",
      price: "₹160",
      description: "Crispy potato strips with honey glaze",
      image: honeyChilliPotatoImg,
      category: "Vegetarian",
      popular: false
    },
    {
      name: "Spring Rolls",
      price: "₹140",
      description: "Crispy golden vegetable rolls with dipping sauce",
      image: springRollsImg,
      category: "Appetizers",
      popular: true
    },
    {
      name: "Mapo Tofu",
      price: "₹260",
      description: "Sichuan style spicy tofu in aromatic sauce",
      image: mapoTofuImg,
      category: "Vegetarian",
      popular: false
    },
    {
      name: "Hot & Sour Soup",
      price: "₹120",
      description: "Traditional Chinese soup with tofu and mushrooms",
      image: hotSourSoupImg,
      category: "Soups",
      popular: true
    },
    {
      name: "Dim Sum Platter",
      price: "₹350",
      description: "Assorted steamed dumplings and buns",
      image: dimSumImg,
      category: "Appetizers",
      popular: true
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
                 <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                   {dish.category}
                 </Badge>
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