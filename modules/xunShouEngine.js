function getXunShou(hourGanZhi) {
  const index = SIXTY_JIAZI.indexOf(hourGanZhi);

  if (index >= 0 && index <= 9) return "甲子戊";
  if (index >= 10 && index <= 19) return "甲戌己";
  if (index >= 20 && index <= 29) return "甲申庚";
  if (index >= 30 && index <= 39) return "甲午辛";
  if (index >= 40 && index <= 49) return "甲辰壬";
  if (index >= 50 && index <= 59) return "甲寅癸";

  return "未知";
}

function getXunShouStem(xunShou) {
  const map = {
    "甲子戊": "戊",
    "甲戌己": "己",
    "甲申庚": "庚",
    "甲午辛": "辛",
    "甲辰壬": "壬",
    "甲寅癸": "癸"
  };

  return map[xunShou] || "";
}