function getTargetEvents(targetTitle, calendarId, pastBound, futureBound) {
    const calendar=CalendarApp.getCalendarById(calendarId);
    if (!calendar) return [];
    
    if (pastBound==='forever' && futureBound!=='forever')
        return calendar.getEvents(new Date('2011'), futureBound, { search: targetTitle }).filter(e=>equalStrings(e.getTitle(), targetTitle));
    else if (pastBound!=='forever' && futureBound==='forever')
        return calendar.getEvents(pastBound, new Date('9999'), { search: targetTitle }).filter(e=>equalStrings(e.getTitle(), targetTitle));
    else
        return calendar.getEvents(pastBound, futureBound, { search: targetTitle }).filter(e=>equalStrings(e.getTitle(), targetTitle));
}
  
function changeEventColors(targetEvents, targetColor) {
    targetEvents.forEach(event=>event.setColor(targetColor));
}
  
function runNoneForDebugger() {}
  