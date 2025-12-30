function calculateSize() {
  const value = parseFloat(document.getElementById("sizeInput").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultEl = document.getElementById("result");

  if (isNaN(value) || value < 0) {
    resultEl.textContent = "Please enter a valid number";
    return;
  }

  const units = {
    KB: 1,
    MB: 1024,
    GB: 1024 * 1024
  };

  const valueInKB = value * units[from];
  const converted = valueInKB / units[to];

  resultEl.textContent = `${value} ${from} = ${converted.toFixed(4)} ${to}`;
}
