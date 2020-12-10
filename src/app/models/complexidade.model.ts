

import {DateUtil } from 'local/shared/models/dateutil.model';
import {EntidadeBaseDescricao } from './entidadebasedescricao.model';
export class Complexidade extends EntidadeBaseDescricao {
    
    // TAMANHO
    public Tamanho: number = 0;
    
    
    // DEFINICAO
    public Definicao: string = null;
    

    constructor(obj?: any)
    {
        super(obj );
        this.Tamanho = obj && obj.Tamanho != null ? obj.Tamanho : 0;
        
        
        this.Definicao = obj && obj.Definicao || null;
        
        
    }
}
