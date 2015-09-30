import DS from 'ember-data';

export default DS.Model.extend({
  cityName: DS.attr(),
  businesses: DS.hasMany('business', {async: true}),
  // businessType: DS.attr(),
});
