import React from "react";
import { useState } from "react";

const [jmlBobot, setJmlBobot] = useState(0);

const bobotKriteria = [
  [1, 1 / 3, 1 / 5, 3],
  [3, 1, 1, 3],
  [5, 1, 1, 5],
  [1 / 3, 1 / 3, 1 / 5, 1],
];

for (var i = 0; i <= 3; i++) {
  for (var j = 0; i <= 3; i++) {
    setJmlBobot(jmlBobot + bobotKriteria[i][j]);
  }
}

export const countAHP = () => {
  return <p>{jmlBobot}</p>;
};
