import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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

const FullMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allDishes = [
    // Appetizers
    {
      name: "Spring Rolls",
      price: "₹140",
      description: "Crispy golden vegetable rolls with sweet & sour dipping sauce",
      image: springRollsImg,
      category: "Appetizers",
      popular: true
    },
    {
      name: "Dim Sum Platter",
      price: "₹350",
      description: "Assorted steamed dumplings and buns (4 pieces)",
      image: dimSumImg,
      category: "Appetizers",
      popular: true
    },
    {
      name: "Honey Chilli Potato",
      price: "₹160",
      description: "Crispy potato strips glazed with honey and chili sauce",
      image: honeyChilliPotatoImg,
      category: "Appetizers",
      popular: false
    },

    // Chicken Dishes
    {
      name: "Sweet & Sour Chicken",
      price: "₹280",
      description: "Crispy chicken with bell peppers and pineapple in tangy sauce",
      image: sweetSourChickenImg,
      category: "Chicken",
      popular: true
    },
    {
      name: "Kung Pao Chicken",
      price: "₹320",
      description: "Spicy Sichuan chicken with roasted peanuts and dried chilies",
      image: kungPaoChickenImg,
      category: "Chicken",
      popular: false
    },
    {
      name: "Chilli Chicken",
      price: "₹300",
      description: "Spicy boneless chicken in Indo-Chinese style with bell peppers",
      image: chilliChickenImg,
      category: "Chicken",
      popular: true
    },

    // Vegetarian
    {
      name: "Manchurian Dry",
      price: "₹240",
      description: "Crispy vegetable balls tossed in spicy Manchurian sauce",
      image: manchurianDryImg,
      category: "Vegetarian",
      popular: false
    },
    {
      name: "Mapo Tofu",
      price: "₹260",
      description: "Sichuan style spicy tofu in aromatic sauce with ground meat",
      image: mapoTofuImg,
      category: "Vegetarian",
      popular: false
    },

    // Noodles
    {
      name: "Hakka Noodles",
      price: "₹180",
      description: "Stir-fried noodles with fresh vegetables and soy sauce",
      image: hakkaNoodlesImg,
      category: "Noodles",
      popular: true
    },
    {
      name: "Schezwan Noodles",
      price: "₹220",
      description: "Spicy Sichuan style noodles with vegetables and chili sauce",
      image: schezwanNoodlesImg,
      category: "Noodles",
      popular: true
    },

    // Rice
    {
      name: "Fried Rice",
      price: "₹200",
      description: "Wok-fried rice with scrambled eggs and mixed vegetables",
      image: friedRiceImg,
      category: "Rice",
      popular: true
    },

    // Soups
    {
      name: "Hot & Sour Soup",
      price: "₹120",
      description: "Traditional Chinese soup with tofu, mushrooms and bamboo shoots",
      image: hotSourSoupImg,
      category: "Soups",
      popular: true
    }
  ];

  const categories = ["All", "Appetizers", "Chicken", "Vegetarian", "Noodles", "Rice", "Soups"];

  const filteredDishes = selectedCategory === "All" 
    ? allDishes 
    : allDishes.filter(dish => dish.category === selectedCategory);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Our Complete Menu</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our extensive collection of authentic Chinese dishes, carefully crafted with traditional recipes and fresh ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDishes.map((dish, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-foreground leading-tight">{dish.name}</h3>
                  <span className="text-lg font-bold text-primary ml-2">{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{dish.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No dishes found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FullMenu;