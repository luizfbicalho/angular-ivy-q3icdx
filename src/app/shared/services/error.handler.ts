// Import the core angular services.
import { ErrorHandler, Injector } from "@angular/core";
import { forwardRef } from "@angular/core";
import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";
import { AppConfig } from '../../app.config';
// Import the application components and services.


//https://github.com/bennadel/JavaScript-Demos/blob/master/demos/error-handler-angular2/app/logging-error-handler.ts

//https://www.bennadel.com/blog/3138-creating-a-custom-errorhandler-in-angular-2-rc-6.htm


@Injectable()
export class LoggingErrorHandler implements ErrorHandler {

    //private options: LoggingErrorHandlerOptions;


    // I initialize the service.
    // --
    // CAUTION: The core implementation of the ErrorHandler class accepts a boolean 
    // parameter, `rethrowError`; however, this is not part of the interface for the 
    // class. In our version, we are supporting that same concept; but, we are doing it
    // through an Options object (which is being defaulted in the providers).
  constructor(private injector: Injector) {   }


    // ---
    // PUBLIC METHODS.
    // ---


    // I handle the given error.
  public handleError(error: any): void {
    if (AppConfig.settings.logging.appInsights === "true") {
    
    }

        // Log to the console.
        try {
            console.log(error);
            console.group("ErrorHandler");
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();

        } catch (handlingError) {
            console.group("ErrorHandler");
            console.warn("Error when trying to output error.");
            console.error(handlingError);
            console.groupEnd();
        }
        try {
            if (error) {
                // alert(`Ocorreu um erro ao executar essa página\nPor favor copie esse erro (CTRL+C) e o endereço do browser e envie para a TI\n mensagem:${error.message}\nInformações Adicionais:${error.stack}`);
                error = error.originalError;
            }

        } catch (loggingError) {
            console.group("ErrorHandler");
            console.error(loggingError);
            console.groupEnd();
        }

    }


    // ---
    // PRIVATE METHODS.
    // ---


    // I attempt to find the underlying error in the given Wrapped error.
    private findOriginalError(error: any): any {

        while (error && error.originalError) {

            error = error.originalError;

        }

        return (error);

    }

}


// I am the collection of providers used for this service at the module level.
// Notice that we are overriding the CORE ErrorHandler with our own class definition.
// --
// CAUTION: These are at the BOTTOM of the file so that we don't have to worry about
// creating futureRef() and hoisting behavior.
export var LOGGING_ERROR_HANDLER_PROVIDERS = [
    {
        provide: ErrorHandler,
        useClass: LoggingErrorHandler
    }
];
