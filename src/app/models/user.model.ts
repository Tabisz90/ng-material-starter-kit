export interface UserModel {
  readonly email: string;
  readonly name: {
    readonly firstname: string;
    readonly lastname: string;
  };
}
