# Ember-random-seed

This addon allow you to generate reproductible random numbers:

Basic usage (Generate a number between 0 and 1):
``` js
let seed = 4;
let myRandomSeededNumber = randomSeed(seed);
```

You can also use options to generate a number with custom boundaries, for instance, if we want to generate a number between 5 and 100:
``` js
let seed = 4;
let options = {
  min: 5,
  max: 100
}

let myRandomSeededNumber = randomSeed(seed, options);
```

```  js
import randomSeed from 'ember-random-seed/helpers/random-seed';

```
## Installation



## Running Tests

* `git clone https://github.com/vatourni/ember-random-seed.git`
* `cd ember-random-seed`
* `ember test`
