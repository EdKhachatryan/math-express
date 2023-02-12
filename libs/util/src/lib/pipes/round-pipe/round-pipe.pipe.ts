import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from "@angular/common";

@Pipe({
    name: 'roundPipe'
})
export class RoundPipePipe implements PipeTransform {
    constructor(private decimalPipe: DecimalPipe) {
    }

    transform(value: string | number | null | undefined): string {
        return ( value && !isNaN(value as number) ) ?
            ( this.decimalPipe.transform(value, '1.0-1') as string ) : ( value as string );
    }
}
