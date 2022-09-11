/*
Exception: Object does not have property 
	- /​Card/​sections[0]/​widgets[0]/​buttons[0]/​text_button/​on_click. [line: 21, function: createCard, file: Extension]
*/


function createCard(title='', color='red' /* colorName */, options={numMatches: 0, success: false}) { //parameters are pending
    // Options arg parsing
    const numMatches=options.numMatches ?? 0;
    const success=options.success ?? false;
    // </>
  
    const section=CardService.newCardSection();
  
    if (success) //Show success message
      section.addWidget(
        CardService.newTextParagraph()
          .setText('Success!')
      );
  
    let eventTitleInput=CardService.newTextInput()
      .setTitle('Event Title')
      .setFieldName('eventTitle')
      .setValue(title)
      .setOnChangeAction(CardService.newAction()
        .setFunctionName('handleInputChange'));
    let okButton=CardService.newTextButton() //press ok after typing input
      .setText('Ok')
      .setOnClickAction(CardService.newAction()
        .setFunctionName('handleInputChange'))
  
    let colorPicker=CardService.newSelectionInput()
      .setType(CardService.SelectionInputType.RADIO_BUTTON)
        .setTitle("Select the new event color:")
      .setFieldName("colorPicker")
      .setOnChangeAction(CardService.newAction()
        .setFunctionName("handleColorChange"));
  
    
    for (let opt of COLORS)
      colorPicker.addItem(opt.labelName, opt.colorName, color===opt.colorName);
  
    let text=CardService.newTextParagraph()
    if (!title) {
      text.setText('Select a color and type an event name above.');
    } else {
      if (!color) {
        text.setText('Please select a color above');
      } else {
        text.setText(`Change all events titled "${title}" (${numMatches} matches) to <font color="${colorName2Hex(color)}">${color}</font>.`);
      }
    }
  
    let submitBtn=CardService.newTextButton()
      .setText('Run')
      .setOnClickAction(CardService.newAction()
        .setFunctionName('execColorChange'));
  
    section
      .addWidget(eventTitleInput)
      .addWidget(okButton)
      .addWidget(colorPicker)
      .addWidget(text)
      .addWidget(submitBtn);
  
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
  
  
  