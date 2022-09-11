// Page Event Listeners
function onHomePage(e) {
  return createCard();
}

function onCalendarEventOpen(e) {
  return createCard();
}

// Element Event Listeners
function handleChange(e) { //passes all new parameters and calculates numMatches
  const color=e.commonEventObject.formInputs.colorPicker.stringInputs.value[0] ?? '';
  const title=e.commonEventObject.formInputs.eventTitle?.stringInputs?.value[0] ?? '';
  const showExtras=JSON.parse(e.commonEventObject.parameters.showExtras) ?? false;
  const numMatches=getTargetEvents(title).length;

  return createCard({title, color, showExtras, numMatches});
}

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

