var test = require('tape');
var add = require('../src/js');

test('add should add', function (t) {
  t.plan(1);
  t.ok(add(1, 2) === 3, 'maths should work');
});
