function runTest001() {
  if (typeof TEST_001 === "undefined") {
    console.warn("TEST_001 尚未建立或尚未載入");
    return;
  }

  const result = QimenCore.generate(
    TEST_001.input.solarDate,
    TEST_001.input.solarTime
  );

  console.log("===== TEST-001 RESULT =====");
  console.log(result);

  console.log("===== EXPECTED =====");
  console.log(TEST_001.expected);

  console.log("測試系統已啟動。下一步會逐項比較年柱、月柱、日柱、時柱、局數、旬首與九宮。");
}