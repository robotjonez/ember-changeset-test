import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class TeamSelectorComponent extends Component {

  @action
  clickRollBack(model) {
    if (model.isDirty) {
      let r = confirm('Unsaved changes will be lost');

      if (r === true) {
        model.rollback()
      }
    }
  }
}
