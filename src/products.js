const products = [
    {
        "name": "Salt - Table",
        "price": 50,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Oil - Truffle, Black",
        "price": 14,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Table Cloth 91x91 Colour",
        "price": 100,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Cheese - Provolone",
        "price": 80,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Soup Campbells Split Pea And Ham",
        "price": 74,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Gooseberry",
        "price": 96,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Butter Sweet",
        "price": 21,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Soup - Knorr, French Onion",
        "price": 53,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Marsala - Sperone, Fine, D.o.c.",
        "price": 12,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Cranberries - Frozen",
        "price": 47,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Wine - Fat Bastard Merlot",
        "price": 3,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Oats Large Flake",
        "price": 20,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Monkfish - Fresh",
        "price": 54,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Allspice - Jamaican",
        "price": 8,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Carrots - Purple, Organic",
        "price": 64,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Mushroom - Shitake, Dry",
        "price": 81,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Island Oasis - Pina Colada",
        "price": 29,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Cheese - Brie, Triple Creme",
        "price": 35,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Juice - Orange",
        "price": 2,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Tomatoes",
        "price": 71,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Urban Zen Drinks",
        "price": 55,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Lamb - Whole Head Off,nz",
        "price": 1,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Coffee Swiss Choc Almond",
        "price": 12,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Bread Base - Gold Formel",
        "price": 50,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Mushroom - Chantrelle, Fresh",
        "price": 37,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Fruit Mix - Light",
        "price": 98,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Anchovy Fillets",
        "price": 37,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Cookie Dough - Double",
        "price": 17,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Turnip - White, Organic",
        "price": 38,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Pail With Metal Handle 16l White",
        "price": 96,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Island Oasis - Lemonade",
        "price": 31,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Cranberries - Dry",
        "price": 35,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Pastry - Carrot Muffin - Mini",
        "price": 91,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Wine - White, Cooking",
        "price": 36,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Lamb - Whole, Frozen",
        "price": 72,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Onions - Cippolini",
        "price": 64,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Cinnamon Buns Sticky",
        "price": 39,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Lettuce Romaine Chopped",
        "price": 73,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Gatorade - Fruit Punch",
        "price": 26,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Zucchini - Mini, Green",
        "price": 83,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Chocolate - White",
        "price": 71,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Lettuce - Boston Bib - Organic",
        "price": 97,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Creme De Menthe Green",
        "price": 40,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Soup Campbells - Tomato Bisque",
        "price": 29,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Fennel - Seeds",
        "price": 37,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Beef - Rouladin, Sliced",
        "price": 32,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Beef - Inside Round",
        "price": 97,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Noodles - Steamed Chow Mein",
        "price": 99,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Flour - Whole Wheat",
        "price": 81,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Pasta - Fett Alfredo, Single Serve",
        "price": 69,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Shrimp - Prawn",
        "price": 35,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Skirt - 24 Foot",
        "price": 51,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Cactus Pads",
        "price": 14,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Wine - Shiraz Wolf Blass Premium",
        "price": 1,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Hot Chocolate - Individual",
        "price": 79,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Salmon - Atlantic, Skin On",
        "price": 33,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Lemonade - Natural, 591 Ml",
        "price": 64,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Bread - Pumpernickle, Rounds",
        "price": 96,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Lamb - Shoulder, Boneless",
        "price": 25,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Wine - Montecillo Rioja Crianza",
        "price": 23,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Oil - Cooking Spray",
        "price": 88,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Broom Handle",
        "price": 75,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Bar Energy Chocchip",
        "price": 44,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "French Pastries",
        "price": 58,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Absolut Citron",
        "price": 2,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Muffin - Blueberry Individual",
        "price": 89,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Wine - Red, Pelee Island Merlot",
        "price": 100,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Lobster - Baby, Boiled",
        "price": 68,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Fish - Halibut, Cold Smoked",
        "price": 73,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Pork - Backs - Boneless",
        "price": 25,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Salt - Celery",
        "price": 60,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Rappini - Andy Boy",
        "price": 34,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Bread - Multigrain Oval",
        "price": 8,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Pasta - Spaghetti, Dry",
        "price": 11,
        "image": "http://dummyimage.com/100x100.png/ff4444/ffffff"
    },
    {
        "name": "Tomatoes - Heirloom",
        "price": 36,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Chevere Logs",
        "price": 25,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Pork - Chop, Frenched",
        "price": 93,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Crab Meat Claw Pasteurise",
        "price": 85,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Soup Bowl Clear 8oz92008",
        "price": 60,
        "image": "http://dummyimage.com/100x100.png/cc0000/ffffff"
    },
    {
        "name": "Cheese Cheddar Processed",
        "price": 64,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Dooleys Toffee",
        "price": 94,
        "image": "http://dummyimage.com/100x100.png/dddddd/000000"
    },
    {
        "name": "Squash - Pepper",
        "price": 26,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    },
    {
        "name": "Rum - Spiced, Captain Morgan",
        "price": 18,
        "image": "http://dummyimage.com/100x100.png/5fa2dd/ffffff"
    }
]

export default products;