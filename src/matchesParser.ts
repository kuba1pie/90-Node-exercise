import formatScore from "./formatScore";
import makeEventName from "./makeEventName";

function matchesParser(data: Game[]) {
  let matchesParsed: Score[] = [];

  for (var index in data) {
    let name: string = makeEventName(data[index]);
    let score: string = formatScore(data[index]);

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
}

export default matchesParser;
