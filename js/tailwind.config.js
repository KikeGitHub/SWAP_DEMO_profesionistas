tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* ── Dra. Luz Elizabeth Turrubiate Munguia – Neutral Medical Professional ── */
                "primary":                    "#1f5f73",
                "on-primary":                 "#ffffff",
                "primary-container":          "#cfe8ef",
                "on-primary-container":       "#093747",
                "primary-fixed":              "#e4f2f6",
                "primary-fixed-dim":          "#b8d6df",
                "on-primary-fixed":           "#072532",
                "on-primary-fixed-variant":   "#2a7288",
                "inverse-primary":            "#88bbca",
                "surface-tint":               "#1f5f73",

                "secondary":                  "#2f7f95",
                "on-secondary":               "#ffffff",
                "secondary-container":        "#d7ebf2",
                "on-secondary-container":     "#124658",
                "secondary-fixed":            "#eaf5f8",
                "secondary-fixed-dim":        "#c1dde7",
                "on-secondary-fixed":         "#0f3442",
                "on-secondary-fixed-variant": "#3c8aa0",

                "tertiary":                   "#5f6f89",
                "on-tertiary":                "#ffffff",
                "tertiary-container":         "#dde3ef",
                "on-tertiary-container":      "#2d3e58",
                "tertiary-fixed":             "#ecf0f7",
                "tertiary-fixed-dim":         "#c8d2e3",
                "on-tertiary-fixed":          "#203049",
                "on-tertiary-fixed-variant":  "#4f6079",

                "error":                      "#ba1a1a",
                "on-error":                   "#ffffff",
                "error-container":            "#ffdad6",
                "on-error-container":         "#93000a",

                "background":                 "#f3f8fa",
                "on-background":              "#1f2a35",
                "surface":                    "#fdfefe",
                "on-surface":                 "#1f2a35",
                "surface-variant":            "#d7e1e8",
                "on-surface-variant":         "#4e6170",
                "surface-container-lowest":   "#ffffff",
                "surface-container-low":      "#edf4f7",
                "surface-container":          "#e6eff3",
                "surface-container-high":     "#dde8ed",
                "surface-container-highest":  "#d1dde4",
                "surface-dim":                "#c9d6de",
                "surface-bright":             "#ffffff",
                "inverse-surface":            "#243441",
                "inverse-on-surface":         "#eaf2f6",

                "outline":                    "#7a8d9c",
                "outline-variant":            "#bfd0da"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            spacing: {
                "section-gap-mobile": "64px",
                "grid-gutter": "24px",
                "section-gap-desktop": "120px",
                "grid-margin": "24px",
                "base": "8px"
            },
            fontFamily: {
                "headline-sm": ["EB Garamond"],
                "label-caps": ["Manrope"],
                "headline-md": ["EB Garamond"],
                "display-lg": ["EB Garamond"],
                "display-lg-mobile": ["EB Garamond"],
                "body-lg": ["Manrope"],
                "body-md": ["Manrope"],
                "body-sm": ["Manrope"]
            },
            fontSize: {
                "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
                "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.08em", "fontWeight": "600" }],
                "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "500" }],
                "display-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "500" }],
                "display-lg-mobile": ["36px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "500" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
                "body-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }]
            }
        }
    }
};
