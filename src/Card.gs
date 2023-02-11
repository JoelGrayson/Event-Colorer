function createCard(parameters={
    title: '',
    color: DEFAULT_COLOR_NAME, //color name
    numMatches: 0,
    success: false,
}) { //parameters are pending
    // <Options arg parsing>
    const title=parameters.title || '';
    const color=parameters.color || DEFAULT_COLOR_NAME;
    const numMatches=parameters.numMatches ?? 0;
    const success=parameters.success ?? false;
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
        );
    section.addWidget(eventTitleInput);

    const okButton=CardService.newTextButton() //press ok after typing input
        .setText('Ok')
        .setOnClickAction(CardService.newAction()
            .setFunctionName('handleChange')
            .setParameters({ numMatches: JSON.stringify(numMatches) })
        );
    section.addWidget(okButton);

    
    const colorPicker=CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.DROPDOWN)
        .setTitle("Select the new event color:")
        .setFieldName("colorPicker")
        .setOnChangeAction(CardService.newAction()
          .setFunctionName("handleChange")
          .setParameters({  numMatches: JSON.stringify(numMatches) })
        );
    for (let opt of COLORS)
        colorPicker.addItem(opt.labelName, opt.colorName, color===opt.colorName);
    
    section.addWidget(colorPicker);

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
            .setParameters({numMatches: JSON.stringify(numMatches)})
        );
    section.addWidget(submitBtn);

    const footer=CardService.newFixedFooter()
      .setPrimaryButton(
          CardService.newTextButton()
              .setText("Watch Tutorial")
              .setOpenLink(CardService.newOpenLink()
                  .setUrl("https://youtu.be/"))
      )
      .setSecondaryButton(
          CardService.newTextButton()
              .setText('Coded by Joel Grayson')
              .setOpenLink(CardService.newOpenLink()
                  .setUrl('https://joelgrayson.com'))
      );
    
    const card=CardService.newCardBuilder()
        .addSection(section)
        .setFixedFooter(footer)

    return card.build();
}

