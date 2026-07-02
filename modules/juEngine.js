const JU_TABLE = {
  "冬至": [1, 7, 4],
  "小寒": [2, 8, 5],
  "大寒": [3, 9, 6],
  "立春": [8, 5, 2],
  "雨水": [9, 6, 3],
  "惊蛰": [1, 7, 4],
  "春分": [3, 9, 6],
  "清明": [4, 1, 7],
  "谷雨": [5, 2, 8],
  "立夏": [4, 1, 7],
  "小满": [5, 2, 8],
  "芒种": [6, 3, 9],

  "夏至": [9, 3, 6],
  "小暑": [8, 2, 5],
  "大暑": [7, 1, 4],
  "立秋": [2, 5, 8],
  "处暑": [1, 4, 7],
  "白露": [9, 3, 6],
  "秋分": [7, 1, 4],
  "寒露": [6, 9, 3],
  "霜降": [5, 8, 2],
  "立冬": [6, 9, 3],
  "小雪": [5, 8, 2],
  "大雪": [4, 7, 1]
};

function getYuanByDayGanZhi(dayGanZhi) {
  const index = SIXTY_JIAZI.indexOf(dayGanZhi);

  if (index === -1) return "未知";

  const yuanIndex = index % 15;

  if (yuanIndex <= 4) return "上元";
  if (yuanIndex <= 9) return "中元";
  return "下元";
}

function getJuNumber(termName, yuan) {
  const juSet = JU_TABLE[termName];

  if (!juSet) return null;

  if (yuan === "上元") return juSet[0];
  if (yuan === "中元") return juSet[1];
  if (yuan === "下元") return juSet[2];

  return null;
}

function getJuInfo(termName, dayGanZhi) {
  const dun = getDunBySolarTerm(termName);
  const yuan = getYuanByDayGanZhi(dayGanZhi);
  const ju = getJuNumber(termName, yuan);

  return {
    dun,
    yuan,
    ju,
    display: `${dun}${ju}局`
  };
}