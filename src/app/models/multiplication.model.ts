export class Multiplication {

    // table: string;

    private _facteur: number;
    public get facteur(): number {
        return this._facteur;
    }
    public set facteur(value: number) {
        this._facteur = value;
    }

    private _litteral: string;
    public get litteral(): string {
        return this._litteral;
    }
    public set litteral(value: string) {
        this._litteral = value;
    }

    /**
     * Constructeur
     */
    constructor(facteur: number, litteral: string) {
        this._facteur = facteur;
        this._litteral = litteral;
    }
}
