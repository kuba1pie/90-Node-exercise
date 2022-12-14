import { matches } from "../src/data";
import makeEventName from "../src/makeEventName";

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
