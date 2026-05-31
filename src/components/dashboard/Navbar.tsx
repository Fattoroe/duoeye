import { startTransition, useEffect, useRef, useState } from 'react';
import AppIcon from '../shared/AppIcon';
import DuoWordmark from '../shared/DuoWordmark';
import ThemeModeControl from '../shared/ThemeModeControl';
import type { EmojiIconMode } from '../icons/EmojiMode';
import type { ResolvedTheme, ThemeMode } from '../../utils/theme';
import {
  CameraIcon,
  EmojiModeIcon,
  ExitIcon,
  MenuIcon,
  MoonIcon,
  PauseIcon,
  RefreshIcon,
  SparkleIcon,
  SunIcon,
  SystemIcon,
} from '../icons/CommonIcons';

interface NavbarProps {
  username: string;
  themeMode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  animationsEnabled: boolean;
  emojiIconMode: EmojiIconMode;
  isScreenshotting: boolean;
  isRefreshing: boolean;
  lastLoadedAt: number | null;
  onThemeChange: (mode: ThemeMode) => void;
  onToggleAnimations: () => void;
  onToggleEmojiIconMode: () => void;
  onRefresh: () => void;
  onScreenshot: () => void;
  onLogout: () => void;
}

const iconButtonClassName =
  'group flex h-10 w-10 items-center justify-center rounded-2xl border border-black/5 bg-white/88 text-apple-gray6 shadow-[0_6px_14px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,color,background-color,border-color,opacity] duration-200 hover:text-apple-dark1 dark:border-white/15 dark:bg-white/12 dark:text-white/72 dark:hover:text-white sm:h-11 sm:w-11';

const iconButtonGroupClassName =
  'flex items-center rounded-2xl border border-black/5 bg-white/88 p-1 text-apple-gray6 shadow-[0_6px_14px_rgba(15,23,42,0.04)] dark:border-white/15 dark:bg-white/12 dark:text-white/72';

const groupedIconButtonClassName =
  'group flex h-9 w-9 items-center justify-center rounded-[16px] text-inherit transition-[transform,box-shadow,color,background-color,opacity] duration-200 hover:-translate-y-0.5 hover:bg-black/[0.04] hover:text-apple-dark1 hover:shadow-[0_8px_18px_rgba(15,23,42,0.08)] disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0 disabled:hover:bg-transparent disabled:hover:shadow-none dark:hover:bg-white/[0.08] dark:hover:text-white dark:hover:shadow-[0_8px_18px_rgba(0,0,0,0.22)]';

const compactMenuItemClassName =
  'flex min-h-[60px] flex-col items-center justify-center rounded-[18px] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(248,249,252,0.92))] px-3 py-1.5 text-center shadow-[0_10px_24px_rgba(15,23,42,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)] max-[430px]:min-h-[54px] max-[430px]:rounded-[16px] max-[430px]:px-2.5 max-[430px]:py-1.5 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(58,58,60,0.72),rgba(34,34,36,0.9))] dark:hover:shadow-[0_16px_28px_rgba(0,0,0,0.2)]';

function getNavbarActionIconClassName(variant: 'refresh' | 'sparkle' | 'pause' | 'camera' | 'emoji' | 'exit'): string {
  const base = 'h-4 w-4 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform';

  if (variant === 'refresh') {
    return `${base} group-hover:-translate-y-0.5 group-hover:-rotate-45`;
  }

  if (variant === 'sparkle') {
    return `${base} group-hover:-translate-y-0.5 group-hover:rotate-12`;
  }

  if (variant === 'camera' || variant === 'emoji') {
    return `${base} group-hover:-translate-y-0.5 group-hover:rotate-6`;
  }

  if (variant === 'exit') {
    return `${base} group-hover:translate-x-0.5`;
  }

  return `${base} group-hover:-translate-y-0.5`;
}

function getThemeMenuButtonClassName(active: boolean): string {
  return `flex h-[36px] w-full items-center justify-center rounded-[16px] transition-[transform,box-shadow,color,background-color] duration-200 sm:h-[40px] ${
    active
      ? 'bg-[#111827] text-white shadow-[0_10px_22px_rgba(17,24,39,0.16)] dark:bg-white dark:text-apple-dark1'
      : 'text-apple-dark1 hover:bg-black/[0.04] dark:text-white dark:hover:bg-white/[0.08]'
  }`;
}

export default function Navbar({
  username,
  themeMode,
  resolvedTheme,
  animationsEnabled,
  emojiIconMode,
  isScreenshotting,
  isRefreshing,
  lastLoadedAt,
  onThemeChange,
  onToggleAnimations,
  onToggleEmojiIconMode,
  onRefresh,
  onScreenshot,
  onLogout,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isCompactMenuOpen, setIsCompactMenuOpen] = useState(false);
  const scrollFrameRef = useRef<number | null>(null);
  const isScrolledRef = useRef(false);
  const desktopThemeMenuRef = useRef<HTMLDivElement>(null);
  const mobileCompactControlsRef = useRef<HTMLDivElement>(null);
  const compactMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function commitScrollState(scrollTop: number): void {
      const nextIsScrolled = scrollTop > 12;
      if (nextIsScrolled === isScrolledRef.current) return;

      isScrolledRef.current = nextIsScrolled;
      startTransition(() => {
        setIsScrolled(nextIsScrolled);
      });
    }

    function handleScroll(): void {
      if (scrollFrameRef.current !== null) return;

      scrollFrameRef.current = window.requestAnimationFrame(() => {
        scrollFrameRef.current = null;
        commitScrollState(window.scrollY);
      });
    }

    commitScrollState(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent): void {
      if (desktopThemeMenuRef.current?.contains(event.target as Node)) return;
      if (mobileCompactControlsRef.current?.contains(event.target as Node)) return;
      if (compactMenuRef.current?.contains(event.target as Node)) return;
      setIsThemeMenuOpen(false);
      setIsCompactMenuOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key !== 'Escape') return;
      setIsThemeMenuOpen(false);
      setIsCompactMenuOpen(false);
    }

    function handleResize(): void {
      if (window.innerWidth < 768) {
        if (window.innerWidth >= 560) {
          setIsCompactMenuOpen(false);
        }
        return;
      }

      setIsCompactMenuOpen(false);
      setIsThemeMenuOpen(false);
    }

    document.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

const timeFormatter = new Intl.DateTimeFormat('zh-CN', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

  const formattedLastLoadedAt = lastLoadedAt ? timeFormatter.format(lastLoadedAt) : '';

  return (
    <nav data-floating-navbar="true" className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        data-screenshot-lock="true"
        className={`screenshot-solid-panel screenshot-disable-blur mx-auto flex max-w-[1560px] flex-col gap-0 overflow-visible rounded-[28px] px-4 py-3.5 transition-[background-color,box-shadow] duration-300 sm:gap-3 sm:px-5 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-between ${
          isScrolled
            ? 'bg-[rgba(255,255,255,0.92)] shadow-[0_14px_30px_rgba(15,23,42,0.08)] dark:bg-[rgba(44,44,46,0.88)]'
            : 'bg-[rgba(255,255,255,0.9)] shadow-[0_6px_16px_rgba(15,23,42,0.04)] dark:bg-[rgba(44,44,46,0.82)]'
        }`}
      >
        <div className="flex min-w-0 items-center justify-between gap-3 overflow-visible py-1">
          <a href="/" className="group flex min-w-0 items-center gap-3 overflow-visible py-1">
            <AppIcon className="h-11 w-11 shrink-0" />
            <div className="min-w-0">
              <div className="flex items-center gap-1 overflow-visible">
                <DuoWordmark size="xs" className="shrink-0 max-w-full overflow-visible" />
                <span className="hidden -mx-0.5 shrink-0 text-[11px] font-medium text-apple-gray6/70 dark:text-white/38 min-[768px]:inline">-</span>
                <div className="hidden min-w-0 truncate text-[11px] text-apple-gray6 dark:text-white/55 min-[768px]:block">
                  @{username || 'duolingo'}
                </div>
              </div>
              <div className="hidden min-w-0 truncate text-[10px] text-apple-gray6 dark:text-white/55 min-[560px]:block sm:text-[11px] min-[768px]:hidden">
                @{username || 'duolingo'}
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-2 min-[560px]:flex min-[768px]:hidden">
            <button
              type="button"
              onClick={onRefresh}
              disabled={isRefreshing}
              className={`${iconButtonClassName} disabled:cursor-not-allowed disabled:opacity-55`}
              title={isRefreshing ? '正在加载' : '重新加载'}
              aria-label={isRefreshing ? '正在加载' : '重新加载'}
            >
              {isRefreshing ? (
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" className="opacity-25" />
                  <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-90" />
                </svg>
              ) : (
                <RefreshIcon />
              )}
            </button>

            <button
              type="button"
              onClick={onToggleAnimations}
              className={iconButtonClassName}
              title={animationsEnabled ? '关闭动效' : '开启动效'}
              aria-label={animationsEnabled ? '关闭动效' : '开启动效'}
            >
              {animationsEnabled ? (
                <SparkleIcon className={getNavbarActionIconClassName('sparkle')} />
              ) : (
                <PauseIcon className={getNavbarActionIconClassName('pause')} />
              )}
            </button>

            <button
              type="button"
              onClick={onScreenshot}
              disabled={isScreenshotting}
              className={`${iconButtonClassName} disabled:cursor-not-allowed disabled:opacity-55`}
              title={isScreenshotting ? '正在截图' : '截图'}
              aria-label={isScreenshotting ? '正在截图' : '截图'}
            >
              {isScreenshotting ? (
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" className="opacity-25" />
                  <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-90" />
                </svg>
              ) : (
                <CameraIcon className={getNavbarActionIconClassName('camera')} />
              )}
            </button>

            <button
              type="button"
              onClick={onToggleEmojiIconMode}
              className={iconButtonClassName}
              title={emojiIconMode === 'svg' ? '切换到 Emoji 图标' : '切换到 SVG 图标'}
              aria-label={emojiIconMode === 'svg' ? '切换到 Emoji 图标' : '切换到 SVG 图标'}
            >
              <EmojiModeIcon className={getNavbarActionIconClassName('emoji')} />
            </button>

            <button type="button" onClick={onLogout} className={iconButtonClassName} title="退出" aria-label="退出">
              <ExitIcon className={getNavbarActionIconClassName('exit')} />
            </button>

            <div ref={desktopThemeMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setIsThemeMenuOpen((current) => !current)}
                className={iconButtonClassName}
                title={isThemeMenuOpen ? '关闭主题菜单' : '打开主题菜单'}
                aria-label={isThemeMenuOpen ? '关闭主题菜单' : '打开主题菜单'}
                aria-expanded={isThemeMenuOpen}
              >
                <MenuIcon open={isThemeMenuOpen} />
              </button>

              <div
                className={`absolute right-0 top-[calc(100%+8px)] w-10 sm:w-11 transition-[opacity,transform] duration-200 ${
                  isThemeMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
              >
                <div className="w-full rounded-[20px] border border-white/75 bg-[rgba(255,255,255,0.94)] p-[2px] shadow-[0_18px_34px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-[rgba(44,44,46,0.96)]">
                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        onThemeChange('light');
                        setIsThemeMenuOpen(false);
                      }}
                      className={getThemeMenuButtonClassName(themeMode === 'light')}
                      title="浅色"
                      aria-label="浅色"
                    >
                      <SunIcon />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onThemeChange('dark');
                        setIsThemeMenuOpen(false);
                      }}
                      className={getThemeMenuButtonClassName(themeMode === 'dark')}
                      title="深色"
                      aria-label="深色"
                    >
                      <MoonIcon />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onThemeChange('system');
                        setIsThemeMenuOpen(false);
                      }}
                      className={getThemeMenuButtonClassName(themeMode === 'system')}
                      title="跟随系统"
                      aria-label="跟随系统"
                    >
                      <div className="relative flex items-center justify-center">
                        <SystemIcon />
                        <span
                          aria-hidden="true"
                          className={`absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full ${resolvedTheme === 'dark' ? 'bg-[#1cb0f6]' : 'bg-[#58cc02]'}`}
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={mobileCompactControlsRef} className="flex items-center gap-2 min-[560px]:hidden">
            <ThemeModeControl mode={themeMode} resolvedTheme={resolvedTheme} onChange={onThemeChange} />

            <button
              type="button"
              onClick={() => setIsCompactMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/5 bg-white/88 text-apple-gray6 shadow-[0_6px_14px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,color,background-color,border-color] duration-200 hover:text-apple-dark1 dark:border-white/15 dark:bg-white/12 dark:text-white/72 dark:hover:text-white"
              aria-label={isCompactMenuOpen ? '关闭菜单' : '打开菜单'}
              title={isCompactMenuOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={isCompactMenuOpen}
            >
              <MenuIcon open={isCompactMenuOpen} />
            </button>
          </div>
        </div>

        <div
          ref={compactMenuRef}
          className={`overflow-hidden transition-[max-height,opacity,transform,margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] min-[560px]:hidden ${
            isCompactMenuOpen ? 'mt-0.5 max-h-[250px] translate-y-0 opacity-100' : 'pointer-events-none max-h-0 -translate-y-2 opacity-0'
          }`}
        >
          <div className="grid grid-cols-2 gap-1.5 rounded-[20px] bg-[rgba(255,255,255,0.7)] p-0.5 dark:bg-white/[0.04]">
            <button
              type="button"
              onClick={() => {
                onRefresh();
                setIsCompactMenuOpen(false);
              }}
              disabled={isRefreshing}
              className={`${compactMenuItemClassName} disabled:cursor-not-allowed disabled:opacity-55`}
            >
              <div className="flex h-7.5 w-7.5 items-center justify-center rounded-[15px] border border-black/5 bg-white/92 text-apple-dark1 shadow-[0_4px_12px_rgba(15,23,42,0.04)] max-[430px]:h-7 max-[430px]:w-7 max-[430px]:rounded-[14px] dark:border-white/10 dark:bg-white/10 dark:text-white">
                {isRefreshing ? (
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" className="opacity-25" />
                    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-90" />
                  </svg>
                ) : (
                  <RefreshIcon className="h-4 w-4" />
                )}
              </div>
              <div className="mt-1 text-[12px] font-semibold tracking-tight text-apple-dark1 max-[430px]:text-[11px] dark:text-white">刷新</div>
            </button>

            <button
              type="button"
              onClick={() => {
                onToggleAnimations();
                setIsCompactMenuOpen(false);
              }}
              className={compactMenuItemClassName}
            >
              <div className="flex h-7.5 w-7.5 items-center justify-center rounded-[15px] border border-black/5 bg-white/92 text-apple-dark1 shadow-[0_4px_12px_rgba(15,23,42,0.04)] max-[430px]:h-7 max-[430px]:w-7 max-[430px]:rounded-[14px] dark:border-white/10 dark:bg-white/10 dark:text-white">
                {animationsEnabled ? <SparkleIcon className="h-4 w-4" /> : <PauseIcon className="h-4 w-4" />}
              </div>
              <div className="mt-1 text-[12px] font-semibold tracking-tight text-apple-dark1 max-[430px]:text-[11px] dark:text-white">动效</div>
            </button>

            <button
              type="button"
              onClick={() => {
                onScreenshot();
                setIsCompactMenuOpen(false);
              }}
              disabled={isScreenshotting}
              className={`${compactMenuItemClassName} disabled:cursor-not-allowed disabled:opacity-55`}
            >
              <div className="flex h-7.5 w-7.5 items-center justify-center rounded-[15px] border border-black/5 bg-white/92 text-apple-dark1 shadow-[0_4px_12px_rgba(15,23,42,0.04)] max-[430px]:h-7 max-[430px]:w-7 max-[430px]:rounded-[14px] dark:border-white/10 dark:bg-white/10 dark:text-white">
                {isScreenshotting ? (
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" className="opacity-25" />
                    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-90" />
                  </svg>
                ) : (
                  <CameraIcon className="h-4 w-4" />
                )}
              </div>
              <div className="mt-1 text-[12px] font-semibold tracking-tight text-apple-dark1 max-[430px]:text-[11px] dark:text-white">截图</div>
            </button>

            <button
              type="button"
              onClick={() => {
                onToggleEmojiIconMode();
                setIsCompactMenuOpen(false);
              }}
              className={compactMenuItemClassName}
            >
              <div className="flex h-7.5 w-7.5 items-center justify-center rounded-[15px] border border-black/5 bg-white/92 text-apple-dark1 shadow-[0_4px_12px_rgba(15,23,42,0.04)] max-[430px]:h-7 max-[430px]:w-7 max-[430px]:rounded-[14px] dark:border-white/10 dark:bg-white/10 dark:text-white">
                <EmojiModeIcon className="h-4 w-4" />
              </div>
              <div className="mt-1 text-[12px] font-semibold tracking-tight text-apple-dark1 max-[430px]:text-[11px] dark:text-white">图标</div>
            </button>

            <button type="button" onClick={onLogout} className={`${compactMenuItemClassName} col-span-2`}>
              <div className="flex h-7.5 w-7.5 items-center justify-center rounded-[15px] border border-black/5 bg-white/92 text-apple-dark1 shadow-[0_4px_12px_rgba(15,23,42,0.04)] max-[430px]:h-7 max-[430px]:w-7 max-[430px]:rounded-[14px] dark:border-white/10 dark:bg-white/10 dark:text-white">
                <ExitIcon className="h-4 w-4" />
              </div>
              <div className="mt-1 text-[12px] font-semibold tracking-tight text-apple-dark1 max-[430px]:text-[11px] dark:text-white">退出</div>
            </button>
          </div>
        </div>

        <div className="hidden items-center justify-end gap-3 min-[768px]:flex">
          <div className="flex items-center gap-2">
            <span className="hidden whitespace-nowrap text-xs font-medium text-apple-gray6 dark:text-white/55 min-[980px]:inline">
              {isRefreshing ? '更新中...' : `更新于 ${formattedLastLoadedAt}`}
            </span>
            <div className={iconButtonGroupClassName} role="group" aria-label="快捷操作">
              <button
                type="button"
                onClick={onRefresh}
                disabled={isRefreshing}
                className={groupedIconButtonClassName}
                title={isRefreshing ? '正在加载' : '重新加载'}
                aria-label={isRefreshing ? '正在加载' : '重新加载'}
              >
                {isRefreshing ? (
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" className="opacity-25" />
                    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-90" />
                  </svg>
                ) : (
                  <RefreshIcon className={getNavbarActionIconClassName('refresh')} />
                )}
              </button>

              <button
                type="button"
                onClick={onToggleAnimations}
                className={groupedIconButtonClassName}
                title={animationsEnabled ? '关闭动效' : '开启动效'}
                aria-label={animationsEnabled ? '关闭动效' : '开启动效'}
              >
                {animationsEnabled ? (
                  <SparkleIcon className={getNavbarActionIconClassName('sparkle')} />
                ) : (
                  <PauseIcon className={getNavbarActionIconClassName('pause')} />
                )}
              </button>

              <button
                type="button"
                onClick={onScreenshot}
                disabled={isScreenshotting}
                className={groupedIconButtonClassName}
                title={isScreenshotting ? '正在截图' : '截图'}
                aria-label={isScreenshotting ? '正在截图' : '截图'}
              >
                {isScreenshotting ? (
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" className="opacity-25" />
                    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-90" />
                  </svg>
                ) : (
                  <CameraIcon className={getNavbarActionIconClassName('camera')} />
                )}
              </button>
            </div>
          </div>

          <ThemeModeControl mode={themeMode} resolvedTheme={resolvedTheme} onChange={onThemeChange} />

          <button
            type="button"
            onClick={onToggleEmojiIconMode}
            className={iconButtonClassName}
            title={emojiIconMode === 'svg' ? '切换到 Emoji 图标' : '切换到 SVG 图标'}
            aria-label={emojiIconMode === 'svg' ? '切换到 Emoji 图标' : '切换到 SVG 图标'}
          >
            <EmojiModeIcon className={getNavbarActionIconClassName('emoji')} />
          </button>

          <button type="button" onClick={onLogout} className={iconButtonClassName} title="退出" aria-label="退出">
            <ExitIcon className={getNavbarActionIconClassName('exit')} />
          </button>
        </div>
      </div>
    </nav>
  );
}
