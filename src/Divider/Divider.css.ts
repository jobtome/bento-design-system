import { style } from "@vanilla-extract/css";
import { bentoSprinkles } from "../internal/sprinkles.css";

export const divider = style([
  {
    height: 1,
  },
  bentoSprinkles({
    background: "disabled",
    width: "full",
  }),
]);
