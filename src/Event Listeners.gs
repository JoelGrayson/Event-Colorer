// Page Event Listeners
function onHomePage(e) {
    return createCard();
}
  
function onCalendarEventOpen(e) {
    const calendar=CalendarApp.getCalendarById(e.calendar.calendarId);
    const currEvent=calendar.getEventById(e.calendar.id);
    const currColor=colorValue2Name(currEvent.getColor());
    const numMatches=getTargetEvents(currEvent.getTitle(), e.calendar.calendarId).length;
  
    return createCard({title: currEvent.getTitle(), color: currColor, numMatches});
  
}
  
  
// Element Event Listeners
function handleChange(e) { //passes all new parameters and calculates numMatches
    const { calendarId, color, title }=getParameters(e);
    const numMatches=getTargetEvents(title, calendarId).length;
    return createCard({title, color, numMatches});
}

function execColorChange(e) { //makes succes: true
    const { calendarId, color, title }=getParameters(e);
  
    const events=getTargetEvents(title, calendarId);
    const numMatches=events.length;
    changeEventColors(events, colorName2Value(color));
  
    return createCard({title, color, numMatches, success: true});
}
  
