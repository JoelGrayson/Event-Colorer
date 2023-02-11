function getParameters(e) {
    // Usage: const { calendarId, color, title }=getParameters(e);

    return {
        calendarId: e.calendar.calendarId,
        color: e.commonEventObject.formInputs.colorPicker?.stringInputs?.value[0] || DEFAULT_COLOR_NAME,
        title: e.commonEventObject.formInputs.eventTitle?.stringInputs?.value[0] || ''
    };
}

const equalStrings=(a, b)=>a.toLowerCase().trim()===b.toLowerCase().trim();

function colorName2Hex(colorName) {
    const defaultColorHex='#000000';
    return COLORS.find(COLOR=>COLOR.colorName===colorName)?.hexColor || defaultColorHex;
}

function colorName2Value(colorName) {
    const defaultColorValue=CalendarApp.EventColor.BLUE;
    return COLORS.find(COLOR=>COLOR.colorName===colorName)?.colorValue || defaultColorValue;
}

function colorValue2Name(colorValue) {
    return COLORS.find(COLOR=>COLOR.colorValue===colorValue)?.colorName || '';
}

