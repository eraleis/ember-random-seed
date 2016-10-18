import Ember from 'ember';

export default Ember.Service.extend({


  generate: function(options) {
    options.seed = options.seed;
    options.max = options.max || 1;
    options.min = options.min || 0;

    options.seed = (options.seed * 9301 + 49297) % 233280;
    var rnd = options.seed / 233280.0;

    return options.min + rnd * (options.max - options.min);
  }
});
