import { createVar } from "@vanilla-extract/css";
import { bentoSprinkles } from "../internal/sprinkles.css";
import { strictRecipe } from "../util/strictRecipe";
import { vars } from "../vars.css";

export const readOnlyBackground = createVar();

export const inputRecipe = strictRecipe({
  base: [
    {
      "::placeholder": {
        color: vars.textColor.textSecondary,
      },
      selectors: {
        "&:disabled::placeholder": {
          color: vars.textColor.textDisabled,
        },
        "input&:read-only, textarea&:read-only, &.readOnly, &[readonly]": {
          background: readOnlyBackground,
        },
      },
    },
    bentoSprinkles({
      boxShadow: {
        disabled: "outlineInputDisabled",
      },
      outline: "none",
    }),
  ],
  variants: {
    validation: {
      valid: [
        bentoSprinkles({
          boxShadow: {
            default: "outlineInputEnabled",
            hover: "outlineInputHover",
            focus: "outlineInputFocus",
          },
        }),
        {
          selectors: {
            "&:focus-within:not(:disabled):not([disabled])": {
              boxShadow: vars.boxShadow.outlineInputFocus,
            },
          },
        },
      ],
      invalid: [
        bentoSprinkles({
          boxShadow: {
            default: "outlineNegative",
            focus: "outlineNegativeStrong",
          },
        }),
        {
          selectors: {
            "&:focus-within:not(:disabled):not([disabled])": {
              boxShadow: vars.boxShadow.outlineNegativeStrong,
            },
          },
        },
      ],
      notSet: {},
    },
  },
});
