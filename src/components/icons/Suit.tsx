import { cn } from '@/lib/utils';

const suits = ['club', 'spade', 'heart', 'diamond'] as const;
type Suit = (typeof suits)[number];

const defaultSize = 32; // in px

type SuitIconProps = {
  size?: number;
  suit: Suit;
  className?: string;
};

export default function Suit(props: SuitIconProps) {
  const { className, suit, size = defaultSize } = props;

  switch (suit) {
    case 'club':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 28 32"
          className={cn('fill-white', className)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.5 9H9.5V0H18.5V9ZM9.5 9V18H0.5V9H9.5ZM27.5 9V18H18.5V9H27.5ZM9.5 18H18.5V27H23V31.5H5V27H9.5V18Z" />
        </svg>
      );

    case 'spade':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          className={cn('fill-white', className)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 31.5V27H9V22.5H0V13.5H4.5V9H9V4.5H13.5V0H18V4.5H22.5V9H27V13.5H31.5V22.5H22.5V27H27V31.5H4.5Z" />
        </svg>
      );

    case 'heart':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          className={cn('fill-white', className)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 31.5V27H9V22.5H4.5V18H0V4.5H4.5V0H13.5V4.5H18V0H27V4.5H31.5V18H27V22.5H22.5V27H18V31.5H13.5Z" />
        </svg>
      );

    case 'diamond':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          className={cn('fill-white', className)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 31.5V27H9V22.5H4.5V18H0V13.5H4.5V9H9V4.5H13.5V0H18V4.5H22.5V9H27V13.5H31.5V18H27V22.5H22.5V27H18V31.5H13.5Z" />
        </svg>
      );

    default:
      return <div>Unexpected Variant!</div>;
  }
}
