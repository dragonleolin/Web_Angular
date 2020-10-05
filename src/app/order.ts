export class Order {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
    public city: string,
    public address?: string
  ) {  }

}
