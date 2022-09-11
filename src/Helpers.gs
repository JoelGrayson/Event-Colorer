function equalStrings(a, b) { //helper
  return a.toLowerCase().trim()===b.toLowerCase().trim();
}

function colorName2Hex(colorName) {
  const defaultColor='#000000';
  return COLORS.find(COLOR=>COLOR.colorName===colorName)?.hexColor || defaultColor;
}

function colorName2Value(colorName) {
  const defaultColor=CalendarApp.EventColor.BLUE;
  return COLORS.find(COLOR=>COLOR.colorName===colorName)?.colorValue || defaultColor;
}
