import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      business: this.store.findAll('business'),
      cities: this.store.findAll('city')
    });
  },


  actions: {
    saveCity(params) {
      var newBusiness = this.store.createRecord('business', params);
      debugger;
      var city = params.cityName;
      city.get('businesses').addObject(newBusiness);
      newBusiness.save().then(function() {
        return city.save();
      });
    }
  }
});
