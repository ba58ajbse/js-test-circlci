const sum = require('../src/sum');

test('１と２を足すと３になる', () => {
  expect(sum(1, 2)).toBe(3);
});

test('"1"と"2"を足すと"３"にならない', () => {
  expect(sum('1', '2')).not.toBe('3');
});

test('"1"と"2"を足すと3にならない', () => {
  expect(sum('1', '2')).not.toBe(3);
});

test('"1"と"2"を足すと"12"になる', () => {
  expect(sum('1', '2')).toBe('12');
});
