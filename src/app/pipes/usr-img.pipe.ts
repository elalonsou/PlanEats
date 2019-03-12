import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usrImg'
})
export class UsrImgPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value;
    } else {
      return './../../../assets/img/no-user.png';
    }
  }

}
