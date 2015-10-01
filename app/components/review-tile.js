import Ember from 'ember';

export default Ember.Component.extend({
  reviewForm: false,
  actions: {
    showReviewForm() {
      this.set('reviewForm', true);
    },
    saveReview(model){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        business: model
      }
      this.sendAction('saveReview', params);
    }
  }
});
