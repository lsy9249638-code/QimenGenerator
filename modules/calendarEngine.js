function getCalendarInfo(date) {
  const yearGanZhi = getYearGanZhi(date);
  const dayGanZhi = getDayGanZhi(date);
  const hourGanZhi = getHourGanZhi(date, dayGanZhi);
  const solarTerm = getSolarTerm(date);

  return {
    solarDate: date,
    yearGanZhi,
    monthGanZhi: "下一课加入",
    dayGanZhi,
    hourGanZhi,
    solarTerm,
    dun: getDunBySolarTerm(solarTerm.name)
  };
}