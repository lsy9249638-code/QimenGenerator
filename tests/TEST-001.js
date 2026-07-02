const TEST_001 = {
  id: "TEST-001",
  source: "羅一鳴老師命盤",
  note: "第一張標準測試盤",

  input: {
    solarDate: "",
    solarTime: "",
    method: "置閏法",
    type: "時家奇門",
    style: "轉盤奇門"
  },

  expected: {
    yearGanZhi: "",
    monthGanZhi: "",
    dayGanZhi: "",
    hourGanZhi: "",

    solarTerm: "",
    juDisplay: "",

    yuan: "",
    xunShou: "",
    xunShouStem: "",

    zhiFuStar: "",
    zhiFuPalace: "",

    zhiShiDoor: "",
    zhiShiPalace: "",

    patterns: [],

    palaces: {
      1: {
        palace: "坎一宮",
        branches: "子",
        heavenStem: "",
        earthStem: "",
        star: "",
        door: "",
        god: "",
        status: []
      },

      2: {
        palace: "坤二宮",
        branches: "未申",
        heavenStem: "",
        earthStem: "",
        star: "",
        door: "",
        god: "",
        status: []
      },

      3: {
        palace: "震三宮",
        branches: "卯",
        heavenStem: "",
        earthStem: "",
        star: "",
        door: "",
        god: "",
        status: []
      },

      4: {
        palace: "巽四宮",
        branches: "辰巳",
        heavenStem: "",
        earthStem: "",
        star: "",
        door: "",
        god: "",
        status: []
      },

      5: {
        palace: "中五宮",
        branches: "",
        special: "寄坤二宮",
        heavenStem: "",
        star: "",
        status: []
      },

      6: {
        palace: "乾六宮",
        branches: "戌亥",
        heavenStem: "",
        earthStem: "",
        star: "",
        door: "",
        god: "",
        status: []
      },

      7: {
        palace: "兌七宮",
        branches: "酉",
        heavenStem: "",
        earthStem: "",
        star: "",
        door: "",
        god: "",
        status: []
      },

      8: {
        palace: "艮八宮",
        branches: "丑寅",
        heavenStem: "",
        earthStem: "",
        star: "",
        door: "",
        god: "",
        status: []
      },

      9: {
        palace: "離九宮",
        branches: "午",
        heavenStem: "",
        earthStem: "",
        star: "",
        door: "",
        god: "",
        status: []
      }
    }
  }
};