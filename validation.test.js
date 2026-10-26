import { test } from "node:test";
import assert from "node:assert";

import { validateEmail, validatePassword, validateAge } from "./validation.js";

test("validateEmail hyväksyy tavallisen sähköpostiosoitteen", () => {
  const result = validateEmail("opiskelija@example.com");

  assert.strictEqual(result, true);
});

// --- Tehtävä 1 ---
test("validateEmail hylkää sähköpostiosoitteen ilman @-merkkiä", () => {
  const result = validateEmail("opiskelija.example.com");

  assert.strictEqual(result, false);
});
// --- Tehtävä 2 ---
test("validatePassword hylkää liian lyhyen salasanan", () => {
  const result = validatePassword("sala123");

  assert.strictEqual(result, false);
});

// --- Tehtävä 3 ---
test("validatePassword hyväksyy vähintään 8 merkkiä pitkän salasanan", () => {
  const result = validatePassword("salasana123");

  assert.strictEqual(result, true);
});

// --- Tehtävä 4 ---
test("validateAge hyväksyy iän 18", () => {
  const result = validateAge(18);

  assert.strictEqual(result, true);
});

// --- Tehtävä 5 ---
test("validateAge hylkää iän 15", () => {
  const result = validateAge(15);

  assert.strictEqual(result, false);
});
// --- Tehtävä 6 ---
test("validateAge hylkää iän 121", () => {
  const result = validateAge(121);

  assert.strictEqual(result, false);
});

// --- Tehtävä 7 ---

test("validateEmail hylkää tyhjän merkkijonon", () => {
  const result = validateEmail("");
  assert.strictEqual(result, false);
});

test("validatePassword hylkää tyhjän salasanan", () => {
  const result = validatePassword("");
  assert.strictEqual(result, false);
});

test("validateAge hylkää merkkijonona annetun iän", () => {
  const result = validateAge("18");
  assert.strictEqual(result, false);
});

test("validateAge hylkää desimaaliluvun 18.5", () => {
  const result = validateAge(18.5);
  assert.strictEqual(result, false);
});

// --- Tehtävä 8 ---
test("validateEmail hylkää viallisen sähköpostin kuten @test.", () => {
  const result = validateEmail("@test.");
  assert.strictEqual(result, false);
});
