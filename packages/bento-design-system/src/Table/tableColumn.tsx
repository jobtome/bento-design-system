import { CellProps, Column as Column_, Row as Row_ } from "react-table";
import { useDefaultMessages } from "../util/useDefaultMessages";
import { LocalizedString, Children, Body, IconProps, Box } from "..";
import { Column } from "./types";
import {
  LinkCell,
  IconCell,
  LabelCell,
  TextCell,
  ButtonCell,
  ChipCell,
  ButtonLinkCell,
  TextWithIconCell,
  IconButtonCell,
} from "./cells";
import { FunctionComponent } from "react";

export type { CellProps } from "react-table";

export type ColumnOptionsBase<A> = {
  accessor: A;
  headerLabel?: LocalizedString;
  missingValue?: LocalizedString;
  width?: Column_<{}>["gridWidth"];
} & Omit<Column_<{}>, "accessor" | "Header" | "Cell" | "sortType" | "width" | "gridWidth">;

export function custom<A extends string, V, D extends Record<string, unknown>>({
  headerLabel,
  sortType,
  missingValue,
  width,
  ...options
}: ColumnOptionsBase<A> & {
  Cell: (props: CellProps<D, V>) => Children;
  sortType?: (valueA: V | undefined, valueB: V | undefined) => number;
}): Column<A, D, V> {
  const column = {
    ...options,
    gridWidth: width,
    Cell: (props) => {
      const { defaultMessages } = useDefaultMessages();
      if (props.value == null) {
        const value = missingValue ?? defaultMessages.Table.missingValue;
        return (
          <Box padding={16} textAlign={options.align}>
            <Body size="medium">{value}</Body>
          </Box>
        );
      } else {
        return options.Cell(props);
      }
    },
    Header: headerLabel,
  } as Column<A, D, V>;

  if (sortType) {
    // NOTE(gabro): react-table makes a distinction between a missing sortType (which makes it use the default)
    // and explicitly setting undefined (which causes an error).
    column.sortType = (rowA: Row_<D>, rowB: Row_<D>, columnId: string) =>
      rowA.isGrouped || rowB.isGrouped
        ? 0
        : sortType(rowA.original[columnId] as V, rowB.original[columnId] as V);
  }

  return column;
}

export function button<A extends string>(options: ColumnOptionsBase<A>) {
  return custom({
    ...options,
    Cell: ButtonCell,
    sortType: (a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""),
  });
}

export function buttonLink<A extends string>(options: ColumnOptionsBase<A>) {
  return custom({
    ...options,
    Cell: ButtonLinkCell,
    sortType: (a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""),
  });
}

export function chip<A extends string>(options: ColumnOptionsBase<A>) {
  return custom({
    ...options,
    Cell: ChipCell,
    sortType: (a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""),
  });
}

export function text<A extends string>(options: ColumnOptionsBase<A>) {
  return custom({
    ...options,
    Cell: TextCell,
  });
}

export function textWithIcon<A extends string>({
  iconPosition,
  ...options
}: ColumnOptionsBase<A> & {
  iconPosition: "left" | "right";
}) {
  return custom({
    ...options,
    Cell: ({
      value: _value,
      ...props
    }: CellProps<
      {},
      {
        icon: FunctionComponent<IconProps> | null;
        text: LocalizedString;
        tooltipContent?: Children;
      }
    >) => {
      const value = { ..._value, iconPosition };
      const textWithIconCellProps = {
        ...props,
        value,
        cell: { ...props.cell, value },
      };
      return <TextWithIconCell {...textWithIconCellProps} />;
    },
    sortType: (a, b) => (a?.text ?? "").localeCompare(b?.text ?? ""),
  });
}

export function number<A extends string>({
  valueFormatter,
  ...options
}: ColumnOptionsBase<A> & {
  valueFormatter: (n: number) => LocalizedString;
}) {
  return custom({
    ...options,
    Cell: ({ value: numericValue, ...props }: CellProps<{}, number>) => {
      const value = valueFormatter(numericValue);
      const textCellProps = {
        ...props,
        value,
        cell: { ...props.cell, value },
      };
      return <TextCell {...textCellProps} />;
    },
    sortType: (a = 0, b = 0) => a - b,
  });
}

export function numberWithIcon<A extends string>({
  valueFormatter,
  ...options
}: ColumnOptionsBase<A> & {
  valueFormatter: (n: number) => LocalizedString;
}) {
  return custom({
    ...options,
    Cell: ({
      value: { numericValue, icon, tooltipContent },
      ...props
    }: CellProps<
      {},
      {
        icon: FunctionComponent<IconProps> | null;
        numericValue: number;
        tooltipContent?: Children;
      }
    >) => {
      const value = {
        text: valueFormatter(numericValue),
        icon,
        iconPosition: "right" as const,
        tooltipContent,
      };
      const textCellProps = {
        ...props,
        value,
        cell: { ...props.cell, value },
      };
      return <TextWithIconCell {...textCellProps} />;
    },
    sortType: (a, b) => (a?.numericValue || 0) - (b?.numericValue || 0),
  });
}

export function label<A extends string>(options: ColumnOptionsBase<A>) {
  return custom({
    ...options,
    Cell: LabelCell,
  });
}

export function link<A extends string>(options: ColumnOptionsBase<A>) {
  return custom({
    ...options,
    Cell: LinkCell,
    sortType: (a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""),
  });
}

export function icon<A extends string>(options: ColumnOptionsBase<A>) {
  return custom({
    ...options,
    Cell: IconCell,
    sortType: (a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""),
  });
}

export function iconButton<A extends string>(options: ColumnOptionsBase<A>) {
  return custom({
    ...options,
    Cell: IconButtonCell,
    sortType: (a, b) => (a?.label ?? "").localeCompare(b?.label ?? ""),
  });
}
