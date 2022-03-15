import { createGlobalTheme } from "@vanilla-extract/css";
import { vars as bentoVars } from "@buildo/bento-design-system/lib/vars.css";

const remBaseSize = 16;
const pixelToRem = (px: number) => `${px / remBaseSize}rem`;

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  primary30: "#FF4E62",
  secondary30: "#FFC63E",
  tertiary50: "#45C1C0",
  neutral01: "#F6F8FB",
  neutral05: "#ECEFF4",
  neutral10: "#DEE4ED",
  neutral20: "#CBD4E1",
  neutral30: "#B6C2D3",
  neutral40: "#9AA8BC",
  neutral50: "#728197",
  neutral55: "#626F83",
  neutral60: "#525E6F",
  neutral70: "#3B4554",
  neutral80: "#27313F",
  neutral90: "#1A212B",
  informative05: "#D8E8FF",
  informative40: "#2D7AE5",
  informative50: "#105FCE",
  informative60: "#004AB1",
  informative70: "#003B8D",
  positive05: "#DAFCE6",
  positive50: "#21C357",
  positive60: "#049B22",
  positive70: "#078631",
  warning05: "#FFF2D2",
  warning40: "#F2A60D",
  warning50: "#D66F00",
  warning60: "#BA5900",
  warning70: "#943C00",
  negative05: "#FFD4D8",
  negative40: "#CE0718",
  negative50: "#CE0718",
  negative60: "#B1000F",
  negative70: "#8D000C",
  interactive70: "#4D4D4D",
  interactive80: "#333333",
  red10: "#FFBDCB",
  red30: "#FC5275",
  orange10: "#FFD4BC",
  orange30: "#FB8951",
  yellow10: "#FFF4B2",
  yellow30: "#FFD439",
  green10: "#DBF1BC",
  green30: "#A3D65C",
  jade10: "#B7F6D7",
  jade30: "#51E098",
  blue10: "#BCF2FF",
  blue30: "#51D0FB",
  indigo10: "#C0D3F9",
  indigo30: "#5F8CE6",
  violet10: "#DABEEA",
  violet30: "#A463C7",
  pink10: "#F8B0DA",
  pink30: "#E648A4",
};

const commonTheme = {
  fontFamily: {
    default: "IBM Plex Sans",
  },
  fontSize: {
    bodySmall: pixelToRem(12),
    bodyMedium: pixelToRem(14),
    bodyLarge: pixelToRem(16),
    headlineSmall: pixelToRem(24),
    headlineMedium: pixelToRem(28),
    headlineLarge: pixelToRem(32),
    displaySmall: pixelToRem(36),
    displayMedium: pixelToRem(45),
    displayLarge: pixelToRem(57),
    labelSmall: pixelToRem(11),
    labelMedium: pixelToRem(12),
    labelLarge: pixelToRem(14),
    titleSmall: pixelToRem(14),
    titleMedium: pixelToRem(16),
    titleLarge: pixelToRem(22),
  },
  lineHeight: {
    bodySmall: pixelToRem(16),
    bodyMedium: pixelToRem(18),
    bodyLarge: pixelToRem(20),
    headlineSmall: pixelToRem(32),
    headlineMedium: pixelToRem(36),
    headlineLarge: pixelToRem(42),
    displaySmall: pixelToRem(46),
    displayMedium: pixelToRem(58),
    displayLarge: pixelToRem(74),
    labelSmall: pixelToRem(14),
    labelMedium: pixelToRem(16),
    labelLarge: pixelToRem(18),
    titleSmall: pixelToRem(18),
    titleMedium: pixelToRem(20),
    titleLarge: pixelToRem(28),
  },
  fontWeight: {
    body: "400",
    bodyStrong: "500",
    display: "500",
    headline: "500",
    label: "600",
    title: "600",
  },
  letterSpacing: {
    1: "0.01em",
    2: "0.02em",
  },
  space: {
    0: "0",
    4: "4px",
    8: "8px",
    16: "16px",
    24: "24px",
    32: "32px",
    40: "40px",
    80: "80px",
  },
  negativeSpace: {
    0: "0",
    negative4: "-4px",
    negative8: "-8px",
    negative16: "-16px",
    negative24: "-24px",
    negative32: "-32px",
    negative40: "-40px",
    negative80: "-80px",
  },
  radius: {
    4: "4px",
    8: "8px",
    16: "16px",
  },
};

createGlobalTheme(":root", bentoVars, {
  ...commonTheme,
  brandColor: {
    brandPrimary: colors.primary30,
    brandSecondary: colors.secondary30,
    brandTertiary: colors.tertiary50,
  },
  backgroundColor: {
    backgroundPrimary: colors.white,
    backgroundSecondary: colors.neutral01,
    backgroundOverlay: "rgba(82, 94, 111, 0.15)",
    backgroundPrimaryInverse: colors.neutral90,
    backgroundSecondaryInverse: colors.neutral80,
    backgroundInteractive: colors.black,
    backgroundInteractiveOverlay: "rgba(82, 94, 111, 0.1)",
    backgroundInformative: colors.informative05,
    backgroundPositive: colors.positive05,
    backgroundWarning: colors.warning05,
    backgroundNegative: colors.negative05,
    backgroundLightScrim: "rgba(255, 255, 255, 0.8)",
    backgroundDarkScrim: "rgba(26, 33, 43, 0.6)",
  },
  foregroundColor: {
    foregroundPrimary: colors.neutral90,
    foregroundSecondary: colors.neutral60,
    foregroundPrimaryInverse: colors.white,
    foregroundSecondaryInverse: colors.neutral40,
    foregroundInteractive: colors.black,
    foregroundInformative: colors.informative40,
    foregroundPositive: colors.positive60,
    foregroundWarning: colors.warning50,
    foregroundNegative: colors.negative40,
    foregroundDisabled: "rgba(26, 33, 43, 0.3)",
  },
  textColor: {
    textPrimary: colors.neutral90,
    textSecondary: colors.neutral60,
    textPrimaryInverse: colors.white,
    textSecondaryInverse: colors.neutral40,
    textInteractive: colors.black,
    textLink: colors.neutral55,
    textInformative: colors.informative50,
    textPositive: colors.positive70,
    textWarning: colors.warning70,
    textNegative: colors.negative60,
    textDisabled: "rgba(82, 94, 111, 0.3)",
  },
  interactiveBackgroundColor: {
    primarySolidEnabledBackground: colors.black,
    primarySolidHoverBackground: colors.interactive70,
    primarySolidFocusBackground: colors.interactive70,
    primaryTransparentEnabledBackground: "transparent",
    primaryTransparentHoverBackground: "rgba(26, 33, 43, 0.1)",
    primaryTransparentFocusBackground: "rgba(26, 33, 43, 0.1)",
    secondarySolidEnabledBackground: colors.neutral60,
    secondarySolidHoverBackground: colors.neutral80,
    secondarySolidFocusBackground: colors.neutral80,
    secondaryTransparentEnabledBackground: "transparent",
    secondaryTransparentHoverBackground: "rgba(26, 33, 43, 0.1)",
    secondaryTransparentFocusBackground: "rgba(26, 33, 43, 0.1)",
    dangerSolidEnabledBackground: colors.negative40,
    dangerSolidHoverBackground: colors.negative60,
    dangerSolidFocusBackground: colors.negative60,
    dangerTransparentEnabledBackground: "transparent",
    dangerTransparentHoverBackground: "rgba(228, 33, 49, 0.1)",
    dangerTransparentFocusBackground: "rgba(228, 33, 49, 0.1)",
    disabledSolidBackground: "rgba(82, 94, 111, 0.1)",
    disabledTransparentBackground: "transparent",
  },
  interactiveForegroundColor: {
    primarySolidEnabledForeground: colors.white,
    primarySolidHoverForeground: colors.white,
    primarySolidFocusForeground: colors.white,
    primaryTransparentEnabledForeground: colors.black,
    primaryTransparentHoverForeground: colors.black,
    primaryTransparentFocusForeground: colors.black,
    secondarySolidEnabledForeground: colors.white,
    secondarySolidHoverForeground: colors.white,
    secondarySolidFocusForeground: colors.white,
    secondaryTransparentEnabledForeground: colors.neutral60,
    secondaryTransparentHoverForeground: colors.neutral80,
    secondaryTransparentFocusForeground: colors.neutral80,
    dangerSolidEnabledForeground: colors.white,
    dangerSolidHoverForeground: colors.white,
    dangerSolidFocusForeground: colors.white,
    dangerTransparentEnabledForeground: colors.negative40,
    dangerTransparentHoverForeground: colors.negative60,
    dangerTransparentFocusForeground: colors.negative60,
    disabledSolidForeground: "rgba(82, 94, 111, 0.3)",
    disabledTransparentForeground: "rgba(82, 94, 111, 0.3)",
    linkEnabled: colors.black,
    linkHover: colors.interactive70,
    linkFocus: colors.interactive70,
    linkDisabled: "rgba(82, 94, 111, 0.3)",
  },
  outlineColor: {
    outlineInteractive: colors.black,
    outlineDecorative: colors.neutral20,
    outlineContainer: colors.neutral05,
    outlineInputEnabled: colors.neutral50,
    outlineInputHover: colors.neutral90,
    outlineInputFocus: colors.black,
    outlineInputDisabled: "rgba(82, 94, 111, 0.3)",
    outlineInformative: colors.informative40,
    outlinePositive: colors.positive60,
    outlineWarning: colors.warning50,
    outlineNegative: colors.negative40,
  },
  dataVisualizationColor: {
    softGrey: colors.neutral10,
    softRed: colors.red10,
    softOrange: colors.orange10,
    softYellow: colors.yellow10,
    softGreen: colors.green10,
    softJade: colors.jade10,
    softBlue: colors.blue10,
    softIndigo: colors.indigo10,
    softViolet: colors.violet10,
    softPink: colors.pink10,
    brightGrey: colors.neutral30,
    brightRed: colors.red30,
    brightOrange: colors.orange30,
    brightYellow: colors.yellow30,
    brightGreen: colors.green30,
    brightJade: colors.jade30,
    brightBlue: colors.blue30,
    brightIndigo: colors.indigo30,
    brightViolet: colors.violet30,
    brightPink: colors.pink30,
  },
  boxShadow: {
    outlineInteractive: `inset 0px 0px 0px 1px ${colors.black}`,
    outlineInteractiveBottom: `inset 0px -1px 0px ${colors.black}`,
    outlineDecorative: `inset 0px 0px 0px 1px ${colors.neutral20}`,
    outlineDecorativeBottom: `inset 0px -1px 0px ${colors.neutral20}`,
    outlineContainer: `inset 0px 0px 0px 1px ${colors.neutral05}`,
    outlineInputEnabled: `inset 0px 0px 0px 1px ${colors.neutral50}`,
    outlineInputHover: `inset 0px 0px 0px 1px ${colors.neutral90}`,
    outlineInputFocus: `inset 0px 0px 0px 2px ${colors.black}`,
    outlineInputDisabled: `inset 0px 0px 0px 1px rgba(82, 94, 111, 0.3)`,
    outlineInformative: `inset 0px 0px 0px 1px ${colors.informative40}`,
    outlinePositive: `inset 0px 0px 0px 1px ${colors.positive60}`,
    outlineWarning: `inset 0px 0px 0px 1px ${colors.warning50}`,
    outlineNegative: `inset 0px 0px 0px 1px ${colors.negative40}`,
    outlineNegativeStrong: `inset 0px 0px 0px 2px ${colors.negative40}`,
    elevationSmall: "0px 4px 8px rgba(0, 0, 0, 0.16)",
    elevationMedium: "0px 8px 16px rgba(0, 0, 0, 0.16)",
    elevationLarge: "0px 16px 32px rgba(0, 0, 0, 0.16)",
  },
  zIndex: {
    selectFieldMenu: "10",
    modalUnderlay: "100",
    selectFieldMenuInModal: "110",
  },
});

export { bentoVars as vars };

export const customVars = createGlobalTheme(":root", {
  fontFamily: {
    customFontFamily: "sans-serif",
  },
  color: {
    customColor1: "#3C6FD6",
  },
  space: {
    12: "12px",
  },
});
