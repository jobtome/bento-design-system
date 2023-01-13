import { mergeProps } from "@react-aria/utils";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { Box, Columns, Column, Body, Children } from "..";
import { useFocusRing } from "@react-aria/focus";
import { checkboxRecipe, fieldContainer } from "./Checkbox.css";
import { vars } from "../vars.css";
import { useLabel } from "@react-aria/label";
import { InputHTMLAttributes, Ref } from "react";
import { useBentoConfig } from "../BentoConfigContext";

type CheckboxUIProps = {
  value: boolean;
  isDisabled: boolean;
  isFocusVisible: boolean;
};

function CheckboxUI({ value, isFocusVisible, isDisabled }: CheckboxUIProps) {
  const config = useBentoConfig().selectionControl.element;
  return (
    <Box
      className={checkboxRecipe({ isSelected: value, isFocused: isFocusVisible, isDisabled })}
      borderRadius={config.checkboxBorderRadius}
    >
      {value && <CheckboxMark isDisabled={isDisabled} />}
    </Box>
  );
}

function CheckboxMark({ isDisabled }: { isDisabled: boolean }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path
        d="M2 5.89744L6 10L14 2"
        stroke={
          isDisabled
            ? vars.interactiveForegroundColor.disabledSolidForeground
            : vars.interactiveForegroundColor.primarySolidEnabledForeground
        }
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  option: {
    label: Children;
    isSelected: boolean;
    isDisabled?: boolean;
  };
  inputRef: Ref<HTMLInputElement>;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};

export function InternalCheckbox({ option, inputRef, inputProps }: Props) {
  const config = useBentoConfig().selectionControl.element;
  const { fieldProps, labelProps } = useLabel(option);
  const { isFocusVisible, focusProps } = useFocusRing({ autoFocus: inputProps.autoFocus });
  return (
    <Box
      as="label"
      disabled={option.isDisabled}
      {...labelProps}
      {...focusProps}
      color={undefined}
      cursor={{ default: "pointer", disabled: "notAllowed" }}
      paddingBottom={4}
      className={fieldContainer}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, fieldProps, focusProps)} ref={inputRef} />
      </VisuallyHidden>
      <Columns space={config.controlLabelSpacing}>
        <Column width="content">
          <CheckboxUI
            value={option.isSelected}
            isFocusVisible={isFocusVisible}
            isDisabled={option.isDisabled ?? false}
          />
        </Column>
        <Box style={{ paddingTop: config.labelPaddingTop }}>
          <Body size={config.labelSize} color={option.isDisabled ? "disabled" : "primary"}>
            {option.label}
          </Body>
        </Box>
      </Columns>
    </Box>
  );
}

export type { Props as CheckboxProps };
