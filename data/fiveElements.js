const FIVE_ELEMENTS = {
  木: {
    color: "#16a34a",
    label: "木"
  },
  火: {
    color: "#dc2626",
    label: "火"
  },
  土: {
    color: "#ca8a04",
    label: "土"
  },
  金: {
    color: "#d4af37",
    label: "金"
  },
  水: {
    color: "#2563eb",
    label: "水"
  }
};

const STEM_ELEMENTS = {
  甲: "木",
  乙: "木",
  丙: "火",
  丁: "火",
  戊: "土",
  己: "土",
  庚: "金",
  辛: "金",
  壬: "水",
  癸: "水"
};

const DOOR_ELEMENTS = {
  休門: "水",
  生門: "土",
  傷門: "木",
  杜門: "木",
  景門: "火",
  死門: "土",
  驚門: "金",
  開門: "金"
};

const STAR_ELEMENTS = {
  天蓬: "水",
  天芮: "土",
  天沖: "木",
  天輔: "木",
  天禽: "土",
  天心: "金",
  天柱: "金",
  天任: "土",
  天英: "火"
};

function getElementColor(element) {
  return FIVE_ELEMENTS[element]?.color || "#ffffff";
}