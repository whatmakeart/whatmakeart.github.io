---
title: Plaster Ratio Calculator
date: 2024-11-29T07:18:02
lastmod: 2026-01-13T14:12:55
toc: true
---

## Plaster to Water Mixing Calculator (70:100 Ratio)

The calculator uses a mixing ratio of 70 parts water to 100 parts plaster by weight based on the normal consitancy of USG No.1 Pottery Plaster. [^plaster-data]

<!-- Calculate Plaster Needed -->

## Calculate Plaster Needed (Given Amount of Water)

<form>
    <div class="row g-3 align-items-center">
        <div class="col-md-6">
            <label for="waterAmount" class="form-label">Enter amount of water:</label>
            <div class="input-group">
                <input type="number" id="waterAmount" class="form-control" min="0" step="any" aria-label="Water amount">
                <select id="waterUnit" class="form-select" aria-label="Water unit">
                    <option value="ml">Milliliters (ml)</option>
                    <option value="l">Liters (L)</option>
                    <option value="fl_oz">Fluid Ounces (fl oz)</option>
                    <option value="cup">Cups</option>
                    <option value="pint">Pints</option>
                    <option value="quart">Quarts</option>
                    <option value="gallon">Gallons</option>
                </select>
            </div>
        </div>
        <div class="col-md-6">
            <label for="plasterUnit" class="form-label">Select unit for plaster output:</label>
            <select id="plasterUnit" class="form-select" aria-label="Plaster output unit">
                <option value="g">Grams (g)</option>
                <option value="kg">Kilograms (kg)</option>
                <option value="oz">Ounces (oz)</option>
                <option value="lb">Pounds (lb)</option>
            </select>
        </div>
    </div>
    <button type="button" class="btn btn-primary mt-3" onclick="calculateFromWater()">Calculate Plaster Amount</button>
</form>
<div id="resultWater" class="result mt-2" aria-live="polite"></div>

## Calculate Water Needed

Use this to calculate the amount of water needed if you have a given fixed amount of plaster.

<form>
    <div class="row g-3 align-items-center">
        <div class="col-md-6">
            <label for="plasterAmount" class="form-label">Enter amount of plaster:</label>
            <div class="input-group">
                <input type="number" id="plasterAmount" class="form-control" min="0" step="any" aria-label="Plaster amount">
                <select id="plasterInputUnit" class="form-select" aria-label="Plaster input unit">
                    <option value="g">Grams (g)</option>
                    <option value="kg">Kilograms (kg)</option>
                    <option value="oz">Ounces (oz)</option>
                    <option value="lb">Pounds (lb)</option>
                </select>
            </div>
        </div>
        <div class="col-md-6">
            <label for="waterOutputUnit" class="form-label">Select unit for water output:</label>
            <select id="waterOutputUnit" class="form-select" aria-label="Water output unit">
                <option value="ml">Milliliters (ml)</option>
                <option value="l">Liters (L)</option>
                <option value="fl_oz">Fluid Ounces (fl oz)</option>
                <option value="cup">Cups</option>
                <option value="pint">Pints</option>
                <option value="quart">Quarts</option>
                <option value="gallon">Gallons</option>
            </select>
        </div>
    </div>
    <button type="button" class="btn btn-primary mt-3" onclick="calculateFromPlaster()">Calculate Water Amount</button>
</form>
<div id="resultPlaster" class="result mt-2" aria-live="polite"></div>

## Calculate Materials Needed (Given Volume of the Mold)

<form>
    <div class="row g-3 align-items-center">
        <div class="col-md-6">
            <label for="moldVolume" class="form-label">Enter volume of the mold:</label>
            <div class="input-group">
                <input type="number" id="moldVolume" class="form-control" min="0" step="any" aria-label="Mold volume">
                <select id="moldUnit" class="form-select" aria-label="Mold volume unit">
                    <option value="ml">Milliliters (ml)</option>
                    <option value="l">Liters (L)</option>
                    <option value="fl_oz">Fluid Ounces (fl oz)</option>
                    <option value="cup">Cups</option>
                    <option value="pint">Pints</option>
                    <option value="quart">Quarts</option>
                    <option value="gallon">Gallons</option>
                </select>
            </div>
        </div>
        <div class="col-md-3">
            <label for="volumeWaterUnit" class="form-label">Water output unit:</label>
            <select id="volumeWaterUnit" class="form-select" aria-label="Water output unit">
                <option value="ml">Milliliters (ml)</option>
                <option value="l">Liters (L)</option>
                <option value="fl_oz">Fluid Ounces (fl oz)</option>
                <option value="cup">Cups</option>
                <option value="pint">Pints</option>
                <option value="quart">Quarts</option>
                <option value="gallon">Gallons</option>
            </select>
        </div>
        <div class="col-md-3">
            <label for="volumePlasterUnit" class="form-label">Plaster output unit:</label>
            <select id="volumePlasterUnit" class="form-select" aria-label="Plaster output unit">
                <option value="g">Grams (g)</option>
                <option value="kg">Kilograms (kg)</option>
                <option value="oz">Ounces (oz)</option>
                <option value="lb">Pounds (lb)</option>
            </select>
        </div>
    </div>
    <button type="button" class="btn btn-primary mt-3" onclick="calculateFromVolume()">Calculate</button>
</form>
<div id="resultVolume" class="result mt-2" aria-live="polite"></div>

<script>
  // =========================
  // Plaster Ratio Calculator
  // 70 parts water : 100 parts plaster (by WEIGHT)
  // =========================

  // --- Unit conversion factors to base units ---
  // Base volume unit: milliliters (ml)
  // Base weight unit: grams (g)
  const volumeToML = {
    ml: 1,
    l: 1000,
    fl_oz: 29.5735,
    cup: 236.588,
    pint: 473.176,
    quart: 946.353,
    gallon: 3785.41
  };

  const weightToGrams = {
    g: 1,
    kg: 1000,
    oz: 28.3495,
    lb: 453.592
  };

  // --- Ratio constants (by weight) ---
  const WATER_PARTS = 70;
  const PLASTER_PARTS = 100;

  // Multipliers derived from 70:100 (water:plaster)
  const PLASTER_PER_WATER = PLASTER_PARTS / WATER_PARTS; // 100/70 = 1.428571...
  const WATER_PER_PLASTER = WATER_PARTS / PLASTER_PARTS; // 70/100 = 0.7

  // --- Assumption ---
  // Water density ~ 1 g/ml (close enough for studio mixing calculations)
  // So: water_ml ≈ water_g

  // --- Mold volume mode note ---
  // Many studio recipes use a "slurry expansion factor": once plaster is added,
  // the total slurry volume is larger than the starting water volume.
  // If slurry_volume ≈ water_volume * SLURRY_VOLUME_FACTOR,
  // then water_volume_needed ≈ mold_volume / SLURRY_VOLUME_FACTOR
  const SLURRY_VOLUME_FACTOR = 1.2; // your original value (20% expansion)

  // Optional extra margin (spills / leftover in bucket). Set to 1.0 to disable.
  const EXTRA_MARGIN_FACTOR = 1.0; // e.g. 1.05 for +5% extra

  // --- Helpers ---
  function readPositiveNumber(inputId, label) {
    const v = parseFloat(document.getElementById(inputId).value);
    if (isNaN(v) || v <= 0) {
      alert(`Please enter a valid ${label}.`);
      return null;
    }
    return v;
  }

  function formatNumber(n, decimals = 2) {
    return Number(n).toFixed(decimals);
  }

  // =========================
  // 1) Given Water -> Plaster
  // =========================
  function calculateFromWater() {
    const waterAmount = readPositiveNumber("waterAmount", "amount of water");
    if (waterAmount === null) return;

    const waterUnit = document.getElementById("waterUnit").value;
    const plasterUnit = document.getElementById("plasterUnit").value;

    // Convert water volume to ml
    const waterInML = waterAmount * volumeToML[waterUnit];

    // Convert water to grams (1 ml ~ 1 g)
    const waterInGrams = waterInML;

    // Correct ratio: plaster = water * (100/70)
    const plasterInGrams = waterInGrams * PLASTER_PER_WATER;

    // Convert plaster to selected unit
    const plasterOut = plasterInGrams / weightToGrams[plasterUnit];

    document.getElementById("resultWater").innerHTML =
      `You need <strong>${formatNumber(plasterOut)} ${plasterUnit}</strong> of plaster.`;
  }

  // =========================
  // 2) Given Plaster -> Water
  // =========================
  function calculateFromPlaster() {
    const plasterAmount = readPositiveNumber("plasterAmount", "amount of plaster");
    if (plasterAmount === null) return;

    const plasterInputUnit = document.getElementById("plasterInputUnit").value;
    const waterOutputUnit = document.getElementById("waterOutputUnit").value;

    // Convert plaster to grams
    const plasterInGrams = plasterAmount * weightToGrams[plasterInputUnit];

    // Correct ratio: water = plaster * (70/100)
    const waterInGrams = plasterInGrams * WATER_PER_PLASTER;

    // Convert water grams to ml (1 g ~ 1 ml)
    const waterInML = waterInGrams;

    // Convert ml to selected output unit
    const waterOut = waterInML / volumeToML[waterOutputUnit];

    document.getElementById("resultPlaster").innerHTML =
      `You need <strong>${formatNumber(waterOut)} ${waterOutputUnit}</strong> of water.`;
  }

  // ==========================================
  // 3) Given Mold Volume -> Water + Plaster
  // ==========================================
  function calculateFromVolume() {
    const moldVolume = readPositiveNumber("moldVolume", "mold volume");
    if (moldVolume === null) return;

    const moldUnit = document.getElementById("moldUnit").value;
    const volumeWaterUnit = document.getElementById("volumeWaterUnit").value;
    const volumePlasterUnit = document.getElementById("volumePlasterUnit").value;

    // Convert mold volume to ml
    const moldVolumeInML = moldVolume * volumeToML[moldUnit];

    // Compute water volume needed to yield slurry volume ≈ mold volume
    // then add optional margin
    const waterInML =
      (moldVolumeInML / SLURRY_VOLUME_FACTOR) * EXTRA_MARGIN_FACTOR;

    // Water grams (1 ml ~ 1 g)
    const waterInGrams = waterInML;

    // Plaster grams using correct ratio
    const plasterInGrams = waterInGrams * PLASTER_PER_WATER;

    // Convert outputs
    const waterOut = waterInML / volumeToML[volumeWaterUnit];
    const plasterOut = plasterInGrams / weightToGrams[volumePlasterUnit];

    document.getElementById("resultVolume").innerHTML =
      `You need <strong>${formatNumber(waterOut)} ${volumeWaterUnit}</strong> of water and ` +
      `<strong>${formatNumber(plasterOut)} ${volumePlasterUnit}</strong> of plaster.`;
  }
</script>

## References

[^plaster-data]: [USG No1 Pottery Plaster Data Sheet](https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-no1-pottery-plaster-data-en-IG1366.pdf) [(Archive Link)](https://web.archive.org/web/20230628185543/https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-no1-pottery-plaster-data-en-IG1366.pdf)
