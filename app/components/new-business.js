import Ember from 'ember';

export default Ember.Component.extend({
  addNewBusiness: false,

  actions: {
    showBidnessForm(){
      this.set('addNewBusiness', true);
    },
  }
});
