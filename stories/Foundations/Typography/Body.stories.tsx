import { createComponentStories, formatMessage, textArgType } from "../../util";
import { Body } from "../../../src/Typography/Body/Body";

const { defaultExport, createStory } = createComponentStories({
  component: Body,
  args: {
    children: formatMessage("The quick brown fox jumps over the lazy dog"),
  },
  argTypes: {
    children: textArgType,
  },
});

export default defaultExport;

export const SizeSmall = createStory({
  size: "small",
});

export const SizeMedium = createStory({
  size: "medium",
});

export const SizeLarge = createStory({
  size: "large",
});

export const WeightRegular = createStory({
  size: "large",
});

export const WeightSemibold = createStory({
  weight: "semibold",
  size: "large",
});