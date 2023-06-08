import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  public transform(exampleTest: ITest[], searchTest): ITest[] {
    if (!exampleTest) {
      console.log('None')
    }
  }

}
