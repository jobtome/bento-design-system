import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationStar(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path
          d="M56.499 48.733a1.296 1.296 0 0 0-.402 1.293l5.9 23.895L40.585 60.7a1.297 1.297 0 0 0-1.359 0L17.867 73.92l5.848-23.909a1.291 1.291 0 0 0-.401-1.293L4.127 31.952 29.55 29.65a1.295 1.295 0 0 0 1.074-.802L39.9 6.104l9.289 22.744c.18.446.595.755 1.073.802l25.423 2.316-19.186 16.767Z"
          fill="#F6D397"
        />
        <path
          d="m39.9 6.104-9.276 22.743a1.297 1.297 0 0 1-1.074.803L4.127 31.953l19.187 16.766c.366.321.52.821.4 1.294l-5.72 23.386c.117.076.236.15.352.225l20.88-12.925c.236-.145.508-.199.774-.179V6.349l-.1-.245Z"
          fill="#F9E3AE"
        />
        <path
          d="M78.75 30.863A1.25 1.25 0 0 0 77.675 30L50.9 27.575 41.063 3.462a1.25 1.25 0 0 0-2.313 0l-9.837 24.113L2.2 30a1.25 1.25 0 0 0-.712 2.188L21.65 49.811 15.4 75.138a1.25 1.25 0 0 0 1.875 1.362l22.625-14 22.6 14.013a1.25 1.25 0 0 0 1.875-1.363l-6.25-25.325L78.288 32.2c.416-.308.6-.839.462-1.338ZM55.938 48.438a1.25 1.25 0 0 0-.388 1.25l5.7 23.087L40.563 60a1.247 1.247 0 0 0-1.313 0L18.613 72.775l5.65-23.1a1.25 1.25 0 0 0-.388-1.25l-18.537-16.2L29.9 30a1.25 1.25 0 0 0 1.038-.775L39.9 7.25l8.975 21.975c.175.431.575.73 1.038.775l24.562 2.237-18.537 16.2Z"
          fill="#8D6C9F"
        />
      </>
    ),
    outline: (
      <path d="M78.692 31.175a1.25 1.25 0 0 0-1.075-.862L50.84 27.888 41.005 3.775a1.25 1.25 0 0 0-2.313 0l-9.837 24.113-26.712 2.425a1.25 1.25 0 0 0-.713 2.187l20.162 17.625-6.25 25.325a1.25 1.25 0 0 0 1.876 1.363l22.625-14 22.6 14.012a1.25 1.25 0 0 0 1.875-1.362l-6.25-25.325 20.162-17.625c.416-.308.6-.839.463-1.338ZM55.879 48.75a1.25 1.25 0 0 0-.387 1.25l5.7 23.088-20.688-12.775a1.248 1.248 0 0 0-1.313 0L18.554 73.088l5.65-23.1a1.25 1.25 0 0 0-.387-1.25l-18.538-16.2 24.563-2.225a1.25 1.25 0 0 0 1.037-.775l8.963-21.975 8.974 21.975c.175.431.575.73 1.038.775l24.563 2.237-18.538 16.2Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style]}</svg>;
}