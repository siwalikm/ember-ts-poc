import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  theValue: 0,


  getYOB: computed('theValue', function(): number {
    const currentYear: number = 2018;
    const age = get(this, 'theValue');
    const yearOfBirth = currentYear - age;
    return age ? yearOfBirth : 0;
  }),
});


