import { useCheckbox } from "@react-aria/checkbox";
import { useToggleState } from "@react-stately/toggle";
import { useRef } from "react";
import { Children, Field } from "..";
import { FieldProps } from "../Field/FieldProps";
import { InternalCheckbox } from "../Checkbox/InternalCheckbox";
import { useField } from "@react-aria/label";

type Props = Omit<FieldProps<boolean>, "assistiveText"> & {
  label: Children;
};

export function CheckboxField(props: Props) {
  const checkboxProps = {
    ...props,
    value: undefined,
    isSelected: props.value,
    isDisabled: props.disabled,
    children: props.label,
    validationState:
      props.issues && props.issues.length > 0 ? ("invalid" as const) : ("valid" as const),
    errorMessage: props.issues && props.issues.join(" "),
  };
  const state = useToggleState(checkboxProps);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps: _inputProps } = useCheckbox(checkboxProps, state, ref);
  const { fieldProps, errorMessageProps } = useField(checkboxProps);
  const inputProps = { ..._inputProps, "aria-describedby": fieldProps["aria-describedby"] };

  return (
    <Field
      {...props}
      label={undefined}
      assistiveTextProps={{}}
      errorMessageProps={errorMessageProps}
    >
      <InternalCheckbox option={checkboxProps} inputProps={inputProps} inputRef={ref} />
    </Field>
  );
}

export type { Props as CheckboxFieldProps };
