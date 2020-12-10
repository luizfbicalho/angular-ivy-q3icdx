import { EntidadeBaseStore, EntidadeBaseStoreTwo } from './EntidadeBaseStore';
import { extend } from 'webdriver-js-extender';
import { EntidadeBase } from './entidadebase.model';
import { EntidadeBaseDescricao } from './entidadebasedescricao.model';

export class EntidadeBaseDescricaoType extends EntidadeBaseDescricao {

    public $type?: string;

    constructor(obj?: any) {

        super(obj);

        this.$type = obj && obj.$type || null;
    }
}

export class EntidadeBaseType extends EntidadeBase {

    public $type?: string;

    constructor(obj?: any) {

        super(obj);

        this.$type = obj && obj.$type || null;
    }
} 
