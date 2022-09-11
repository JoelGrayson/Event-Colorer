// Page Event Listeners
function onHomePage(e) {
  return createCard();
}

function onCalendarEventOpen(e) {
  const calendar=CalendarApp.getCalendarById(e.calendar.calendarId);
  const currEvent=calendar.getEventById(e.calendar.id);
  const currColor=colorValue2Name(currEvent.getColor());
  const numMatches=getTargetEvents(currEvent.getTitle()).length;

  return createCard({title: currEvent.getTitle(), color: currColor, numMatches});
}



// Element Event Listeners
function handleChange(e) { //passes all new parameters and calculates numMatches
  const color=e.commonEventObject.formInputs.colorPicker.stringInputs.value[0] ?? '';
  const title=e.commonEventObject.formInputs.eventTitle?.stringInputs?.value[0] ?? '';
  const showExtras=JSON.parse(e.commonEventObject.parameters.showExtras) ?? false;
  const numMatches=getTargetEvents(title).length;

  return createCard({title, color, showExtras, numMatches});
}

//     Enter in the title and click OK. Choose a color from the radio buttons. The confirmation message shows the number of matched events, and what color they will be changed to. Click Run. Afterward, shows a simple success message.

function handleShowExtra(e) { //makes showExtras true
  const color=e.commonEventObject.formInputs.colorPicker.stringInputs.value[0] ?? '';
  const title=e.commonEventObject.formInputs.eventTitle?.stringInputs?.value[0] ?? '';
  // const numMatches=JSON.parse(e.commonEventObject.parameters.numMatches) ?? 0;
  const numMatches=getTargetEvents(title).length;

  
  return createCard({title, color, showExtras: true, numMatches});
}

function execColorChange(e) { //makes succes: true
  const color=e.commonEventObject.formInputs.colorPicker.stringInputs.value[0] ?? '';
  const title=e.commonEventObject.formInputs.eventTitle?.stringInputs?.value[0] ?? '';
  const showExtras=JSON.parse(e.commonEventObject.parameters.showExtras) ?? false;
  // const numMatches=JSON.parse(e.commonEventObject.parameters.numMatches) ?? 0;
  const numMatches=getTargetEvents(title).length;

  changeEventColors(getTargetEvents(title), colorName2Value(color));

  return createCard({title, color, showExtras, numMatches, success: true});
}

