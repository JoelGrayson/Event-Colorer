function createCard(parameters={title: '', color: DEFAULT_COLOR_NAME /* colorName */, numMatches: 0, success: false, showExtras: false}) { //parameters are pending
  // <Options arg parsing>
  const title=parameters.title ?? '';
  const color=parameters.color ?? DEFAULT_COLOR_NAME;
  const numMatches=parameters.numMatches ?? 0;
  const success=parameters.success ?? false;
  const showExtras=parameters.showExtras ?? false;
  // </>

  const section=CardService.newCardSection();

  if (success) //Show success message
    section.addWidget(
      CardService.newTextParagraph()
        .setText(`Successfully colored <font color="${colorName2Hex(color)}">${numMatches} events named "${title}" ${color}</font>. <br>Please wait a few seconds or reload the page to see the change.`)
    );

  const eventTitleInput=CardService.newTextInput()
    .setTitle('Event Title')
    .setFieldName('eventTitle')
    .setValue(title)
    .setOnChangeAction(CardService.newAction()
      .setFunctionName('handleChange')
      .setParameters({showExtras: JSON.stringify(showExtras)})
    );
  section.addWidget(eventTitleInput);

  const okButton=CardService.newTextButton() //press ok after typing input
    .setText('Ok')
    .setOnClickAction(CardService.newAction()
      .setFunctionName('handleChange')
      .setParameters({showExtras: JSON.stringify(showExtras), numMatches: JSON.stringify(numMatches)})
    );
  section.addWidget(okButton);

  
  const colorPicker=CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.RADIO_BUTTON)
    .setTitle("Select the new event color:")
    .setFieldName("colorPicker")
    .setOnChangeAction(CardService.newAction()
      .setFunctionName("handleChange")
      .setParameters({showExtras: JSON.stringify(showExtras), numMatches: JSON.stringify(numMatches)})
    );
  for (let opt of COLORS) {
    if (!showExtras && !opt.isExtra) //show only those that are not isExtra
      colorPicker.addItem(opt.labelName, opt.colorName, color===opt.colorName);
    if (showExtras) //show all
      colorPicker.addItem(opt.labelName, opt.colorName, color===opt.colorName);
  }
  section.addWidget(colorPicker);


  if (!showExtras) {
    const showExtraBtn=CardService.newTextButton()
      .setText('Show More')
      .setOnClickAction(CardService.newAction()
        .setFunctionName('handleShowExtra')
        .setParameters({numMatches: JSON.stringify(numMatches)})
      );
    section.addWidget(showExtraBtn)
  }

  const text=CardService.newTextParagraph();
  if (!title)
    text.setText('Type an event name above and select a color<br>or click on an event in your calendar.');
  else {
    if (!color)
      text.setText('Please select a color above');
    else
      text.setText(`Change all events titled "${title}" (${numMatches} matches) to <font color="${colorName2Hex(color)}">${color}</font>.`);
  }
  section.addWidget(text);

  const submitBtn=CardService.newTextButton()
    .setText('Run')
    .setOnClickAction(CardService.newAction()
      .setFunctionName('execColorChange')
      .setParameters({showExtras: JSON.stringify(showExtras), numMatches: JSON.stringify(numMatches)})
    );
  section.addWidget(submitBtn);

  const footer=CardService.newFixedFooter()
    .setPrimaryButton(
      CardService.newTextButton()
      .setText("Event Colorer")
      .setOpenLink(CardService.newOpenLink()
          .setUrl("https://www.joelgrayson.com/event-colorer"))
    );
  
  const card=CardService.newCardBuilder()
    .addSection(section)
    .setFixedFooter(footer)

  return card.build();
}


