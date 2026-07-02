function initBoard() {
  const board = document.getElementById("qimenBoard");
  board.innerHTML = "";

  PALACE_DATA.forEach(palace => {
    board.innerHTML += `
      <div class="palace" id="palace-${palace.num}">
        <div class="palace-title">${palace.name}</div>
        <div class="palace-direction">${palace.direction}</div>

        <div class="item stem">天盤：--</div>
        <div class="item stem">地盤：--</div>
        <div class="item star">九星：--</div>
        <div class="item door">八門：--</div>
        <div class="item god">八神：--</div>

        <div class="fly-number">${palace.num}</div>
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
  const plate = generateQimenPlate(calendar);

  document.getElementById("info").innerHTML = `
    <strong>排盤資料</strong><br>
    公曆：${dateValue} ${timeValue}<br>
    年柱：${calendar.yearGanZhi}<br>
    月柱：${calendar.monthGanZhi}<br>
    日柱：${calendar.dayGanZhi}<br>
    時柱：${calendar.hourGanZhi}<br>
    節氣：${calendar.solarTerm.name}（${calendar.solarTerm.date}）<br>
    三元：${calendar.yuan}<br>
    局數：${calendar.juDisplay}<br>
    旬首：${calendar.xunShou}<br>
    旬首六儀：${calendar.xunShouStem}<br>
  `;

  drawPlate(plate);
}

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

initBoard();