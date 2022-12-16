import { NumberField } from "../";
import { createComponentStories, fieldArgTypes, textArgType } from "../util";

const { defaultExport, createStory, createControlledStory } = createComponentStories({
  component: NumberField,
  args: {
    name: "applications",
    label: "Applications",
    placeholder: "Number of target applications",
    assistiveText: "The number of applications this campaign is targeting",
  },
  argTypes: {
    ...fieldArgTypes,
    placeholder: textArgType,
  },
});

export default defaultExport;

export const Default = createControlledStory<number | undefined>(undefined, {});

export const Disabled = createControlledStory(0, {
  disabled: true,
});

export const Error = createControlledStory(0, {
  issues: ["Please insert a number greater than 2"],
});

export const Currency = createControlledStory(0, {
  kind: "currency",
  currency: "EUR",
});

export const Percentage = createControlledStory(0, {
  kind: "percentage",
});

export const ReadOnly = createStory({
  value: 50,
  kind: "percentage",
  isReadOnly: true,
});

export const MinMaxAndStep = createControlledStory(5, {
  minValue: 0.1,
  maxValue: 10,
  step: 0.5,
});

export const RightAccessory = createControlledStory(0, {
  rightAccessory: "👍",
});

export const KindAndRightAccessory = createControlledStory(0, {
  rightAccessory: "💰",
  kind: "currency",
  currency: "EUR",
});
