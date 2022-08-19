import { IconProps } from "../Icons";
import { BentoSprinkles } from "../internal";
import { LabelProps } from "../Typography/Label/Label";
import { Children } from "../util/Children";
import { ChipCustomColors } from "../util/ConfigurableTypes";

export type ChipConfig = {
  paddingX: BentoSprinkles["paddingX"];
  paddingY: BentoSprinkles["paddingY"];
  labelSize: LabelProps["size"];
  iconSize: IconProps["size"];
  closeIcon: (props: IconProps) => Children;
  closeIconSize: IconProps["size"];
  spacingAfterIcon: BentoSprinkles["gap"];
  spacingAfterLabel: BentoSprinkles["gap"];
  customColors: {
    [k in ChipCustomColors]: BentoSprinkles["background"];
  };
  radius: BentoSprinkles["borderRadius"];
};
