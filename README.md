# cmd-exists

checks if system can run the command

# installation

    npm install cmd-exists

# usage

```javascript
    var exists = require('cmd-exists');

    exists('sass', 'compass', function (results) {
        // results = { sass: true, compass: true }
    });
```

or

```javascript
    var exists = require('cmd-exists');

    exists(['sass', 'compass'], function (results) {
        // results = { sass: true, compass: true }
    });
```