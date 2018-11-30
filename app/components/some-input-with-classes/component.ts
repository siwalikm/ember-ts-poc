import Component from '@ember/component';
import { computed } from '@ember-decorators/object';

export default class someInputs extends Component {
  theValue = 0;

  @computed('theValue')
  get getYOB(): number {
    const currentYear: number = 2018;
    const age: number = this.get('theValue');
    const yearOfBirth: number = currentYear - age;
    return age ? yearOfBirth : 0;
  }

}