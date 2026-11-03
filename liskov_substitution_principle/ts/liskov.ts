abstract class Product {
    private name: string;
    constructor(name: string) {
        this.name = name
    }

    abstract getPrice(): number;
}

class PhysicalProduct extends Product {
    private price: number;
    private shipping: number;
    constructor(name: string, price: number, shipping: number) {
        super(name);
        this.price = price;
        this.shipping = shipping
    }

    getPrice(): number {
        return this.price + this.shipping;
    }
}

class DigitalProduct extends Product {
    private price: number;
    constructor(name: string, price: number) {
        super(name);
        this.price = price
    }

    getPrice(): number {
        return this.price;
    }
}

class DiscountedProduct extends Product {
    private price: number;
    private percentOff: number;
    constructor(name: string, price: number, percentOff: number) {
        super(name);
        this.price = price;
        this.percentOff = percentOff;
    }

    getPrice(): number {
        return this.price * (1 - this.percentOff / 100);
    }
}

class Cart {
    private items: Product[] = [];

    add(product: Product): void {
        this.items.push(product);
    }

    total(): number {
        let sum = 0;
        for(const item of this.items) {
            sum += item.getPrice();
        }
        return sum;
    }
}

const cart = new Cart();
cart.add(new PhysicalProduct("Bluza", 150, 15));
cart.add(new DigitalProduct("Call of Duty", 250));
cart.add(new DiscountedProduct("Kurs online", 100, 15))

console.log(`Razem: ${cart.total()}zł`);
