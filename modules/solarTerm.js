function getSolarTerm(date) {
  // Lesson 6 先做测试版
  // 下一课再加入精确节气表
  return {
    name: "夏至",
    date: "06-21 22:42"
  };
}

function getDunBySolarTerm(termName) {
  const yangTerms = [
    "冬至","小寒","大寒","立春","雨水","惊蛰",
    "春分","清明","谷雨","立夏","小满","芒种"
  ];

  return yangTerms.includes(termName) ? "阳" : "阴";
}