import { mapResponsiveValue, OptionalResponsiveValue } from "../internal/sprinkles.css";

export type Align = "left" | "center" | "right";
export type ResponsiveAlign = OptionalResponsiveValue<Align>;
export type AlignY = "top" | "center" | "bottom" | "stretch" | "baseline";
export type ResponsiveAlignY = OptionalResponsiveValue<AlignY>;

export const alignToFlexAlignLookup = {
  left: "flexStart",
  center: "center",
  right: "flexEnd",
} as const;

export const alignToFlexAlign = (align: OptionalResponsiveValue<Align> | undefined) =>
  align ? mapResponsiveValue(align, (value) => alignToFlexAlignLookup[value]) : undefined;

export const alignYToFlexAlignLookup = {
  top: "flexStart",
  center: "center",
  bottom: "flexEnd",
  stretch: "stretch",
  baseline: "baseline",
} as const;

export const alignYToFlexAlign = (alignY: OptionalResponsiveValue<AlignY> | undefined) =>
  alignY ? mapResponsiveValue(alignY, (value) => alignYToFlexAlignLookup[value]) : undefined;
