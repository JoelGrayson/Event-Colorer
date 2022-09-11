/*
Exception: Object does not have property 
	- /​Card/​sections[0]/​widgets[0]/​buttons[0]/​text_button/​on_click. [line: 21, function: createCard, file: Extension]
*/

function createCard(page) {
    // let color='#2222ff'
    let color='#f9c44d';
  
    let text=CardService.newTextParagraph()
      .setText(`<p>Change all events titled "English" (49 matches) to <font color="${color}">${color}</font>.`);
  
    let input=CardService.newTextInput()
      .setTitle('Event Title')
      .setFieldName('eventTitle')
      .setOnChangeAction(CardService.newAction()
        .setFunctionName('onInputChange'));
  
    let colorPicker=CardService.newSelectionInput()
      .setType(CardService.SelectionInputType.RADIO_BUTTON)
        .setTitle("Select the new event color:")
      .setFieldName("colorPicker")
      .addItem('Red 🔴', CalendarApp.EventColor.RED, true)
      .addItem('Yellow 🟡', CalendarApp.EventColor.YELLOW, false)
      .addItem('Green 🟢',  CalendarApp.EventColor.GREEN, false)
      .addItem('Blue 🔵',  CalendarApp.EventColor.PALE_BLUE, false)
      .setOnChangeAction(CardService.newAction()
        .setFunctionName("handleColorChange"));
  
    let section=CardService.newCardSection()
      .addWidget(text)
      .addWidget(input)
      .addWidget(colorPicker);
  
    // let footer=CardService.newFixedFooter()
    //   .setPrimaryButton(
    //     CardService.newTextButton()
    //     .setText("Learn more about Event Colorer")
    //     .setOpenLink(CardService.newOpenLink()
    //         .setUrl("https://www.joelgrayson.com/event-colorer"))
    //   );
    
    let card=CardService.newCardBuilder()
      .addSection(section)
      // .setFixedFooter(footer)
  
    return card.build();
  }
  
  // Page Event Listeners
  function onHomePage(e) {
    return createCard('homepage');
  }
  
  function onCalendarEventOpen() {
    return createCard('calendar event');
  }
  
  // Element Event Listeners
  function handleColorChange(e) {
    let color=e.commonEventObject.formInputs.colorPicker.stringInputs.value[0];
    let title=e.commonEventObject.formInputs.eventTitle.stringInputs.value[0];
  
    changeEventColors(getTargetEvents(title), color);
  }
  
  function onInputChange(e) {
    throw new Error(JSON.stringify(e));
  }
  
  
  
  
  
  