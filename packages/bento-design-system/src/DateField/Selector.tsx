import { MonthType } from "@datepicker-react/hooks";
import { useDateFormatter } from "@react-aria/i18n";
import { useMemo } from "react";
import { Box, Column, Columns, Menu } from "..";
import { useBentoConfig } from "../BentoConfigContext";
import { ListProps } from "../List/List";
import { Label } from "../Typography/Label/Label";
import { selector } from "./DateField.css";

function getYears(activeDate: Date): Date[] {
  const firstYear = new Date().getFullYear() - 100;
  return Array(200)
    .fill(0)
    .map((_, diff) => {
      const yearDate = new Date(activeDate);
      yearDate.setFullYear(firstYear + diff);
      return yearDate;
    });
}

function getMonths(activeDate: Date): Date[] {
  return Array(12)
    .fill(0)
    .map((_, month) => {
      const monthDate = new Date(activeDate);
      monthDate.setMonth(month);
      return monthDate;
    });
}

export function Selector(props: {
  datePart: "month" | "year";
  activeMonth: MonthType;
  onSelect: (date: Date) => void;
}) {
  const config = useBentoConfig().dateField;
  const formatter = useDateFormatter(
    props.datePart === "month" ? { month: "long" } : { year: "numeric" }
  );

  const values =
    props.datePart === "month"
      ? getMonths(props.activeMonth.date)
      : getYears(props.activeMonth.date);

  const options: ListProps["items"] = useMemo(
    () =>
      values.map((value) => {
        return {
          label: formatter.format(value),
          onPress: () => props.onSelect(value),
          isSelected: value.getTime() === props.activeMonth.date.getTime(),
        };
      }),
    [values, props.activeMonth]
  );

  return (
    <Menu
      size="medium"
      trigger={(ref, triggerProps, { isOpen }) => (
        <Box ref={ref} {...triggerProps} cursor="pointer" outline="none" className={selector}>
          <Columns space={8} align="center" alignY="center">
            <Column width="content">
              <Label size={config.monthYearLabelSize} color="secondary" uppercase>
                {formatter.format(props.activeMonth.date)}
              </Label>
            </Column>
            <Column width="content">
              {isOpen
                ? config.monthYearSelectIcons.open({ size: 12 })
                : config.monthYearSelectIcons.close({ size: 12 })}
            </Column>
          </Columns>
        </Box>
      )}
      items={options}
      closeOnSelect
    />
  );
}
