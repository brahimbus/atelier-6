export class Point {
  private abs: number;
  private ord: number;

  constructor(abs: number, ord: number) {
    this.abs = abs;
    this.ord = ord;
  }

  // Getters
  public getAbs(): number {
    return this.abs;
  }

  public getOrd(): number {
    return this.ord;
  }

  // Setters
  public setAbs(abs: number): void {
    this.abs = abs;
  }

  public setOrd(ord: number): void {
    this.ord = ord;
  }

  public calculerDistance(p: Point): number {
    const dx = this.abs - p.abs;
    const dy = this.ord - p.ord;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }
}
