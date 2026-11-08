// Source of truth for the lodge palette. Mirrored in src/app/globals.css (@theme) — keep in sync.
const COLORS = {
    "light": {
        page: "#f4f3f1",
        surface: "#ffffff",
        ink: "#2b2a27",
        muted: "#6b6862",
        accent: "#3f5a4a",
        line: "#d9d6cf",
    }
}

export type ThemeName = keyof typeof COLORS

export function useThemeName() {
    const theme: ThemeName = "light"
    return theme;
}

export function useThemeColors() {
    const theme = useThemeName()
    return COLORS[theme]
}
