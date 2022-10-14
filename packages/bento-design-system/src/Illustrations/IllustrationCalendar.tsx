import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationCalendar(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path
          d="M9.75 14.75h60a2.5 2.5 0 0 1 2.5 2.5v52.5a2.5 2.5 0 0 1-2.5 2.5h-60a2.5 2.5 0 0 1-2.5-2.5v-52.5a2.5 2.5 0 0 1 2.5-2.5Z"
          fill="#fff"
        />
        <path
          d="M12.25 64.75h55a5 5 0 0 1 5 5c0 1.375-1.125 2.5-2.5 2.5h-60a2.507 2.507 0 0 1-2.5-2.5 5 5 0 0 1 5-5Z"
          fill="#E2E9F7"
        />
        <path
          d="M9.75 14.75h60a2.5 2.5 0 0 1 2.5 2.5v7.5a3.75 3.75 0 0 1-3.75 3.75H11a3.75 3.75 0 0 1-3.75-3.75v-7.5a2.5 2.5 0 0 1 2.5-2.5Z"
          fill="#ED7899"
        />
        <path
          d="M19.75 7.25a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 1 1-5 0v-10a2.5 2.5 0 0 1 2.5-2.5Zm20 0a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 1 1-5 0v-10a2.5 2.5 0 0 1 2.5-2.5Zm20 0a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 1 1-5 0v-10a2.5 2.5 0 0 1 2.5-2.5Z"
          fill="#FFEFB8"
        />
        <path
          d="M28.5 36h11.25v11.25H28.5V36Zm-11.25 0H28.5v11.25H17.25V36Zm22.5 0H51v11.25H39.75V36Z"
          fill="#fff"
        />
        <path d="M51 36h11.25v11.25H51V36Z" fill="#E2E9F7" />
        <path
          d="M17.25 47.25H28.5V58.5H17.25V47.25Zm11.25 0h11.25V58.5H28.5V47.25Zm11.25 0H51V58.5H39.75V47.25Z"
          fill="#fff"
        />
        <path d="M51 47.25h11.25V58.5H51V47.25Z" fill="#E2E9F7" />
        <path
          d="M14.75 31c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25s-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25ZM21 31c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25s-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25Zm6.25 0c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25S26 26.561 26 27.25v2.5c0 .689.561 1.25 1.25 1.25Zm6.25 0c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25s-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25Zm6.25 0c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25s-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25ZM46 31c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25s-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25Zm6.25 0c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25S51 26.561 51 27.25v2.5c0 .689.561 1.25 1.25 1.25Zm6.25 0c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25s-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25Zm6.25 0c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25s-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25Zm2.5 32.5h-55c-.689 0-1.25.561-1.25 1.25S11.561 66 12.25 66h55c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25Z"
          fill="#8D6C9F"
        />
        <path
          d="M69.75 13.5H63.5V9.75C63.5 7.68 61.82 6 59.75 6 57.68 6 56 7.68 56 9.75v3.75H43.5V9.75C43.5 7.68 41.82 6 39.75 6 37.68 6 36 7.68 36 9.75v3.75H23.5V9.75C23.5 7.68 21.82 6 19.75 6 17.68 6 16 7.68 16 9.75v3.75H9.75C7.68 13.5 6 15.18 6 17.25v52.5c0 2.07 1.68 3.75 3.75 3.75h60c2.07 0 3.75-1.68 3.75-3.75v-52.5c0-2.07-1.68-3.75-3.75-3.75ZM58.5 9.75c0-.689.561-1.25 1.25-1.25S61 9.061 61 9.75v10c0 .689-.561 1.25-1.25 1.25s-1.25-.561-1.25-1.25v-10Zm-20 0c0-.689.561-1.25 1.25-1.25S41 9.061 41 9.75v10c0 .689-.561 1.25-1.25 1.25s-1.25-.561-1.25-1.25v-10Zm-20 0c0-.689.561-1.25 1.25-1.25S21 9.061 21 9.75v10c0 .689-.561 1.25-1.25 1.25s-1.25-.561-1.25-1.25v-10Zm52.5 60c0 .689-.561 1.25-1.25 1.25h-60c-.689 0-1.25-.561-1.25-1.25V31c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25v-8.75c0-.689.561-1.25 1.25-1.25H16v3.75c0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75V16H36v3.75c0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75V16H56v3.75c0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75V16h6.25c.689 0 1.25.561 1.25 1.25V26c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25v38.75Z"
          fill="#8D6C9F"
        />
        <path
          d="M62.25 34.75h-45c-.69 0-1.25.56-1.25 1.25v22.5c0 .69.56 1.25 1.25 1.25h45c.69 0 1.25-.56 1.25-1.25V36c0-.69-.56-1.25-1.25-1.25ZM61 46h-8.75v-8.75H61V46Zm-11.25 0H41v-8.75h8.75V46ZM38.5 46h-8.75v-8.75h8.75V46Zm-20-8.75h8.75V46H18.5v-8.75Zm0 11.25h8.75v8.75H18.5V48.5Zm11.25 0h8.75v8.75h-8.75V48.5Zm11.25 0h8.75v8.75H41V48.5Zm20 8.75h-8.75V48.5H61v8.75Z"
          fill="#8D6C9F"
        />
      </>
    ),
    outline: (
      <path d="M19.75 6C17.68 6 16 7.68 16 9.75v3.75H9.75C7.68 13.5 6 15.18 6 17.25v52.5c0 2.07 1.68 3.75 3.75 3.75h60c2.07 0 3.75-1.68 3.75-3.75v-52.5c0-2.07-1.68-3.75-3.75-3.75H63.5V9.75C63.5 7.68 61.82 6 59.75 6 57.68 6 56 7.68 56 9.75v3.75H43.5V9.75C43.5 7.68 41.82 6 39.75 6 37.68 6 36 7.68 36 9.75v3.75H23.5V9.75C23.5 7.68 21.82 6 19.75 6Zm0 2.5c.689 0 1.25.561 1.25 1.25v10c0 .689-.561 1.25-1.25 1.25s-1.25-.561-1.25-1.25v-10c0-.689.561-1.25 1.25-1.25Zm20 0c.689 0 1.25.561 1.25 1.25v10c0 .689-.561 1.25-1.25 1.25s-1.25-.561-1.25-1.25v-10c0-.689.561-1.25 1.25-1.25Zm20 0c.689 0 1.25.561 1.25 1.25v10c0 .689-.561 1.25-1.25 1.25s-1.25-.561-1.25-1.25v-10c0-.689.561-1.25 1.25-1.25Zm-50 7.5H16v3.75c0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75V16H36v3.75c0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75V16H56v3.75c0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75V16h6.25c.689 0 1.25.561 1.25 1.25V26c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25v38.75c0 .689-.561 1.25-1.25 1.25h-60c-.689 0-1.25-.561-1.25-1.25V31c.689 0 1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25v-8.75c0-.689.561-1.25 1.25-1.25Zm5 10c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25S16 30.439 16 29.75v-2.5c0-.689-.561-1.25-1.25-1.25ZM21 26c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25s1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25Zm6.25 0c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25s1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25Zm6.25 0c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25s1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25Zm6.25 0c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25S41 30.439 41 29.75v-2.5c0-.689-.561-1.25-1.25-1.25ZM46 26c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25s1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25Zm6.25 0c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25s1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25Zm6.25 0c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25s1.25-.561 1.25-1.25v-2.5c0-.689-.561-1.25-1.25-1.25Zm6.25 0c-.689 0-1.25.561-1.25 1.25v2.5c0 .689.561 1.25 1.25 1.25S66 30.439 66 29.75v-2.5c0-.689-.561-1.25-1.25-1.25Zm-47.5 8.75c-.69 0-1.25.56-1.25 1.25v22.5c0 .69.56 1.25 1.25 1.25h45c.69 0 1.25-.56 1.25-1.25V36c0-.69-.56-1.25-1.25-1.25h-45Zm1.25 2.5h8.75V46H18.5v-8.75Zm11.25 0h8.75V46h-8.75v-8.75Zm11.25 0h8.75V46H41v-8.75Zm11.25 0H61V46h-8.75v-8.75ZM18.5 48.5h8.75v8.75H18.5V48.5Zm11.25 0h8.75v8.75h-8.75V48.5Zm11.25 0h8.75v8.75H41V48.5Zm11.25 0H61v8.75h-8.75V48.5Zm-40 15c-.689 0-1.25.561-1.25 1.25S11.561 66 12.25 66h55c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25h-55Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style ?? props.kind]}</svg>;
}
