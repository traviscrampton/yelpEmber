import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  business: DS.belongsTo('business', { async: true}),

});
