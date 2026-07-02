const palaces = [
  { num: 4, name: "巽四宮", direction: "東南" },
  { num: 9, name: "離九宮", direction: "南" },
  { num: 2, name: "坤二宮", direction: "西南" },

  { num: 3, name: "震三宮", direction: "東" },
  { num: 5, name: "中五宮", direction: "中" },
  { num: 7, name: "兌七宮", direction: "西" },

  { num: 8, name: "艮八宮", direction: "東北" },
  { num: 1, name: "坎一宮", direction: "北" },
  { num: 6, name: "乾六宮", direction: "西北" }
];

const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

const sixtyJiaZi = [
  "甲子","乙丑","丙寅","丁卯","戊辰","己巳","庚午","辛未","壬申","癸酉",
  "甲戌","乙亥","丙子","丁丑","戊寅","己卯","庚辰","辛巳","壬午","癸未",
  "甲申","乙酉","丙戌","丁亥","戊子","己丑","庚寅","辛卯","壬辰","癸巳",
  "甲午","乙未","丙申","丁酉","戊戌","己亥","庚子","辛丑","壬寅","癸卯",
  "甲辰","乙巳","丙午","丁未","戊申","己酉","庚戌","辛亥","壬子","癸丑",
  "甲寅","乙卯","丙辰","丁巳","戊午","己未","庚申","辛酉","壬戌","癸亥"
];

function initBoard() {
  const board = document.getElementById("qimenBoard");
  board.innerHTML = "";

  palaces.forEach(palace => {
    board.innerHTML += `
      <div class="palace" id="palace-${palace.num}">
        <div class="palace-title">${palace.name}</div>
        <div class="palace-direction">${palace.direction}</div>

        <div class="item stem">天盤：--</div>
        <div class="item stem">地盤：--</div>
        <div class="item star">九星：--</div>
        <div class="item door">八門：--</div>
        <div class="item god">八神：--</div>
      </div>
    `;
  });
}

function generate() {
  const dateValue = document.getElementById("date").value;
  const timeValue = document.getElementById("time").value;

  if (!dateValue) {
    alert("請選擇日期");
    return;
  }

  if (!timeValue) {
    alert("請選擇時間");
    return;
  }

  const dateTime = new Date(`${dateValue}T${timeValue}:00`);

  const yearGanZhi = getYearGanZhi(dateTime);
  const dayGanZhi = getDayGanZhi(dateTime);
  const hourGanZhi = getHourGanZhi(dateTime, dayGanZhi);

  document.getElementById("info").innerHTML = `
    <strong>排盤資料</strong><br>
    公曆：${dateValue} ${timeValue}<br>
    年柱：${yearGanZhi}<br>
    月柱：下一課加入節氣後計算<br>
    日柱：${dayGanZhi}<br>
    時柱：${hourGanZhi}<br>
    下一課：二十四節氣與月柱
  `;

  fillDemoPlate();
}

function getYearGanZhi(date) {
  const year = date.getFullYear();

  // 目前先以立春前後不切換，下一課加入節氣後修正
  const stemIndex = (year - 4) % 10;
  const branchIndex = (year - 4) % 12;

  return stems[stemIndex] + branches[branchIndex];
}

function getDayGanZhi(date) {
  // 以 1900-01-31 為甲辰日作為基準
  const baseDate = new Date("1900-01-31T00:00:00");
  const diffDays = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24));

  const index = ((diffDays + 40) % 60 + 60) % 60;

  return sixtyJiaZi[index];
}

function getHourBranch(hour) {
  if (hour === 23 || hour === 0) return "子";

  const index = Math.floor((hour + 1) / 2) % 12;
  return branches[index];
}

function getHourGanZhi(date, dayGanZhi) {
  const hour = date.getHours();
  const hourBranch = getHourBranch(hour);

  const dayStem = dayGanZhi.charAt(0);
  const dayStemIndex = stems.indexOf(dayStem);

  let startStemIndex;

  if (dayStemIndex === 0 || dayStemIndex === 5) startStemIndex = 0; // 甲己日起甲子
  if (dayStemIndex === 1 || dayStemIndex === 6) startStemIndex = 2; // 乙庚日起丙子
  if (dayStemIndex === 2 || dayStemIndex === 7) startStemIndex = 4; // 丙辛日起戊子
  if (dayStemIndex === 3 || dayStemIndex === 8) startStemIndex = 6; // 丁壬日起庚子
  if (dayStemIndex === 4 || dayStemIndex === 9) startStemIndex = 8; // 戊癸日起壬子

  const branchIndex = branches.indexOf(hourBranch);
  const hourStemIndex = (startStemIndex + branchIndex) % 10;

  return stems[hourStemIndex] + hourBranch;
}

function fillDemoPlate() {
  const demoData = {
    1: { heaven: "戊", earth: "戊", star: "天蓬", door: "休門", god: "值符" },
    2: { heaven: "己", earth: "己", star: "天芮", door: "死門", god: "騰蛇" },
    3: { heaven: "庚", earth: "庚", star: "天沖", door: "傷門", god: "太陰" },
    4: { heaven: "辛", earth: "辛", star: "天輔", door: "杜門", god: "六合" },
    5: { heaven: "壬", earth: "壬", star: "天禽", door: "--", god: "--" },
    6: { heaven: "癸", earth: "癸", star: "天心", door: "開門", god: "白虎" },
    7: { heaven: "丁", earth: "丁", star: "天柱", door: "驚門", god: "玄武" },
    8: { heaven: "丙", earth: "丙", star: "天任", door: "生門", god: "九地" },
    9: { heaven: "乙", earth: "乙", star: "天英", door: "景門", god: "九天" }
  };

  Object.keys(demoData).forEach(num => {
    const p = demoData[num];
    document.getElementById(`palace-${num}`).innerHTML = `
      <div class="palace-title">${getPalaceName(num)}</div>
      <div class="palace-direction">${getPalaceDirection(num)}</div>

      <div class="item stem">天盤：${p.heaven}</div>
      <div class="item stem">地盤：${p.earth}</div>
      <div class="item star">九星：${p.star}</div>
      <div class="item door">八門：${p.door}</div>
      <div class="item god">八神：${p.god}</div>
    `;
  });
}

function getPalaceName(num) {
  return palaces.find(p => p.num == num).name;
}

function getPalaceDirection(num) {
  return palaces.find(p => p.num == num).direction;
}

initBoard();