(function () {
    var appConfig = {
        clinic: {
            name: "Dra. Luz Elizabeth Turrubiate Munguia",
            specialty: "Ginecologia y Obstetricia",
            city: "Ciudad de Mexico",
            address: "Hospital San Angel Inn Universidad Torre II, Real Mayorazgo 130, Consultorio 342, Piso 3, Torre II, Ciudad de Mexico 03330"
        },
        contacts: {
            // TODO: Replace with Dra. Luz's actual WhatsApp number
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
})();
