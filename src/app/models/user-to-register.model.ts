export interface UserToRegisterModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: {
    readonly firstname: string;
    readonly lastname:string;
  };
  readonly address:{
    readonly city:string;
    readonly street:string;
    readonly number: number;
    readonly zipcode: string;
  };
  readonly phone: string;
}
