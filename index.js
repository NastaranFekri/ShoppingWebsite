class Product {
    constructor(name, price, photos) {
        this.name = name;
        this.price = price;
        this.photos = photos;
    }
}

class User {
    constructor(name, familyName, address, email) {
        this.name = name;
        this.familyName = familyName;
        this.address = address;
        this.email = email;
        this.invoices = [];
    }
}
class Invoice {
    constructor(products, user) {
        this.products = products;
        this.user = user;
        this.timestamp = Date.now();
    }
}

const nastaran = new User('nastaran', 'f','berlin', 'f@gmail.com');

const chair = new Product('leather chair', 150, ['chair.jpg']);

const invoice = new Invoice([chair], nastaran);
nastaran.invoices.push(invoice);

console.log(nastaran);
