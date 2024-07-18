import Product from "./Product";

const products = [
    new Product(
        'url(assets/IMG/expresso.svg)',
        'Expresso',
        'En savoir plus',
        'L\'expresso est un type de café célèbre d\'Italie. Le produit final est un café épais avec une mousse crémeuse sur le dessus. En raison de son épaisseur et de son taux élevé de caféine par unité, il sert de base pour d\'autres boissons.',
        '6,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Product(
        '../assets/IMG/americano.svg',
        'Americano',
        'En savoir plus',
        'Expresso dans lequel de l\'eau chaude, créant un café de même intensité, mais de goût différent du café filtre ordinaire.',
        '6,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ), 
    new Product(
        '../assets/IMG/cappuccino.svg',
        'Cappuccino',
        'En savoir plus',
        'Expresso fait avec du lait chaud et de la mousse de lait chauffée à la vapeur.',
        '6,50 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Product(
        '../assets/IMG/caramel-macchiato.svg',
        'Macchiato au caramel',
        'En savoir plus',
        'Expresso fait avec une petite quantité de lait moussé et du caramel, semblable à un cappuccino, seulement plus fort.',
        '7,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Product(
        '../assets/IMG/latte.svg',
        'Latte',
        'En savoir plus',
        'Expresso fait avec du lait chauffé à la vapeur dans un rapport 1: 3 à 1: 5 avec un peu de mousse.',
        '7,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Product(
        '../assets/IMG/latte macchiato.svg',
        'Latte macchiato',
        'En savoir plus',
        'Latte fait avec une petite quantité de lait moussé, semblable à un cappuccino seulement plus fort.',
        '6,50 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Product(
        '../assets/IMG/ice_coffee.svg',
        'Café glacé',
        'En savoir plus',
        'Café auquel on ajoute de la glace pilée, de la crème et du sucre.',
        '7,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Product(
        '../assets/IMG/mocha.svg',
        'Café mocha',
        'En savoir plus',
        'Riche café Expresso garni de  crème fouettée et de quelques pincées de chocolat.',
        '7,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Product(
        '../assets/IMG/chocolate-coffee.svg',
        'Café au chocolat',
        'En savoir plus',
        'Mélange de chocolat noir, de café Expresso, de lait et de sucre.',
        '7,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    )
]

export default products;