import { Tooltip, TooltipProps } from "recharts";
import { useBentoConfig } from "../../BentoConfigContext";
import { Box } from "../../Box/Box";
import { cardRecipe } from "../../Card/Card.css";
import { Column, Columns } from "../../Layout/Columns";
import { Stack } from "../../Layout/Stack";
import { Body } from "../../Typography/Body/Body";
import { NameType, ValueType } from "../ValueFormatter";

//note(fede): the internal tooltip wrapper of recharts gets automatically focused
//on every render, which happen on mouse movement. focus is needed for accessibility,
//in order to allow users to dismiss the tooltip with the ESC key, but is also quite ugly,
//so we hide it.
export const tooltipStyle = { outline: "none" };

export const useTooltip = <TValue extends ValueType, TName extends NameType>(
  options: Omit<TooltipProps<TValue, TName>, "wrapperStyle" | "content">
) => {
  const cardConfig = useBentoConfig().card;

  const tooltipContent = ({
    active,
    payload = [],
    label,
    formatter,
  }: TooltipProps<TValue, TName>) => {
    if (!active || payload.length === 0) {
      return null;
    }

    return (
      <Box
        className={cardRecipe({ elevation: "small" })}
        borderRadius={cardConfig.defaultRadius}
        padding={16}
        tabIndex={-1}
      >
        <Stack space={8}>
          <Body size="medium">{label}</Body>
          <Stack space={4}>
            {payload.map(({ value, name, color, payload: item }, index) => {
              const formatterResult =
                formatter && name && value ? formatter(value, name, item, index, payload) : value;
              const formattedText = Array.isArray(formatterResult)
                ? `${formatterResult[1]}: ${formatterResult[0]}`
                : typeof formatterResult === "string" || typeof formatterResult === "number"
                ? `${name}: ${formatterResult}`
                : `${name}: ${value}`;
              return (
                <Columns key={name} space={4} alignY="center">
                  <Column width="content">
                    <Box
                      height={16}
                      width={16}
                      borderRadius={4}
                      style={{ backgroundColor: color }}
                    />
                  </Column>
                  <Body size="small">{formattedText}</Body>
                </Columns>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    );
  };

  return <Tooltip wrapperStyle={tooltipStyle} content={tooltipContent} {...options} />;
};
