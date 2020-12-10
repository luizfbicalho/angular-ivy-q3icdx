

import {DateUtil } from 'local/shared/models/dateutil.model';
import {EntidadeBase } from './entidadebase.model';
export class EntidadeBaseDescricao extends EntidadeBase {
    
    
    
    // DESCRICAO
    public Descricao: string = null;
    

    constructor(obj?: any)
    {
        super(obj );
        
        
        this.Descricao = obj && obj.Descricao || null;
        
        
    }
}
