---
title: Plaster Ratio Calculator
date: 2024-11-29T07:18:02
lastmod: 2024-11-29T08:09:17
toc: true
---

## Plaster to Water Mixing Calculator (70:100 Ratio)

The calculator uses a mixing ratio of 70 parts plaster to 100 parts water by weight based on the normal consitancy of USG No.1 Pottery Plaster. [^plaster-data]

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
    // Conversion factors to base units (ml for volume, grams for weight)
    const volumeToML = {
        "ml": 1,
        "l": 1000,
        "fl_oz": 29.5735,
        "cup": 236.588,
        "pint": 473.176,
        "quart": 946.353,
        "gallon": 3785.41
    };

    const weightToGrams = {
        "g": 1,
        "kg": 1000,
        "oz": 28.3495,
        "lb": 453.592
    };

    function calculateFromWater() {
        var waterAmount = parseFloat(document.getElementById('waterAmount').value);
        var waterUnit = document.getElementById('waterUnit').value;
        var plasterUnit = document.getElementById('plasterUnit').value;

        if (isNaN(waterAmount) || waterAmount <= 0) {
            alert('Please enter a valid amount of water.');
            return;
        }

        // Convert water amount to ml
        var waterInML = waterAmount * volumeToML[waterUnit];

        // Calculate plaster amount in grams
        var plasterInGrams = 0.7 * waterInML;

        // Convert plaster amount to selected unit
        var plasterAmount = plasterInGrams / weightToGrams[plasterUnit];

        plasterAmount = plasterAmount.toFixed(2);
        document.getElementById('resultWater').innerHTML = 'You need <strong>' + plasterAmount + ' ' + plasterUnit + '</strong> of plaster.';
    }

    function calculateFromPlaster() {
        var plasterAmount = parseFloat(document.getElementById('plasterAmount').value);
        var plasterInputUnit = document.getElementById('plasterInputUnit').value;
        var waterOutputUnit = document.getElementById('waterOutputUnit').value;

        if (isNaN(plasterAmount) || plasterAmount <= 0) {
            alert('Please enter a valid amount of plaster.');
            return;
        }

        // Convert plaster amount to grams
        var plasterInGrams = plasterAmount * weightToGrams[plasterInputUnit];

        // Calculate water amount in ml
        var waterInML = plasterInGrams / 0.7;

        // Convert water amount to selected unit
        var waterAmount = waterInML / volumeToML[waterOutputUnit];

        waterAmount = waterAmount.toFixed(2);
        document.getElementById('resultPlaster').innerHTML = 'You need <strong>' + waterAmount + ' ' + waterOutputUnit + '</strong> of water.';
    }

    function calculateFromVolume() {
        var moldVolume = parseFloat(document.getElementById('moldVolume').value);
        var moldUnit = document.getElementById('moldUnit').value;
        var volumeWaterUnit = document.getElementById('volumeWaterUnit').value;
        var volumePlasterUnit = document.getElementById('volumePlasterUnit').value;

        if (isNaN(moldVolume) || moldVolume <= 0) {
            alert('Please enter a valid mold volume.');
            return;
        }

        // Convert mold volume to ml
        var moldVolumeInML = moldVolume * volumeToML[moldUnit];

        // Calculate total mix volume (account for 20% increase)
        var totalMixVolume = moldVolumeInML / 1.2;

        // Water volume in ml
        var waterInML = totalMixVolume;

        // Plaster weight in grams
        var plasterInGrams = 0.7 * waterInML;

        // Convert water volume to selected unit
        var waterAmount = waterInML / volumeToML[volumeWaterUnit];
        // Convert plaster weight to selected unit
        var plasterAmount = plasterInGrams / weightToGrams[volumePlasterUnit];

        waterAmount = waterAmount.toFixed(2);
        plasterAmount = plasterAmount.toFixed(2);

        document.getElementById('resultVolume').innerHTML = 'You need <strong>' + waterAmount + ' ' + volumeWaterUnit + '</strong> of water and <strong>' + plasterAmount + ' ' + volumePlasterUnit + '</strong> of plaster.';
    }
</script>

## References

[^plaster-data]: [USG No1 Pottery Plaster Data Sheet](https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-no1-pottery-plaster-data-en-IG1366.pdf) [(Archive Link)](https://web.archive.org/web/20230628185543/https://www.usg.com/content/dam/USG_Marketing_Communications/united_states/product_promotional_materials/finished_assets/usg-no1-pottery-plaster-data-en-IG1366.pdf)
