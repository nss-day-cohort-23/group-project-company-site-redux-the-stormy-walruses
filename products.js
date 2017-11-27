let productsArr = [
    {
        name: "Thermal Fleece",
        image: "hp-images/walrus_fleece.jpg",
        description: "Base layer for day hikes and cool evenings",
        price: '$40'
    },
    {
        name: "One-piece Husk-Flex Wetsuit",
        image: "hp-images/wet-suit.jpg",
        description: "Optimized for speed, temperature control, and range of motion",
        price: '$200'
    },
    {
        name: "Walrus All-weatherproof Backpack",
        image: "hp-images/backpack.jpg",
        description: "Durable nylon and premium walrus-free leather trimmings",
        price: '$70'
    },
    {
        name: "Casual Town Beanie",
        image: "hp-images/beanie.jpg",
        description: "Never leave the coast without this vintage staple",
        price: '$25'
    },
    {
        name: "Form-fitting Flipper Mitts",
        image: "hp-images/walrus-mitts.jpg",
        description: "Base layer for day hikes and cool evenings",
        price: '$30'
    },
    {
        name: "Thermal Fleece",
        image: "hp-images/walrus_fleece.jpg",
        description: "Base layer for day hikes and cool evenings",
        price: '$20'
    }
];

let output = document.getElementById('products');

for (i=0;i<productsArr.length;i++){
    output.innerHTML += "<article class='product'><header>" + productsArr[i].name + "</header><section class='desc'>" + "<img src='" + productsArr[i].image + "'><p>" + productsArr[i].description + "</p></section><div id='productFoot'>" + productsArr[i].price + "</div></article>";
}
