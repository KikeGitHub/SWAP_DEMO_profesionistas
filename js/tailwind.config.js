tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* ── Dr. Miguel Loyo – Deep Teal Medical Professional ── */
                "primary":                    "#1b5e6e",
                "on-primary":                 "#ffffff",
                "primary-container":          "#a8d4de",
                "on-primary-container":       "#002f38",
                "primary-fixed":              "#c5eaf2",
                "primary-fixed-dim":          "#8ccad6",
                "on-primary-fixed":           "#001f26",
                "on-primary-fixed-variant":   "#144d5c",
                "inverse-primary":            "#8ccad6",
                "surface-tint":               "#1b5e6e",

                "secondary":                  "#2e4a5e",
                "on-secondary":               "#ffffff",
                "secondary-container":        "#cde5f8",
                "on-secondary-container":     "#14344a",
                "secondary-fixed":            "#d6ecfa",
                "secondary-fixed-dim":        "#aed0e8",
                "on-secondary-fixed":         "#0a1f2e",
                "on-secondary-fixed-variant": "#1e3a50",

                "tertiary":                   "#4a5c68",
                "on-tertiary":                "#ffffff",
                "tertiary-container":         "#c8d8e4",
                "on-tertiary-container":      "#2c3e4a",
                "tertiary-fixed":             "#dce8ef",
                "tertiary-fixed-dim":         "#bcccd6",
                "on-tertiary-fixed":          "#1a2830",
                "on-tertiary-fixed-variant":  "#384e5c",

                "error":                      "#ba1a1a",
                "on-error":                   "#ffffff",
                "error-container":            "#ffdad6",
                "on-error-container":         "#93000a",

                "background":                 "#f5f8fa",
                "on-background":              "#1a2228",
                "surface":                    "#f5f8fa",
                "on-surface":                 "#1a2228",
                "surface-variant":            "#d8e4ea",
                "on-surface-variant":         "#3d4f5a",
                "surface-container-lowest":   "#ffffff",
                "surface-container-low":      "#edf2f6",
                "surface-container":          "#e4ecf0",
                "surface-container-high":     "#d8e4ea",
                "surface-container-highest":  "#ccd8e0",
                "surface-dim":                "#c4d4dc",
                "surface-bright":             "#f5f8fa",
                "inverse-surface":            "#283640",
                "inverse-on-surface":         "#edf2f6",

                "outline":                    "#5c7484",
                "outline-variant":            "#adbec8"
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
