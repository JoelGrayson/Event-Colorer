// Page Event Listeners
function onHomePage(e) {
    return createCard();
}
  
function onCalendarEventOpen(e) {
    const { calendarId, color, title, showExtras, pastBound, futureBound }=getParameters(e);
    const numMatches=getTargetEvents(title, calendarId, pastBound, futureBound).length;
    return createCard({title: currEvent.getTitle(), color: currColor, numMatches});
}
  
  
// Element Event Listeners
function handleChange(e) { //passes all new parameters and calculates numMatches
    const { calendarId, color, title, showExtras, pastBound, futureBound }=getParameters(e);
  
    return createCard({title, color, showExtras, numMatches});
}
  
  
// Enter in the title and click OK. Choose a color from the radio buttons. The confirmation message shows the number of matched events, and what color they will be changed to. Click Run. Afterward, shows a simple success message.
function handleShowExtra(e) { //makes showExtras true
    const { calendarId, color, title, showExtras, pastBound, futureBound }=getParameters(e);
    const numMatches=getTargetEvents(title, calendarId, pastBound, futureBound).length;
    return createCard({title, color, showExtras: true, numMatches});
}
  
function execColorChange(e) { //makes succes: true
    const { calendarId, color, title, showExtras, pastBound, futureBound }=getParameters(e);
  
    const events=getTargetEvents(title, calendarId, pastBound, futureBound);
    const numMatches=events.length;
    changeEventColors(events, colorName2Value(color));
  
    return createCard({title, color, showExtras, numMatches, success: true});
}
  
