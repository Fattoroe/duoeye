import { useId } from 'react';
import { useEmojiIconMode } from './EmojiMode';

interface IconProps {
  className?: string;
}

export function SunIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="4" y1="4" x2="20" y2="20">
          <stop stopColor="#FFCB4D" />
          <stop offset="1" stopColor="#FF9600" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="4.8" fill={`url(#${id}-g)`} stroke="#B36200" strokeWidth="0.8" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="11.35"
          y="1.8"
          width="1.3"
          height="3.6"
          rx="0.65"
          fill={`url(#${id}-g)`}
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
    </svg>
  );
}

export function MoonIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="4" y1="4" x2="20" y2="20">
          <stop stopColor="#A7B6FF" />
          <stop offset="1" stopColor="#5B6CFF" />
        </linearGradient>
      </defs>
      <path
        d="M20.6 13A8.8 8.8 0 1 1 11 3.4a6.7 6.7 0 0 0 9.6 9.6Z"
        fill={`url(#${id}-g)`}
        stroke="#2D3B99"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SystemIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="3" y1="4" x2="21" y2="20">
          <stop stopColor="#E2E8F0" />
          <stop offset="1" stopColor="#94A3B8" />
        </linearGradient>
      </defs>
      <rect x="3.5" y="4.5" width="17" height="11.5" rx="2.4" fill={`url(#${id}-g)`} stroke="#475569" strokeWidth="0.8" />
      <path d="M8 19.5h8" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 16.2v3.3" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="4" y1="4" x2="20" y2="20">
          <stop stopColor="#D98AFF" />
          <stop offset="1" stopColor="#7E3BFF" />
        </linearGradient>
      </defs>
      <path d="m12 3 1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7-4.7-1.8 4.7-1.8L12 3Z" fill={`url(#${id}-g)`} stroke="#4D1E99" strokeWidth="0.8" />
      <path d="m18.5 15 .9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6Z" fill={`url(#${id}-g)`} stroke="#4D1E99" strokeWidth="0.8" />
    </svg>
  );
}

export function PauseIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="6" y1="5" x2="18" y2="19">
          <stop stopColor="#FF8C82" />
          <stop offset="1" stopColor="#FF4B4B" />
        </linearGradient>
      </defs>
      <rect x="6.2" y="5" width="4.1" height="14" rx="1.4" fill={`url(#${id}-g)`} stroke="#B32B2B" strokeWidth="0.8" />
      <rect x="13.7" y="5" width="4.1" height="14" rx="1.4" fill={`url(#${id}-g)`} stroke="#B32B2B" strokeWidth="0.8" />
    </svg>
  );
}

export function CameraIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="3" y1="4" x2="21" y2="20">
          <stop stopColor="#E2E8F0" />
          <stop offset="1" stopColor="#94A3B8" />
        </linearGradient>
      </defs>
      <path d="M3.5 9A2 2 0 0 1 5.5 7h.8a2 2 0 0 0 1.66-.88l.75-1.12A2 2 0 0 1 10.37 4h3.26a2 2 0 0 1 1.66.88l.75 1.12A2 2 0 0 0 17.7 7h.8a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V9Z" fill={`url(#${id}-g)`} stroke="#475569" strokeWidth="0.8" />
      <circle cx="12" cy="13" r="3.3" fill="white" stroke="#475569" strokeWidth="1.1" />
    </svg>
  );
}

export function RefreshIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="4" y1="4" x2="20" y2="20">
          <stop stopColor="#7ADFFF" />
          <stop offset="1" stopColor="#1CB0F6" />
        </linearGradient>
      </defs>
      <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" stroke={`url(#${id}-g)`} strokeWidth="3" strokeLinecap="round" />
      <path d="M19.5 4.8v5.6h-5.6" stroke={`url(#${id}-g)`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExitIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="4" y1="4" x2="20" y2="20">
          <stop stopColor="#FF8C82" />
          <stop offset="1" stopColor="#FF4B4B" />
        </linearGradient>
      </defs>
      <path d="M16.8 16.2 20.5 12l-3.7-4.2M20.1 12H9.8" stroke={`url(#${id}-g)`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 20H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h6" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function EmojiModeIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');
  const mode = useEmojiIconMode();

  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <svg className={`${mode === 'emoji' ? 'block' : 'hidden'} duo-emoji-native absolute inset-0 h-full w-full`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-g1`} x1="4" y1="4" x2="20" y2="20">
            <stop stopColor="#FFF48A" />
            <stop offset="1" stopColor="#FFBB00" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="8.6" fill={`url(#${id}-g1)`} stroke="#B38A00" strokeWidth="0.8" />
        <circle cx="8.5" cy="10" r="1.15" fill="#1E293B" />
        <circle cx="15.5" cy="10" r="1.15" fill="#1E293B" />
        <path d="M8.2 14.3c.9 1.4 2.3 2.1 3.8 2.1s2.9-.7 3.8-2.1" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg className={`${mode === 'svg' ? 'block' : 'hidden'} duo-emoji-svg absolute inset-0 h-full w-full`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-g2`} x1="4" y1="4" x2="20" y2="20">
            <stop stopColor="#7ADFFF" />
            <stop offset="1" stopColor="#1CB0F6" />
          </linearGradient>
        </defs>
        <rect x="4.5" y="4.5" width="6.5" height="6.5" rx="1.8" fill={`url(#${id}-g2)`} stroke="#1E4799" strokeWidth="0.8" />
        <circle cx="17.4" cy="7.6" r="3.2" fill={`url(#${id}-g2)`} stroke="#1E4799" strokeWidth="0.8" />
        <path d="m7 16 3 4.5 3-4.5 3 4.5 3-4.5" stroke={`url(#${id}-g2)`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function MenuIcon({ open, className = 'h-4 w-4' }: { open: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <>
          <path d="M4 7h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M4 12h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M4 17h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function SearchIcon({ className = 'h-4 w-4', colorful }: IconProps & { colorful?: boolean }) {
  const id = useId().replace(/:/g, '');

  if (colorful) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-g`} x1="4" y1="4" x2="20" y2="20">
            <stop stopColor="#7ADFFF" />
            <stop offset="1" stopColor="#1CB0F6" />
          </linearGradient>
        </defs>
        <circle cx="10.5" cy="10.5" r="5.6" fill="white" stroke={`url(#${id}-g)`} strokeWidth="2.4" />
        <path d="m14.7 14.7 4.7 4.7" stroke={`url(#${id}-g)`} strokeWidth="2.8" strokeLinecap="round" />
        <path d="M8.1 9.5a2.7 2.7 0 0 1 2.7-2.7" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function BoltIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="4" y1="2" x2="20" y2="22">
          <stop stopColor="#FFCB4D" />
          <stop offset="1" stopColor="#FF9600" />
        </linearGradient>
      </defs>
      <path
        d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z"
        fill={`url(#${id}-g)`}
        stroke="#B36200"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClockIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="4" y1="4" x2="20" y2="20">
          <stop stopColor="#7ADFFF" />
          <stop offset="1" stopColor="#1CB0F6" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="8.8" stroke={`url(#${id}-g)`} strokeWidth="2.4" />
      <path d="M12 7v5l3 2" stroke={`url(#${id}-g)`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BarChartIcon({ className = 'h-4 w-4', colorful }: IconProps & { colorful?: boolean }) {
  const id = useId().replace(/:/g, '');

  if (colorful) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-g`} x1="4" y1="4" x2="20" y2="20">
            <stop stopColor="#8CE63F" />
            <stop offset="1" stopColor="#58CC02" />
          </linearGradient>
        </defs>
        <rect x="4.5" y="11" width="3.4" height="8.5" rx="1.4" fill={`url(#${id}-g)`} stroke="#256600" strokeWidth="0.7" />
        <rect x="10.3" y="4.5" width="3.4" height="15" rx="1.4" fill={`url(#${id}-g)`} stroke="#256600" strokeWidth="0.7" />
        <rect x="16.1" y="8.2" width="3.4" height="11.3" rx="1.4" fill={`url(#${id}-g)`} stroke="#256600" strokeWidth="0.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        d="M4 20V8 M10 20V4 M16 20v-6 M22 20v-9 M2 20h20"
      />
    </svg>
  );
}

export function ArrowUpIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 5 6 6" />
        <path d="m12 5-6 6" />
        <path d="M12 5v14" />
      </g>
    </svg>
  );
}

export function QuestionIcon({ className = 'h-4 w-4', colorful }: IconProps & { colorful?: boolean }) {
  const id = useId().replace(/:/g, '');

  if (colorful) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-g`} x1="4" y1="4" x2="20" y2="20">
            <stop stopColor="#FFAE33" />
            <stop offset="1" stopColor="#FF7A00" />
          </linearGradient>
        </defs>
        <path d="M9.5 8.5c0-2.5 5-2.5 5 0 0 1.8-2.5 2.2-2.5 4.5" stroke={`url(#${id}-g)`} strokeWidth="3.2" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="17" r="1.7" fill={`url(#${id}-g)`} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4" />
        <path d="M12 17h.01" />
        <circle cx="12" cy="12" r="9" />
      </g>
    </svg>
  );
}

export function ChatIcon({ className = 'h-4 w-4' }: IconProps) {
  const id = useId().replace(/:/g, '');

  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#58CC02" />
          <stop offset="1" stopColor="#46A302" />
        </linearGradient>
      </defs>
      <path d="M32 12c-11.046 0-20 8.059-20 18 0 3.774 1.3 7.25 3.5 10.057L12 48l8.36-2.613C23.633 47.456 27.65 48 32 48c11.046 0 20-8.059 20-18s-8.954-18-20-18Z" fill={`url(#${id}-g)`} stroke="#1E4D00" strokeWidth="0.8" />
      <circle cx="22" cy="30" r="3" fill="#FFFFFF" />
      <circle cx="32" cy="30" r="3" fill="#FFFFFF" />
      <circle cx="42" cy="30" r="3" fill="#FFFFFF" />
    </svg>
  );
}
