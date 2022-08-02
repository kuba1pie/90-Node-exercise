import formatScore from "../formatScore";

let matches: Game[] = [
  {
    sport: "soccer",
    participant1: "Chelsea",
    participant2: "Arsenal",
    score: "2:1",
  },
  {
    sport: "volleyball",
    participant1: "Germany",
    participant2: "France",
    score: "3:0,25:23,25:19,25:21",
  },
  {
    sport: "handball",
    participant1: "Pogoń Szczeciń",
    participant2: "Azoty Puławy",
    score: "34:26",
  },
  {
    sport: "basketball",
    participant1: "GKS Tychy",
    participant2: "GKS Katowice",
    score: [
      ["9:7", "2:1"],
      ["5:3", "9:9"],
    ],
  },
  {
    sport: "tennis",
    participant1: "Maria Sharapova",
    participant2: "Serena Williams",
    score: "2:1,7:6,6:3,6:7",
  },
  {
    sport: "ski jumping",
  },
];

test("formatScore function exists", () => {
  expect(typeof formatScore).toEqual("function");
});
test("formatScore soccer", () => {
  expect(formatScore(matches[0])).toEqual("2:1");
});
test("formatScore volleyball", () => {
  expect(formatScore(matches[1])).toEqual(
    "Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)"
  );
});
test("formatScore handball", () => {
  expect(formatScore(matches[2])).toEqual("34:26");
});
test("formatScore basketball", () => {
  expect(formatScore(matches[3])).toEqual("9:7,2:1,5:3,9:9");
});
test("formatScore tennis", () => {
  expect(formatScore(matches[4])).toEqual(
    "Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)"
  );
});
test("formatScore matches invalid sport", () => {
  expect(formatScore(matches[5])).toEqual("Exception: invalid sport");
});
