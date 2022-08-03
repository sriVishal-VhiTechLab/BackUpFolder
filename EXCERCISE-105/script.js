const nodes = 'START A B C D FINISH'.split(' ');
const graph = {
      START: { A: 5, B: 2 },
      A: { C: 4, D: 2 },
      B: { A: 8, D: 7 },
      C: { D: 6, FINISH: 3 },
      D: {FINISH: 1 },
      FINISH: {}
};
const graphWeights ={
      A:5,B:2,FINISH:Infinity;
};
