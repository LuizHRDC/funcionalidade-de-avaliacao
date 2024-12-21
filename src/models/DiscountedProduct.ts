import { Product } from "./Product"
import { ProductType } from "../types"

export class DiscountedProduct extends Product {

  constructor (
    name: string,
    value: number,
    private _discount: number
  ) 
  {
    super(name, ProductType.Shoes, value)
  }

  get discount(): number {
    return this._discount
  }

  get discountedPrice(): number {
    return this.value - ((this.value * this._discount) / 100)
  }

  show(): string {
    return `\nProduto: ${this.name} \n Preço original: R$${this.value.toFixed(2)} \n Preço com desconto: R$${this.discountedPrice.toFixed(2)} \n Desconto de ${this.discount}`
  }
}