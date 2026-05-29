(function () {
    var appConfig = {
        clinic: {
            name: "Dr. Miguel Loyo",
            specialty: "Ginecología y Obstetricia",
            city: "CDMX",
            address: "Viaducto Río Becerra 97, Colonia Nápoles, Ciudad de México 03810"
        },
        contacts: {
            // TODO: Replace with Dr. Loyo's actual WhatsApp number
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
            clientId: "dr-miguel-loyo",
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
})();
