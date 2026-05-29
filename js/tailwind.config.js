tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* ── Dra. Annette Valerie Gaspard – Rose Medical Professional ── */
                "primary":                    "#8b4d67",
                "on-primary":                 "#ffffff",
                "primary-container":          "#f3cfdc",
                "on-primary-container":       "#4a1931",
                "primary-fixed":              "#f9e4eb",
                "primary-fixed-dim":          "#e4b8c7",
                "on-primary-fixed":           "#35101f",
                "on-primary-fixed-variant":   "#6d3850",
                "inverse-primary":            "#e4b8c7",
                "surface-tint":               "#8b4d67",

                "secondary":                  "#b56a85",
                "on-secondary":               "#ffffff",
                "secondary-container":        "#f6d8e2",
                "on-secondary-container":     "#5d233a",
                "secondary-fixed":            "#fdeaf0",
                "secondary-fixed-dim":        "#efc0d0",
                "on-secondary-fixed":         "#411326",
                "on-secondary-fixed-variant": "#7a4058",

                "tertiary":                   "#8a6f7f",
                "on-tertiary":                "#ffffff",
                "tertiary-container":         "#eadfe5",
                "on-tertiary-container":      "#4e3945",
                "tertiary-fixed":             "#f5edf1",
                "tertiary-fixed-dim":         "#d8c6cf",
                "on-tertiary-fixed":          "#35262f",
                "on-tertiary-fixed-variant":  "#674d5b",

                "error":                      "#ba1a1a",
                "on-error":                   "#ffffff",
                "error-container":            "#ffdad6",
                "on-error-container":         "#93000a",

                "background":                 "#fdf7f9",
                "on-background":              "#2d2430",
                "surface":                    "#fffafc",
                "on-surface":                 "#2d2430",
                "surface-variant":            "#ecdde4",
                "on-surface-variant":         "#64535c",
                "surface-container-lowest":   "#ffffff",
                "surface-container-low":      "#f8edf2",
                "surface-container":          "#f4e7ed",
                "surface-container-high":     "#ecdde4",
                "surface-container-highest":  "#e2d0d8",
                "surface-dim":                "#dcc9d1",
                "surface-bright":             "#fffafc",
                "inverse-surface":            "#453741",
                "inverse-on-surface":         "#fdf7f9",

                "outline":                    "#8b7680",
                "outline-variant":            "#d5c0c9"
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
