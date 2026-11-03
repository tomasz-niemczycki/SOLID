interface Discount {
    apply(price: number): number;
}

class StudentDiscount implements Discount {
    apply(price: number): number {
        return price * 0.8; //zwraca zniżkę -20%
    }
}

class SeniorDiscount implements Discount {
    apply(price: number): number {
        return price * 0.7; //zwraca zniżkę -30%
    }
}

function finalPrice(price: number, discount: Discount): number {
    return discount.apply(price);
}

console.log(finalPrice(100, new StudentDiscount()));
console.log(finalPrice(100, new SeniorDiscount()));

class VipDiscount implements Discount {
    apply(price: number): number {
        return price * 0.5;
    }
}

console.log(finalPrice(100, new VipDiscount()));