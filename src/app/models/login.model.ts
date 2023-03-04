export interface LoginModel {
  readonly data: {
    readonly accessToken: string;
    readonly emailVerified: boolean;
  };
}
