class Product {
    constructor(name, quantity, photos) {
        this.name = name;
        this.quantity = quantity;
        this.photos = photos;
    }
}

class User {
    constructor(name, familyName, address, email) {
        this.name = name;
        this.familyName = familyName;
        this.address = address;
        this.email = email;
    }
}

const nastaran = new User('nastaran', 'f','berlin', 'f@gmail.com')

console.log(nastaran)
