const menu = [
  // Pizza - Cheese
  {
    categoryId: "pizza_cheese",
    categoryName: { en: "Cheese Pizza", ar: "بيتزا الجبن" },
    items: [
      { id: "margherita", name: { en: "Margherita", ar: "بيتزا مارجريتا" }, prices: { small: 105, large: 130 } },
      { id: "vegetables", name: { en: "Vegetables", ar: "بيتزا خضروات" }, prices: { small: 110, large: 140 } },
      { id: "cheese_lovers", name: { en: "Cheese Lovers", ar: "بيتزا تشيز لفرز" }, prices: { small: 125, large: 150 } },
    ],
  },
  // Pizza - Meat
  {
    categoryId: "pizza_meat",
    categoryName: { en: "Meat Pizza", ar: "بيتزا اللحوم" },
    items: [
      { id: "pastrami", name: { en: "Pastrami", ar: "بيتزا بسطرمة" }, prices: { small: 140, large: 165 } },
      { id: "sausage", name: { en: "Sausage", ar: "بيتزا سوسيس" }, prices: { small: 130, large: 155 } },
      { id: "pepperoni", name: { en: "Pepperoni", ar: "بيتزا بيبروني" }, prices: { small: 135, large: 160 } },
      { id: "oriental_sausage", name: { en: "Oriental Sausage", ar: "بيتزا سجق" }, prices: { small: 130, large: 155 } },
      { id: "minced_meat", name: { en: "Minced Meat", ar: "بيتزا لحم مفروم" }, prices: { small: 135, large: 160 } },
      { id: "mixed_meat", name: { en: "Mixed Meat", ar: "بيتزا مشكل لحوم" }, prices: { small: 140, large: 165 } },
    ],
  },
  // Pizza - Chicken
  {
    categoryId: "pizza_chicken",
    categoryName: { en: "Chicken Pizza", ar: "بيتزا فراخ" },
    items: [
      { id: "chicken", name: { en: "Chicken", ar: "بيتزا تشيكن" }, prices: { small: 140, large: 165 } },
      { id: "chicken_fire", name: { en: "Chicken Fire", ar: "بيتزا تشيكن فاير" }, prices: { small: 155, large: 180 } },
      { id: "chicken_bbq", name: { en: "Chicken BBQ", ar: "بيتزا تشيكن باربيكيو" }, prices: { small: 150, large: 175 } },
      { id: "chicken_ranch", name: { en: "Chicken Ranch", ar: "بيتزا تشيكن رانش" }, prices: { small: 150, large: 175 } },
      { id: "crunchy", name: { en: "Crunchy", ar: "بيتزا كرانشي" }, prices: { small: 140, large: 170 } },
      { id: "super_chicken", name: { en: "Super Chicken", ar: "بيتزا سوبر تشيكن" }, prices: { small: 150, large: 185 } },
      { id: "mixed_chicken", name: { en: "Mixed Chicken", ar: "بيتزا ميكس تشيكن" }, prices: { small: 155, large: 185 } },
    ],
  },
  // Pizza - Seafood
  {
    categoryId: "pizza_seafood",
    categoryName: { en: "Seafood Pizza", ar: "بيتزا سي فود" },
    items: [
      { id: "shrimp", name: { en: "Shrimp", ar: "بيتزا جمبري" }, prices: { small: 210, large: 240 } },
      { id: "tuna", name: { en: "Tuna", ar: "بيتزا تونة" }, prices: { small: 160, large: 180 } },
      { id: "seafood", name: { en: "Seafood", ar: "بيتزا سي فود" }, prices: { small: 230, large: 250 } },
    ],
  },
  // Pizza Mixes
  {
    categoryId: "pizza_mixes",
    categoryName: { en: "Pizza Mixes", ar: "ميكسات بيتزا" },
    items: [
      { id: "half_half", name: { en: "Half & Half", ar: "بيتزا نص ونص" }, prices: { small: 0, large: 0 } },
      { id: "four_seasons", name: { en: "Four Seasons", ar: "بيتزا الفصول الأربعة" }, prices: { small: 0, large: 0 } },
    ],
  },
  // Calzone
  {
    categoryId: "calzone",
    categoryName: { en: "Calzone", ar: "كالزوني" },
    items: [
      { id: "calzone_cheese", name: { en: "Cheese Lovers", ar: "كالزوني تشيز لفرز" }, prices: { small: 90 } },
      { id: "calzone_sausage", name: { en: "Sausage", ar: "كالزوني سجق" }, prices: { small: 100 } },
      { id: "calzone_burger", name: { en: "Burger", ar: "كالزوني برجر" }, prices: { small: 120 } },
      { id: "calzone_chicken", name: { en: "Chicken", ar: "كالزوني فراخ" }, prices: { small: 110 } },
      { id: "calzone_mix", name: { en: "Mix", ar: "كالزوني ميكس" }, prices: { small: 100 } },
    ],
  },
  // Crepes - Savory
  {
    categoryId: "crepes_savory",
    categoryName: { en: "Crepes - Savory", ar: "كريب حادق" },
    items: [
      { id: "crepe_mixed_cheese", name: { en: "Mixed Cheese", ar: "كريب ميكس جبن" }, prices: { small: 60 } },
      { id: "crepe_fries", name: { en: "Fries", ar: "كريب بطاطس" }, prices: { small: 60 } },
      { id: "crepe_fries_cheese", name: { en: "Fries & Cheese", ar: "كريب بطاطس جبن" }, prices: { small: 70 } },
    ],
  },
  // Crepes - Meat
  {
    categoryId: "crepes_meat",
    categoryName: { en: "Crepes - Meat", ar: "كريب لحوم" },
    items: [
      { id: "crepe_sausage", name: { en: "Sausage", ar: "كريب سوسيس" }, prices: { small: 80 } },
      { id: "crepe_oriental_sausage", name: { en: "Oriental Sausage", ar: "كريب سجق" }, prices: { small: 80 } },
      { id: "crepe_kofta", name: { en: "Kofta", ar: "كريب كفتة" }, prices: { small: 80 } },
      { id: "crepe_burger", name: { en: "Burger", ar: "كريب برجر" }, prices: { small: 85 } },
    ],
  },
  // Crepes - Chicken
  {
    categoryId: "crepes_chicken",
    categoryName: { en: "Crepes - Chicken", ar: "كريب فراخ" },
    items: [
      { id: "crepe_pane", name: { en: "Pane", ar: "كريب بانيه" }, prices: { small: 70 } },
      { id: "crepe_crispy", name: { en: "Crispy", ar: "كريب كرسبي" }, prices: { small: 70 } },
      { id: "crepe_fresh_pane", name: { en: "Fresh Pane", ar: "كريب بانيه فريش" }, prices: { small: 90 } },
      { id: "crepe_spicy_zinger", name: { en: "Spicy Zinger", ar: "كريب زنجر سبايسي" }, prices: { small: 95 } },
      { id: "crepe_crunchy", name: { en: "Crunchy", ar: "كريب كرانشي" }, prices: { small: 95 } },
      { id: "crepe_cordon_bleu", name: { en: "Cordon Bleu", ar: "كريب كوردن بلو" }, prices: { small: 105 } },
      { id: "crepe_chicken", name: { en: "Chicken", ar: "كريب فراخ" }, prices: { small: 95 } },
      { id: "crepe_chicken_texas", name: { en: "Chicken Texas", ar: "كريب تشيكن تكساس" }, prices: { small: 105 } },
    ],
  },
  // Crepes - Seafood
  {
    categoryId: "crepes_seafood",
    categoryName: { en: "Crepes - Seafood", ar: "كريب سي فود" },
    items: [
      { id: "crepe_shrimp", name: { en: "Shrimp", ar: "كريب جمبري" }, prices: { small: 130 } },
      { id: "crepe_seafood", name: { en: "Seafood", ar: "كريب سي فود" }, prices: { small: 150 } },
    ],
  },
  // Sandwich - Burger
  {
    categoryId: "sandwich_burger",
    categoryName: { en: "Sandwich - Burger", ar: "ساندوتش برجر" },
    items: [
      { id: "classic_burger", name: { en: "Classic Burger", ar: "كلاسيك برجر" }, prices: { small: 110, large: 135 } },
      { id: "juicy_look", name: { en: "Juicy Look", ar: "جوسي لوك" }, prices: { small: 125, large: 155 } },
      { id: "jalapeno_burger", name: { en: "Jalapeno Burger", ar: "برجر هالبينو" }, prices: { small: 125, large: 145 } },
      { id: "mushroom_ranch", name: { en: "Mushroom Ranch", ar: "ماشروم رانش" }, prices: { small: 135, large: 160 } },
      { id: "super_cheese_burger", name: { en: "Super Cheese", ar: "برجر سوبر تشيز" }, prices: { small: 140, large: 160 } },
    ],
  },
  // Sandwich - Beef Burger
  {
    categoryId: "sandwich_beef_burger",
    categoryName: { en: "Sandwich - Beef Burger", ar: "ساندوتش برجر بيف" },
    items: [
      { id: "classic_beef", name: { en: "Classic Beef Burger", ar: "كلاسيك برجر بيف" }, prices: { small: 110, large: 135 } },
      { id: "juicy_beef", name: { en: "Juicy Beef", ar: "جوسي بيف" }, prices: { small: 125, large: 155 } },
      { id: "smash_jalapeno", name: { en: "Smash Jalapeno", ar: "سماش هالبينو" }, prices: { small: 125, large: 145 } },
      { id: "mushroom_ranch_beef", name: { en: "Mushroom Ranch Beef", ar: "ماشروم رانش بيف" }, prices: { small: 135, large: 160 } },
      { id: "smash_wood", name: { en: "Smash Wood", ar: "سماش وارد ور" }, prices: { small: 145, large: 165 } },
    ],
  },
  // Sandwich - Chicken
  {
    categoryId: "sandwich_chicken",
    categoryName: { en: "Sandwich - Chicken", ar: "ساندوتش فراخ" },
    items: [
      { id: "shish_tawook", name: { en: "Shish Tawook", ar: "شيش طاووق" }, prices: { small: 75 } },
      { id: "pane_sandwich", name: { en: "Pane", ar: "بانيه" }, prices: { small: 55 } },
      { id: "crispy_sandwich", name: { en: "Crispy", ar: "كرسبي" }, prices: { small: 55 } },
      { id: "spicy_zinger_sandwich", name: { en: "Spicy Zinger", ar: "زنجر سبايسي" }, prices: { small: 75 } },
      { id: "crunchy_sandwich", name: { en: "Crunchy", ar: "كرانشي" }, prices: { small: 75 } },
      { id: "cordon_bleu_sandwich", name: { en: "Cordon Bleu", ar: "كوردن بلو" }, prices: { small: 75 } },
      { id: "chicken_breasts", name: { en: "Chicken Breasts", ar: "صدور فراخ" }, prices: { small: 75 } },
      { id: "fajita_chicken", name: { en: "Fajita Chicken", ar: "فاهيتا فراخ" }, prices: { small: 85 } },
      { id: "chicken_texas_sandwich", name: { en: "Chicken Texas", ar: "تشيكن تكساس" }, prices: { small: 85 } },
      { id: "chicken_ranch_sandwich", name: { en: "Chicken Ranch", ar: "تشيكن رانش" }, prices: { small: 85 } },
    ],
  },
  // Sandwich - Meat
  {
    categoryId: "sandwich_meat",
    categoryName: { en: "Sandwich - Meat", ar: "ساندوتش لحوم" },
    items: [
      { id: "sandwich_sausage", name: { en: "Sausage", ar: "سوسيس" }, prices: { small: 60 } },
      { id: "hot_dog", name: { en: "Hot Dog", ar: "هوت دوج" }, prices: { small: 60 } },
      { id: "kofta_sandwich", name: { en: "Kofta", ar: "كفتة" }, prices: { small: 65 } },
      { id: "oriental_sausage_sandwich", name: { en: "Oriental Sausage", ar: "سجق" }, prices: { small: 60 } },
    ],
  },
  // Sandwich - Seafood
  {
    categoryId: "sandwich_seafood",
    categoryName: { en: "Sandwich - Seafood", ar: "ساندوتش سي فود" },
    items: [
      { id: "fried_shrimp", name: { en: "Fried Shrimp", ar: "جمبري مقلي" }, prices: { small: 100 } },
      { id: "grilled_shrimp", name: { en: "Grilled Shrimp", ar: "جمبري مشوي" }, prices: { small: 105 } },
      { id: "sandwich_seafood", name: { en: "Seafood", ar: "سي فود" }, prices: { small: 120 } },
    ],
  },
  // Add-ons
  {
    categoryId: "addons",
    categoryName: { en: "Add-ons", ar: "الإضافات" },
    items: [
      { id: "edge_fill_m", name: { en: "Edge Fill M", ar: "حشو اطراف M" }, prices: { small: 35 } },
      { id: "edge_fill_l", name: { en: "Edge Fill L", ar: "حشو اطراف L" }, prices: { small: 45 } },
      { id: "fries", name: { en: "Fries", ar: "بطاطس" }, prices: { small: 30 } },
      { id: "fries_cheese", name: { en: "Fries & Cheese", ar: "بطاطس جبنة" }, prices: { small: 40 } },
      { id: "fries_frecasse", name: { en: "Fries Frecasse", ar: "بطاطس فرسكاس" }, prices: { small: 40 } },
      { id: "onion_rings", name: { en: "Onion Rings", ar: "حلقات بصل" }, prices: { small: 35 } },
      { id: "coleslaw", name: { en: "Coleslaw", ar: "كلوسلو" }, prices: { small: 20 } },
      { id: "cola", name: { en: "Cola", ar: "كولا" }, prices: { small: 20 } },
      { id: "extra_meat", name: { en: "Extra Meat", ar: "لحمة إضافي" }, prices: { small: 30 } },
    ],
  },
];

export default menu;
