import { createComponentStories, textArgType } from "../../util";
import { Title } from "../..";

const { defaultExport, createStory } = createComponentStories({
  component: Title,
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
