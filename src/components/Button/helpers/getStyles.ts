import { colors } from "../../../styles/colors";
import { Variant } from "../Button.type";

export const getBorder = (variant: Variant, transparent: boolean, disable: boolean) => {
    if (transparent && variant != 'text') {
      if (variant == 'primary') {
        return disable ? `0.5px solid ${colors.black60}` : `0.5px solid ${colors.primary}`;
      } else if (variant == 'secondary') {
        return disable ? `0.5px solid ${colors.black20}` : `0.5px solid ${colors.secondary}`;
      }
    } else {
      return 'none'
    }
}

export const getBackgroundColor = (variant: Variant, transparent: boolean, disable: boolean) => {
  if (!transparent && variant != 'text') {
    if (!disable) {
      switch (variant) {
        case 'primary':
          return colors.primary;
        case 'secondary':
          return colors.secondary;
        case 'highlight':
          return colors.highlight;
      }
    } else {
      switch (variant) {
        case 'primary':
          return colors.black80;
        case 'secondary':
          return colors.black20;
        case 'highlight':
          return colors.highlightLight;
      }
    }
  } else {
    return 'trasparente';
  }
}