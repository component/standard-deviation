
# standard-deviation

  standard deviation utility

## Installation

    $ component install component/standard-deviation

## API

### sd(array)

  Return the standard deviation of `array`:

```js
sd([1,5,6,1,2,0])
```

### sd(array, fn)

  standard deviation of `array` with callback `fn(val, i)`:

```js
var age = sd(users, function(u){ return u.age })
```

### sd(array, string)

  standard deviation of `array` with the given property `string`:

```js
var age = sd(users, 'age')
```

# License

  MIT
