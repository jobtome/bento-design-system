import {
  PieChart as RechartPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useBentoConfig } from "../../BentoConfigContext";
import { bodyRecipe } from "../../Typography/Body/Body.css";
import { allColors } from "../../util/atoms";
import { ChartProps } from "../ChartProps";
import { legendContent } from "../Legend/Legend";
import { tooltipContent } from "../Tooltip/Tooltip";

type Props<D extends string, C extends string> = ChartProps & {
  data: Record<C | D, unknown>[];
  category: C;
  dataKey: D;
};

export type { Props as DonutChartProps };

export function DonutChart<D extends string, C extends string>({
  data,
  dataKey,
  category,
  hideLegend = false,
  disableAnimation = false,
  hideTooltip = false,
  width = "100%",
  height,
  minWidth,
  minHeight,
  maxHeight,
  aspect,
  debounce,
  dataColors,
  children,
}: Props<D, C>) {
  const config = useBentoConfig();
  const colors = (dataColors ?? config.chart.defaultDataColors).map(
    (colorName) => allColors[colorName]
  );

  return (
    <ResponsiveContainer
      className={bodyRecipe({ size: "medium", weight: "default", color: "default" })}
      width={width}
      height={height}
      minWidth={minWidth}
      minHeight={minHeight}
      maxHeight={maxHeight}
      aspect={aspect}
      debounce={debounce}
    >
      <RechartPieChart>
        <Pie
          data={data}
          dataKey={category}
          nameKey={dataKey}
          isAnimationActive={!disableAnimation}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270}
          innerRadius="75%"
          outerRadius="100%"
          paddingAngle={0}
          // Remove 1px gap between slices
          stroke=""
        >
          {data.map((_entry, i) => (
            <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
          ))}
        </Pie>
        {!hideTooltip && <Tooltip content={tooltipContent} />}
        {!hideLegend && <Legend content={legendContent} />}
        {children}
      </RechartPieChart>
    </ResponsiveContainer>
  );
}
