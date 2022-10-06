import { createComponentStories, textArgType } from "../../util";
import { Label } from "../..";

const { defaultExport, createStory } = createComponentStories({
  component: Label,
  args: {
    children: "The quick brown fox",
  },
  argTypes: {
    children: textArgType,
  },
});

export default defaultExport;

export const Small = createStory({
  size: "small",
});

export const Medium = createStory({
  size: "medium",
});

export const Large = createStory({
  size: "large",
});

export const Uppercase = createStory({
  size: "medium",
  uppercase: true,
});
