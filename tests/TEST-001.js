const TEST_001 = {
  id: "TEST-001",
  source: "羅一鳴老師命盤",
  note: "2026-06-30 20:15，陰六局標準測試盤",

  input: {
    solarDate: "2026-06-30",
    solarTime: "20:15",
    method: "置閏法",
    type: "時家奇門",
    style: "轉盤奇門"
  },

  expected: {
    yearGanZhi: "丙午",
    monthGanZhi: "甲午",
    dayGanZhi: "乙亥",
    hourGanZhi: "丙戌",

    solarTerm: "夏至",
    juDisplay: "陰六局",

    xunShou: "甲申庚",
    xunShouStem: "庚",

    zhiFuStar: "天輔",
    zhiFuPalace: "艮八宮",

    zhiShiDoor: "杜門",
    zhiShiPalace: "坤二宮",

    patterns: ["丙干入墓"],

    palaces: {
      1: {
        palace: "坎一宮",
        branches: "子",
        heavenStem: "辛",
        earthStem: "癸",
        star: "天沖",
        door: "驚門",
        god: "騰蛇",
        flyNumber: 6,
        status: []
      },

      2: {
        palace: "坤二宮",
        branches: "未申",
        heavenStem: "戊",
        earthStem: "壬",
        star: "天心",
        door: "杜門",
        god: "白虎",
        flyNumber: 5,
        status: []
      },

      3: {
        palace: "震三宮",
        branches: "卯",
        heavenStem: "丁",
        earthStem: "辛",
        star: "天英",
        door: "休門",
        god: "九天",
        flyNumber: 4,
        status: []
      },

      4: {
        palace: "巽四宮",
        branches: "辰巳",
        heavenStem: "壬",
        earthStem: "庚",
        star: "天芮",
        door: "生門",
        god: "九地",
        flyNumber: 3,
        status: []
      },

      5: {
        palace: "中五宮",
        branches: "",
        special: "寄坤二宮",
        heavenStem: "己",
        star: "天禽",
        flyNumber: 2,
        status: []
      },

      6: {
        palace: "乾六宮",
        branches: "戌亥",
        heavenStem: "丙",
        earthStem: "戊",
        star: "天任",
        door: "死門",
        god: "太陰",
        flyNumber: 1,
        status: []
      },

      7: {
        palace: "兌七宮",
        branches: "酉",
        heavenStem: "癸",
        earthStem: "乙",
        star: "天蓬",
        door: "景門",
        god: "六合",
        flyNumber: 9,
        status: []
      },

      8: {
        palace: "艮八宮",
        branches: "丑寅",
        heavenStem: "庚",
        earthStem: "丙",
        star: "天輔",
        door: "開門",
        god: "值符",
        flyNumber: 8,
        status: []
      },

      9: {
        palace: "離九宮",
        branches: "午",
        heavenStem: "乙",
        earthStem: "丁",
        star: "天柱",
        door: "傷門",
        god: "玄武",
        flyNumber: 7,
        status: []
      }
    }
  }
};