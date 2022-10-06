import { Box } from "..";
import { createComponentStories } from "../util";

const { defaultExport, createStory } = createComponentStories({
  component: Box,
  args: {
    children: "Test",
  },
});

export default defaultExport;

export const Primary = createStory({
  color: "textPrimary",
  fontFamily: "default",
  padding: 16,
});

export const CustomTokens = createStory({
  color: "customColor1",
  fontFamily: "customFontFamily",
  padding: 12,
});
