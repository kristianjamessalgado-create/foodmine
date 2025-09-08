import { Food } from "./app/shared/models/food";

export const sample_foods:Food[]=[



{
    id: '1',
    name: 'Pizza Pepperoni',
    price: 100,                                 
    tags: ['FastFood', 'Pizza', 'Lunch'],
    favorite: false,
    stars: 4.5,
    imageUrl: '/food-1.jpg',
    origins: ['italy'],
    cookTime: '10-20',
},
{
    id: '2',
    name: 'Meatball',
    price: 160,
    tags: ['SlowFood', 'Lunch'],
    favorite: true,
    stars: 4.7,
    imageUrl: '/food-2.jpg',
    origins: ['persia', 'middle east', 'china'],
    cookTime: '20-30',
},
{
    id: '3',    
    name: 'Hamburger',
    price: 85,
    tags: ['FastFood', 'Hamburger'],
    favorite: false,
    stars: 3.5,
    imageUrl: '/food-3.jpg',
    origins: ['germany', 'us'],
    cookTime: '10-15',
},
{
    id: '4',
    name: 'Fried Potatoes',
    price: 65,
    tags: ['FastFood', 'Fry'],
    favorite: true,
    stars: 3.3,
    imageUrl: '/food-4.jpg',
    origins: ['belgium', 'france'],
    cookTime: '15-20',
},
{
    id: '5',
    name: 'Chicken Soup',
    price: 110,
    tags: ['SlowFood', 'Soup'],
    favorite: false,
    stars: 3.0,
    imageUrl: '/food-5.jpg',
    origins: ['india', 'asia'],
    cookTime: '40-50',
},
{
    id: '6',    
    name: 'Vegetables Pizza',
    price: 175,
    tags: ['FastFood', 'Pizza', 'Lunch'],
    favorite: false,
    stars: 4.0,
    imageUrl: '/food-6.jpg',
    origins: ['italy'],
    cookTime: '40-50',


},

];