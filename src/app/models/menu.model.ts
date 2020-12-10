



import {EntidadeBaseDescricao } from './entidadebasedescricao.model';
export class Menu extends EntidadeBaseDescricao {
    
    // ORDEM
    public Ordem: number = 0;
    // ATIVO
    public Ativo: boolean = false;
    
    
    // URL
    public Url: string = null;
    // TARGET
    public Target: string = null;
    // PAI
    public Pai: Menu = null;
    // ICONE
    public Icone: string = null;
    
    // FILHOS
    public Filhos: Menu[] = [];

    constructor(obj?: any)
    {
        super(obj );
        this.Ordem = obj && obj.Ordem != null ? obj.Ordem : 0;
        this.Ativo = obj && obj.Ativo != null ? obj.Ativo : false;
        
        
        this.Url = obj && obj.Url || null;
        this.Target = obj && obj.Target || null;
        this.Pai = obj && obj.Pai || null;
        this.Icone = obj && obj.Icone || null;
        

      if (obj && obj.Filhos && Array.isArray(obj.Filhos)) {
        this.Filhos = obj.Filhos.map(x => new Menu(x));
        }
        
    }
}
