(function () {
    var DEFAULT_CLINIC = {
        name: "Dra. Luz Elizabeth Turrubiate Munguia",
        specialty: "Ginecologia y Obstetricia",
        city: "Ciudad de Mexico",
        address: "Hospital San Angel Inn Universidad Torre II, Real Mayorazgo 130, Consultorio 342, Piso 3, Torre II, Ciudad de Mexico 03330",
        profileImageHero: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=80",
        profileImageAbout: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=1200&q=80"
    };

    function cleanParam(value, maxLength) {
        var normalized = String(value || "").trim();
        if (!normalized) return "";
        return normalized.slice(0, maxLength || 160);
    }

    function getQueryParams() {
        var params = new URLSearchParams(window.location.search || "");
        return {
            name: cleanParam(params.get("name") || params.get("doctorName") || params.get("nombre"), 120),
            specialty: cleanParam(params.get("specialty") || params.get("especialidad"), 120),
            city: cleanParam(params.get("city") || params.get("ciudad"), 80),
            profileImage: cleanParam(params.get("profileImage") || params.get("foto"), 500),
            profileImageHero: cleanParam(params.get("profileImageHero") || params.get("fotoHero"), 500),
            profileImageAbout: cleanParam(params.get("profileImageAbout") || params.get("fotoAbout"), 500)
        };
    }

    function replaceNameInDocument(oldName, newName) {
        if (!oldName || !newName || oldName === newName) return;

        if (document.title && document.title.indexOf(oldName) !== -1) {
            document.title = document.title.replaceAll(oldName, newName);
        }

        var metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && metaDescription.content.indexOf(oldName) !== -1) {
            metaDescription.content = metaDescription.content.replaceAll(oldName, newName);
        }

        var attrs = ["title", "aria-label", "alt", "content", "placeholder"];
        document.querySelectorAll("*").forEach(function (el) {
            attrs.forEach(function (attr) {
                var raw = el.getAttribute(attr);
                if (raw && raw.indexOf(oldName) !== -1) {
                    el.setAttribute(attr, raw.replaceAll(oldName, newName));
                }
            });
        });

        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
        var textNode;
        while ((textNode = walker.nextNode())) {
            if (textNode.nodeValue && textNode.nodeValue.indexOf(oldName) !== -1) {
                textNode.nodeValue = textNode.nodeValue.replaceAll(oldName, newName);
            }
        }
    }

    function updateDocumentTitle(cfg) {
        if (!cfg || !cfg.clinic) return;

        var titleParts = [
            cfg.clinic.name,
            cfg.clinic.specialty,
            cfg.clinic.city
        ].filter(Boolean);

        if (titleParts.length) {
            document.title = titleParts[0] + " - " + (titleParts[1] || "") + (titleParts[2] ? " | " + titleParts[2] : "");
        }
    }

    function applyProfileImages(cfg) {
        var heroImage = document.querySelector('[data-profile-image="hero"]');
        var aboutImage = document.querySelector('[data-profile-image="about"]');

        if (heroImage && cfg.clinic.profileImageHero) {
            heroImage.src = cfg.clinic.profileImageHero;
            heroImage.alt = cfg.clinic.name;
        }
        if (aboutImage && cfg.clinic.profileImageAbout) {
            aboutImage.src = cfg.clinic.profileImageAbout;
            aboutImage.alt = cfg.clinic.name + " en consulta";
        }
    }

    var q = getQueryParams();
    var appConfig = {
        clinic: {
            name: q.name || DEFAULT_CLINIC.name,
            specialty: q.specialty || DEFAULT_CLINIC.specialty,
            city: q.city || DEFAULT_CLINIC.city,
            address: DEFAULT_CLINIC.address,
            profileImageHero: q.profileImageHero || q.profileImage || DEFAULT_CLINIC.profileImageHero,
            profileImageAbout: q.profileImageAbout || q.profileImage || DEFAULT_CLINIC.profileImageAbout
        },
        contacts: {
            // TODO: Replace with doctor's actual WhatsApp number
            whatsappE164: "5215500000000",
            whatsappDisplay: "+52 55 0000 0000"
        },
        booking: {
            // Replace this with the real Google Appointment Schedule URL.
            googleBookingUrl: "",
            fallbackMode: "whatsapp"
        },
        api: {
            baseUrl: "http://localhost:8080",
            clientId: "dra-luz-turrubiate",
            timeoutMs: 12000
        },
        tracking: {
            ga4MeasurementId: "",
            metaPixelId: "",
            debug: true
        }
    };

    window.AppConfig = appConfig;
    // Backward compatibility for existing integration points.
    window.GoogleBookingConfig = {
        bookingUrl: appConfig.booking.googleBookingUrl
    };

    document.addEventListener("DOMContentLoaded", function () {
        updateDocumentTitle(appConfig);
        replaceNameInDocument(DEFAULT_CLINIC.name, appConfig.clinic.name);
        applyProfileImages(appConfig);
    });
})();
