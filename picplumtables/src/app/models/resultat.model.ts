export class Resultat {
    private _value: number;
    
    public get value(): number {
        return this._value;
    }
    public set value(value: number) {
        this._value = value;
    }

    private _visible: boolean;
    public get visible(): boolean {
        return this._visible;
    }
    public set visible(value: boolean) {
        this._visible = value;
    }

    constructor(value: number, 
        visible: boolean){
        this._value = value;
        this._visible = visible;
    }
}
