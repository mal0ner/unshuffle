// in px
const defaultSize = 32;

export default function Diamonds(props: { size?: number }) {
  const { size = defaultSize } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 31.5V27H9V22.5H4.5V18H0V13.5H4.5V9H9V4.5H13.5V0H18V4.5H22.5V9H27V13.5H31.5V18H27V22.5H22.5V27H18V31.5H13.5Z"
        fill="white"
      />
    </svg>
  );
}
