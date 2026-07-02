function generateQimenPlate(calendar) {
  const palaces = PALACE_DATA.map(palace => {
    return {
      number: palace.num,
      name: palace.name,
      direction: palace.direction,
      branches: palace.branches,
      element: palace.element,
      special: palace.special || "",

      heavenStem: "--",
      earthStem: "--",
      star: "--",
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
      xunShouStem: calendar.xunShouStem
    },
    palaces
  };
}