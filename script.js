const totalSpend = 2000;
let payment = 4200;
let discount = 0;

if (totalSpend > 100 <= 1000) {
  discount = 0.02;
} else if (totalSpend > 1000 < 5000) {
  discount = 0.05;
} else if (totalSpend > 5000) {
  discount = 0.1;
}

console.log(
  `оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`
);
