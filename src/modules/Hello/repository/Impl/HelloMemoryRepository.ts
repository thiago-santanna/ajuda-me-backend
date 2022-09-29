import { IHelloRepository } from "../IHelloRepository";

export class HelloMemoryRepository implements IHelloRepository {
  getMessage(): string {
    return "Hello World my brother!";
  }
}
