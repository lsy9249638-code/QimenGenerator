const SOLAR_TERMS_2026 = [
  { name: "小寒", datetime: "2026-01-05T16:23:00" },
  { name: "大寒", datetime: "2026-01-20T09:44:00" },
  { name: "立春", datetime: "2026-02-04T04:02:00" },
  { name: "雨水", datetime: "2026-02-18T23:52:00" },
  { name: "惊蛰", datetime: "2026-03-05T22:57:00" },
  { name: "春分", datetime: "2026-03-20T23:46:00" },
  { name: "清明", datetime: "2026-04-05T03:40:00" },
  { name: "谷雨", datetime: "2026-04-20T10:39:00" },
  { name: "立夏", datetime: "2026-05-05T20:49:00" },
  { name: "小满", datetime: "2026-05-21T09:37:00" },
  { name: "芒种", datetime: "2026-06-05T00:49:00" },
  { name: "夏至", datetime: "2026-06-21T17:24:00" },
  { name: "小暑", datetime: "2026-07-07T10:56:00" },
  { name: "大暑", datetime: "2026-07-23T04:13:00" },
  { name: "立秋", datetime: "2026-08-07T20:42:00" },
  { name: "处暑", datetime: "2026-08-23T11:18:00" },
  { name: "白露", datetime: "2026-09-07T23:41:00" },
  { name: "秋分", datetime: "2026-09-23T09:05:00" },
  { name: "寒露", datetime: "2026-10-08T15:29:00" },
  { name: "霜降", datetime: "2026-10-23T18:37:00" },
  { name: "立冬", datetime: "2026-11-07T18:51:00" },
  { name: "小雪", datetime: "2026-11-22T16:23:00" },
  { name: "大雪", datetime: "2026-12-07T11:52:00" },
  { name: "冬至", datetime: "2026-12-22T05:50:00" }
];

function getSolarTerm(date) {
  let current = SOLAR_TERMS_2026[0];

  for (let i = 0; i < SOLAR_TERMS_2026.length; i++) {
    const termDate = new Date(SOLAR_TERMS_2026[i].datetime);

    if (date >= termDate) {
      current = SOLAR_TERMS_2026[i];
    } else {
      break;
    }
  }

  const d = new Date(current.datetime);

  return {
    name: current.name,
    date: `${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`
  };
}

function getDunBySolarTerm(termName) {
  const yangTerms = [
    "冬至", "小寒", "大寒", "立春", "雨水", "惊蛰",
    "春分", "清明", "谷雨", "立夏", "小满", "芒种"
  ];

  return yangTerms.includes(termName) ? "阳" : "阴";
}