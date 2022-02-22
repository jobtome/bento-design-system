import { IconProps } from "./IconProps";
import { svgIconProps } from "./svgIconProps";

export function IconUser(props: IconProps) {
  return (
    <svg {...svgIconProps(props)}>
      <path d="M19.5 7.059c0-1.95-.84-3.715-2.196-4.99C15.947.79 14.072 0 12 0S8.053.79 6.696 2.068C5.34 3.344 4.5 5.11 4.5 7.058c0 1.95.84 3.715 2.196 4.991 1.357 1.278 3.232 2.069 5.304 2.069s3.947-.79 5.304-2.069a7.025 7.025 0 0 0 1.627-2.289c.377-.856.57-1.774.569-2.701ZM3 21.176C3 22.588 6.375 24 12 24c5.277 0 9-1.412 9-2.823 0-2.824-3.531-5.648-9-5.648-5.625 0-9 2.824-9 5.648Z" />
    </svg>
  );
}
