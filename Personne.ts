class Personne {
  private nom: string;
  private sexe: string;
  private adresses: Adresse[];

  constructor(nom: string, sexe: string, adresses: Adresse[] = []) {
    this.nom = nom;
    this.sexe = sexe === "M" || sexe === "F" ? sexe : "M";
    this.adresses = adresses;
  }

  // Getters
  public getNom(): string {
    return this.nom;
  }

  public getSexe(): string {
    return this.sexe;
  }

  public getAdresses(): Adresse[] {
    return this.adresses;
  }

  // Setters
  public setNom(nom: string): void {
    this.nom = nom;
  }

  public setSexe(sexe: string): void {
    this.sexe = sexe === "M" || sexe === "F" ? sexe : this.sexe;
  }

  public setAdresses(adresses: Adresse[]): void {
    this.adresses = adresses;
  }
}
