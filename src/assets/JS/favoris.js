import Favori from "./Favori";

const favoris = [
    new Favori(
        '../assets/IMG/americano.svg',
        'Americano',
        'En savoir plus',
        'Expresso dans lequel de l\'eau chaude, créant un café de même intensité, mais de goût différent du café filtre ordinaire.',
        '6,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Favori(
        '../assets/IMG/latte.svg',
        'Latte',
        'En savoir plus',
        'Expresso fait avec du lait chauffé à la vapeur dans un rapport 1: 3 à 1: 5 avec un peu de mousse.',
        '7,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Favori(
        '../assets/IMG/latte macchiato.svg',
        'Latte macchiato',
        'En savoir plus',
        'Latte fait avec une petite quantité de lait moussé, semblable à un cappuccino seulement plus fort.',
        '6,50 $',
        '../assets/IMG/cart-shopping-solid.svg'
    ),
    new Favori(
        '../assets/IMG/chocolate-coffee.svg',
        'Café au chocolat',
        'En savoir plus',
        'Mélange de chocolat noir, de café Expresso, de lait et de sucre.',
        '7,00 $',
        '../assets/IMG/cart-shopping-solid.svg'
    )
]

export default favoris;