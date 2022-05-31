import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationClick(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path
          d="M68.35 36.25 17.725 16.125A1.25 1.25 0 0 0 16.1 17.75l20.15 50.625a1.25 1.25 0 0 0 2.237.175L46.9 54.313a1.25 1.25 0 0 1 1.962-.25l16.625 16.674a2.502 2.502 0 0 0 3.538 0l1.762-1.762a2.5 2.5 0 0 0 0-3.537L54.112 48.75a1.25 1.25 0 0 1 .25-1.962l14.163-8.35a1.25 1.25 0 0 0-.175-2.188Z"
          fill="#E2E9F7"
        />
        <path
          d="m17.625 21.587 47.5 18.863 3.375-1.988a1.25 1.25 0 0 0-.15-2.212L17.725 16.125A1.25 1.25 0 0 0 16.1 17.75l1.525 3.837Zm53.162 43.85L55.65 50.313A3.537 3.537 0 0 0 55 55.85l14.425 14.488 1.362-1.363a2.5 2.5 0 0 0 0-3.537Z"
          fill="#C2CDE7"
        />
        <path
          d="M71.675 64.55 55 47.888l14.162-8.35A2.5 2.5 0 0 0 68.75 35L18.187 15a2.5 2.5 0 0 0-3.25 3.25L35 68.838a2.499 2.499 0 0 0 4.475.35L47.925 55 64.6 71.625a3.75 3.75 0 0 0 5.3 0l1.775-1.763a3.75 3.75 0 0 0 0-5.312Zm-1.763 3.538-1.775 1.762a1.25 1.25 0 0 1-1.762 0L49.687 53.175a2.5 2.5 0 0 0-1.762-.675H47.6a2.5 2.5 0 0 0-1.837 1.25L37.35 67.912 17.262 17.287l50.626 20.088-14.138 8.35a2.5 2.5 0 0 0-.5 3.925L69.9 66.325a1.25 1.25 0 0 1 0 1.763h.012Z"
          fill="#8D6C9F"
        />
        <path
          d="M55 37.638a1.25 1.25 0 0 0 .462-2.413l-18.375-7.288a1.25 1.25 0 1 0-.925 2.325L54.487 37.5c.16.082.334.129.513.138ZM31.962 25.925l-3.937-1.563a1.25 1.25 0 1 0-.925 2.326l3.938 1.562a1.25 1.25 0 1 0 .924-2.325ZM10 8.4a1.25 1.25 0 0 0-1.75 1.775L10.075 12a1.25 1.25 0 1 0 1.775-1.762L10 8.4Zm7.712 1.688a1.25 1.25 0 0 0 1.25-1.25V6.25a1.25 1.25 0 0 0-2.5 0v2.588a1.25 1.25 0 0 0 1.25 1.25Zm-7.774 7.775a1.25 1.25 0 0 0-1.25-1.25h-2.6a1.25 1.25 0 0 0 0 2.5h2.6a1.25 1.25 0 0 0 1.25-1.25Zm.137 5.887L8.25 25.563A1.25 1.25 0 1 0 10 27.325l1.85-1.825a1.25 1.25 0 0 0-1.775-1.75ZM24.45 12.363a1.25 1.25 0 0 0 .887-.363l1.838-1.838A1.25 1.25 0 0 0 25.413 8.4l-1.838 1.838a1.25 1.25 0 0 0 .887 2.137l-.012-.012Z"
          fill="#8D6C9F"
        />
      </>
    ),
    outline: (
      <path d="M18.866 6c-.693 0-1.25.557-1.25 1.25v2.588a1.25 1.25 0 1 0 2.5 0V7.25A1.25 1.25 0 0 0 18.866 6Zm-8.579 3.037a1.25 1.25 0 0 0-.889 2.134l1.836 1.831c.245.244.562.366.884.366a1.25 1.25 0 0 0 .884-2.134l-1.836-1.83a1.239 1.239 0 0 0-.879-.367Zm17.158 0c-.322 0-.64.122-.884.366l-1.835 1.831a1.25 1.25 0 1 0 1.767 1.768l1.831-1.831a1.24 1.24 0 0 0 0-1.768 1.239 1.239 0 0 0-.879-.366Zm-8.818 6.753a2.47 2.47 0 0 0-1.973.733 2.455 2.455 0 0 0-.556 2.685l20.087 50.625a2.48 2.48 0 0 0 2.134 1.572 2.497 2.497 0 0 0 2.344-1.22l8.418-14.239 16.675 16.68a3.731 3.731 0 0 0 2.651 1.103c1.006 0 1.949-.39 2.652-1.103l1.772-1.763a3.764 3.764 0 0 0 0-5.307l-16.675-16.67 14.155-8.355a2.49 2.49 0 0 0 1.226-2.348 2.481 2.481 0 0 0-1.572-2.13l-50.62-20.087a2.708 2.708 0 0 0-.718-.176ZM7.25 17.616c-.693 0-1.25.557-1.25 1.25 0 .694.557 1.25 1.25 1.25h2.588c.693 0 1.25-.556 1.25-1.25 0-.693-.557-1.25-1.25-1.25H7.25Zm11.172.67 50.62 20.092-14.155 8.35a2.481 2.481 0 0 0-1.211 1.84 2.474 2.474 0 0 0 .713 2.08l16.67 16.675a1.25 1.25 0 0 1 0 1.768l-1.768 1.772a1.277 1.277 0 0 1-1.768 0l-16.68-16.68a2.457 2.457 0 0 0-2.074-.717 2.503 2.503 0 0 0-1.846 1.21L38.51 68.91 18.422 18.285Zm-6.304 6.073c-.322.005-.64.127-.884.371l-1.836 1.831a1.244 1.244 0 0 0 0 1.763 1.236 1.236 0 0 0 1.768 0l1.836-1.83a1.244 1.244 0 0 0 0-1.764 1.227 1.227 0 0 0-.884-.37Zm16.577.918a1.24 1.24 0 0 0-1.133.787 1.248 1.248 0 0 0 .704 1.625l3.93 1.563a1.249 1.249 0 0 0 1.621-.703 1.255 1.255 0 0 0-.698-1.626l-3.935-1.558a1.235 1.235 0 0 0-.489-.088Zm9.01 3.575a1.253 1.253 0 0 0-.43 2.417l18.369 7.29c.15.058.307.083.459.083.498 0 .971-.298 1.166-.787a1.255 1.255 0 0 0-.703-1.625l-18.374-7.286a1.24 1.24 0 0 0-.488-.092Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style]}</svg>;
}
