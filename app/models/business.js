import DS from 'ember-data';

export default DS.Model.extend({
  businessName: DS.attr(),
  streetAddress: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zipCode: DS.attr(),
  reviews: DS.hasMany('review', { async: true }),
  businessType: DS.BelongsTo('businesstype', {async: true}),
});
