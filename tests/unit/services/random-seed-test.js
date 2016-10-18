import { moduleFor, test } from 'ember-qunit';

moduleFor('service:random-seed', 'Unit | Service | random seed', {
});

test('should exists', function(assert) {
  let service = this.subject();

  assert.ok(service);
});

test('should generate a reproductible pseudo random number', function(assert) {
  let service = this.subject();
  let options = {
    min: 0,
    max: 10,
    seed: 42
  };
  let result = service.generate(options);

  assert.ok(result === 8.858839163237311);
});
