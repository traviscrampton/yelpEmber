import DS from 'ember-data';

export default DS.Model.extend({
  businessName: DS.attr(),
  streetAddress: DS.attr(),
  city: DS.belongsTo('city', {async: true}),
  reviews: DS.hasMany('review', { async: true }),
});
