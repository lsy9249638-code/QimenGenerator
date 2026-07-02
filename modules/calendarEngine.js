function getCalendarInfo(date) {
  const yearGanZhi = getYearGanZhi(date);
  const dayGanZhi = getDayGanZhi(date);
  const hourGanZhi = getHourGanZhi(date, dayGanZhi);
  const xunShouStem = getXunShouStem(xunShou);
  const solarTerm = getSolarTerm(date);
  const juInfo = getJuInfo(solarTerm.name, dayGanZhi);

  return {
    solarDate: date,
    yearGanZhi,
    monthGanZhi: "下一課加入",
    dayGanZhi,
    hourGanZhi,
    xunShou,
    xunShouStem,
    solarTerm,
    dun: juInfo.dun,
    yuan: juInfo.yuan,
    ju: juInfo.ju,
    juDisplay: juInfo.display
  };
}