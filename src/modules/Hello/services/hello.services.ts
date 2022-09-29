import { IHelloRepository } from "../repository/IHelloRepository";

export class HelloServices {
  constructor(private helloRepositorie: IHelloRepository) {}

  execute() {
    return this.helloRepositorie.getMessage();
  }
}
