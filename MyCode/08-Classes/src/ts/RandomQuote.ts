class RandomQuote {
  readonly explicit: string;
  readonly implicit: string = 'Home is the nicest word there is.';
  constructor() {
    this.explicit = "We start learning the minute we're born."; // Ok;
    this.implicit = "We start learning the minute we're born.";
    // Error: Type '"We start learning the minute we're born."' is
    // not assignable to type '"Home is the nicest word there is."'.
  }
}
export default RandomQuote;
