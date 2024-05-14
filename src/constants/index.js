import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { logo, a1, a2, a3, a4, a5, a6, a7, a8, a9, tr_1, tr_2, tr_3 } from "../assets/images";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];


export const skinProducts = [
    {
        id: 1,
        name: "Vit C Serum",
        benefits: {
            part1: [
                "Brightens complexion",
                "Fades dark spots",
                "Boosts collagen",
                "Evens skin tone"
            ],
            part2: [
                "Enhances radiance",
                "Protects against UV damage",
                "Reduces signs of aging"
                    ]
        }

        ,
        description: 'The unique selling proposition (USP) of an organic skincare brand typically revolves around its commitment to using natural and chemical-free ingredients, promoting sustainability, and emphasizing the benefits of a healthier and environmentally conscious approach to skincare. It may also highlight cruelty-free practices and the avoidance of synthetic',
        ingredients:'Aqua,Butylene Glycol,Diglycerin, Hydrolyzed Elastin,Beta-glucan, Niacinamide, 3-o-ethyl Ascorbic Acid, Allantoin, Carbomer, Triethanolamine, PEG-40 Hydrogenated Castor Oil, Ethylhexylglycerin,Parfum, Disodium EDTA,DMDM.', 
        usage:'In the Morning etc etc etc etc etc .',
        price: 10.99,
        imageUrl: a1,
        quantity:1
    },

    {
        id: 2,
        name: "Papaya Skin Serum",
        benefits: {
            part1: [
                "Acne Soothing",
                "Supports Healthy Skin Aging",
                "Skin Brightening",
                "Reducing Hyperpigmentation"
            ],
            part2: [
                "Squeeze 2-3 drops ",
                "No need to massage the oil ",
                "Use on alternative nights"
            ]
        },
        description: 'The unique selling proposition (USP) of an organic skincare brand typically revolves around its commitment to using natural and chemical-free ingredients, promoting sustainability, and emphasizing the benefits of a healthier and environmentally conscious approach to skincare. It may also highlight cruelty-free practices and the avoidance of synthetic',
       ingredients:'Aqua, Sodium Gluconate, 2-Bromo-2-Nitropropane-1, 3-Diol, Carbomer, Argan Oil, Hydroxyethyl Cellulose, Aloe Vera Extract, NeemExtract,Papaya (Carica Papaya) Extract, Orange Extract,(Punica Granatum), Sodium Ascorbyl Phosphate, Niacinamide, Hyaluronic Acid, Saccharide Isomerate, Pentylene Glycol, Butylene Glycol, D-Panthenol,',
       usage:'In the Morning etc etc etc etc etc .', 
       price: 10.99,
        imageUrl: a2,
        quantity:1
    },
    {
        id: 3,
        name: "Green Tea Toner ",
        benefits: {
            part1: [
                "Hydrates & Purifies Skin",
                "Treats Pimples",
                "Tighten Pores",
                "Deep Cleanses"
            ],
            part2: [
                "Helps in reducing blackheads",
                "No side effects",
            ]
        },

        description: 'The unique selling proposition (USP) of an organic skincare brand typically revolves around its commitment to using natural and chemical-free ingredients, promoting sustainability, and emphasizing the benefits of a healthier and environmentally conscious approach to skincare. It may also highlight cruelty-free practices and the avoidance of synthetic',
        ingredients:'Aqua (Water), Butylene Glycol, 1,2-Hexanediol, Glycerin, Pentylene Glycol, Sodium Hyaluronate, Centella Asiatica Extract, Houttuynia Cordata Extract, Camellia Sinensis Leal Extract, Green Tea Extract,Salix Nigra (Willow) Bark Extract, Punica Granatum Fruit Extract, Betaine',
        usage:'In the Morning etc etc etc etc etc .',
        price: 10.99,
        imageUrl: a3,
        quantity:1
    },
    {
        id: 4,
        name: "Cleansing Milk",
        benefits: {
            part1: [
                "Removes impurities from the skin",
                "Nourished and Glowing look"

            ],
            part2: [
                "Massage your face gently ",
                "Rinse off with lukewarm water ",
                "No Side Effects "
            ]
        },
        description: 'The unique selling proposition (USP) of an organic skincare brand typically revolves around its commitment to using natural and chemical-free ingredients, promoting sustainability, and emphasizing the benefits of a healthier and environmentally conscious approach to skincare. It may also highlight cruelty-free practices and the avoidance of synthetic',
        usage:'In the Morning etc etc etc etc etc .',
        ingredients:'Aqua (Water), Butylene Glycol, 1,2-Hexanediol, Glycerin, Pentylene Glycol, Sodium Hyaluronate, Centella Asiatica Extract, Houttuynia Cordata Extract, Camellia Sinensis Leal Extract, Green Tea Extract,Salix Nigra (Willow) Bark Extract, Punica Granatum Fruit Extract, Betaine',
        price: 10.99,
        imageUrl: a4,
        quantity:1
    }
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Vit C Serum", link: "/" },
            { name: "Papaya Skin Serum", link: "/" },
            { name: "Green Tea Toner", link: "/" },
            { name: "Cleansing Milk", link: "/" }
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@guzel.com", link: "mailto:customer@guzel.com" },
            { name: "+92554862314", link: "tel:+92554861154" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];