(function () {
    var appConfig = {
        clinic: {
            name: "Dra. Annette Valerie Gaspard",
            specialty: "Ginecología, Obstetricia y Medicina Materno Fetal",
            city: "CDMX",
            address: "CLINIFEM Centro CDMX, Hospital Ángeles Pedregal, Camino Santa Teresa 1055-S, Piso 7, Consultorio 733, Héroes de Padierna, Ciudad de México 10700"
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
