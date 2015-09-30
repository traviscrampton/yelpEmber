import DS from 'ember-data';

export default DS.Model.extend({
  bidnesstype: DS.hasMany('business', {async: true}),
});
