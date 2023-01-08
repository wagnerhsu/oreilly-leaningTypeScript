type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: 'haiku' };
type Villanelle = ShortPoemBase & { meter: number; type: 'villanelle' };
type ShortPoem = Haiku | Villanelle;
const oneArt: ShortPoem = {
  author: 'Elizabeth Bishop',
  type: 'villanelle',
  meter: 2,
};

const anotherArt: ShortPoem = {
  author: 'Elizabeth Bishop',
  type: 'haiku',
  kigo: 'kigo information',
};
export {};
