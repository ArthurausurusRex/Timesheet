export class User {
  constructor(
    public email: string,
    public password: string,
    public role: string,
    public manager? : string,
    public _id?: string,
  ) {  }
}