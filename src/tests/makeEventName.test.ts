import makeEventName from "../makeEventName";

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

test("makeEventName function exists", () => {
  expect(typeof makeEventName).toEqual("function");
});

test("makeEventName made soccer", () => {
  expect(makeEventName(matches[0])).toEqual("Chelsea - Arsenal");
});

test("makeEventName made volleyball", () => {
  expect(makeEventName(matches[1])).toEqual("Germany - France");
});

test("makeEventName made handball", () => {
  expect(makeEventName(matches[2])).toEqual("Pogoń Szczeciń vs Azoty Puławy");
});

test("makeEventName made basketball", () => {
  expect(makeEventName(matches[3])).toEqual("GKS Tychy - GKS Katowice");
});

test("makeEventName made tennis", () => {
  expect(makeEventName(matches[4])).toEqual(
    "Maria Sharapova vs Serena Williams"
  );
});

test("makeEventName matches invalid sport", () => {
  expect(makeEventName(matches[5])).toEqual("Exception: invalid sport");
});
