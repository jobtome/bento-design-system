import { createComponentStories, formatMessage } from "../util";
import { Tabs } from "../";

const { defaultExport, createControlledStory } = createComponentStories({
  component: Tabs,
  args: {},
});

export default defaultExport;

export const tabs = createControlledStory("tab1", {
  tabs: [
    {
      label: formatMessage("Tab 1"),
      value: "tab1",
    },
    {
      label: formatMessage("Tab 2"),
      value: "tab2",
    },
    {
      label: formatMessage("Tab 3"),
      value: "tab3",
      disabled: true,
    },
    {
      label: formatMessage("Tab 4"),
      value: "tab4",
    },
  ],
});