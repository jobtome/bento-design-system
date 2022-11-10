import { strictRecipe } from "../../util/strictRecipe";
import { bentoSprinkles } from "../../internal";

export const displayRecipe = strictRecipe({
  base: bentoSprinkles({ fontFamily: "default", fontWeight: "display", color: "textPrimary" }),
  variants: {
    size: {
      small: bentoSprinkles({ fontSize: "displaySmall", lineHeight: "displaySmall" }),
      medium: bentoSprinkles({ fontSize: "displayMedium", lineHeight: "displayMedium" }),
      large: bentoSprinkles({ fontSize: "displayLarge", lineHeight: "displayLarge" }),
    },
    color: {
      primary: bentoSprinkles({ color: "textPrimary" }),
      secondary: bentoSprinkles({ color: "textSecondary" }),
      primaryInverse: bentoSprinkles({ color: "textPrimaryInverse" }),
      secondaryInverse: bentoSprinkles({ color: "textSecondaryInverse" }),
      inherit: { color: "inherit" },
    },
  },
});
