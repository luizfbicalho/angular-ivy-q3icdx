import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textoBoolean' })
export class TextoBooleanPipe implements PipeTransform {
    transform(value: boolean): string {
        return value == true ? 'Sim' : 'Não'
    }; 
}
