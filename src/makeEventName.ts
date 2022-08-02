function makeEventName(match: Game) {
  if (
    match.sport === "soccer" ||
    match.sport === "basketball" ||
    match.sport === "volleyball"
  ) {
    return `${match.participant1} - ${match.participant2}`;
  } else if (match.sport === "tennis" || match.sport === "handball") {
    return `${match.participant1} vs ${match.participant2}`;
  } else {
    return "Exception: invalid sport";
  }
}

export default makeEventName;
