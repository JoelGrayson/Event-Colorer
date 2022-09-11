function getTargetEvents(targetTitle) {
  const now=new Date();
  const yearFromNow=new Date();
  yearFromNow.setUTCFullYear(now.getUTCFullYear()+1);

  const allEvents=CalendarApp.getEvents(now, yearFromNow);
  const targetEvents=[];

  for (let event of allEvents)
    if (equalStrings(event.getTitle(), targetTitle))
      targetEvents.push(event);
  
  return targetEvents;
}

function changeEventColors(targetEvents, targetColor) {
  targetEvents.forEach(event=>event.setColor(targetColor));
}

function equalStrings(a, b) {
  return a.toLowerCase().trim()===b.toLowerCase().trim();
}
