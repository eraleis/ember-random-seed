
import { randomSeed } from 'dummy/helpers/random-seed';
import { module, test } from 'qunit';

module('Unit | Helper | random seed');

test('should generate a reproductible random number', function(assert) {
  let result = randomSeed(42, {min: 0, max: 255});
  assert.ok(result === 225.90039866255142);
});

test('should be possible to pass the seed as option', function(assert) {
  let result = randomSeed(null, {min: 0, max: 255, seed: 42});
  assert.ok(result === 225.90039866255142);
});
