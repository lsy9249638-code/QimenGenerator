function generateQimenPlate(calendar) {
  const earthPlate = getEarthPlate(calendar.ju, calendar.dun);
  const heavenPlate = getHeavenPlate(earthPlate, calendar);
  const starInfo = getStarPlate(earthPlate, calendar);
  const starPlate = starInfo.stars || {};

  const palaces = PALACE_DATA.map(palace => {
    return {
      number: palace.num,
      name: palace.name,
      direction: palace.direction,
      branches: palace.branches,
      element: palace.element,
      special: palace.special || "",

      heavenStem: heavenPlate[palace.num] || "--",
      earthStem: earthPlate[palace.num] || "--",

      star: starPlate[palace.num] || "--",
      door: "--",
      god: "--",

      heavenGrowth: "",
      starGrowth: "",

      status: {
        kongWang: false,
        ruMu: false,
        jiXing: false,
        menPo: false,
        gongPo: false
      },

      patterns: [],

      flyNumber: palace.num
    };
  });

  return {
    info: {
      yearGanZhi: calendar.yearGanZhi,
      monthGanZhi: calendar.monthGanZhi,
      dayGanZhi: calendar.dayGanZhi,
      hourGanZhi: calendar.hourGanZhi,
      solarTerm: calendar.solarTerm,
      yuan: calendar.yuan,
      juDisplay: calendar.juDisplay,
      xunShou: calendar.xunShou,
      xunShouStem: calendar.xunShouStem,
      zhiFuStar: starInfo.zhiFuStar || "--",
      zhiFuPalace: starInfo.zhiFuPalace || "--"
    },
    palaces
  };
}