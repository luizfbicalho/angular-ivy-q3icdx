
export class EntidadeId {

    // ID
    public Id: number = 0;

    constructor(obj?: any) {
        this.Id = obj && obj.Id || 0;
    }

    public static CreateFrom(obj: any): any {
        if (obj) {
          let retorno = new EntidadeId(obj);
          if (retorno.Id != 0) {
            return retorno;
          }
         }
        return obj;
    } 

    public static Clone<T>(obj: T): T {
        //return JSON.parse(JSON.stringify(obj));
      const retorno = this.deepClone(obj);
      delete retorno.DataCriacao;
      delete retorno.IpCriacao;
      delete retorno.UsuarioCriacao;
      delete retorno.DataEdicao;
      delete retorno.IpEdicao;
      delete retorno.UsuarioEdicao;
      return retorno;
  }
 
  private static deepClone(obj) {
    if (Array.isArray(obj)) {
      const arr = [];
      for (let i = 0; i < obj.length; i++) {
        arr[i] = EntidadeId.deepClone(obj[i]);
      }
      return arr;
    }

    if (typeof (obj) == "object") {
      const cloned = {};
      for (const key in obj) {
        cloned[key] = EntidadeId.deepClone(obj[key])
      }
      return cloned;
    }
    return obj;
  }
}
