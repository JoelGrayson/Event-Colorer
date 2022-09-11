// Page Event Listeners
function onHomePage(e) {
  return createCard();
}

function onCalendarEventOpen(e) {
  return createCard();
}

// Element Event Listeners
function handleColorChange(e) {
  const color=e.commonEventObject.formInputs.colorPicker.stringInputs.value[0];
  const title=e.commonEventObject.formInputs.eventTitle?.stringInputs?.value[0] || '';

  return createCard(title, color)
}

function handleInputChange(e) {
  const color=e.commonEventObject.formInputs.colorPicker.stringInputs.value[0];
  const title=e.commonEventObject.formInputs.eventTitle.stringInputs.value[0];

  const numMatches=getTargetEvents(title).length;

  return createCard(title, color, {numMatches})
}

function execColorChange(e) {
  const colorName=e.commonEventObject.formInputs.colorPicker.stringInputs.value[0];
  const title=e.commonEventObject.formInputs.eventTitle.stringInputs.value[0];

  changeEventColors(getTargetEvents(title), colorName2Value(colorName));

  return createCard(title, colorName, {success: true});
}

