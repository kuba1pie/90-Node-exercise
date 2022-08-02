import { matches } from "./src/data";
import makeEventName from "./src/makeEventName";
import formatScore from "./src/formatScore";

let matchesParsed: Score[] = [];

for (var index in matches) {
  let name: string = makeEventName(matches[index]);
  let score: string = formatScore(matches[index]);

  if (
    name !== "Exception: invalid sport" &&
    score !== "Exception: invalid sport"
  ) {
    matchesParsed.push({
      name,
      score,
    });
  }
}

console.log(matchesParsed);
