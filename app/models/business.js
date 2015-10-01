import DS from 'ember-data';

export default DS.Model.extend({
  businessName: DS.attr(),
  streetAddress: DS.attr(),
  cityName: DS.belongsTo('city', {async: true}),
  businessType: DS.attr(),
  reviews: DS.hasMany('review', { async: true }),
});
