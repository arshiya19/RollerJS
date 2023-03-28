export class Roller 
{
    private _distribution: Map<number, number>;
    private _last: number;
    private _faces: number;
  
    constructor(faces: number)
    {
      // The number of faces must be at least 2. If it is not a valid number, default to 6.
      this._faces = (faces >= 2 && Number.isInteger(faces)) ? faces : 6;
      this._last = 0;
      this._distribution = new Map<number, number>();
      for (let i = 1; i <= this._faces; i++) 
      {
        this._distribution.set(i, 0);
      }
    }
  
    roll(value: number): number 
    {
      if (!Number.isInteger(value) || value < 1 || value > this._faces)
      {
        // Invalid value provided. No record of the roll should be made.
        return 0;
      }
      // Record the roll.
      this._last = value;
      this._distribution.set(value, this._distribution.get(value) + 1);
      return value;
    }
  
    last(): number 
    {
      return this._last;
    }
  
    distribution(): Map<number, number> 
    {
      // Return a copy of the distribution map to prevent external modification.
      return new Map<number, number>(this._distribution);
    }
  }
 
