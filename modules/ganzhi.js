const STEMS = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];

const BRANCHES = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];

const SIXTY_JIAZI = [
  "甲子","乙丑","丙寅","丁卯","戊辰","己巳","庚午","辛未","壬申","癸酉",
  "甲戌","乙亥","丙子","丁丑","戊寅","己卯","庚辰","辛巳","壬午","癸未",
  "甲申","乙酉","丙戌","丁亥","戊子","己丑","庚寅","辛卯","壬辰","癸巳",
  "甲午","乙未","丙申","丁酉","戊戌","己亥","庚子","辛丑","壬寅","癸卯",
  "甲辰","乙巳","丙午","丁未","戊申","己酉","庚戌","辛亥","壬子","癸丑",
  "甲寅","乙卯","丙辰","丁巳","戊午","己未","庚申","辛酉","壬戌","癸亥"
];

function getYearGanZhi(date) {
  const year = date.getFullYear();
  const index = (year - 4) % 60;
  return SIXTY_JIAZI[index];
}

function getDayGanZhi(date) {
  const baseDate = new Date("1900-01-31T00:00:00");
  const diffDays = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));
  const index = ((diffDays + 40) % 60 + 60) % 60;
  return SIXTY_JIAZI[index];
}

function getHourBranch(hour) {
  if (hour === 23 || hour === 0) return "子";
  const index = Math.floor((hour + 1) / 2) % 12;
  return BRANCHES[index];
}

function getHourGanZhi(date, dayGanZhi) {
  const hour = date.getHours();
  const hourBranch = getHourBranch(hour);
  const dayStem = dayGanZhi.charAt(0);
  const dayStemIndex = STEMS.indexOf(dayStem);

  let startStemIndex = 0;

  if (dayStemIndex === 0 || dayStemIndex === 5) startStemIndex = 0;
  if (dayStemIndex === 1 || dayStemIndex === 6) startStemIndex = 2;
  if (dayStemIndex === 2 || dayStemIndex === 7) startStemIndex = 4;
  if (dayStemIndex === 3 || dayStemIndex === 8) startStemIndex = 6;
  if (dayStemIndex === 4 || dayStemIndex === 9) startStemIndex = 8;

  const branchIndex = BRANCHES.indexOf(hourBranch);
  const stemIndex = (startStemIndex + branchIndex) % 10;

  return STEMS[stemIndex] + hourBranch;
}