type ShortPoem = { author: string } & (
  | { kigo: string; type: 'haiku' }
  | { meter: number; type: 'villanelle' }
);
// Ok
const morningGlory: ShortPoem = {
  author: 'Fukuda Chiyo-ni',
  kigo: 'Morning Glory',
  type: 'haiku',
};
const oneArt: ShortPoem = {
  author: 'Elizabeth Bishop',
  type: 'villanelle',
  meter: 1,
};

function mainTest() {
  console.log(morningGlory);
  console.log(oneArt);
}
export default mainTest;
