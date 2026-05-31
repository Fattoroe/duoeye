import type { ResolvedTheme, ThemeMode } from '../../utils/theme';
import { MoonIcon, SunIcon, SystemIcon } from '../icons/CommonIcons';

interface ThemeModeControlProps {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  onChange: (mode: ThemeMode) => void;
}

const shellClassName =
  'flex h-11 items-center gap-1 rounded-2xl border border-black/5 bg-white/88 p-1 text-apple-gray6 shadow-[0_6px_14px_rgba(15,23,42,0.04)] dark:border-white/15 dark:bg-white/12 dark:text-white/72';

function getOptionClassName(active: boolean) {
  if (active) {
    return 'bg-[#111827] text-white shadow-[0_8px_20px_rgba(17,24,39,0.14)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(17,24,39,0.2)] dark:bg-white dark:text-apple-dark1 dark:hover:shadow-[0_12px_24px_rgba(0,0,0,0.22)]';
  }

  return 'text-apple-gray6 hover:-translate-y-0.5 hover:text-apple-dark1 hover:shadow-[0_8px_18px_rgba(15,23,42,0.08)] dark:text-white/72 dark:hover:text-white dark:hover:shadow-[0_8px_18px_rgba(0,0,0,0.22)]';
}

export default function ThemeModeControl({ mode, resolvedTheme, onChange }: ThemeModeControlProps) {
  const systemTitle = `跟随系统（当前${resolvedTheme === 'dark' ? '深色' : '浅色'}）`;

  return (
    <div className={shellClassName} role="group" aria-label="主题模式">
      <button
        type="button"
        onClick={() => onChange('light')}
        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 ${getOptionClassName(mode === 'light')}`}
        aria-label="浅色模式"
        title="浅色模式"
      >
        <SunIcon />
      </button>
      <button
        type="button"
        onClick={() => onChange('dark')}
        className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 ${getOptionClassName(mode === 'dark')}`}
        aria-label="深色模式"
        title="深色模式"
      >
        <MoonIcon />
      </button>
      <button
        type="button"
        onClick={() => onChange('system')}
        className={`relative flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200 ${getOptionClassName(mode === 'system')}`}
        aria-label={systemTitle}
        title={systemTitle}
      >
        <SystemIcon />
        {mode === 'system' ? (
          <span
            aria-hidden="true"
            className={`absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full ${resolvedTheme === 'dark' ? 'bg-[#1cb0f6]' : 'bg-[#58cc02]'}`}
          />
        ) : null}
      </button>
    </div>
  );
}
