import { DOMAttributes, ElementType, FunctionComponent, LabelHTMLAttributes } from "react";
import { Body } from "../Typography/Body/Body";
import { Label } from "../Typography/Label/Label";
import { Stack, Box, Columns, Column, TooltipProps } from "..";
import { Children } from "../util/Children";
import { FieldProps } from "./FieldProps";
import { FieldConfig } from "./Config";
import { IconNegative } from "../Icons";
import { FocusableElement } from "@react-types/shared";

type Props = Pick<FieldProps<never>, "issues" | "disabled" | "assistiveText" | "hint"> & {
  /** The field label rendered on screen. Can be omitted in case of fields that have a custom label, such as CheckboxField  */
  label?: FieldProps<never>["label"];
  /** The dom element used to render the label. Defaults to <label>, but can be customized for fields that are group of inputs, like RadioGroup.
   *  @default "label"
   */
  labelElement?: ElementType<any>;
  /** Props that gets spread on the label element, usually coming from a react-aria utility */
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  /** Props that gets spread on the assistiveText , usually coming from a react-aria utility (note: react-aria usually calls them descriptionProps) */
  assistiveTextProps: DOMAttributes<FocusableElement>;
  /** Props that gets spread on the errorMessage element , usually coming from a react-aria utility */
  errorMessageProps: DOMAttributes<FocusableElement>;
  /** The field element */
  children: Children;
};

/**
 * A utility for rendering a form field with a label, a description and error message, alongside their accessibility props.
 * This is meant as an internal design system utility for implementing form fields.
 */
export function createField(
  config: FieldConfig,
  {
    Tooltip,
  }: {
    Tooltip: FunctionComponent<TooltipProps>;
  }
) {
  return function Field({
    label,
    assistiveText,
    issues,
    labelProps,
    assistiveTextProps,
    errorMessageProps,
    children,
    disabled,
    labelElement = "label",
    hint,
  }: Props) {
    return (
      <Box disabled={disabled} cursor={{ disabled: "notAllowed" }}>
        <Stack space={config.internalSpacing}>
          {(label || hint) && (
            <Columns space={8} alignY="bottom">
              {label && (
                <Label
                  as={labelElement}
                  {...labelProps}
                  size={config.label.size}
                  color={disabled ? "disabled" : config.label.color}
                >
                  {label}
                </Label>
              )}
              {hint && (
                <Column width="content">
                  <Tooltip
                    trigger={(ref, props) => (
                      <Box display="inline-block" ref={ref} {...props}>
                        {config.tip.icon({
                          size: config.tip.iconSize,
                          color: disabled ? "disabled" : "secondary",
                        })}
                      </Box>
                    )}
                    content={hint}
                  />
                </Column>
              )}
            </Columns>
          )}
          {children}
          {assistiveText && !issues && (
            <Box paddingLeft={config.assistiveText.paddingLeft}>
              <Box {...assistiveTextProps}>
                <Body size={config.assistiveText.size} color={disabled ? "disabled" : "secondary"}>
                  {assistiveText}
                </Body>
              </Box>
            </Box>
          )}
          {issues && (
            <Box paddingLeft={config.assistiveText.paddingLeft}>
              <Stack space={4}>
                {issues.map((errorMessage, index) => (
                  <Columns space={4} alignY="center">
                    <Column width="content">
                      <IconNegative size={12} color="negative" />
                    </Column>
                    <Box {...errorMessageProps}>
                      <Body key={index} size={config.assistiveText.size} color="negative">
                        {errorMessage}
                      </Body>
                    </Box>
                  </Columns>
                ))}
              </Stack>
            </Box>
          )}
        </Stack>
      </Box>
    );
  };
}

export type FieldType = React.FunctionComponent<Props>;
export type { Props as FieldProps };
