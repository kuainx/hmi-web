import { makeAutoObservable } from 'mobx';
import { productList } from '../assets/productsList';
export function runningStore() {
  return makeAutoObservable({
    battery: 0,
    incrementBattery() {
      this.battery++;
    },
    decrementBattery() {
      if (this.battery > 0) {
        this.battery--;
      }
    },
    productNum: new Array(productList.length).fill(0),
    setProductNum(index, n) {
      this.productNum[index] = n;
    },
    get productPrice() {
      let sum = 0;
      for (let i = 0; i < productList.length; i++) {
        sum += this.productNum[i] * productList[i].price;
      }
      return Math.round(sum * 100) / 100;
    },
    get totalPrice() {
      return Math.round(this.battery * 48.8 * 100) / 100 + this.productPrice;
    },
  });
}
