import { useId, type SVGProps } from 'react';

export default function DuoMascot(props: SVGProps<SVGSVGElement>) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      viewBox="0 0 128 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <filter id={`${id}-plastic`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur" />
          <feOffset dx="0.8" dy="0.8" result="offset" />
          <feComposite in="SourceGraphic" in2="offset" operator="out" result="shadow" />
          <feFlood floodColor="black" floodOpacity="0.25" result="shadowColor" />
          <feComposite in="shadowColor" in2="shadow" operator="in" result="shadowFinal" />
          
          <feOffset dx="-0.8" dy="-0.8" in="SourceAlpha" result="offsetHighlight" />
          <feComposite in="SourceGraphic" in2="offsetHighlight" operator="out" result="highlight" />
          <feFlood floodColor="white" floodOpacity="0.5" result="highlightColor" />
          <feComposite in="highlightColor" in2="highlight" operator="in" result="highlightFinal" />
          
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="shadowFinal" />
            <feMergeNode in="highlightFinal" />
          </feMerge>
        </filter>

        <linearGradient id={`${id}-body`} x1="64" y1="0" x2="64" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7ED957" />
          <stop offset="100%" stopColor="#48A302" />
        </linearGradient>

        <linearGradient id={`${id}-detail`} x1="64" y1="10" x2="64" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A5F142" />
          <stop offset="100%" stopColor="#74C20D" />
        </linearGradient>

        <linearGradient id={`${id}-eye`} x1="0" y1="26" x2="0" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
      </defs>

      <path
        opacity="0.15"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.37216 120.782H123.628C125.888 120.782 127.8 122.684 127.8 124.932C127.8 127.18 125.888 129.082 123.628 129.082H4.37216C2.11221 129.082 0.199951 127.18 0.199951 124.932C0.199951 122.684 2.11221 120.782 4.37216 120.782Z"
        fill="#000"
      />

      <g filter={`url(#${id}-plastic)`}>
        {/* Feet */}
        <path d="M11.5 109.5h29.6c3.1 0 5.7 2.6 5.7 5.7s-2.6 5.7-5.7 5.7H11.5c-3.1 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7Z" fill="#48A302" />
        <path d="M87.3 109.5h29.6c3.1 0 5.7 2.6 5.7 5.7s-2.6 5.7-5.7 5.7H87.3c-3.1 0-5.7-2.6-5.7-5.7s2.4-5.7 5.7-5.7Z" fill="#48A302" />

        {/* Body */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.674 120.782V18.4133C116.674 15.9924 116.153 13.5715 115.283 11.3236C111.285 2.3317 100.855 -1.81839 91.6409 2.15878C78.4289 7.86516 69.2153 10.8048 64.1739 10.8048C59.1325 10.8048 49.745 7.86516 36.3592 2.15878C34.0992 1.12125 31.6654 0.775414 29.2317 0.775414C19.3227 0.775414 11.3259 8.72976 11.3259 18.5862V121.128H116.674V120.782Z"
          fill={`url(#${id}-body)`}
        />

        {/* Belly Decorations */}
        <path
          d="M82.2535 89.4834H69.0415C68.3461 89.4834 67.8246 90.1751 67.9984 90.8668C69.0415 93.9793 72.1706 96.0544 75.6475 96.0544C79.1243 96.0544 82.2535 93.9793 83.2965 90.8668C83.4704 90.1751 82.9488 89.4834 82.2535 89.4834ZM60.1755 90.8668C60.3494 90.1751 59.8279 89.4834 59.1325 89.4834H45.9205C45.2251 89.4834 44.7036 90.1751 44.8774 90.8668C45.9205 93.9793 49.0497 96.0544 52.5265 96.0544C56.0033 96.0544 59.1325 93.9793 60.1755 90.8668ZM70.7799 100.723H57.3941C56.6987 100.723 56.1772 101.415 56.351 102.107C57.3941 105.219 60.5232 107.294 64.0001 107.294C67.4769 107.294 70.6061 105.219 71.6491 102.107C71.9968 101.415 71.4753 100.723 70.7799 100.723Z"
          fill={`url(#${id}-detail)`}
        />

        {/* Legs detail */}
        <path d="M20 100.9c2.8-2.6 7.1-2.4 9.6.3l7.6 8.2c2.6 2.8 2.4 7.1-.4 9.5-2.8 2.6-7.1 2.4-9.6-.3L19.6 110.4c-2.4-2.6-2.2-6.9.4-9.5Z" fill="#E68000" />
        <path d="M108 100.9c-2.8-2.6-7.1-2.4-9.6.3l-7.6 8.2c-2.6 2.8-2.4 7.1.4 9.5 2.8 2.6 7.1 2.4 9.6-.3l7.6-8.2c2.6-2.5 2.4-6.8-.4-9.4Z" fill="#E68000" />

        {/* Wings */}
        <path d="m40.9 11.5 15.8 17.1c.9.9.5 2.4-.7 2.9-5.6 2.4-12 1.2-16.2-3.3-4.2-4.5-4.7-11.1-1.7-16.3.8-1.4 1.9-1.5 2.8-.4Z" fill={`url(#${id}-detail)`} />
        <path d="M53.9 25.5C59.1 31.4 68.9 31.4 74.1 25.5v34.2h-20.2V25.5Z" fill="#74C20D" />

        {/* Eyes */}
        <path d="M89.4 26.3c8 0 14.4 6.4 14.4 14.4v9.5c0 8-6.4 14.4-14.4 14.4s-14.4-6.4-14.4-14.4V40.7c0-8 6.4-14.4 14.4-14.4Z" fill={`url(#${id}-eye)`} />
        <path d="M89.4 30c6.6 0 12 5.4 12 11.9v7.8c0 6.6-5.4 11.9-12 11.9s-12-5.4-12-11.9v-7.8c0-6.5 5.4-11.9 12-11.9Z" fill="#122431" />
        <path d="M83.9 47.6c4 0 7.3-3.2 7.3-7.2 0-4-3.3-7.3-7.3-7.3-4 0-7.3 3.3-7.3 7.3 0 4 3.3 7.2 7.3 7.2Z" fill="white" />
        
        <path d="M37.8 26.3c8 0 14.4 6.4 14.4 14.4v9.5c0 8-6.4 14.4-14.4 14.4s-14.4-6.4-14.4-14.4V40.7c0-8 6.4-14.4 14.4-14.4Z" fill={`url(#${id}-eye)`} />
        <path d="M37.8 30c6.6 0 12 5.4 12 11.9v7.8c0 6.6-5.4 11.9-12 11.9s-12-5.4-12-11.9v-7.8c0-6.5 5.4-11.9 12-11.9Z" fill="#122431" />
        <path d="M32.3 47.6c4 0 7.3-3.2 7.3-7.2 0-4-3.3-7.3-7.3-7.3-4 0-7.3 3.3-7.3 7.3 0 4 3.3 7.2 7.3 7.2Z" fill="white" />

        {/* Tears */}
        <path d="M103.4 53.9c-1.6 6.2-7.2 10.7-13.9 10.7s-12.6-4.7-14.1-11c1.2-.9 2.7-1.3 4.5-1.3s2.7.5 4.5 1.4c2 1 4.8 2.2 7.9 2.1 4.3 0 6.6-.7 7.7-1.4 1-.6 2.2-.8 3.4-.5Z" fill="#34A9FF" fillOpacity="0.95" />
        <path d="M51.9 53.4C50.5 59.8 44.7 64.6 37.8 64.6s-12.1-4.3-13.8-10.3c1.2-.5 2.5-.5 3.7.2 1 .7 3.3 1.4 7.6 1.4 3 0 5.5-1 7.5-1.8.2-.1.3-.2.5-.2.4-.2.7-.3 1-.5 1.2-.5 2.2-1 3.5-1 1.5 0 2.9.3 4.1 1Z" fill="#34A9FF" fillOpacity="0.95" />

        {/* Beak */}
        <path d="M53.9 54.6C54.8 50 58.8 46.4 64.2 46.4s9.5 3.5 10.3 8.1v1.1c0 .9-.7 1.7-1.7 1.7-.3 0-.5 0-.9-.2-2.6-1.4-5.2-2.3-7.8-2.3s-5 1-7.5 2.4c-.9.5-1.8.2-2.3-.7s-.2-.5-.2-.7v-1.2Z" fill="#FFC200" />
      </g>
    </svg>
  );
}
