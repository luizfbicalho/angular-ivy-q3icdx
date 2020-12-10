
export class EntidadeBase {
    
    // ID
    public Id: number = 0;
    

    

    constructor(obj?: any)
    {
        
        this.Id = obj && obj.Id != null ? obj.Id : 0;
        
        
    }
}
