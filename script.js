function createMixedMessage() {

let scenario = [
    'walking home from school', 
    'jogging with the dog', 
    'running around the field', 
    'shopping for some shoes', 
    'waiting for the bus'
    ];

let size = ['tiny', 
    'little', 
    'big', 
    '50ft',
    '3ft'];

let animal = ['dog', 
    'cat', 
    'badger', 
    'hamster', 
    'spider', 
    'snake',
    'bear'];

let whatHappened = scenario[Math.floor(Math.random() * scenario.length)];
let whatSize = size[Math.floor(Math.random() * size.length)];
let whatAnimal = animal[Math.floor(Math.random() * animal.length)];

return 'I was ' + whatHappened + ' when i was attacked by a ' + whatSize + ' ' + whatAnimal + '.'
}

console.log(createMixedMessage())
console.log(createMixedMessage())
console.log(createMixedMessage())