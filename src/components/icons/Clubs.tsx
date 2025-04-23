// in px
const defaultSize = 32;

export default function Clubs(props: { size?: number }) {
  const { size = defaultSize } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 9H9.5V0H18.5V9ZM9.5 9V18H0.5V9H9.5ZM27.5 9V18H18.5V9H27.5ZM9.5 18H18.5V27H23V31.5H5V27H9.5V18Z"
        fill="white"
      />
    </svg>
  );
}
