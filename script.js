// LENGTH UNITS
const lengthUnits = {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    mile: 1609.344,
    yard: 0.9144,
    foot: 0.3048,
    inch: 0.0254
};

// MASS UNITS
const massUnits = {
    kilogram: 1,
    gram: 0.001,
    milligram: 0.000001,
    tonne: 1000,
    pound: 0.45359237,
    ounce: 0.028349523125
};


// Change the unit choices
function changeUnits() {

    const type = document.getElementById("conversionType").value;

    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    let units;

    if (type === "length") {
        units = lengthUnits;
    } else {
        units = massUnits;
    }

    for (let unit in units) {

        let option1 = document.createElement("option");
        option1.value = unit;
        option1.textContent = formatUnit(unit);

        let option2 = document.createElement("option");
        option2.value = unit;
        option2.textContent = formatUnit(unit);

        fromUnit.appendChild(option1);
        toUnit.appendChild(option2);
    }
}


// Make unit names look nicer
function formatUnit(unit) {

    return unit.charAt(0).toUpperCase() +
           unit.slice(1);
}


// Perform conversion
function convert() {

    const value = parseFloat(
        document.getElementById("value").value
    );

    const type =
        document.getElementById("conversionType").value;

    const from =
        document.getElementById("fromUnit").value;

    const to =
        document.getElementById("toUnit").value;

    if (isNaN(value)) {

        document.getElementById("result").textContent =
            "Enter a value";

        return;
    }

    let units;

    if (type === "length") {
        units = lengthUnits;
    } else {
        units = massUnits;
    }

    // Convert to base unit
    const baseValue = value * units[from];

    // Convert to target unit
    const result = baseValue / units[to];

    document.getElementById("result").textContent =
        result.toLocaleString(undefined, {
            maximumFractionDigits: 10
        });
}


// Load Length units when the app starts
changeUnits();