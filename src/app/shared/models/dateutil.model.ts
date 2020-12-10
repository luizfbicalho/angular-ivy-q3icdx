var moment: any;
export class DateUtil {
  public static GetDate(parm: any): Date {
        // esse codigo é por que estamos com problemas com o datepicker
        if (!parm) {
          return new Date();
        }
        if (parm instanceof Date) {
            return parm;
        }
        if (typeof parm == 'string') {
            if (parm == "0001-01-01T00:00:00Z") {
                return null;
            }

            if (parm.indexOf("T") > 0) {
                return new Date(parm);
            }

            if (moment) {
                return moment.parse(parm).toDate();
            }
        }
        console.log('Data invalida');
        console.log(parm);
        return new Date();
    }

    public static toJSON(parm: Date): Date {

        if (parm) {

            var ret = parm.toString();
            if (parm.toJSON) {
                ret = parm.toJSON();
            }
            ret = ret.substring(0, 10) + "T00:00:00.000Z";
            return <any>ret;
        }
        return parm;
    }
}
