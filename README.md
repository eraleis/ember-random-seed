# ember-random-seed

This addon allow you to generate reproductible random numbers

## Installation

##### Installation with Ember CLI (Recommended)

``` bash
ember install ember-random-seed
```

##### Installation with npm

``` bash
npm install ember-random-seed
```

## Usage

Basic usage (Generate a number between 0 and 1):
``` js
import Ember from 'ember';

export default Ember.Controller.extend({
  randomSeed: Ember.inject.service(),

  myRandomNumber: function() {
    let options = {
      seed: 42
    };
    let myRandomSeededNumber = this.get('randomSeed').generate(options);
  }
});
```

You can also use options to generate a number with custom boundaries, for instance, if we want to generate a number between 5 and 100:
``` js
import Ember from 'ember';

export default Ember.Controller.extend({
  randomSeed: Ember.inject.service(),

  myRandomNumber: function() {
    let options = {
      seed: 42,
      min: 5,
      max: 100
    };
    let myRandomSeededNumber = this.get('randomSeed').generate(options);
  }
});
```

## Running Tests

* `git clone https://github.com/vatourni/ember-random-seed.git`
* `cd ember-random-seed`
* `ember test`
