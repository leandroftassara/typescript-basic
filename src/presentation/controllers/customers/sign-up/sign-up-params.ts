import { Length } from "class-validator";

export class SignUpParams {
  @Length(2, 100)
  name: string;
}
