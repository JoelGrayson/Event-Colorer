const COLORS=[
    /* : {
        labelName, //shows as a radio choice label
        colorName, //shows in the text paragraph
        hexColor, //colors the text paragraph in the text paragraph (must be expanded form for <font color={}>{txt}</font>)
        colorValue //number from CalendarApp.EventColor.{e.g. YELLOW}
    }[] */
    { labelName: 'Red 🔴',    colorName: 'red',    hexColor: '#FF0000', colorValue: CalendarApp.EventColor.RED },
    { labelName: 'Orange 🟠', colorName: 'orange', hexColor: '#F4511E', colorValue: CalendarApp.EventColor.ORANGE },
    { labelName: 'Yellow 🟡', colorName: 'yellow', hexColor: '#F6BF26', colorValue: CalendarApp.EventColor.YELLOW },
    { labelName: 'Green 🟢',  colorName: 'green',  hexColor: '#0B8043', colorValue: CalendarApp.EventColor.GREEN },
    { labelName: 'Blue 🔵',   colorName: 'blue',   hexColor: '#134BF5', colorValue: CalendarApp.EventColor.BLUE },
    { labelName: 'Purple 🟣', colorName: 'purple', hexColor: '#8E24AA', colorValue: CalendarApp.EventColor.MAUVE },
    { labelName: 'Gray ⚪',   colorName: 'gray',   hexColor: '#616161', colorValue: CalendarApp.EventColor.GRAY },
  
    // Extra colors
    { labelName: 'Light Blue',colorName: 'pale blue', hexColor: '#7986CB', colorValue: CalendarApp.EventColor.PALE_BLUE  },
    { labelName: 'Light Red', colorName: 'light red', hexColor: '#E67C73', colorValue: CalendarApp.EventColor.PALE_RED   },
    { labelName: 'UN Blue 🇺🇳',colorName: 'un blue',   hexColor: '#039BE5', colorValue: CalendarApp.EventColor.CYAN       },
    { labelName: 'Mint',      colorName: 'mint',      hexColor: '#33B679', colorValue: CalendarApp.EventColor.PALE_GREEN }
];

const DEFAULT_COLOR_NAME='red';
