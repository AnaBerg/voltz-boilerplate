import { Variant, Color } from "../typography.type"
import { colors } from "../../../styles/colors";

export const getFamilyFont = (variant: Variant): "Suprapower" | "TTTravels" => {
  if (variant == 'content-title' || variant == 'section-title' || variant == 'subtitle' || variant == 'title') {
    return "Suprapower";
  } else {
    return "TTTravels";
  }
}

export const getFontWeight = (variant: Variant): number => {
  if (variant == 'content-title' || variant == 'section-title' || variant == 'subtitle' || variant == 'title') {
    return 900;
  } else if (variant ==  'caption') {
    return 400;
  } else if (variant == 'body-bold') {
    return 700;
  } else {
    return 500;
  }
}

export const getFontSize = (variant: Variant): string => {
  switch (variant) {
    case "title":
      return "10rem";
    case "subtitle":
      return "7.5rem";
    case "content-title":
      return "6.25rem";
    default:
      return "3.75rem";
  }
}

export const getColor = (color: Color): string => {
  switch (color) {
    case "primary":
      return colors.primary;
    case "highlight":
      return colors.highlight;
    case "error":
      return colors.error;
    case "warning":
      return colors.warning;
    case "success":
      return colors.success;
    default:
      return colors.secondary;
  }
}