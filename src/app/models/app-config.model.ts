// https://blogs.msdn.microsoft.com/premier_developer/2018/03/01/angular-how-to-editable-config-files/

export interface IAppConfig {
	env: {
		name: string;
	};
	appInsights: {
		instrumentationKey: string;
	};
	logging: {
		console: boolean;
		appInsights: string;
	};
	apiServer: {
		ApiEndpoint: string;
		Domain: string;
	};
	apiModuloContratos: IApiModuloContratos;
}

export interface IApiModuloContratos {
	ApiEndpoint: string;
	client_id: string;
	client_secret: string;
	IdTransformacaoAnalisePDF: number;
}
