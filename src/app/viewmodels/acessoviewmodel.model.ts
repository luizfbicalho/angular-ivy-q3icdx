export class AcessoViewModel {
	// URL
	public Url: string = null;
	// ACESSO
	public Acesso: boolean = false;
	// INSTANCIAPASSO_ID
	public InstanciaPasso_Id: number = 0;
	constructor(obj?: any) {
		this.Url = (obj && obj.Url) || null;
		this.Acesso = (obj && obj.Acesso) || false;
		this.InstanciaPasso_Id = (obj && obj.InstanciaPasso_Id) || 0;
	}
}
