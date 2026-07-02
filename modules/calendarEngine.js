function getCalendarInfo(date) {
  const yearGanZhi = getYearGanZhi(date);
  const dayGanZhi = getDayGanZhi(date);
  const hourGanZhi = getHourGanZhi(date, dayGanZhi);
  const solarTerm = getSolarTerm(date);
  const juInfo = getJuInfo(solarTerm.name, dayGanZhi);

  const xunShou = getXunShou(hourGanZhi);
  const xunShouStem = getXunShouStem(xunShou);

  return {
    solarDate: date,
    yearGanZhi,
    monthGanZhi: "下一課加入",
    dayGanZhi,
    hourGanZhi,
    solarTerm,

    dun: juInfo.dun,
    yuan: juInfo.yuan,
    ju: juInfo.ju,
    juDisplay: juInfo.display,

    xunShou,
    xunShouStem
  };
}