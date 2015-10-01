import Ember from 'ember';

export default Ember.Component.extend({
  showDaBidnessForm : false,

  actions : {
    showDaBidness() {
      this.set('showDaBidnessForm', true);
    },

    hideDaBidness() {
      this.set('showDaBidnessForm', false);
    }
  }
});
