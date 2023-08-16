const ProductManager = require('./ProductManager');

const productManager = new ProductManager('productos.json');

productManager.addProduct({
    title: 'Remera Negra',
    description: 'una remera negra manga corta',
    price: 4000,
    thumbnail: 'img/imagen1.jpg',
    code: 'P001',
    stock: 50
});

productManager.addProduct({
    title: 'Gorro Gris',
    description: 'un gorro de invierno color gris',
    price: 1500,
    thumbnail: 'img/imagen2.jpg',
    code: 'P002',
    stock: 30
});

productManager.updateProduct(1, { price: 4200 });

console.log("Todos los productos:", productManager.getProducts());
console.log("Producto con ID 1:", productManager.getProductById(1));

productManager.deleteProduct(2);
