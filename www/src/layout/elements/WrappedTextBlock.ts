module cordova.plugins.band {
  export interface WrappedTextBlockAttributes extends PageElementAttributes {
    color: string;
    colorSource: ElementColorSource;
    font: WrappedTextBlockFont;
    autoHeight: boolean;
  }
  
  export class WrappedTextBlock extends PageElement<WrappedTextBlockAttributes> {
    constructor(elementId: number, rect: PageRect, colorSource?: ElementColorSource, color?: string,
      font?: WrappedTextBlockFont, autoHeight?: boolean) {
      var margins: Margins = {top: 0, left: 0, right: 0, bottom: 0};
      super(elementId, rect, margins, HorizontalAlignment.CENTERED, VerticalAlignment.CENTERED, true);
      this.attributes.colorSource = colorSource;
      this.attributes.color = color;
      this.attributes.font = font;
      this.attributes.autoHeight = autoHeight;
    }
    
    toJson(): IWrappedTextBlockElement {      
      return util.extend(super.toJson(), {
        color: this.attributes.color,
        colorSource: ElementColorSource[this.attributes.colorSource],
        font: WrappedTextBlockFont[this.attributes.font],
        autoHeight: this.attributes.autoHeight,
        type: PageElementTypes[PageElementTypes.WRAPPED_TEXT_BLOCK]
      });
    }
    
    static fromJson(json: IWrappedTextBlockElement) {
      var textBlock: WrappedTextBlock = <WrappedTextBlock> PageElement.fromJson(json);
      textBlock.attributes.color = json.color;
      textBlock.attributes.colorSource = ElementColorSource[json.colorSource];
      textBlock.attributes.font = WrappedTextBlockFont[json.font];
      textBlock.attributes.autoHeight = json.autoHeight;
      
      return textBlock;
    }
  }
}