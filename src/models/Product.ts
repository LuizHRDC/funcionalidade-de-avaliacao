import { randomUUID } from 'crypto'
import { Rating } from './Rating'
import { Comment } from './Comment'
import { User } from './User'
import { ProductType } from '../types'
import { comments } from '../database/comment'

export class Product {
  private readonly _id: string
  private _ratings: Rating[]

  constructor(
    private _name: string,
    private _type: ProductType,
    private _value: number
  ) 
  {
    this._id = randomUUID()
    this._ratings = []
  }

  public get name(): string {
    return this._name
  }

  public get value(): number {
    return this._value
  }

  public get id(): string {
    return this._id
  }

  public show(): string {
    console.log(`\n${this._name} - R$${this._value.toFixed(2)}`)
    this.showComments()
    this.evaluationAverage()
    return "\n---------------------\n"
  }

  public showComments(): void {
    const productComments = comments.filter(
      (comment) => comment.product === this
    )
    productComments.forEach((comment) => {
      console.log(`[${comment.from.username}]: ${comment.content}`)
    })
  }

  public addComment(content: string, user: User): void {
    const comment = new Comment(user, this, content)
    comments.push(comment)
  }

  addRate(rate: number, user: User) {
    if (rate < 0 || rate > 5) {
      console.log('Sua avaliação deve ser entre 0 e 5')
      return
    }

    const rating = new Rating(rate, user)
    this._ratings.push(rating)

    console.log(`\nAvaliação de nota ${rate} adicionada por ${user.username} sobre o produto: ${this.name}`)
  }

  public evaluationAverage() {
    if (this._ratings.length === 0) {
      console.log('Ainda não há avaliações para esse produto.');
      return;
    }
    const totalRatings = this._ratings.reduce((sum, rating) => sum + rating.rate, 0);
    const average = totalRatings / this._ratings.length;
    console.log(`Nota média de ${this._name}: ${average.toFixed(2)}\n`);
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      price: this._value,
      type: this._type,
    }
  }
}