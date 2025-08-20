import { Container } from "inversify";
export const TYPES = {
  // örnek
  UserService: Symbol.for("UserService"),
  UserRepository: Symbol.for("UserRepository"),
};
export const container = new Container();
