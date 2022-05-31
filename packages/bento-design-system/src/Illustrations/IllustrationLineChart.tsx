import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationLineChart(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path d="M6.25 23.75h67.5v45H6.25v-45Z" fill="#C5E4FA" />
        <path
          d="M49.7 68.75 73.75 44.7V23.85h-3.213l-44.9 44.9H49.7Zm-38.575 0h9.625l44.9-44.9h-9.625l-44.9 44.9ZM6.25 66.5v1h.6L50.5 23.85h-1.6L6.25 66.5Z"
          fill="#E3F2FF"
        />
        <path
          d="m20.625 30 1.55 2.825L25 34.375l-2.825 1.55-1.55 2.825-1.55-2.825-2.825-1.55 2.825-1.55L20.625 30Zm44.9 21.45 1.063 1.962 1.962 1.063-1.962 1.075-1.063 1.95-1.075-1.95-1.95-1.075 1.95-1.063 1.075-1.962ZM34.562 28.375l.726 1.337 1.337.726-1.337.725-.725 1.337-.726-1.337-1.337-.726 1.337-.725.725-1.337Z"
          fill="#FFF8F8"
        />
        <path d="M6.25 11.25h67.5v12.5H6.25v-12.5Z" fill="#CED8ED" />
        <path
          d="M16.25 48.75a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm10 3.75a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM40 41.25a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm11.25-15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
          fill="#F9EFDE"
        />
        <path
          d="M68.75 22.5h-5a1.25 1.25 0 0 0 0 2.5h5a1.25 1.25 0 0 0 0-2.5ZM25 15a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 25 15Zm-6.25 0a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 18.75 15Zm-6.25 0a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 12.5 15Zm31.25 0a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 43.75 15ZM50 15a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 50 15Zm6.25 0A1.25 1.25 0 0 0 55 16.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 56.25 15Zm7.5 3.75v-2.5a1.25 1.25 0 0 0-2.5 0v2.5a1.25 1.25 0 0 0 2.5 0Zm5-3.75a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 68.75 15Zm-37.5 0A1.25 1.25 0 0 0 30 16.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 31.25 15Zm6.25 0a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 0 0 2.5 0v-2.5A1.25 1.25 0 0 0 37.5 15Z"
          fill="#8D6C9F"
        />
        <path
          d="M71.25 10H8.75A3.75 3.75 0 0 0 5 13.75v52.5A3.75 3.75 0 0 0 8.75 70h62.5A3.75 3.75 0 0 0 75 66.25v-52.5A3.75 3.75 0 0 0 71.25 10Zm1.25 56.25a1.25 1.25 0 0 1-1.25 1.25H8.75a1.25 1.25 0 0 1-1.25-1.25v-4.487l7.137-7.138a3.675 3.675 0 0 0 4.463-.975l3.4 1.25v.063a3.75 3.75 0 0 0 7.5 0 3.75 3.75 0 0 0-.238-1.25l8.3-6.788a3.75 3.75 0 0 0 4.013-.075l4.362 3.275a3.75 3.75 0 0 0-.187 1.125 3.75 3.75 0 1 0 6.875-2.075l7.025-9.362c.355.116.726.18 1.1.187a3.75 3.75 0 1 0-3.125-1.675L51.1 47.687a3.612 3.612 0 0 0-3.188.45l-4.362-3.275a3.75 3.75 0 0 0 .2-1.112 3.75 3.75 0 1 0-7.5 0c.007.427.088.85.237 1.25l-8.3 6.788a3.687 3.687 0 0 0-4.787.787l-3.4-1.25v-.063a3.75 3.75 0 0 0-7.5 0 3.75 3.75 0 0 0 .375 1.613L7.5 58.237V25h51.25a1.25 1.25 0 0 0 0-2.5H7.5v-8.75a1.25 1.25 0 0 1 1.25-1.25h62.5a1.25 1.25 0 0 1 1.25 1.25v52.5Zm-57.712-15a1.462 1.462 0 1 1 2.924 0 1.462 1.462 0 0 1-2.925 0ZM27.7 55a1.462 1.462 0 1 1-1.45-1.462A1.462 1.462 0 0 1 27.712 55H27.7ZM40 45.187a1.437 1.437 0 1 1 0-2.874 1.437 1.437 0 0 1 0 2.874Zm11.462 6.063a1.462 1.462 0 1 1-2.924 0 1.462 1.462 0 0 1 2.925 0Zm8.338-15a1.462 1.462 0 1 1 1.45 1.462 1.463 1.463 0 0 1-1.462-1.462h.012Z"
          fill="#8D6C9F"
        />
      </>
    ),
    outline: (
      <path d="M8.75 10A3.757 3.757 0 0 0 5 13.75v52.5A3.757 3.757 0 0 0 8.75 70h62.5A3.757 3.757 0 0 0 75 66.25v-52.5A3.757 3.757 0 0 0 71.25 10H8.75Zm0 2.5h62.5c.689 0 1.25.562 1.25 1.25v52.5c0 .689-.561 1.25-1.25 1.25H8.75c-.688 0-1.25-.561-1.25-1.25v-4.482l7.144-7.144A3.7 3.7 0 0 0 16.25 55c1.148 0 2.163-.532 2.852-1.348l3.403 1.28c0 .024-.005.044-.005.068a3.757 3.757 0 0 0 3.75 3.75A3.757 3.757 0 0 0 30 55c0-.444-.093-.864-.234-1.265l8.3-6.787A3.735 3.735 0 0 0 40 47.5c.767 0 1.48-.234 2.075-.63l4.365 3.267c-.112.356-.19.722-.19 1.113A3.757 3.757 0 0 0 50 55a3.757 3.757 0 0 0 3.75-3.75c0-.767-.234-1.48-.63-2.075l7.017-9.365c.356.112.722.19 1.113.19A3.757 3.757 0 0 0 65 36.25a3.757 3.757 0 0 0-3.75-3.75 3.757 3.757 0 0 0-3.75 3.75c0 .767.234 1.48.63 2.075l-7.017 9.365A3.673 3.673 0 0 0 50 47.5c-.767 0-1.48.234-2.075.63l-4.365-3.267c.112-.356.19-.722.19-1.113A3.757 3.757 0 0 0 40 40a3.757 3.757 0 0 0-3.75 3.75c0 .444.093.864.234 1.265l-8.3 6.787a3.735 3.735 0 0 0-1.934-.552c-1.148 0-2.163.532-2.852 1.348l-3.403-1.28c0-.024.005-.044.005-.068a3.757 3.757 0 0 0-3.75-3.75 3.757 3.757 0 0 0-3.75 3.75 3.7 3.7 0 0 0 .376 1.606L7.5 58.232V25h51.25a1.25 1.25 0 1 0 0-2.5H7.5v-8.75c0-.688.562-1.25 1.25-1.25ZM12.5 15a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 12.5 15Zm6.25 0a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 18.75 15ZM25 15a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 25 15Zm6.25 0A1.25 1.25 0 0 0 30 16.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 31.25 15Zm6.25 0a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 37.5 15Zm6.25 0a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 43.75 15ZM50 15a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 50 15Zm6.25 0A1.25 1.25 0 0 0 55 16.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 56.25 15Zm6.25 0a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 62.5 15Zm6.25 0a1.25 1.25 0 0 0-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5A1.25 1.25 0 0 0 68.75 15Zm-5 7.5a1.25 1.25 0 1 0 0 2.5h5a1.25 1.25 0 1 0 0-2.5h-5Zm-2.5 12.29a1.46 1.46 0 1 1-.002 2.922 1.46 1.46 0 0 1 .002-2.922ZM40 42.32a1.43 1.43 0 1 1 0 2.86 1.43 1.43 0 1 1 0-2.86Zm-23.75 7.47a1.46 1.46 0 1 1-.002 2.922 1.46 1.46 0 0 1 .002-2.922Zm33.75 0a1.46 1.46 0 1 1-.002 2.922A1.46 1.46 0 0 1 50 49.79Zm-23.75 3.75a1.46 1.46 0 1 1-.002 2.922 1.46 1.46 0 0 1 .002-2.922Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style]}</svg>;
}
