import { useSwitch } from "@react-aria/switch";
import { useFocusRing } from "@react-aria/focus";
import { useField } from "@react-aria/label";
import { mergeProps } from "@react-aria/utils";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useToggleState } from "@react-stately/toggle";
import { useRef } from "react";
import { Body, Children, Box, Column, Columns, Field } from "..";
import { FieldProps } from "../Field/FieldProps";
import { switchContainer, switchOuterRecipe, switchInnerRecipe } from "./Switch.css";
import { useBentoConfig } from "../BentoConfigContext";

type Props = Omit<FieldProps<boolean>, "assistiveText"> & {
  label: Children;
  switchPosition?: "leading" | "trailing";
};

export function Switch(props: Props) {
  const config = useBentoConfig().selectionControl.element;
  const switchProps = {
    ...props,
    value: undefined,
    isSelected: props.value,
    isDisabled: props.disabled,
    children: props.label,
  };
  const state = useToggleState(switchProps);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useSwitch(switchProps, state, ref);
  const { fieldProps, labelProps } = useField(switchProps);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Field {...props} label={undefined} assistiveTextProps={{}} errorMessageProps={{}}>
      <Box
        as="label"
        disabled={props.disabled}
        {...labelProps}
        {...focusProps}
        color={undefined}
        cursor={{ default: "pointer", disabled: "notAllowed" }}
        className={switchContainer}
      >
        <VisuallyHidden>
          <input {...mergeProps(inputProps, fieldProps, focusProps)} ref={ref} />
        </VisuallyHidden>
        <Columns space={config.controlLabelSpacing} reverse={props.switchPosition === "trailing"}>
          <Column width="content">
            <SwitchIndicator
              value={props.value}
              isFocusVisible={isFocusVisible}
              isDisabled={props.disabled ?? false}
            />
          </Column>
          <Box style={{ paddingTop: config.labelPaddingTop }}>
            <Body size={config.labelSize} color={props.disabled ? "disabled" : "default"}>
              {props.label}
            </Body>
          </Box>
        </Columns>
      </Box>
    </Field>
  );
}

type SwitchIndicatorProps = {
  value: boolean;
  isDisabled: boolean;
  isFocusVisible: boolean;
};

function SwitchIndicator({ value, isFocusVisible, isDisabled }: SwitchIndicatorProps) {
  return (
    <Box
      className={switchOuterRecipe({
        isSelected: value,
        isFocused: isFocusVisible,
        isDisabled,
      })}
    >
      <Box
        className={switchInnerRecipe({ isSelected: value, isFocused: isFocusVisible, isDisabled })}
      />
    </Box>
  );
}

export type { Props as SwitchProps };
