const BASE_NINE_STARS = {
  1: "天蓬",
  2: "天芮",
  3: "天沖",
  4: "天輔",
  5: "天禽",
  6: "天心",
  7: "天柱",
  8: "天任",
  9: "天英"
};

function getBaseStarByPalace(palaceNum) {
  return BASE_NINE_STARS[palaceNum] || "--";
}

function getStarPlate(earthPlate, calendar) {
  const result = {};

  const xunShouStem = calendar.xunShouStem;
  const hourStem = calendar.hourGanZhi.charAt(0);

  const zhiFuOriginalPalace = findPalaceByStem(earthPlate, xunShouStem);
  const hourStemPalace = findPalaceByStem(earthPlate, hourStem);

  if (!zhiFuOriginalPalace || !hourStemPalace) {
    return result;
  }

  const zhiFuStar = getBaseStarByPalace(zhiFuOriginalPalace);

  const palaceOrder = [1, 8, 3, 4, 9, 2, 7, 6];

  const sourceIndex = palaceOrder.indexOf(zhiFuOriginalPalace);
  const targetIndex = palaceOrder.indexOf(hourStemPalace);

  if (sourceIndex === -1 || targetIndex === -1) {
    return result;
  }

  const offset = targetIndex - sourceIndex;

  palaceOrder.forEach((palaceNum, index) => {
    const targetPalace = palaceOrder[(index + offset + palaceOrder.length) % palaceOrder.length];
    result[targetPalace] = getBaseStarByPalace(palaceNum);
  });

  result[5] = "天禽";

  return {
    stars: result,
    zhiFuStar,
    zhiFuOriginalPalace,
    zhiFuPalace: hourStemPalace
  };
}