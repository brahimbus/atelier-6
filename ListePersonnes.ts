class ListePersonnes {
  private personnes: Personne[];

  constructor(personnes: Personne[] = []) {
    this.personnes = personnes;
  }

  // Getter
  public getPersonnes(): Personne[] {
    return this.personnes;
  }

  // Setter
  public setPersonnes(personnes: Personne[]): void {
    this.personnes = personnes;
  }

  public findByNom(s: string): Personne | null {
    return this.personnes.find((personne) => personne.getNom() === s) || null;
  }

  public findByCodePostal(cp: string): boolean {
    return this.personnes.some((personne) =>
      personne.getAdresses().some((adresse) => adresse.getCodePostal() === cp)
    );
  }

  public countPersonneVille(ville: string): number {
    return this.personnes.reduce((count, personne) => {
      return (
        count +
        (personne.getAdresses().some((adresse) => adresse.getVille() === ville)
          ? 1
          : 0)
      );
    }, 0);
  }
}
