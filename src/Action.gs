function getTargetEvents(targetTitle, calendarId) {
    const calendar=CalendarApp.getCalendarById(calendarId);
    if (!calendar) return [];
    const pastBound=new Date();
    pastBound.setFullYear(pastBound.getFullYear()-1);
    const futureBound=new Date();
    futureBound.setFullYear(futureBound.getFullYear()+1);
    return calendar.getEvents(pastBound, futureBound, { search: targetTitle })
        .filter(e=>equalStrings(e.getTitle(), targetTitle));
}
  
function changeEventColors(targetEvents, targetColor) {
    targetEvents.forEach(event=>event.setColor(targetColor));
}
  
function runNoneForDebugger() {}
  