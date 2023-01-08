import WithMethod from './ts/functionProperties';
import RandomQuote from './ts/RandomQuote';

const withMethod = new WithMethod();
console.assert(withMethod.myMethod === new WithMethod().myMethod);
console.assert(withMethod.myProperty === new WithMethod().myProperty);

const quote = new RandomQuote();
console.log(quote);
export {};
