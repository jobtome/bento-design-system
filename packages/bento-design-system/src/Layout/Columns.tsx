import { ReactChild, ReactElement } from "react";
import flattenChildren from "react-keyed-flatten-children";
import { BoxProps, Box } from "../Box/Box";
import { ResponsiveSpace } from "../internal";
import { normalizeResponsiveValue, OptionalResponsiveValue } from "../internal/sprinkles.css";
import { childKey } from "../util/childKey";
import { Children } from "../util/Children";
import {
  CollapsibleAlignmentProps,
  responsiveCollapsibleAlignmentProps,
} from "../util/collapsible";
import { wideWidths, desktopWidths, tabletWidths, mobileWidths, fullWidth } from "./Column.css";

type ColumnProps = {
  children: Children;
  width?: OptionalResponsiveValue<keyof typeof wideWidths>;
  sticky?: {
    top: BoxProps["top"];
  };
};

export function Column({ children, width, sticky }: ColumnProps) {
  const { wide, desktop, tablet, mobile } = width
    ? normalizeResponsiveValue(width)
    : { wide: undefined, desktop: undefined, tablet: undefined, mobile: undefined };

  const className =
    width == null
      ? fullWidth
      : [
          wide && wideWidths[wide],
          desktop && desktopWidths[desktop],
          tablet && tabletWidths[tablet],
          mobile && mobileWidths[mobile],
        ];

  const stickyProps = sticky ? ({ position: "sticky", top: sticky.top } as const) : {};

  return (
    <Box className={className} {...stickyProps}>
      {children}
    </Box>
  );
}

type Props = {
  space: ResponsiveSpace;
  children: Children;
} & CollapsibleAlignmentProps;

export function Columns({ space, children, align, alignY, collapseBelow, reverse }: Props) {
  return (
    <Box
      display="flex"
      gap={space}
      {...responsiveCollapsibleAlignmentProps({ align, alignY, collapseBelow, reverse })}
    >
      {flattenChildren(children).map((child, index) => {
        if (isColumn(child)) {
          return child;
        }
        return <Column key={childKey(child, index)}>{child as Children}</Column>;
      })}
    </Box>
  );
}

function isColumn(child: ReactChild): child is ReactElement<ColumnProps> {
  return typeof child === "object" && "type" in child && child.type === Column;
}
