// //https://blogs.msdn.microsoft.com/premier_developer/2018/03/01/angular-how-to-editable-config-files/
// https://www.angularjswiki.com/angular/how-to-read-local-json-files-in-angular/
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAppConfig } from './models/app-config.model';

@Injectable()
export class AppConfig {
    static settings: IAppConfig;
    constructor(private http: HttpClient) {
      let config : IAppConfig = {
        env : {
            name: ""
        },
        appInsights: {
            instrumentationKey: ""
        },
        logging: {
            console: true,
            appInsights: ""
        },
        apiServer: 	{
            ApiEndpoint: "",
            Domain: ""
        },
        apiModuloContratos: {
          ApiEndpoint: "",
          client_id: "",
          client_secret: "",
          IdTransformacaoAnalisePDF: 0
        }
      }    
      AppConfig.settings = config ;
    }
}
