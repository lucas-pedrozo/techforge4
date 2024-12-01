var Order = /** @class */ (function () {
    function Order() {
        this.cart = new Cart();
        this.payment = new Payment();
        this.shipping = new Shipping();
    }
    Order.prototype.addItem = function (item, price) {
        this.cart.addItem(item, price);
    };
    Order.prototype.processPayment = function () {
        this.payment.processPayment(this.cart.getTotalPrice());
    };
    Order.prototype.updateShippingStatus = function (status) {
        this.shipping.updateStatus(status);
    };
    return Order;
}());
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
        this.totalPrice = 0;
    }
    Cart.prototype.addItem = function (item, price) {
        this.items.push(item);
        this.totalPrice += price;
    };
    Cart.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    return Cart;
}());
var Payment = /** @class */ (function () {
    function Payment() {
        this.status = "pending";
    }
    Payment.prototype.processPayment = function (amount) {
        // Simulação do processamento de pagamento
        if (amount > 0) {
            this.status = "paid";
        }
    };
    Payment.prototype.getStatus = function () {
        return this.status;
    };
    return Payment;
}());
var Shipping = /** @class */ (function () {
    function Shipping() {
        this.status = "pending";
    }
    Shipping.prototype.updateStatus = function (status) {
        this.status = status;
    };
    Shipping.prototype.getStatus = function () {
        return this.status;
    };
    return Shipping;
}());
var order = new Order();
order.addItem("Produto 1", 50);
order.addItem("Produto 2", 75);
order.processPayment();
order.updateShippingStatus("enviado");
console.log(order.payment.getStatus());
console.log(order.shipping.getStatus());
