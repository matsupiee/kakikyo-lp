import type { Dictionary } from "../dictionary";

export const es: Dictionary = {
  meta: {
    title: "Kappō Ryōtei Kakikyō | Cocina de ostras y kaiseki de temporada en Fukui",
    description:
      "Restaurante tradicional japonés Kakikyō, en Fukui Castle Daimyōmachi. Un siglo de oficio: ostras en invierno y kaiseki en las cuatro estaciones. Reservas abiertas.",
    ogTitle: "Kappō Ryōtei Kakikyō",
    ogDescription:
      "Un kappō ryōtei tradicional en Fukui, con cocina de ostras en invierno y kaiseki de las cuatro estaciones.",
  },
  brand: {
    name: "かき恭",
    tagline: "Kakikyō · since 1924",
    taglineLong: "Kappō Ryōtei Kakikyō · Fukui",
  },
  contact: {
    phoneDisplay: "0776-23-0595",
    hours: "17:00 – 22:00",
    hoursDetail: "17:00 – 22:00 (última entrada 20:30)",
    closed: "Cerrado: domingos y festivos",
    closedExtra: "(Grupos de 10+ pueden reservar domingos y festivos)",
    postal: "〒910-0006",
    addressPrimary: "福井県福井市中央 3-10-8",
    addressRomaji: "3-10-8 Chūō, Fukui-shi, Fukui 910-0006, Japan",
  },
  nav: {
    concept: { primary: "Filosofía", sub: "おもてなし" },
    cuisine: { primary: "Cocina", sub: "お料理" },
    gallery: { primary: "Galería", sub: "写真" },
    info: { primary: "Información", sub: "店舗案内" },
    access: { primary: "Acceso", sub: "アクセス" },
    reserveDesktop: "Reservar · 0776-23-0595",
    reserveMobile: "Llamar para reservar · 0776-23-0595",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    eyebrow: "Kappō Ryōtei · Fukui · Est. 1924",
    taglineLines: [
      "Invierno — cocina de ostras.",
      "Todas las estaciones — kaiseki.",
      "Capas de temporada, en silencio.",
    ],
    ctaAbout: "Sobre nosotros",
    ctaReserve: "Reservar · 0776-23-0595",
    scroll: "Scroll",
  },
  concept: {
    heading: { eyebrow: "おもてなし", main: "Nuestra filosofía" },
    titleLines: ["Las estaciones de Fukui,", "ofrecidas con delicadeza en cada plato."],
    paragraphs: [
      [
        "Casi un siglo desde nuestra fundación en la era Taishō.",
        "Kakikyō captura con cuidado los dones del mar, las montañas",
        "y el campo de Hokuriku-Fukui en cada cuenco y cada plato.",
      ],
      [
        "En invierno, ostras criadas en las olas bravas del mar de Japón.",
        "A lo largo del año, elegimos los mejores ingredientes de cada momento",
        "y tejemos tradición y sensibilidad contemporánea en nuestro kaiseki.",
      ],
      [
        "En la quietud de nuestras salas privadas recibimos",
        "reuniones familiares, comidas íntimas y hospitalidad formal — tómese su tiempo.",
      ],
    ],
    centennialKanji: "百",
    centennialLabel: "un siglo de tiempo, en capas",
    sinceLabel: "Since",
    year: "1924",
  },
  cuisine: {
    heading: { eyebrow: "お料理", main: "Nuestra cocina" },
    leadLines: [
      "Tesoros del mar de Japón, dones del interior de Echizen.",
      "Ingredientes de temporada, convertidos en kaiseki en cada estación.",
    ],
    courses: [
      {
        name: "Kaki Kaiseki",
        kana: "牡蛎会席",
        season: "Nov – Mar / Invierno",
        price: "¥12,100 (JPY)",
        note: "Imp. incluido; cargo de mesa y servicio aparte",
        description:
          "Ostras firmes criadas por las olas del mar de Japón, preparadas crudas, a la parrilla, fritas y en olla — reunidas en una misma bandeja. Nuestro curso insignia de invierno, saboreado con serenidad.",
      },
      {
        name: "Shiki Kaiseki",
        kana: "季節の会席",
        season: "Todo el año / Primavera – Otoño",
        price: "desde ¥9,350 (JPY)",
        note: "Imp. incluido; cargo de mesa y servicio aparte",
        description:
          "Sakizuke (entrante), wanmono (sopa), mukōzuke (sashimi), yakimono (a la parrilla), nimono (estofado), agemono (frito), arroz, encurtidos y postre. Siete tiempos de Fukui, adaptados a su presupuesto.",
      },
      {
        name: "Tokubetsu Kaiseki",
        kana: "特別会席",
        season: "Bajo consulta",
        price: "Consultar",
        note: "Adaptado a presupuesto y deseos",
        description:
          "Para compromisos, encuentros familiares, servicios memoriales, agasajos formales y aniversarios — un lugar especial para un día especial. Ingredientes, presentación y sala ajustados a sus deseos.",
      },
    ],
    courseFromLabel: "Desde",
    noticeTitle: "＊ Importante ＊",
    noticeLines: [
      "Los platos servidos el día pueden diferir de los reservados.",
      "Se aplican por separado un cargo de mesa de ¥1,000 por persona, 15% de servicio y 10% de impuesto.",
      "Avísenos de alergias o preferencias al hacer la reserva.",
    ],
  },
  gallery: {
    heading: { eyebrow: "写真", main: "Galería" },
    lead: "Platos que cambian con las estaciones, y momentos de calma en nuestras salas.",
    photos: [
      { jp: "牡蛎", label: "Oyster" },
      { jp: "椀物", label: "Wanmono" },
      { jp: "向付", label: "Mukōzuke" },
      { jp: "焼物", label: "Yakimono" },
      { jp: "座敷", label: "Zashiki" },
      { jp: "甘味", label: "Kanmi" },
      { jp: "献立", label: "Kondate" },
    ],
  },
  info: {
    heading: { eyebrow: "店舗案内", main: "Información" },
    rows: [
      { label: "Nombre", value: "Kappō Ryōtei Kakikyō (かき恭)", sub: "" },
      { label: "Género", value: "Kaiseki · Kappō / Cocina de ostras / Temporada", sub: "" },
      {
        label: "Dirección",
        value: "〒910-0006 福井県福井市中央 3-10-8",
        sub: "3-10-8 Chūō, Fukui-shi, Fukui 910-0006, Japan",
      },
      { label: "Teléfono", value: "0776-23-0595", sub: "" },
      { label: "Horario", value: "17:00 – 22:00 (última entrada 20:30)", sub: "" },
      {
        label: "Cerrado",
        value: "Domingos y festivos (grupos de 10+ bajo consulta)",
        sub: "",
      },
      {
        label: "Precio",
        value: "Kaiseki desde ¥9,350 / Kaki Kaiseki desde ¥12,100 (imp. incl.)",
        sub: "Más cargo de mesa ¥1,000 y 15% de servicio",
      },
      {
        label: "Asientos",
        value: "Salas privadas con tatami tradicional",
        sub: "Para comidas, agasajos, memoriales y banquetes",
      },
      { label: "Pago", value: "Efectivo / Tarjetas de crédito principales", sub: "" },
    ],
    cards: {
      privateRoom: {
        eyebrow: "Private Room",
        title: "Salas privadas",
        body: "Desde comidas íntimas hasta servicios memoriales y banquetes — salas grandes y pequeñas a su disposición.",
      },
      special: {
        eyebrow: "Special Occasions",
        title: "Ceremonias y memoriales",
        body: "Ofrecemos banquetes para compromisos, reuniones familiares, celebraciones y servicios memoriales — la cocina de los días importantes.",
      },
      allergies: {
        eyebrow: "Allergies",
        title: "Necesidades dietéticas",
        body: "Indíquenoslo al reservar y haremos lo posible por acomodarle.",
      },
    },
  },
  access: {
    heading: { eyebrow: "アクセス", main: "Acceso" },
    mapTitle: "Kappō Ryōtei Kakikyō — mapa",
    locationLabel: "Dirección",
    addressLines: ["〒910-0006", "福井県福井市中央 3-10-8"],
    addressRomaji: "3-10-8 Chūō, Fukui-shi, Fukui 910-0006, Japan",
    mapLink: "Ver en Google Maps →",
    fromStation: "Desde la estación",
    routes: [
      { line: "Estación JR Fukui", detail: "~5 min a pie desde la salida oeste" },
      {
        line: "Estación Fukui-Jōshi-Daimyōmachi (Ferrocarril de Fukui)",
        detail: "~2 min a pie desde la salida",
      },
      { line: "Estación Shiyakusho-mae (Ferrocarril de Fukui)", detail: "~6 min a pie" },
    ],
  },
  reservation: {
    eyebrow: "Reservation",
    title: "Reservas",
    bodyLines: [
      "Rogamos hacer la reserva, a más tardar, el día anterior a su visita.",
      "Escucharemos el tamaño del grupo, el presupuesto y sus deseos,",
      "y prepararemos un lugar donde pasar el tiempo con calma.",
    ],
    phoneCallLabel: "Por teléfono",
    tapToCall: "Toque para llamar",
    hoursNote: "Recepción 17:00 – 22:00 / Cerrado domingos y festivos",
    ctaReserve: "Reservar por teléfono",
    ctaAccess: "Ver acceso",
  },
  footer: {
    taglineLines: [
      "Las estaciones de Fukui, en un plato.",
      "Cocina de ostras en invierno, y kaiseki que refleja las cuatro estaciones.",
      "Tómese su tiempo en estos momentos de calma.",
    ],
    storeInfoTitle: "Información",
    hoursTitle: "Horario",
    telLabel: "TEL",
    copyright: "© {year} Kappō Ryōtei Kakikyō. All rights reserved.",
    location: "Fukui, Japón",
  },
  languageSwitcher: {
    label: "Idioma",
    current: "Idioma actual",
    switchTo: "Cambiar a español",
  },
  chatbot: {
    welcome:
      "Bienvenido a Kakikyō. No dude en preguntarnos sobre horarios, reservas, cursos o acceso.",
    dialogAriaLabel: "Chat de consultas de Kakikyō",
    headerTitle: "Kakikyō · Concierge",
    headerSubtitle: "AI Concierge",
    closeAriaLabel: "Cerrar chat",
    thinking: "…preparando una respuesta",
    inputPlaceholder: "Escriba su consulta",
    inputAriaLabel: "Entrada de mensaje",
    sendAriaLabel: "Enviar",
    openAriaLabel: "Abrir chat",
    footerReservePrefix: "Reservas al teléfono ",
    footerReserveSuffix: "",
    errors: {
      network: "Error de conexión. Por favor, inténtelo de nuevo en un momento.",
      configMissing: "El chat aún no está configurado. Por favor, contáctenos al +81 776-23-0595.",
      rateLimited:
        "En este momento estamos ocupados. Espere un momento o llame al +81 776-23-0595.",
      generationFailed: "No se pudo generar la respuesta. Por favor, inténtelo de nuevo.",
      safetyBlocked: "Lo sentimos, no podemos responder esa consulta.",
      invalidRequest: "No pudimos procesar su solicitud. Por favor, inténtelo de nuevo.",
    },
  },
};
