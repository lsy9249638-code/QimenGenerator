const PATTERN_TYPES = {
  GOOD: "吉格",
  BAD: "凶格",
  NEUTRAL: "一般格局"
};

const PATTERN_DISPLAY = {
  青龍返首: { shortName: "龍返", type: PATTERN_TYPES.GOOD, color: "#dc2626" },
  飛鳥跌穴: { shortName: "鳥穴", type: PATTERN_TYPES.GOOD, color: "#dc2626" },
  玉女守門: { shortName: "玉女", type: PATTERN_TYPES.GOOD, color: "#dc2626" },
  丁奇旺相: { shortName: "丁奇旺相", type: PATTERN_TYPES.GOOD, color: "#dc2626" },

  白虎猖狂: { shortName: "白虎猖狂", type: PATTERN_TYPES.BAD, color: "#111111" },

  天干伏吟: { shortName: "天干伏吟", type: PATTERN_TYPES.NEUTRAL, color: "#dc2626" },
  九星伏吟: { shortName: "九星伏吟", type: PATTERN_TYPES.NEUTRAL, color: "#dc2626" },
  八門伏吟: { shortName: "八門伏吟", type: PATTERN_TYPES.NEUTRAL, color: "#dc2626" },
  天干反吟: { shortName: "天干反吟", type: PATTERN_TYPES.NEUTRAL, color: "#dc2626" },
  八門反吟: { shortName: "八門反吟", type: PATTERN_TYPES.NEUTRAL, color: "#dc2626" },
  九星反吟: { shortName: "九星反吟", type: PATTERN_TYPES.NEUTRAL, color: "#dc2626" },
  五不遇時: { shortName: "五不遇時", type: PATTERN_TYPES.NEUTRAL, color: "#dc2626" },
  時干入墓: { shortName: "時干入墓", type: PATTERN_TYPES.NEUTRAL, color: "#dc2626" },
  天顯時格: { shortName: "天顯時格", type: PATTERN_TYPES.NEUTRAL, color: "#dc2626" }
};