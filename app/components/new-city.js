import Ember from 'ember';

export default Ember.Component.extend({
  showCityForm: false,

    actions: {
      selectCity: function(selection, component){
        if (selection) {
          this.set('city', selection);
        } else {
          this.set('selection', component.get('default'));
        }
      },

      selectType: function(selection, component){
        if (selection) {
          this.set('businessType', selection);
        } else {
          this.set('selection', component.get('default'));
        }
      },


      showCityDropdown(){
        this.set('showCityForm', true);
    },

    saveCity(){
      var params = {
        cityName: this.get('city'),
        businessName: this.get('businessname'),
        streetAddress: this.get('streetAddress'),
        businessType: this.get('businessType'),
      }
      this.sendAction('saveCity', params);
    },
  }
});
