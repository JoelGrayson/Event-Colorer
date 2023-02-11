function getParameters(e) {
    // Usage: const { calendarId, color, title, showExtras, pastBound, futureBound }=getParameters(e);

    const pastBound=(()=>{
        let dateToReturn=new Date();
        switch (e.commonEventObject?.formInputs?.pastBound?.stringInputs?.value?.[0]) {
            case 'now':                                                                           break;
            case 'last month':            dateToReturn.setMonth(dateToReturn.getMonth()-1);       break;
            case 'last year':             dateToReturn.setFullYear(dateToReturn.getFullYear()-1); break;
            case 'forever into the past': dateToReturn='forever';                                 break;
            default:                      dateToReturn=DEFAULT_PAST_BOUND;                        break;
        }
        return dateToReturn;
    })();
    const futureBound=(()=>{
        const dateToReturn=new Date();
        switch (e.commonEventObject.formInputs.pastBound?.stringInputs?.value[0]) {
            case 'now':                                                                             break;
            case 'next month':              dateToReturn.setMonth(dateToReturn.getMonth()+1);       break;
            case 'next year':               dateToReturn.setFullYear(dateToReturn.getFullYear()+1); break;
            case 'forever into the future': dateToReturn='forever';                                 break;
            default:                        dateToReturn=DEFAULT_FUTURE_BOUND;                      break;
        }
        return dateToReturn;
    })();

    return {
        calendarId: e.calendar.calendarId,
        color: e.commonEventObject.formInputs.colorPicker?.stringInputs?.value[0] || DEFAULT_COLOR_NAME,
        title: e.commonEventObject.formInputs.eventTitle?.stringInputs?.value[0] || '',
        showExtras: JSON.parse(e.commonEventObject.parameters.showExtras) ?? false,
        pastBound,
        futureBound
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

