---
title: Plaster
date: 2023-05-26T03:18:03
lastmod: 2024-11-29T07:39:17
---

Plaster can be used to create stand alone sculptures as well as for making [molds](../making/molds.md) Plaster chemically reacts with water when mixed to for a hard semi-durable substance once cured.

## Plaster Calculator

<div id="plaster-calculator">
  <h3>Plaster to Water Calculator (70:100 Ratio)</h3>
  <label for="plaster">Plaster (grams):</label>
  <input type="number" id="plaster" placeholder="Enter plaster amount">
  <label for="water">Water (grams):</label>
  <input type="number" id="water" placeholder="Enter water amount">
  <button onclick="calculate()">Calculate</button>
  <p id="result"></p>
</div>

<script>
  function calculate() {
    const plasterInput = document.getElementById('plaster').value;
    const waterInput = document.getElementById('water').value;
    const resultElement = document.getElementById('result');

    if (plasterInput && waterInput) {
      resultElement.textContent = 'Please fill in only one field at a time!';
      return;
    }

    if (plasterInput) {
      const water = (plasterInput * 100) / 70;
      resultElement.textContent = `To mix ${plasterInput}g of plaster, you need ${water.toFixed(2)}g of water.`;
    } else if (waterInput) {
      const plaster = (waterInput * 70) / 100;
      resultElement.textContent = `To mix with ${waterInput}g of water, you need ${plaster.toFixed(2)}g of plaster.`;
    } else {
      resultElement.textContent = 'Please enter a value in one of the fields.';
    }
  }
</script>

## Mixing Plaster

Plaster can be mixed by the less precise "volcano method" or the more precise volume / mass method.

## Plaster Manufacturees

- [USG](https://usg.com/)
