class Order {
    cart: Cart;
    payment: Payment;
    shipping: Shipping;

    constructor() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }

    addItem(item: string, price: number) {
        this.cart.addItem(item, price);
    }

    processPayment() {
        this.payment.processPayment(this.cart.getTotalPrice());
    }

    updateShippingStatus(status: string) {
        this.shipping.updateStatus(status);
    }
}

class Cart {
    items: string[];
    totalPrice: number;

    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }

    addItem(item: string, price: number) {
        this.items.push(item);
        this.totalPrice += price;
    }

    getTotalPrice() {
        return this.totalPrice;
    }
}

class Payment {
    status: string;

    constructor() {
        this.status = "pending";
    }

    processPayment(amount: number) {
        // Simulação do processamento de pagamento
        if (amount > 0) {
            this.status = "paid";
        }
    }

    getStatus() {
        return this.status;
    }
}

class Shipping {
    status: string;

    constructor() {
        this.status = "pending";
    }

    updateStatus(status: string) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }
}


const order = new Order();
order.addItem("Produto 1", 50);
order.addItem("Produto 2", 75);
order.processPayment();
order.updateShippingStatus("enviado");


console.log(order.payment.getStatus());  
console.log(order.shipping.getStatus());
