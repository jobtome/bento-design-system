import { createComponentStories, textArgType } from "../util";
import { IconButton } from "../";
import { IconPlaceholder } from "@buildo/bento-design-system";

const { defaultExport, createStory } = createComponentStories({
  component: IconButton,
  args: {
    label: "Button",
    icon: IconPlaceholder,
    size: 12,
  },
  argTypes: {
    label: textArgType,
  },
});

export default defaultExport;

export const PrimarySolid = createStory({
  kind: "solid",
  hierarchy: "primary",
});

export const SecondarySolid = createStory({
  kind: "solid",
  hierarchy: "secondary",
});

export const DangerSolid = createStory({
  kind: "solid",
  hierarchy: "danger",
});

export const PrimaryTransparent = createStory({
  kind: "transparent",
  hierarchy: "primary",
});

export const SecondaryTransparent = createStory({
  kind: "transparent",
  hierarchy: "secondary",
});

export const DangerTransparent = createStory({
  kind: "transparent",
  hierarchy: "danger",
});

export const SolidDisabled = createStory({
  kind: "solid",
  hierarchy: "primary",
  isDisabled: true,
});

export const TransparentDisabled = createStory({
  kind: "transparent",
  hierarchy: "primary",
  isDisabled: true,
});

export const PrimaryOutline = createStory({
  kind: "outline",
  hierarchy: "primary",
});

export const SecondaryOutline = createStory({
  kind: "outline",
  hierarchy: "secondary",
});

export const DangerOutline = createStory({
  kind: "outline",
  hierarchy: "danger",
});

export const OutlineDisabled = createStory({
  kind: "outline",
  hierarchy: "primary",
  isDisabled: true,
});
