import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

@Pipe({
  name: 'nbJours'
})
export class NbJoursPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    if (value) {
      if(value.nbJours <= 1) {
        return value.nbJours + ' jour';
      }
      else {
        return value.nbJours + ' jours';
      }
    }
  }

}
