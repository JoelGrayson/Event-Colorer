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

    if (title!='') {
        const eventTitleInput=CardService.newTextInput() //should not be changed by user
            .setTitle('Event Title')
            .setFieldName('eventTitle')
            .setValue(title)
            .setOnChangeAction(CardService.newAction()
                .setFunctionName('handleChange')
            );
        section.addWidget(eventTitleInput);
    } else {
        section.addWidget(CardService.newTextParagraph().setText('← Please select an event from the calendar.'));
    }

    
    const colorPicker=CardService.newSelectionInput()
        .setType(CardService.SelectionInputType.DROPDOWN)
        .setTitle("Click below to select the new color:")
        .setFieldName("colorPicker")
        .setOnChangeAction(CardService.newAction()
          .setFunctionName("handleChange")
          .setParameters({  numMatches: JSON.stringify(numMatches) })
        );
    for (let opt of COLORS)
        colorPicker.addItem(opt.labelName, opt.colorName, color===opt.colorName);
    
    section.addWidget(colorPicker);

    if (!title) {}
    else if (!color) {
        section.addWidget(CardService.newTextParagraph().setText('Please select a color above.'));
    } else { //Run button
        section.addWidget(
            CardService.newTextParagraph()
                .setText(`Change all events titled "${title}" (${numMatches} matches) to <font color="${colorName2Hex(color)}">${color}</font>?`)
        );
        section.addWidget(
            CardService.newTextButton()
                .setText('Run')
                .setBackgroundColor(colorName2Hex(color))
                .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
                .setOnClickAction(CardService.newAction()
                    .setFunctionName('execColorChange')
                    .setParameters({numMatches: JSON.stringify(numMatches)})
                )
        );
    }


    const footer=CardService.newFixedFooter()
      .setPrimaryButton(
          CardService.newTextButton()
              .setBackgroundColor('#f9c44d')
              // .setTextButtonStyle()
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

