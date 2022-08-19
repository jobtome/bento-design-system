import "@buildo/bento-design-system/lib/index.css";
import "@buildo/bento-design-system/lib/defaultTheme.css";
import "./theme.css";
import {
  createBentoComponents,
  defaultConfigs,
  withBentoConfig,
} from "@buildo/bento-design-system";
import { sprinkles } from "./sprinkles.css";

export * from "@buildo/bento-design-system";
const FeedbackBackground = (
  <svg viewBox="0 0 440 240">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M216.359.002c53.326-.339 88.99 43.31 105.704 88.826 17.02 46.353 18.03 100.923-25.166 130.506-45.698 31.296-110.66 25.407-155.721-6.625-40.128-28.524-41.51-78.741-26.019-122.566C131.055 45.165 163.854.336 216.359.002Z"
      fill="#FFE6EB"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M132.77 49.555c18.055 19.479 32.965 45.343 20.779 69.088-13.551 26.405-44.408 39.55-73.332 33.314-27.746-5.981-45.566-31.366-48.568-59.593C28.696 64.6 40.92 35.869 66.707 24.953c24.014-10.167 48.423 5.57 66.063 24.602Z"
      fill="#EFE6FF"
      style={{
        mixBlendMode: "multiply",
      }}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M402.634 144.466c17.137 9.029 24.196 30.235 19.175 48.98-4.464 16.666-21.996 24.115-39.161 25.637-16.614 1.474-34.836-3.115-41.269-18.504-6.25-14.952 4.501-29.877 16.464-40.836 12.87-11.788 29.38-23.397 44.791-15.277Z"
      fill="#FFF8E1"
    />
  </svg>
);

export const {
  Actions,
  AreaLoader,
  Avatar,
  Banner,
  Bleed,
  Body,
  Breadcrumb,
  Box,
  Button,
  ButtonLink,
  Card,
  Checkbox,
  CheckboxField,
  CheckboxGroupField,
  Chip,
  Column,
  Columns,
  ContentWithSidebar,
  CustomModal,
  DateField,
  DesignSystemProvider,
  DecorativeDivider,
  Disclosure,
  DisclosureGroup,
  Display,
  Feedback,
  Field,
  Form,
  FormRow,
  FormSection,
  Headline,
  IconButton,
  Inline,
  InlineLoader,
  Inset,
  Label,
  List,
  ListItem,
  Menu,
  Modal,
  Navigation,
  NumberField,
  Placeholder,
  ProgressBar,
  Popover,
  SearchBar,
  Stepper,
  StepperStep,
  RadioGroupField,
  ReadOnlyField,
  SelectField,
  SliderField,
  Stack,
  Switch,
  Table,
  tableColumn,
  Tabs,
  Tiles,
  Title,
  Toast,
  ToastProvider,
  Tooltip,
  TextField,
  TextArea,
  IconIdea,
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
  IconClose,
  IconInformative,
  IconMinus,
  IconNegative,
  IconPlaceholder,
  IconPositive,
  IconSearch,
  IconUser,
  IconWarning,
  IllustrationIdea,
  IllustrationPositive,
  IllustrationNegative,
  IllustrationSearch,
  useComponentsShowcase,
} = createBentoComponents(sprinkles, {
  chip: {
    customColors: {
      custom: "customColor1",
    },
  },
  feedback: {
    background: FeedbackBackground,
  },
});

export const FolderTabs = Tabs;
export const UnderlineTabs = withBentoConfig({ tabs: defaultConfigs.underlineTabs }, Tabs);
export const RightActions = Actions;
export const LeftActions = withBentoConfig(
  {
    actions: {
      ...defaultConfigs.actions,
      buttonsAlignment: "left",
      primaryPosition: "left",
    },
  },
  Actions
);
export const SpaceBetweenActions = withBentoConfig(
  {
    actions: {
      ...defaultConfigs.actions,
      buttonsAlignment: "spaceBetween",
    },
  },
  Actions
);
