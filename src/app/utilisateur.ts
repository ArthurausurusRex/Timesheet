export class Utilisateur {
  constructor(
    public email: string,
    public password: string,
    public role: string,
    public gestionnaire? : string,
    public _id?: string,
  ) {  }
}