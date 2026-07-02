const QimenCore = {
  generate(dateValue, timeValue) {
    const dateTime = new Date(`${dateValue}T${timeValue}:00`);

    const calendar = getCalendarInfo(dateTime);
    const plate = generateQimenPlate(calendar);

    return {
      input: {
        date: dateValue,
        time: timeValue
      },
      calendar,
      plate
    };
  }
};