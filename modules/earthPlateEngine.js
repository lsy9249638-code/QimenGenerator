const SAN_QI_LIU_YI = ["戊", "己", "庚", "辛", "壬", "癸", "丁", "丙", "乙"];

function getEarthPlate(ju, dun) {
  const result = {};

  const yangOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const yinOrder = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  const order = dun === "阳" ? yangOrder : yinOrder;
  const startIndex = order.indexOf(ju);

  if (startIndex === -1) return result;

  for (let i = 0; i < 9; i++) {
    const palaceNum = order[(startIndex + i) % 9];
    result[palaceNum] = SAN_QI_LIU_YI[i];
  }

  return result;
}