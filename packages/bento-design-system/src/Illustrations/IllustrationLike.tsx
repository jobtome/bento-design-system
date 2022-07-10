import { IllustrationProps } from "./IllustrationProps";
import { svgIllustrationProps } from "./svgIllustrationProps";

export function IllustrationLike(props: IllustrationProps) {
  const variants = {
    color: (
      <>
        <path
          d="M68.75 63.671a6.275 6.275 0 0 0 5.911-4.218c.876-2.55.001-5.4-2.161-7.032a6.424 6.424 0 0 0 5-6.25 6.424 6.424 0 0 0-5-6.25c.419-.411 3.116-3.182 2.5-6.25-.563-2.799-3.155-4.937-6.25-5H51.015c.825-3.862 2.236-13.742-2.891-20.76-1.285-1.76-2.514-4.534-5.624-4.161-2.529.303-4.572 2.978-5 3.75l.195 11.25c0 2.389-3.125 11.524-6.445 14.922-.914.936-3.401 2.357-7.5 2.5v28.75c.308 1.344.86 3.36 2.5 5 3.75 3.75 12.5 3.75 13.75 3.75h18.75c6.979 0 10.485-2.234 11.146-5.52.109-.543.338-2.216-1.146-4.48Z"
          fill="#FAEFDE"
        />
        <path
          d="M26.875 39.05c3.99-.742 6.01-2.502 6.61-3.116 3.39-3.174 7.085-11.299 7.085-17.106V7.91"
          stroke="#FFF7F0"
          strokeWidth={5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M8.75 32.5H20c2.071 0 3.75 1.458 3.75 3.256v34.737c0 1.798-1.679 3.257-3.75 3.257H8.75c-2.761 0-5-1.944-5-4.343V36.841c0-2.397 2.239-4.341 5-4.341Z"
          fill="#6E91CE"
        />
        <path
          d="M6.875 32.5A3.128 3.128 0 0 1 10 35.625v35a3.129 3.129 0 0 1-3.125 3.125 3.129 3.129 0 0 1-3.125-3.125v-35A3.128 3.128 0 0 1 6.875 32.5Z"
          fill="#80A6DD"
        />
        <path
          d="M11.25 36.25h-2.5c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25h2.5c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25Zm0 6.25h-2.5c-.689 0-1.25.561-1.25 1.25S8.061 45 8.75 45h2.5c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25Zm0 6.25h-2.5c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25h2.5c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25Zm0 6.25h-2.5c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25h2.5c.689 0 1.25-.561 1.25-1.25S11.939 55 11.25 55Zm0 6.25h-2.5c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25h2.5c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25Zm0 6.25h-2.5c-.689 0-1.25.561-1.25 1.25S8.061 70 8.75 70h2.5c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25Z"
          fill="#8D6C9F"
        />
        <path d="M63.75 73.75H32.5l-3.75-2.5L25 67.5h45l-2.5 3.75-3.75 2.5Z" fill="#EFD8BE" />
        <path
          d="M68.75 63.75a6.275 6.275 0 0 0 5.911-4.219c.876-2.55.003-5.4-2.161-7.031a6.424 6.424 0 0 0 5-6.25 6.424 6.424 0 0 0-5-6.25c.419-.411 3.116-3.182 2.5-6.25-.563-2.799-3.155-4.938-6.25-5H50.436c.655-3.284 2.56-14.615-3.408-21.354-1.255-1.418-2.887-3.646-5.833-3.646-3.112 0-3.68 2.519-3.695 3.827v11.25c0 3.673-2.93 11.524-6.25 14.923-.914.935-3.401 2.356-7.5 2.5V67.5c.84 1.036 1.931 2.19 3.394 3.183C31.699 73.773 37.52 73.75 40 73.75h18.75c6.979 0 10.485-2.235 11.146-5.521.109-.541.338-2.215-1.146-4.479Z"
          stroke="#8D6C9F"
          strokeWidth={2.5}
          strokeMiterlimit={10}
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6.25 73.75h15a2.5 2.5 0 0 0 2.5-2.5V35a2.5 2.5 0 0 0-2.5-2.5h-15a2.5 2.5 0 0 0-2.5 2.5v36.25a2.5 2.5 0 0 0 2.5 2.5Z"
          stroke="#8D6C9F"
          strokeWidth={2.5}
          strokeMiterlimit={10}
          fill="none"
        />
      </>
    ),
    outline: (
      <path d="M40.694 4c-1.894 0-3.312.883-4.046 1.975-.733 1.092-.889 2.263-.898 3.088v11.265c0 1.504-.682 4.35-1.79 7.097-1.107 2.747-2.651 5.464-4.104 6.951-.497.509-2.317 1.666-5.366 2.024-.055-2.01-1.718-3.65-3.74-3.65h-15C3.694 32.75 2 34.444 2 36.5v36.25c0 2.056 1.693 3.75 3.75 3.75h15c2.056 0 3.75-1.694 3.75-3.75v-.662c.443.386.912.768 1.443 1.128C30.91 76.587 37.028 76.5 39.5 76.5h18.75c3.623 0 6.436-.565 8.528-1.672 2.092-1.108 3.438-2.846 3.843-4.854.106-.527-.012-2.013-.67-3.747 2.468-.587 4.546-2.33 5.391-4.79.83-2.417.313-5.024-1.2-6.99 2.449-1.305 4.108-3.822 4.108-6.697 0-2.941-1.742-5.496-4.287-6.77.293-.372.456-.457.76-.984.738-1.282 1.394-3.042 1.003-4.993-.685-3.405-3.795-5.93-7.452-6.003H51.402c.779-4.386 1.953-14.281-3.938-20.933C46.283 6.732 44.27 4 40.694 4Zm0 2.5c2.316 0 3.568 1.723 4.897 3.225 5.42 6.12 3.758 17.082 3.12 20.28a1.25 1.25 0 0 0 1.226 1.495h18.289c2.533.051 4.608 1.805 5.048 3.997.225 1.117-.159 2.276-.72 3.25a9.422 9.422 0 0 1-1.43 1.862 1.25 1.25 0 0 0 .603 2.112 5.168 5.168 0 0 1 4.023 5.029 5.168 5.168 0 0 1-4.023 5.03 1.25 1.25 0 0 0-.479 2.218 5.023 5.023 0 0 1 1.731 5.628A5.021 5.021 0 0 1 68.248 64a1.25 1.25 0 0 0-1.043 1.936c1.297 1.978 1.044 3.162.967 3.547-.258 1.277-.993 2.304-2.564 3.135C64.038 73.45 61.606 74 58.25 74H39.5c-2.488 0-8.01-.04-12.153-2.852-1.211-.821-2.09-1.771-2.847-2.673V38.771c3.547-.376 6.023-1.5 7.144-2.647 1.867-1.912 3.448-4.82 4.636-7.766 1.188-2.947 1.97-5.861 1.97-8.03V9.093c.005-.483.142-1.23.474-1.724.332-.494.75-.869 1.97-.869ZM5.75 35.25h15c.706 0 1.25.544 1.25 1.25v36.25A1.23 1.23 0 0 1 20.75 74h-15c-.706 0-1.25-.546-1.25-1.25V36.5c0-.706.544-1.25 1.25-1.25Zm2.5 2.5C7.561 37.75 7 38.311 7 39s.561 1.25 1.25 1.25h2.5c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25h-2.5Zm0 6.25C7.561 44 7 44.561 7 45.25s.561 1.25 1.25 1.25h2.5c.689 0 1.25-.561 1.25-1.25S11.439 44 10.75 44h-2.5Zm0 6.25c-.689 0-1.25.561-1.25 1.25s.561 1.25 1.25 1.25h2.5c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25h-2.5Zm0 6.25c-.689 0-1.25.561-1.25 1.25S7.561 59 8.25 59h2.5c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25h-2.5Zm0 6.25C7.561 62.75 7 63.311 7 64s.561 1.25 1.25 1.25h2.5c.689 0 1.25-.561 1.25-1.25s-.561-1.25-1.25-1.25h-2.5Zm0 6.25C7.561 69 7 69.561 7 70.25s.561 1.25 1.25 1.25h2.5c.689 0 1.25-.561 1.25-1.25S11.439 69 10.75 69h-2.5Z" />
    ),
  };
  return <svg {...svgIllustrationProps(props)}>{variants[props.style]}</svg>;
}