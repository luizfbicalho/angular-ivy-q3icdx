import { Guid } from "guid-typescript";
import { EntidadeBaseDescricao } from './entidadebasedescricao.model';
import { EntidadeBase } from './entidadebase.model';

export class EntidadeBaseStore extends EntidadeBaseDescricao {

    public IdStore: Guid;

    constructor(obj?: any) {

        super(obj);

        this.IdStore = Guid.create();
    }

}

export class EntidadeBaseStoreTwo extends EntidadeBase {

    public IdStore: Guid;

    constructor(obj?: any) {

        super(obj);

        this.IdStore = Guid.create();
    }
}
