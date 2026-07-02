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
  const calendar = getCalendarInfo(dateTime);

  document.getElementById("info").innerHTML = `
    <strong>排盤資料</strong><br>
    公曆：${dateValue} ${timeValue}<br>
    年柱：${calendar.yearGanZhi}<br>
    月柱：${calendar.monthGanZhi}<br>
    日柱：${calendar.dayGanZhi}<br>
    時柱：${calendar.hourGanZhi}<br>
    節氣：${calendar.solarTerm.name}（${calendar.solarTerm.date}）<br>
    三元：${calendar.yuan}<br>
    局數：${calendar.juDisplay}
    旬首：${calendar.xunShou}<br>
    旬首六儀：${calendar.xunShouStem}<br>
  `;

  const plate = generateQimenPlate(calendar);
drawPlate(plate);
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

function drawPlate(plate) {
  plate.palaces.forEach(p => {
    const palaceDiv = document.getElementById(`palace-${p.number}`);

    palaceDiv.innerHTML = `
      <div class="palace-title">${p.name}</div>
      <div class="palace-direction">${p.branches || p.direction}</div>

      ${p.special ? `<div class="item">${p.special}</div>` : ""}

      <div class="item stem">天盤：${p.heavenStem}</div>

      ${
        p.number === 5
          ? `<div class="item star">九星：${p.star}</div>`
          : `
            <div class="item stem">地盤：${p.earthStem}</div>
            <div class="item star">九星：${p.star}</div>
            <div class="item door">八門：${p.door}</div>
            <div class="item god">八神：${p.god}</div>
          `
      }

      <div class="fly-number">${p.flyNumber}</div>
    `;
  });
}