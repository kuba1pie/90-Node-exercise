function formatScore(match: Game) {
  if (match.sport === "soccer" || match.sport === "handball") {
    return match.score;
  } else if (match.sport === "tennis" || match.sport === "volleyball") {
    let scores: any =
      /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(
        match.score
      );
    let set1 = scores[2];
    let set2 = scores[3];
    let set3 = scores[4];

    return (
      "Main score: " +
      scores[1] +
      " (" +
      "set1 " +
      set1 +
      ", " +
      "set2 " +
      set2 +
      ", " +
      "set3 " +
      set3 +
      ")"
    );
  } else if (match.sport === "basketball") {
    return (
      match.score[0][0] +
      "," +
      match.score[0][1] +
      "," +
      match.score[1][0] +
      "," +
      match.score[1][1]
    );
  } else {
    return "Exception: invalid sport";
  }
}
export default formatScore;
