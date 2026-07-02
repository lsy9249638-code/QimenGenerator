function findPalaceByStem(plate, stem) {
  for (const palaceNum in plate) {
    if (plate[palaceNum] === stem) {
      return Number(palaceNum);
    }
  }

  return null;
}

function getStemFromGanZhi(ganZhi) {
  return ganZhi ? ganZhi.charAt(0) : "";
}

function getHeavenPlate(earthPlate, calendar) {
  const result = {};

  const hourStem = getStemFromGanZhi(calendar.hourGanZhi);
  const xunShouStem = calendar.xunShouStem;

  const xunShouPalace = findPalaceByStem(earthPlate, xunShouStem);
  const hourStemPalace = findPalaceByStem(earthPlate, hourStem);

  if (!xunShouPalace || !hourStemPalace) {
    return result;
  }

  const palaceOrder = [1, 8, 3, 4, 9, 2, 7, 6];

  const sourceIndex = palaceOrder.indexOf(xunShouPalace);
  const targetIndex = palaceOrder.indexOf(hourStemPalace);

  if (sourceIndex === -1 || targetIndex === -1) {
    return result;
  }

  const offset = targetIndex - sourceIndex;

  palaceOrder.forEach((palaceNum, index) => {
    const targetPalace = palaceOrder[(index + offset + palaceOrder.length) % palaceOrder.length];
    result[targetPalace] = earthPlate[palaceNum];
  });

  result[5] = earthPlate[5];

  return result;
}