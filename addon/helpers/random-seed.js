import Ember from 'ember';

export function randomSeed(params, hash) {
  let seed = params || hash.seed;
  hash.max = hash.max || 1;
  hash.min = hash.min || 0;

  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280.0;

  return hash.min + rnd * (hash.max - hash.min);
}

export default Ember.Helper.helper(randomSeed);
