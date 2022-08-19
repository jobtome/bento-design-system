import { BoxProps } from "../Box/Box";
import { normalizeResponsiveValue, OptionalResponsiveValue } from "../internal/sprinkles.css";
import {
  desktopWidths,
  tabletWidths,
  mobileWidths,
  fullWidth,
  wideWidths,
} from "../Layout/Column.css";
import { Children } from "../util/Children";
import { Box, Column } from "..";
import { ComponentProps } from "react";
import { BentoSprinkles } from "../internal";

type Props = {
  /**
   * Main content and sidebar to render. The order depends on the sidebar position:
   * - "left" -> [sidebar, content]
   * - "right" -> [content, sidebar]
   */
  children: [Children, Children];
  /**
   * The placement of the sidebar relative to the content. Note that this is purely visual and it does not affect the
   * DOM order: the content always comes first in the DOM, so that it receives focus first when navigating with a
   * keyboard or a screen reader.
   */
  sidebarPosition: "right" | "left";
  /**
   * Width of the sidebar. It can be a shortcut width like with `<Columns>` (e.g. "1/5") or a completely custom width.
   * Examples:
   *
   * ```tsx
   *  <ContentWithSidebar sidebarPosition="right" sidebarWidth="1/5">...</ContentWithSidebar>
   *  <ContentWithSidebar  sidebarPosition="right" sidebarWidth={{ custom: "25%" }}>...</ContentWithSidebar>
   * ```
   */
  sidebarWidth: ComponentProps<typeof Column>["width"] | { custom: string | number };
  /**
   * Horizontal space between the content and the sidebar. Defaults to no space.
   */
  space?: BentoSprinkles["gap"];
  /**
   * Background of the sidebar container, defaults to no background.
   */
  sidebarBackground?: BentoSprinkles["background"];
  /**
   * Native dom element for the sidebar.
   * @default <aside>
   */
  sidebarAs?: BoxProps["as"];
  /**
   * Native dom element for the content.
   * @default <main>
   */
  contentAs?: BoxProps["as"];
};

/**
 * A component that renders a main content and a sidebar on the side.
 *
 * The main content is always rendered before the sidebar in the DOM, so that tab and focus order goes to the main content first.
 */
export function ContentWithSidebar({
  space,
  children,
  sidebarWidth,
  sidebarBackground,
  sidebarPosition,
  sidebarAs,
  contentAs,
}: Props) {
  const sidebarProps = (() => {
    if (typeof sidebarWidth === "object" && "custom" in sidebarWidth && sidebarWidth.custom) {
      return {
        style: { width: sidebarWidth.custom },
      };
    }

    const { wide, desktop, tablet, mobile } = sidebarWidth
      ? normalizeResponsiveValue(
          sidebarWidth as OptionalResponsiveValue<keyof typeof desktopWidths>
        )
      : { wide: undefined, desktop: undefined, tablet: undefined, mobile: undefined };

    const className =
      sidebarWidth == null
        ? fullWidth
        : [
            wide && wideWidths[wide],
            desktop && desktopWidths[desktop],
            tablet && tabletWidths[tablet],
            mobile && mobileWidths[mobile],
          ];

    return { className };
  })();

  const flexDirection = (() => {
    switch (sidebarPosition) {
      case "right":
        return "row";
      case "left":
        return "rowReverse";
    }
  })();

  return (
    <Box display="flex" height="full" gap={space} flexDirection={flexDirection}>
      <Box as={contentAs ?? "main"} flex={1}>
        {sidebarPosition === "left" ? children[1] : children[0]}
      </Box>
      <Box as={sidebarAs ?? "aside"} background={sidebarBackground} {...sidebarProps}>
        {sidebarPosition === "left" ? children[0] : children[1]}
      </Box>
    </Box>
  );
}
