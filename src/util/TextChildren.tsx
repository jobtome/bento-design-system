import { isValidElement } from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Box } from "../internal/Box/Box";
import { Children } from "./Children";
import { LocalizedString } from "./LocalizedString";
import { NonEmptyArray } from "./NonEmptyArray";
import { splitBy } from "./splitBy";

/** `TextChildren` is a DSL for building type-safe rich localized strings.
 *  It's the composition of strings that have been localized (`LocalizedString`) and other elements
 *  such as bold text and line breaks.
 *
 *  The `textChildrenToChildren` function is a DSL interpreter that converts a `TextChildren` into a
 *  `Children` (which can be safely rendered by React).
 *
 *  To build a `TextChildren` you can use the `makeTextChildrenFromElements` function, which accepts
 *  an array of DSL elements. It's recommended to have a centralized method for building `TextChildren`
 *  in your app, similar to how you build `LocalizedString`s.
 *
 *  `LocalizedString` is always a valid `TextChildren` so it can be passed directly to any component
 *  accepting `TextChildren`, without further processing.
 *
 *  The recommended guideline for components is to accept text in the form of `LocalizedString` as
 *  the first choice (so that the component maintains full control over the formatting), and accept
 *  `TextChildren` only when you're ok in allowing arbitrary formatting.
 */

type TextChildrenConcreteType =
  | LocalizedString
  | LocalizedBold
  | LineBreak
  | NonEmptyArray<LocalizedString | LocalizedBold | LineBreak>;

export type TextChildren =
  | LocalizedString
  | (TextChildrenConcreteType & {
      readonly TextChildren: unique symbol;
    });

export type LineBreak = { type: "lineBreak" };

export const lineBreak: LineBreak = {
  type: "lineBreak",
};

export type LocalizedBold = { type: "bold"; text: LocalizedString };

export function bold(text: LocalizedString): LocalizedBold {
  return { type: "bold", text };
}

export function makeTextChildrenFromElements(c: TextChildrenConcreteType) {
  return c as TextChildren;
}

function textChildrenToChildrenArray(children: TextChildren): Array<Children> {
  if (Array.isArray(children)) {
    return children.flatMap((c) => textChildrenToChildrenArray(c as TextChildren));
  } else if (typeof children === "string") {
    return [children];
  }
  switch (children.type) {
    case "bold":
      return [
        // NOTE: we render a "raw" component, so that everything else
        // is inherited by the surrounding typography component
        <Box as="b" fontWeight="semibold">
          {children.text}
        </Box>,
      ];
    case "lineBreak":
      return [<br />];
  }
}

export function textChildrenToChildren(children: TextChildren): Children {
  const lines = splitBy(
    textChildrenToChildrenArray(children),
    (e) => isValidElement(e) && e.type === "br"
  );

  return flattenChildren(
    lines.flatMap((line, i) => (i < lines.length - 1 ? [line, <br />] : line))
  ) as Children;
}