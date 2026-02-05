const productos = [
{
  nombre: "5175CONDIMENTERO GIRATORIO",
  categoria: "Hogar / Cocina",
  descripcion: "Material: ABS + Metal resistente. Base giratoria 360°. Incluye 18 frascos de 100 ml. Diseño elegante y práctico. Medida aprox.: 37 x 24 x 32 cm",
  precios: {
    "1": 31.50,
 },
  imagen: "Img/Imagen233.png",
  stock: 3
},
 {
  nombre: "4669LABIAL EN BARRA EFECTO MATE",
  categoria: "Belleza / Cosmética",
  descripcion: "Descubre la colección de lápices labiales mate Flower Secret, perfectos para un look sofisticado y duradero. Con una gama de tonos vibrantes y nudes, ideales para cualquier ocasión.",
  precios: {
    "1": 4.95,
    "3": 3.55,
    "6": 3.25,
    "12": 2.95,
 },
  imagen: "Img/Imagen235.jpeg",
  stock: 12
},
{
  nombre: "5030BALDE CANCHERO + VASO TOMATODO \"PITUFOS\"",
  categoria: "Juguetes",
  descripcion: "¡Diversión y estilo para los más peques! Incluye balde canchero y vaso tomatodo con diseño de Los Pitufos.",
  precios: {
    "1": 6.95,
  },
  imagen: "Img/Imagen9.jpg",
  stock: 2
},
{
  nombre: "5013ESCURRIDOR DE ACERO",
  categoria: "Hogar / Cocina",
  descripcion: "Escurre tus platos con elegancia. Fabricado en acero resistente, combina funcionalidad y diseño moderno para tu cocina.",
  precios: {
    "1": 6.95,
    "3": 5.95,
  },
  imagen: "Img/Imagen14.jpg",
  stock: 5
},
{
  nombre: "4999SET DE 100 GUANTES",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Protege tus manos en todo momento. Pack de 100 guantes desechables ideales para limpieza, cocina o cuidado personal.",
  precios: {
    "1": 3.95,
    "3": 2.55,
    "6": 2.25,
    "12": 1.95,
  },
  imagen: "Img/Imagen19.jpg",
  stock: 15
},
{
  nombre: "4986MOLDE DE SILICONA",
  categoria: "Hogar / Cocina",
  descripcion: "Ideal para repostería creativa. Molde de silicona antiadherente para hacer figuras dulces con estilo.",
  precios: {
    "1": 3.95,
  },
  imagen: "Img/Imagen23.jpg",
  stock: 1
},
{
  nombre: "4966TAZA GAMER",
  categoria: "Juguetes",
  descripcion: "¡Para los verdaderos gamers! Esta taza con diseño único es perfecta para tus sesiones de juego con café o chocolate.",
  precios: {
    "1": 10.90,
  },
  imagen: "Img/Imagen27.jpg",
  stock: 2
},
{
  nombre: "4955CHUPA PANZA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "¡Reduce medidas al instante! Este gel reafirmante ayuda a tonificar la zona abdominal y estilizar tu figura.",
  precios: {
    "1": 9.90,
    "3": 8.90,
  },
  imagen: "Img/Imagen31.jpg",
  stock: 4
},
{
  nombre: "4930MANZANA ACRÍLICA SIN LETRAS",
  categoria: "Decoración / Fiesta",
  descripcion: "Una pieza decorativa elegante. Esta manzana acrílica es ideal para regalos, escritorios o espacios creativos.",
  precios: {
    "1": 5.95,
    "3": 4.95,
  },
  imagen: "Img/Imagen34.jpg",
  stock: 8
},
{
  nombre: "4884TAPETE CAPYBARA",
  categoria: "Hogar / Cocina",
  descripcion: "Dale estilo a tu entrada con este adorable tapete de capibara. Suave, resistente y antideslizante.",
  precios: {
    "1": 4.95,
    "3": 3.55,
    "6": 3.25,
  },
  imagen: "Img/Imagen38.jpg",
  stock: 11
},
{
  nombre: "4862REBANADOR",
  categoria: "Hogar / Cocina",
  descripcion: "Haz cortes perfectos. Este rebanador es ideal para frutas, verduras y más, con seguridad y precisión.",
  precios: {
    "1": 3.95,
    "3": 2.95,
  },
  imagen: "Img/Imagen41.jpg",
  stock: 9
},
{
  nombre: "4861PACK DE 12 VINCHAS",
  categoria: "Accesorios",
  descripcion: "Colores para cada día. Set de 12 vinchas elásticas, cómodas y perfectas para peinados o uso diario.",
  precios: {
    "1": 8.90,
  },
  imagen: "Img/Imagen42.jpg",
  stock: 1
},
{
  nombre: "4855CHAL",
  categoria: "Accesorios",
  descripcion: "Elegancia ligera. Chal suave y versátil ideal para climas frescos o complementar cualquier look.",
  precios: {
    "1": 7.95,
    "3": 6.95,
  },
  imagen: "Img/Imagen44.jpg",
  stock: 10
},
{
  nombre: "4854GLOBO BOUQUET - PAPA",
  categoria: "Decoración / Fiesta",
  descripcion: "Sorprende a papá con estilo. Bouquet de globos con temática especial para el Día del Padre.",
  precios: {
    "1": 3.55,
  },
  imagen: "Img/Imagen45.jpg",
  stock: 2
},
{
  nombre: "4853GLOBO FELIZ DÍA PAPA",
  categoria: "Decoración / Fiesta",
  descripcion: "Un detalle festivo que alegra el día. Globo decorativo con mensaje especial para papá.",
  precios: {
    "1": 2.95,
    "3": 1.95,
  },
  imagen: "Img/Imagen46.jpg",
  stock: 10
},
{
  nombre: "4832KIT DE MANICURE",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Uñas siempre perfectas. Kit completo con herramientas esenciales para tu cuidado personal en casa o de viaje.",
  precios: {
    "1": 5.95,
  },
  imagen: "Img/Imagen49.jpg",
  stock: 1
},
{
  nombre: "4831GUANTES TOUCH",
  categoria: "Accesorios",
  descripcion: "¡Tecnología al alcance de tus dedos! Guantes cálidos compatibles con pantallas táctiles. Ideal para invierno.",
  precios: {
    "1": 4.95,
    "2": 3.85,
  },
  imagen: "Img/Imagen50.jpg",
  stock: 2
},
{
  nombre: "4775BOLSO CORAZÓN",
  categoria: "Accesorios",
  descripcion: "Tierno y a la moda. Bolso en forma de corazón con correa ajustable, ideal para salidas casuales o regalar.",
  precios: {
    "1": 8.90,
  },
  imagen: "Img/Imagen53.jpg",
  stock: 1
},
{
  nombre: "4704MINI TELESCOPIO",
  categoria: "Juguetes",
  descripcion: "Explora el mundo desde cerca. Mini telescopio compacto y portátil, ideal para niños curiosos o actividades al aire libre.",
  precios: {
    "1": 24.90,
  },
  imagen: "Img/Imagen55.jpg",
  stock: 1
  },
{
  nombre: "4675COLLAR PURE LOVE",
  categoria: "Accesorios",
  descripcion: "Un símbolo de cariño. Collar con diseño delicado que representa el amor puro. Perfecto como regalo.",
  precios: {
    "1": 3.95,
    "3": 2.25,
    "6": 1.95,
    "12": 1.65,
  },
  imagen: "Img/Imagen56.jpg",
  stock: 12
},
{
  nombre: "4629LAPICERO DOBLE PUNTA",
  categoria: "Escolar / Papelería",
  descripcion: "¡Dos funciones en uno! Lapicero con doble punta para escribir con precisión y comodidad.",
  precios: {
    "1": 3.95,
    "3": 2.25,
    "6": 1.95,
  },
  imagen: "Img/Imagen58.jpg",
  stock: 12
},
{
  nombre: "4547CORTADOR DE PASTILLA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Corte exacto y seguro. Herramienta compacta para dividir pastillas con precisión y sin esfuerzo.",
  precios: {
    "1": 3.90,
    "3": 2.85,
    "6": 2.55,
  },
  imagen: "Img/Imagen62.jpg",
  stock: 19
},
{
  nombre: "4445JABONERA DE LUJO",
  categoria: "Hogar / Cocina",
  descripcion: "Un toque elegante en tu baño. Jabonera resistente con diseño moderno, ideal para el hogar u oficina.",
  precios: {
    "1": 4.90,
    "3": 3.50,
  },
  imagen: "Img/Imagen64.jpg",
  stock: 2
},
{
  nombre: "4383MUÑEQUITO PARA CELULAR",
  categoria: "Electrónica / Gadgets",
  descripcion: "¡Diversión en miniatura! Soporte decorativo para celular con diseño de muñequito. Práctico y adorable.",
  precios: {
    "1": 5.80,
    "2": 3.80,
  },
  imagen: "Img/Imagen66.jpg",
 stock: 2
},
{
  nombre: "4380PACK DE 10 PEGA MOSCAS",
  categoria: "Hogar / Cocina",
  descripcion: "Despídete de los insectos. Pack de 10 trampas adhesivas para moscas, práctico, higiénico y fácil de usar.",
  precios: {
    "1": 6.90,
    "3": 5.00,
  },
  imagen: "Img/Imagen67.jpg",
  stock: 4
},
{
  nombre: "4183LENTES DE SOL 2025",
  categoria: "Accesorios",
  descripcion: "Protección y estilo moderno. Lentes de sol con diseño actual, perfectos para cualquier ocasión.",
  precios: {
    "1": 6.00,
    "3": 4.90,
  },
  imagen: "Img/Imagen74.jpg",
  stock: 3
},
{
  nombre: "4175FORRO NAVIDEÑO PARA SILLA",
  categoria: "Navidad / Regalos",
  descripcion: "Decora con espíritu navideño. Forro para silla con diseños festivos, ideal para cenas y reuniones familiares.",
  precios: {
    "3": 5.50,
  },
  imagen: "Img/Imagen75.jpg",
  stock: 3
},
{
  nombre: "4118SOPORTE PARA ASIENTO DE AUTO",
  categoria: "Hogar / Cocina",
  descripcion: "Organiza tu auto fácilmente. Soporte multiuso para colgar bolsas, carteras o accesorios en el asiento del vehículo.",
  precios: {
    "1": 3.90,
    "3": 2.30,
  },
  imagen: "Img/Imagen78.jpg",
  stock: 10
},
{
  nombre: "3778CORTADOR DE VIDRIO Y CERÁMICA",
  categoria: "Hogar / Cocina",
  descripcion: "Herramienta precisa para bricolaje. Corta fácilmente vidrio o cerámica con precisión profesional.",
  precios: {
    "1": 19.90,
  },
  imagen: "Img/Imagen81.jpg",
  stock: 2
},
{
  nombre: "3930SET DE 6 INDIVIDUALES + 6 POSAVASOS NAVIDEÑOS",
  categoria: "Navidad / Regalos",
  descripcion: "Dale un toque navideño a tu mesa con este set decorativo. Incluye 6 individuales y 6 posavasos con diseños festivos.",
  precios: {
    "1": 4.90,
    "3": 3.20,
    "6": 2.90,
  },
  imagen: "Img/Imagen84.jpg",
  stock: 6
},
{
  nombre: "3655TOMATODO CARTOON",
  categoria: "Hogar / Cocina",
  descripcion: "Tomatodo con diseños cartoon llamativos, perfecto para niños o fans de personajes animados.",
  precios: {
    "1": 8.00,
    "3": 6.90,
  },
  imagen: "Img/Imagen86.jpg",
  stock: 3
},
{
  nombre: "3648EMBUDO CREMERO",
  categoria: "Hogar / Cocina",
  descripcion: "Embudo práctico y compacto ideal para servir cremas, líquidos o salsas sin derrames.",
  precios: {
    "1": 3.90,
    "3": 2.60,
    "6": 2.30,
  },
  imagen: "Img/Imagen87.jpg",
  stock: 5
},
{
  nombre: "3613CAJA DE JOYERÍA",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza tus joyas con estilo. Caja transparente con compartimentos para mantener todo a la vista y ordenado.",
  precios: {
    "1": 6.00,
    "3": 4.90,
  },
  imagen: "Img/Imagen88.jpeg",
 stock: 7
},
{
  nombre: "3562PAÑOLETA",
  categoria: "Accesorios",
  descripcion: "Añade estilo y color a tu outfit con esta pañoleta versátil. Ideal para el cuello, el cabello o como accesorio de bolso.",
  precios: {
    "1": 3.90,
    "3": 2.10,
    "6": 1.80,
    "12": 1.50,
  },
  imagen: "Img/Imagen91.jpg",
  stock: 12
},
{
  nombre: "3159JUEGO DE 2 COLLARES – CORAZÓN MAGNÉTICO",
  categoria: "Accesorios",
  descripcion: "Collares magnéticos para compartir con alguien especial. Al juntarse forman un corazón, ideal para parejas o amistades.",
  precios: {
    "1": 4.90,
    "3": 3.50,
    "6": 3.20,
    "12": 2.90,
  },
  imagen: "Img/Imagen94.jpg",
  stock: 20
},
{
  nombre: "3054AVE DE EQUILIBRIO",
  categoria: "Juguetes",
  descripcion: "Curiosa figura de ave que se equilibra mágicamente en una superficie. Sorprende a grandes y chicos.",
  precios: {
    "1": 1.00,
  },
  imagen: "Img/Imagen95.jpg",
  stock: 43
},
{
  nombre: "3053JUGUETE BALANCE",
  categoria: "Juguetes",
  descripcion: "Divertido juguete educativo que ayuda a desarrollar la coordinación y el equilibrio en los más pequeños.",
  precios: {
    "1": 10.90,
  },
  imagen: "Img/Imagen96.jpg",
  stock: 3
},
{
  nombre: "3038SHORT LEVANTA POMPIS",
  categoria: "Ropa interior",
  descripcion: "Short moldeador que realza tu figura. Comodidad y soporte con efecto push-up para tu día a día.",
  precios: {
    "1": 8.90,
  },
  imagen: "Img/Imagen97.jpg",
  stock: 2
},
{
  nombre: "2968CAJA NAVIDEÑA",
  categoria: "Navidad / Regalos",
  descripcion: "Caja con temática navideña perfecta para regalos, detalles o decoración. Ideal para sorprender en estas fiestas.",
  precios: {
    "1": 3.90,
    "3": 2.90,
  },
  imagen: "Img/Imagen99.jpg",
  stock: 25
},
{
  nombre: "2943MINI FREGONA",
  categoria: "Hogar / Cocina",
  descripcion: "Compacta y funcional, esta mini fregona es ideal para limpiezas rápidas en espacios reducidos.",
  precios: {
    "1": 4.90,
  },
  imagen: "Img/Imagen100.jpg",
  stock: 6
},
{
  nombre: "2910SET DE 10 ACCESORIOS PARA EL CABELLO",
  categoria: "Accesorios",
  descripcion: "Completo set de accesorios para peinar y decorar tu cabello. Práctico, variado y con mucho estilo.",
  precios: {
    "2": 4.50,
  },
  imagen: "Img/Imagen101.jpg",
  stock: 2
},
{
  nombre: "2819SET DE 6 VASOS NAVIDEÑOS",
  categoria: "Navidad / Regalos",
  descripcion: "Vasos con diseños festivos para darle alegría a tus celebraciones navideñas. ¡Ideal para compartir!",
  precios: {
    "1": 9.90,
  },
  imagen: "Img/Imagen102.jpg",
  stock: 2
},
{
  nombre: "2803PEGATINA DE TATUAJE",
  categoria: "Belleza / Cosmética",
  descripcion: "Pegatinas de tatuaje temporales para lucir diseños únicos sin compromiso. Fáciles de aplicar y remover.",
  precios: {
    "1": 4.90,
    "3": 3.90,
  },
  imagen: "Img/Imagen103.jpg",
  stock: 22
},
{
  nombre: "2802VASO DE BEBIDA REFRIGERANTE",
  categoria: "Hogar / Cocina",
  descripcion: "Vaso térmico diseñado para mantener tus bebidas frías por más tiempo. Ideal para el verano.",
  precios: {
    "1": 7.90,
  },
  imagen: "Img/Imagen104.jpg",
  stock: 3
},
{
  nombre: "2795EXCAVADORA A CONTROL REMOTO",
  categoria: "Juguetes",
  descripcion: "Excavadora realista con control remoto. Diversión garantizada para los fanáticos de la construcción.",
  precios: {
    "1": 17.90,
  },
  imagen: "Img/Imagen105.jpg",
  stock: 1
},
{
  nombre: "2794MASCARA HALOWEEN",
  categoria: "Decoración / Fiesta",
  descripcion: "Máscara ideal para fiestas de Halloween o disfraces. Dale un toque terrorífico a tu look.",
  precios: {
    "1": 3.50,
  },
  imagen: "Img/Imagen106.jpg",
  stock: 6
},
{
  nombre: "2790SET DE 12 GANCHITOS",
  categoria: "Accesorios",
  descripcion: "Ganchitos coloridos y prácticos para sujetar el cabello o decorar peinados. Útiles y decorativos.",
  precios: {
    "2": 3.90,
  },
  imagen: "Img/Imagen107.jpg",
  stock: 2
},
{
  nombre: "2717LIGA DE CIERRE",
  categoria: "Hogar / Cocina",
  descripcion: "Liga multiuso con cierre resistente. Ideal para sujetar cables, bolsas o accesorios personales.",
  precios: {
    "5": 1.20,
  },
  imagen: "Img/Imagen108.jpg",
  stock: 36
},
{
  nombre: "2689SET DE 10 FOIL + TAPER",
  categoria: "Hogar / Cocina",
  descripcion: "Set práctico de 10 láminas foil con recipiente tipo taper, ideal para conservar y transportar alimentos con estilo.",
  precios: {
    "5": 1.90,
  },
  imagen: "Img/Imagen110.jpg",
  stock: 12
},
{
  nombre: "2688CAPA DE HALLOWEEN",
  categoria: "Decoración / Fiesta",
  descripcion: "Capa temática perfecta para complementar tu disfraz de Halloween. Ligera, llamativa y fácil de usar.",
  precios: {
    "2": 3.90,
  },
  imagen: "Img/Imagen111.jpg",
  stock: 11
},
{
  nombre: "2629ORGANIZADOR DE MEDIAS",
  categoria: "Organización / Almacenamiento",
  descripcion: "Mantén tus medias ordenadas y al alcance con este organizador práctico y compacto. Ideal para cajones o closets.",
  precios: {
    "1": 2.90,
    "3": 1.90,
  },
  imagen: "Img/Imagen112.jpg",
  stock: 6
},
{
  nombre: "2590MOLEDOR DE ESPECIAS",
  categoria: "Hogar / Cocina",
  descripcion: "Muele tus especias favoritas al instante. Ideal para realzar el sabor de tus comidas con ingredientes recién triturados.",
  precios: {
    "2": 3.90,
  },
  imagen: "Img/Imagen113.jpg",
  stock: 5
},
{
  nombre: "2481TACHO KAWAII",
  categoria: "Hogar / Cocina",
  descripcion: "Tacho de basura con diseño adorable estilo kawaii. Perfecto para escritorios o espacios pequeños con un toque tierno.",
  precios: {
    "3": 3.80,
  },
  imagen: "Img/Imagen114.jpg",
  stock: 28
},
{
  nombre: "2421PAQUETE DE BOLSAS TERMORETRACTIL",
  categoria: "Organización / Almacenamiento",
  descripcion: "Bolsas que se ajustan al contenido con calor, ideales para embalaje seguro, ordenado y profesional.",
  precios: {
    "1": 24.90,
  },
  imagen: "Img/Imagen116.jpg",
  stock: 2
},
{
  nombre: "2380PORTA SANDALIAS",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza y transporta tus sandalias o zapatos de forma ordenada. Ideal para viajes o almacenaje en casa.",
  precios: {
    "3": 2.90,
  },
  imagen: "Img/Imagen117.jpg",
  stock: 3
},
{
  nombre: "2416PLATO HONGUITO",
  categoria: "Hogar / Cocina",
  descripcion: "Tierno plato con diseño de hongo, perfecto para servir snacks, frutas o decorar tu cocina con un toque divertido.",
  precios: {
    "1": 3.90,
  },
  imagen: "Img/Imagen118.jpg",
  stock: 6
},
{
  nombre: "1411CUCHARA MEZCLADORA",
  categoria: "Hogar / Cocina",
  descripcion: "Práctica cuchara ideal para remover bebidas, jugos o mezclas de cocina. Útil y resistente para el uso diario.",
  precios: {
    "1": 3.90,
  },
  imagen: "Img/Imagen119.jpg",
  stock: 6
},
{
  nombre: "1261EXPRIMIDOR DE ZUMO",
  categoria: "Hogar / Cocina",
  descripcion: "Extrae jugo de tus frutas favoritas fácilmente. Diseño ergonómico y funcional para un exprimido sin esfuerzo.",
  precios: {
    "1": 4.90,
  },
  imagen: "Img/Imagen120.jpg",
  stock: 12
},
{
  nombre: "2415CAJA CUADRADA",
  categoria: "Organización / Almacenamiento",
  descripcion: "Caja cerrada de 8.5 x 8.5 x 2.5 cm, fabricada en material Foldcote color blanco. Incluye espuma en su interior para mayor protección.",
  precios: {
    "3": 1.00,
    "6": 0.80,
    "12": 0.60,
  },
  imagen: "Img/Imagen123.jpg",
  stock: 60
},
{
  nombre: "3682CAJA PARA LENTES",
  categoria: "Organización / Almacenamiento",
  descripcion: "Caja de aproximadamente 15.8 x 5.2 x 3.8 cm, elaborada en material Foldcote color blanco.",
  precios: {
    "3": 0.90,
    "6": 0.70,
    "12": 0.50,
  },
  imagen: "Img/Imagen124.jpg",
  stock: 60
},
{
  nombre: "2331RETARDANTE",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Producto especial para prolongar el momento íntimo. Uso discreto, cómodo y efectivo.",
  precios: {
    "1": 10.50,
  },
  imagen: "Img/Imagen125.jpg",
  stock: 15
},
{
  nombre: "5016COLET ESPIRAL CORAZÓN",
  categoria: "Accesorios",
  descripcion: "Colet tipo espiral con diseño de corazón. No maltrata el cabello y añade un toque de estilo.",
  precios: {
    "1": 2.95,
    "6": 1.85,
    "12": 1.55,
  },
  imagen: "Img/Imagen127.jpg",
  stock: 16
},
{
  nombre: "4992COLET BASE GRANDE",
  categoria: "Accesorios",
  descripcion: "Elástico resistente de gran tamaño, ideal para recoger cabello abundante con firmeza y comodidad.",
  precios: {
    "1": 2.95,
    "3": 1.85, 
  },
  imagen: "Img/Imagen128.jpg",
  stock: 5
},
{
  nombre: "4895SET DE 3 PERFILADORES",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Pack de 3 perfiladores para cejas y vello facial. Precisión y suavidad para un acabado profesional.",
  precios: {
    "1": 3.90,
    "3": 2.15,
    "6": 1.85,
  },
  imagen: "Img/Imagen136.jpg",
  stock: 9
},
{
  nombre: "4885DELINEADOR 2 EN 1",
  categoria: "Belleza / Cosmética",
  descripcion: "Delineador doble función con punta precisa y otro extremo para difuminar. Perfecto para crear looks intensos y definidos.",
  precios: {
    "1": 4.95,
  },
  imagen: "Img/Imagen138.jpg",
  stock: 1
},
{
  nombre: "4839REMOVEDOR DE VERRUGAS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Fórmula efectiva para eliminar verrugas de forma segura y sin dolor. Resultados visibles con uso constante.",
  precios: {
    "1": 8.95,
    "3": 7.95,
  },
  imagen: "Img/Imagen139.jpg",
  stock: 3
},
{
  nombre: "4760SUERO DE PESTAÑAS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Suero nutritivo que fortalece y estimula el crecimiento de tus pestañas, dándoles volumen y longitud natural.",
  precios: {
    "1": 6.95,
    "3": 5.95,
  },
  imagen: "Img/Imagen140.jpg",
  stock: 4
},
{
  nombre: "4812ALMOHADILLAS DE DESCANSO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Almohadillas suaves para aliviar el cansancio en pies o cuerpo. Ideales para descansar tras un día agitado.",
  precios: {
    "1": 5.95,
    "3": 4.95,
  },
  imagen: "Img/Imagen141.jpg",
  stock: 3
},
{
  nombre: "4781PACK DE 25 ESPONJAS BEAUTY",
  categoria: "Belleza / Cosmética",
  descripcion: "Pack surtido de esponjas beauty blender. Perfectas para aplicar base o corrector con acabado profesional.",
  precios: {
    "1": 4.95,
    "3": 3.95,
  },
  imagen: "Img/Imagen144.jpg",
  stock: 4
},
{
  nombre: "4670MÁSCARA DE PESTAÑAS",
  categoria: "Belleza / Cosmética",
  descripcion: "Realza tus pestañas al máximo con esta máscara de larga duración. Volumen, definición y resistencia al agua en un solo producto.",
  precios: {
    "1": 4.95,
    "3": 3.95,
    "6": 3.65,
  },
  imagen: "Img/Imagen146.jpg",
  stock: 6
},
{
  nombre: "4648PESTAÑAS POSTIZAS",
  categoria: "Belleza / Cosmética",
  descripcion: "Dale intensidad a tu mirada con estas pestañas postizas naturales y ligeras. Fáciles de colocar y reutilizables.",
  precios: {
    "1": 2.95,
    "3": 1.95,
  },
  imagen: "Img/Imagen147.jpg",
  stock: 3
},
{
  nombre: "4491PESTAÑAS POSTIZAS 6D",
  categoria: "Belleza / Cosmética",
  descripcion: "Pestañas de efecto 6D para una mirada impactante. Mayor volumen y curvatura para destacar tu belleza.",
  precios: {
    "1": 4.90,
    "2": 3.20,
  },
  imagen: "Img/Imagen150.jpg",
  stock: 2
},
{
  nombre: "4680CACHETERO CAPIBARA PARA NIÑA",
  categoria: "Ropa interior",
  descripcion: "Ropa interior infantil con diseño de capibara. Suave, cómoda y con estilo divertido para las más pequeñas.",
  precios: {
    "3": 3.95,
  },
  imagen: "Img/Imagen152.jpg",
  stock: 6
},
{
  nombre: "5040SET PLASTILINA + MOLDES",
  categoria: "Escolar / Papelería",
  descripcion: "Set creativo con plastilina de colores y moldes incluidos. Perfecto para que los niños desarrollen su imaginación.",
  precios: {
    "1": 3.95,
    "3": 2.95,
  },
  imagen: "Img/Imagen155.jpg",
  stock: 3
},
{
  nombre: "5031SET DE 7 TEMPERAS + PALETA Y PINCEL",
  categoria: "Escolar / Papelería",
  descripcion: "Kit de pintura ideal para pequeños artistas. Incluye 7 témperas, paleta y pincel para crear sin límites.",
  precios: {
    "1": 5.95,
    "3": 4.95,
  },
  imagen: "Img/Imagen156.jpg",
  stock: 5
},
{
  nombre: "4674SET x 10 CUTTER GARRITA",
  categoria: "Escolar / Papelería",
  descripcion: "Set de 10 prácticos cutter en forma de garrita. Ideal para uso escolar o manualidades en casa.",
  precios: {
    "1": 8.95,
  },
  imagen: "Img/Imagen159.jpg",
  stock: 5
},
{
  nombre: "4650GUILLOTINA SANRIO / CAPIBARA",
  categoria: "Escolar / Papelería",
  descripcion: "Guillotina temática para papel con diseño divertido de Sanrio o Capibara. Ideal para proyectos escolares o de oficina.",
  precios: {
    "1": 15.90,
  },
  imagen: "Img/Imagen160.jpg",
  stock: 1
},
{
  nombre: "4633ESPIRÓGRAFO",
  categoria: "Escolar / Papelería",
  descripcion: "Herramienta creativa para dibujar patrones y espirales únicos. Ideal para estimular la imaginación y precisión.",
  precios: {
    "1": 2.95,
    "6": 1.95,
    "12": 1.65,
  },
  imagen: "Img/Imagen161.jpg",
  stock: 29
},
{
  nombre: "4303PACK DE 6 LAPICEROS ARCO IRIS",
  categoria: "Escolar / Papelería",
  descripcion: "Conjunto de lapiceros con tinta de colores vibrantes tipo arco iris. Perfectos para escribir o decorar con estilo.",
  precios: {
    "1": 4.50,
    "3": 3.50,
  },
  imagen: "Img/Imagen168.jpg",
  stock: 4
},
{
  nombre: "4293CINTA FRÁGIL",
  categoria: "Organización / Almacenamiento",
  descripcion: "Cinta adhesiva con mensaje 'Frágil' para el cuidado de tus paquetes. Esencial en envíos y mudanzas.",
  precios: {
    "1": 4.50,
    "3": 3.10,
    "6": 2.80,
  },
  imagen: "Img/Imagen169.jpg",
  stock: 12
},
 {
  nombre: "5055PEINETA LAZO",
  categoria: "Accesorios",
  descripcion: "Dale un toque tierno y elegante a tu look. Ideal para peinados coquetos y llenos de estilo.",
  precios: {
    "1": 2.95,
    "3": 1.85,
    "6": 1.55,
  },
  imagen: "Img/Imagen171.jpeg",
  stock: 6
},
{
  nombre: "5058SET DE 8 PLUMONES OUTLINE",
  categoria: "Escolar / Papelería",
  descripcion: "Ideal para hacer las decoraciones. Se puede usar en papel y cartulina.Este plumón realiza los trazos de color por fuera y en el centro plateado. El set contiene 8 plumones por set",
  precios: {
    "1": 6.90,
  },
  imagen: "Img/Imagen173.jpeg",
  stock: 3
},
{
  nombre: "5061PAQUETE DE 100 CAÑITAS FLEXIBLES",
  categoria: "Decoración / Fiesta",
  descripcion: "Perfectas para fiestas, reuniones o el día a día. Resistentes, coloridas y súper prácticas. ",
  precios: {
    "1": 3.95,
    "3": 2.95
  },
  imagen: "Img/Imagen175.jpeg",
  stock: 9
},
{
  nombre: "4660CALZONCILLO CLÁSICO",
  categoria: "Ropa interior",
  descripcion: "Material: algodón. Tallas disponibles: 6S",
  precios: {
    "1": 4.95,
    "3": 3.05,
    "6": 2.75
  },
  imagen: "Img/Imagen177.jpeg",
  stock: 6
},
{
  nombre: "TRUSA BIKINI",
  categoria: "Ropa interior",
  descripcion: "Material: algodón. Talla disponible: L",
  precios: {
    "1": 3.95,
    "3": 2.95,
  },
  imagen: "Img/Imagen178.jpeg",
  stock: 3
},
 {
  nombre: "5069ESTUCHE DE SOMBRAS PARA OJOS",
  categoria: "Belleza / Cosmética",
  descripcion: "Tamaño compacto, ideal para llevar en la cartera. Tonos variados para cada ocasión. ¡Maquíllate donde quieras con estilo!",
  precios: {
    "1": 5.95
 },
  imagen: "Img/Imagen180.jpeg",
  stock: 1
},
{
  nombre: "5077LUZ PARA ESCALERA",
  categoria: "Hogar / Cocina",
  descripcion: "Luz solar LED para escalones, caminos y escaleras. Se carga con el sol. Resistente al agua y fácil de instalar. ¡Ilumina y decora con estilo y seguridad!.",
  precios: {
    "1": 3.95,
    "3": 2.95,
 },
  imagen: "Img/Imagen185.jpeg",
  stock: 9
},
{
  nombre: "5078PERFUME DE MUJER JPS23 - DUPE SCANDAL",
  categoria: "Perfumeria",
  descripcion: "DUPE: Scandal Aroma seductor y femenino con un toque atrevido. Diseño único con piernas en tacones ¡pura actitud!. Ideal para destacar donde vayas. Contenido: 250ml.",
  precios: {
    "1": 13.95
 },
  imagen: "Img/Imagen186.jpeg",
  stock: 3
},
{
  nombre: "5079BANDEJA ARAÑA",
  categoria: "Decoración / Fiesta",
  descripcion: "¡Decoración terrorífica y divertida!. Canastitas con diseño de telaraña. Perfectas para dulces, snacks o decorar en Halloween.",
  precios: {
    "1": 4.95,
    "3": 3.85,
    "6": 3.55,
 },
  imagen: "Img/Imagen187.jpeg",
  stock: 8
},
{
  nombre: "5080CINTA DOBLE CONTACTO",
  categoria: "Hogar / Cocina",
  descripcion: "¡Cinta doble contacto súper resistente! Medida: 1.7 cm x 3 m. Ideal para pegar cuadros, decoraciones y más sin clavos ni tornillos.",
  precios: {
    "1": 3.95,
    "3": 1.95,
    "6": 1.75,
    "12": 1.55,
 },
  imagen: "Img/Imagen188.jpeg",
  stock: 28
},
{
  nombre: "5095AGENDA A5",
  categoria: "Escolar / Papelería",
  descripcion: "Agenda anillada A5 con diseños surtidos y 50 hojas. Ideal para notas, apuntes o planificar tu día con estilo. Perfecta para llevar en tu bolso o mochila y tener tus ideas siempre a mano.",
  precios: {
    "1": 4.95,
 },
  imagen: "Img/Imagen195.jpeg",
  stock: 1
},
{
  nombre: "5104FLORERO CON FLORES ARTIFICIALES",
  categoria: "Hogar / Cocina",
  descripcion: "Arreglo floral colorido y elegante, ideal para decorar tu hogar u oficina. Sin mantenimiento y siempre hermoso.",
  precios: {
    "1": 6.95,
 },
  imagen: "Img/Imagen198.jpeg",
  stock: 4
},
{
  nombre: "5110BOLSA DE 25 GANCHOS PERNO",
  categoria: "Hogar / Cocina",
  descripcion: "Fáciles de colocar, sin taladros ni daños en la pared. Ideales para colgar cuadros, marcos o decoraciones. Adhesión fuerte y reutilizables.",
  precios: {
    "1": 7.95,
 },
  imagen: "Img/Imagen201.jpeg",
  stock: 3
},
 {
  nombre: "5112CUENCO PARA APERITIVOS",
  categoria: "Hogar / Cocina",
  descripcion: "Perfecto para servir una variedad de aperitivos, postres, galletas, frutas, verduras y mucho más. Material: Plástico. Medida aprox.: 24 x 8 cm",
  precios: {
    "1": 3.95,
    "2": 2.95,
 },
  imagen: "Img/Imagen203.jpeg",
  stock: 2
},
 {
  nombre: "5115CARTUCHERA CON CALCULADORA",
  categoria: "Escolar / Papelería",
  descripcion: "Cartuchera con calculadora incorporada. Mantén tus lápices, lapiceros y accesorios siempre ordenados y resuelve operaciones al instante. ¡Práctica y funcional!",
  precios: {
    "1": 4.95,
    "3": 3.95,
 },
  imagen: "Img/Imagen205.jpeg",
  stock: 11
},
 {
  nombre: "5120LLAVERO LÁSER MULTIFUNCIONAL",
  categoria: "Electrónica / Gadgets",
  descripcion: "Ligero y resistente, perfecto para iluminar, jugar con tu mascota o señalar a distancia. Siempre a mano y con estilo.",
  precios: {
    "1": 2.95,
    "3": 1.85,
 },
  imagen: "Img/Imagen207.jpeg",
  stock: 4
},
 {
  nombre: "5121VINCHA TRENZA",
  categoria: "Accesorios",
  descripcion: "El accesorio perfecto para darle un toque chic y elegante a tu look. Cómoda, ligera y fácil de combinar con cualquier outfit. Ideal para uso diario, eventos o para resaltar tu peinado con estilo.",
  precios: {
    "1": 3.95,
    "3": 2.85,
    "6": 2.55,
 },
  imagen: "Img/Imagen208.jpeg",
  stock: 8
},
 {
  nombre: "5134SOPORTE UNIVERSAL PARA AUTO",
  categoria: "Electrónica / Gadgets",
  descripcion: "Ideal para sostener tu celular en el retrovisor. Ajustable y rotatorio. Fácil instalación. Compatible con la mayoría de los teléfonos. ¡Conduce seguro y con las manos libres!.",
  precios: {
    "1": 5.95,
    "3": 4.95,
 },
  imagen: "Img/Imagen213.jpeg",
  stock: 5
},
  {
  nombre: "5135ORGANIZADOR ELEGANTE",
  categoria: "Organización / Almacenamiento",
  descripcion: "Para brochas de maquillaje con diseño moderno. Incluye compartimentos amplios para mantener todo en orden. Su tapa transparente protege del polvo y la humedad. Ideal para dar un toque sofisticado a tu tocador. Medida aprox.: 23 x 11 cm",
  precios: {
    "1": 8.95,
 },
  imagen: "Img/Imagen214.jpeg",
  stock: 3
},
  {
  nombre: "5139RESTAURADOR DE PARTES NEGRAS",
  categoria: "Hogar / Cocina",
  descripcion: "Restaura partes negras, devuelve el color, brillo y protección a plásticos, molduras y defensas. ¡Fácil de aplicar!",
  precios: {
    "1": 6.95,
    "3": 5.95,
 },
  imagen: "Img/Imagen216.jpeg",
  stock: 22
},
  {
  nombre: "5140SPRAY PARA EL DOLOR INSTANTANEO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Para deportistas, artritis, dolores musculares y nervio ciática.",
  precios: {
    "1": 4.95,
    "3": 3.95,
 },
  imagen: "Img/Imagen217.jpeg",
  stock: 20
},
   {
  nombre: "5142PACK ASEO DENTAL",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Mantén tu baño ordenado, con gancho adheso para colocarlo en la pared. Es ideal para niños y adultos ya que es práctico. Modelo sin diseño",
  precios: {
    "1": 4.50,
    "3": 3.50,
 },
  imagen: "Img/Imagen218.jpeg",
  stock: 24
},
 {
  nombre: "5143LUZ DECORATIVA LOVE",
  categoria: "Decoración / Fiesta",
  descripcion: "Tamaño: 10.5 x 6 cm. Ideal para decorar tu habitación, sala u oficina. Perfecto detalle para regalar.",
  precios: {
    "1": 2.95,
    "3": 1.95,
 },
  imagen: "Img/Imagen219.jpeg",
  stock: 29
},
 {
  nombre: "5144CREMA DE MANOS DE ARROZ BIOAQUA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Hidratación profunda y duradera. Suaviza y nutre la piel. Práctica para llevar a todas partes.",
  precios: {
    "1": 2.95,
    "3": 1.85,
 },
  imagen: "Img/Imagen220.png",
  stock: 4
},
  {
  nombre: "5141GANCHO GIRATORIO FULL SPACE",
  categoria: "Organización / Almacenamiento",
  descripcion: "Con espacios para colgar ropa, accesorios o toallas. Ahorra espacio y mantiene todo ordenado. Práctico, resistente y fácil de usar.",
  precios: {
    "1": 2.95,
    "3": 1.85,
    "6": 1.55,
    "12": 1.25,
 },
  imagen: "Img/Imagen221.jpeg",
  stock: 40
},
  {
  nombre: "5148SET DE 10 PROTECTORES DE HORNILLAS",
  categoria: "Hogar / Cocina",
  descripcion: "El set contiene 10 protectores. Protege tu cocina de salpicaduras y derrames. Material: aluminio",
  precios: {
    "1": 4.95,
    "3": 3.85,
 },
  imagen: "Img/Imagen224.png",
  stock: 5
},
  {
  nombre: "5150COLLAR DE PRINCESAS",
  categoria: "Accesorios",
  descripcion: "Material: Acero. Presentación en blíster individual. ¡Un detalle encantador para las reinas de la casa!",
  precios: {
    "1": 5.95,
    "3": 4.95,
 },
  imagen: "Img/Imagen226.png",
  stock: 12
},
 {
  nombre: "5152CERA EN BARRA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Para los peinados por de vuelta al cole. Facilita el peinado, Evita el frizz, Nutre tu cabello. Tamaño ideal para llevar en tu bolso a todas partes. Controla baby Hair (cabellitos pequeños). Fácil y rápido de aplicar",
  precios: {
    "1": 8.90,
    "3": 7.90,
 },
  imagen: "Img/Imagen227.png",
  stock: 4
},
 {
  nombre: "5169PACK DE 10 BOLSITAS DULCERAS",
  categoria: "Decoración / Fiesta",
  descripcion: "Mini bolsitas reutilizables. Diseños tiernos y coloridos. Perfectas para snacks, dulces o cositas pequeñas. Prácticas y adorables para el día a día.",
  precios: {
    "1": 8.95,
 },
  imagen: "Img/Imagen230.jpeg",
  stock: 8
},
 {
  nombre: "5174LUCES ESPACIAL",
  categoria: "Hogar / Cocina",
  descripcion: "Lámpara Proyector Estrellado. Proyección giratoria de luna y estrellas. Recargable por USB. Ideal para decoración y noches relajantes. Perfecta para dormitorio, sala o regalo especial.",
  precios: {
    "1": 5.40,
 },
  imagen: "Img/Imagen232.jpeg",
  stock: 6
},
 {
  nombre: "5182BRAZALETE SERPENTEADO",
  categoria: "Accesorios",
  descripcion: "Pulsera estilo serpiente. Elegante, moderna y perfecta para realzar tu look. Ideal para cualquier ocasión especial.",
  precios: {
   "1": 5.95,
   "3": 4.95,
 },
  imagen: "Img/Imagen239.jpeg",
  stock: 4
},
 {
  nombre: "5204NACIMIENTO LED",
  categoria: "Hogar / Cocina",
  descripcion: "Ideal para decorar tu hogar con un toque elegante y festivo. Perfecto como centro de mesa, altar o detalle especial en Navidad. Medida aprox.: 12 cm",
  precios: {
   "1": 4.95,
   "3": 3.85,
   "6": 3.55,
 },
  imagen: "Img/Imagen244.jpg",
  stock: 5
},
{
  nombre: "5213PACK PARCHES PARA EL DOLOR",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "El pack contiene 10 parches. Parches para el dolor de cuello, columna y rodilla, hechos a base de hierbas. Este parche analgésico externo auto calentable puede aliviar rápidamente todo tipo de dolor, mantener el calor, mantener la sangre, reducir la inflamación y aliviar el dolor. Ya sea que desee aliviar sus hombros, pies, espalda, cuello o rodillas.",
  precios: {
   "1": 3.95,
   "3": 2.55,
   "6": 2.25,
  },
  imagen: "Img/Imagen246.jpg",
  stock: 9
},
{
  nombre: "5215ESENCIA ESPIRITUAL PARA HUMIFICADOR DE 10ML",
  categoria: "Hogar / Cocina",
  descripcion: "Orgánica y con exquisito aroma. Producto importado de la India. Presentación en caja individual de 10ml.",
  precios: {
   "1": 4.95,
   "3": 3.95,
 },
  imagen: "Img/Imagen247.jpeg",
  stock: 14
},
  {
  nombre: "5219COLGADOR DE PANTALONES",
  categoria: "Hogar / Cocina",
  descripcion: "Ideal para pantalones, bufandas, faldas y más. Ahorra espacio en tu clóset con diseño práctico y resistente. Gancho giratorio + barras deslizables = fácil de usar.",
  precios: {
   "1": 3.95,
   "3": 2.95,
 },
  imagen: "Img/Imagen249.png",
  stock: 10
},
{
  nombre: "5220JOYERO VIAJERO",
  categoria: "Organización / Almacenamiento",
  descripcion: "Mantén tus anillos, aretes y otras joyas organizadas. Medida aprox.: 10 x 10 cm y 5 cm de alto. Resistente y duradero: la base está bien estructurada. Diseño práctico y de gran capacidad.",
  precios: {
   "1": 5.95,
 },
  imagen: "Img/Imagen250.png",
  stock: 2
},
{
  nombre: "5234MEDIAS DE COMPRESIÓN",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Mejoran la circulación y oxigenación de pies y piernas. Ideales para running, ciclismo, fútbol, básquet y más. Resistencia, comodidad y durabilidad en cada uso.",
  precios: {
   "1": 4.95,
   "3": 3.95,
 },
  imagen: "Img/Imagen255.jpeg",
  stock: 4
},
 {
  nombre: "5235SET DE BANDEJAS DE HIELO CON CAJA Y PALA",
  categoria: "Hogar / Cocina",
  descripcion: "Transforma la forma de preparar y servir hielo en casa. Con caja para mantener el hielo fresco. Con pala para servir fácil y con estilo.",
  precios: {
   "1": 6.95,
   "3": 5.95,
 },
  imagen: "Img/Imagen256.jpeg",
  stock: 4
},
  {
  nombre: "5236ORGANIZADOR DE ALIMENTOS",
  categoria: "Hogar / Cocina",
  descripcion: "Ahorra espacio en tu nevera sin volcarse. Con asas prácticas para fácil transporte. Hecha de PP duradero y ecológico, ideal para hogar, trabajo o picnic.",
  precios: {
   "1": 5.95,
   "3": 4.95,
 },
  imagen: "Img/Imagen257.jpeg",
  stock: 3
},
  {
  nombre: "5244INDIVIDUALES REDONDOS ROJOS",
  categoria: "Navidad / Regalos",
  descripcion: "Hechos de polipropileno tejido, resistentes y duraderos. Color rojo elegante que protege y decora tu mesa con estilo. Ideales para uso diario o para lucir en ocasiones especiales.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "5": 2.65,
 },
  imagen: "Img/Imagen261.jpeg",
  stock: 5
},
  {
  nombre: "5246BOLSA DE REGALO NAVIDEÑA – 32 x 26 x 10 CM",
  categoria: "Navidad / Regalos",
  descripcion: "Diseño festivo, resistente y práctico para envolver tus obsequios. Ideal para ropa, juguetes, accesorios u otros presentes navideños. Tamaño perfecto y reutilizable para dar un toque especial a tus regalos.",
  precios: {
   "1": 3.95,
   "3": 2.55,
   "6": 2.25,
 },
  imagen: "Img/Imagen262.jpeg",
  stock: 6
},
  {
  nombre: "5248LLAVERO CEREZA",
  categoria: "Accesorios",
  descripcion: "Diseño tierno y moderno para darle estilo a tus llaves o bolso. Perfecto como regalo o para lucir un accesorio único y divertido.",
  precios: {
   "1": 5.95,
   "3": 4.95,
 },
  imagen: "Img/Imagen263.jpg",
  stock: 13
},
  {
  nombre: "5249BIOBELL PLACENTA CAPILAR",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Revitalizante con Panthenol, para evitar la caída del cabello. Te deja el cabello sumamente suave y brilloso. Revitaliza el cabello, combate la caspa, grasa , seborrea y ayuda a frenar la caída. Capacidad: 15ML",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
   "12": 2.35,
 },
  imagen: "Img/Imagen265.jpg",
  stock: 23
},
 {
  nombre: "5251PALETA DE MAQUILLAJE MARIPOSA",
  categoria: "Belleza / Cosmética",
  descripcion: "Incluye una amplia variedad de tonos vibrantes y elegantes para cada ocasión. Ideal para looks diarios o maquillajes más atrevidos y coloridos. Compacta y práctica, perfecta para llevar a todos lados.",
  precios: {
   "1": 10.95,
   "3": 9.95,
 },
  imagen: "Img/Imagen266.jpeg",
  stock: 3
},
 {
  nombre: "5256SET DE VELAS DE CUMPLEAÑOS",
  categoria: "Decoración / Fiesta",
  descripcion: "Dale un toque mágico y personalizado a tus celebraciones. Perfectas para pasteles, cupcakes o postres festivos. Un detalle que ilumina momentos inolvidables.",
  precios: {
   "1": 4.95,
   "3": 3.85,
   "6": 3.55,
 },
  imagen: "Img/Imagen271.png",
  stock: 7
},
 {
  nombre: "5257JUEGO DE EQUILIBRIO FROG BALANCE",
  categoria: "Juguetes",
  descripcion: "Desafía tu destreza colocando ranitas sin que caigan. Un juego dinámico y educativo para todas las edades. Ideal para compartir momentos de diversión en familia.",
  precios: {
   "1": 6.95,
 },
  imagen: "Img/Imagen272.png",
  stock: 4
},
  {
  nombre: "5264CORTINA ÁMBAR NAVIDEÑA CON DISEÑO",
  categoria: "Navidad / Regalos",
  descripcion: "Figuras de arbolitos con diseños navideños (Santa, reno, muñeco de nieve y más). Luces cálidas que crean un ambiente mágico y festivo. Ideal para decorar ventanas, salas o tu arbolito. Dale un brillo especial a tu Navidad. Medida: 3m x 1.5m",
  precios: {
   "1": 14.95,
 },
  imagen: "Img/Imagen273.jpeg",
  stock: 9
},
   {
  nombre: "5269MINI CEPILLO CON ESPEJO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Puedes llevarlo a todos lados para verte perfecta y linda siempre. Peine retráctil e incluye espejo.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
 },
  imagen: "Img/Imagen277.png",
  stock: 18
},
  {
  nombre: "5270PLANCHA DE LIGUITAS PARA EL CABELLO",
  categoria: "Accesorios",
  descripcion: "Incluye variedad de colores vibrantes y divertidos. Ideales para peinados diarios y ocasiones especiales. Suaves, resistentes y cómodas de usar.",
  precios: {
   "1": 3.95,
   "3": 2.95,
  },
  imagen: "Img/Imagen278.jpeg",
  stock: 13
},
 {
  nombre: "5271BOLA DE NIEVE NAVIDEÑA SANTA",
  categoria: "Navidad / Regalos",
  descripcion: "Adorno decorativo con figura de Papá Noel. Base roja con lazo dorado y mensaje Merry Christmas. Ideal para decorar tu hogar o regalar en esta Navidad.  Un detalle clásico y encantador para celebrar la temporada. Medida aprox.: 9cm",
  precios: {
   "1": 7.95,
   "3": 6.95,
  },
  imagen: "Img/Imagen279.jpeg",
  stock: 8
},
  {
  nombre: "5272MANDIL CON SECADOR NAVIDEÑO",
  categoria: "Navidad / Regalos",
  descripcion: "Material: tela impermeable, en los costados cuenta con toalla absorbente de franela terciopelo coralino. Resistente al aceite para proteger tu ropa, medida aprox.: 70 x 65 cm.",
  precios: {
   "1": 4.95,
   "3": 3.95,
  },
  imagen: "Img/Imagen280.jpeg",
  stock: 6
},
 {
  nombre: "5273VELA FLOR MUSICAL DE CUMPLEAÑOS",
  categoria: "Decoración / Fiesta",
  descripcion: "Al encenderla se abre en forma de flor y gira con música. Cada pétalo incluye pequeñas velitas encendidas. Ideal para dar un toque mágico y especial a la celebración.",
  precios: {
   "1": 4.95,
   "3": 3.25,
   "5": 2.95,
  },
  imagen: "Img/Imagen281.png",
  stock: 5
},
 {
  nombre: "5275ORGANIZADOR COLGANTE",
  categoria: "Hogar / Cocina",
  descripcion: "Optimiza tu espacio y mantiene todo ordenado. Perfecto para ropa, toallas o pañales. Diseño colgante para encontrar todo rápido.",
  precios: {
   "1": 4.95,
   "3": 3.95,
  },
  imagen: "Img/Imagen283.jpeg",
  stock: 7
},
  {
  nombre: "5276CORTADOR ONDAS DE PAPAS Y VERDURAS",
  categoria: "Hogar / Cocina",
  descripcion: "Corta papas, verduras y frutas con un divertido estilo ondulado. Acero inoxidable y mango cómodo para uso rápido y seguro. Crea platos creativos y atractivos en segundos.",
  precios: {
   "1": 3.95,
   "3": 2.85,
   "6": 2.55,
  },
  imagen: "Img/Imagen284.png",
  stock: 17
},
  {
  nombre: "5277PASTILLA PARA TANQUE",
  categoria: "Hogar / Cocina",
  descripcion: "Limpiador concentrado ultra fuerte y durable. Mata gérmenes y bacterias. Desodoriza y evita las manchas. No daña las cañerías, no mancha ni deja residuos.",
  precios: {
   "1": 3.95,
   "3": 2.55,
   "6": 2.25,
  },
  imagen: "Img/Imagen285.png",
  stock: 12
},
  {
  nombre: "5278PIJAMA DE DOS PIEZAS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Conjunto: camiseta manga corta + short. Cómodo, ligero y perfecto para descansar con estilo.",
  precios: {
   "1": 9.90,
  },
  imagen: "Img/Imagen286.jpeg",
  stock: 1
},
   {
  nombre: "5283PAQUETITO DE NOTAS NAVIDEÑAS",
  categoria: "Navidad / Regalos",
  descripcion: "Contiene 50 notas con temática navideña. Diseños encantadores. Ideales para apuntes, recordatorios y mensajes especiales. Un detalle práctico y festivo para la temporada.",
  precios: {
   "1": 2.95,
   "5": 1.25,
   "10": 0.95,
  },
  imagen: "Img/Imagen288.jpeg",
  stock: 60
},
  {
  nombre: "5284CEPILLO DE VAPORIZADOR DE MASCOTAS",
  categoria: "Mascotas",
  descripcion: "Elimina nudos y enredos fácilmente. Suaviza el pelaje con vapor para mayor comodidad. Ideal para perros y gatos de todo tipo de pelo. ¡Cepillado sin estrés y con más brillo!.",
  precios: {
   "1": 5.95,
   "3": 4.25,
  },
  imagen: "Img/Imagen289.png",
  stock: 3
},
 {
  nombre: "5286CAJITA TRONADORES",
  categoria: "Pirotecnicos",
  descripcion: "Presentación: Cajita con 50 tronadores. Los clásicos truquitos explosivos que hacen “¡pop!” al lanzarlos. Diversión segura para chicos y grandes. Perfecto para cumpleaños, reuniones y celebraciones especiales.",
  precios: {
   "1": 2.95,
   "3": 1.25,
   "6": 0.95,
  },
  imagen: "Img/Imagen291.jpeg",
  stock: 138
},
  {
  nombre: "5287SARTA DE COHETECILLOS",
  categoria: "Pirotecnicos",
  descripcion: "Encender la mecha y apartarse a una distancia moderada. Se sugiere emplearse bajo la supervisión de un adulto.",
  precios: {
   "1": 3.95,
   "3": 2.55,
  },
  imagen: "Img/Imagen292.jpeg",
  stock: 79
},
  {
  nombre: "5292MOLDE PARA HIELO FACIAL",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Se usa para darle firmeza al rostro. Desinflama ojeras. Puedes utilizarlo en cualquier zona del cuerpo. Incluso para golpes, ya que ayuda a desinflamar. Ayuda a prevenir las arrugas. Puede usarse para bajar la temperatura de la fiebre.",
  precios: {
   "1": 5.95,
   "3": 4.95,
  },
  imagen: "Img/Imagen297.png",
  stock: 8
},
  {
  nombre: "5303SET DE 2 SUJETADORES IMANTADOS DE CORTINA",
  categoria: "Hogar / Cocina",
  descripcion: "Diseño magnético, fácil de usar.",
  precios: {
   "1": 4.95,
  },
  imagen: "Img/Imagen301.jpeg",
  stock: 1
},
    {
  nombre: "5305QUITA OXIDO",
  categoria: "Hogar / Cocina",
  descripcion: "Es el aliado perfecto para mantener tu ropa libre de manchas de óxido. Este quitamanchas líquido viene en una práctica botella que facilita su aplicación en las áreas afectadas.",
  precios: {
   "1": 2.95,
   "3": 1.95,
  },
  imagen: "Img/Imagen305.jpeg",
  stock: 7
},
   {
  nombre: "5310KIT DE LIMPIEZA DE OIDOS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Kit reutilizable, fácil de limpiar. Una de las partes que más requieren limpieza son nuestros oídos. Material: Acero inoxidable.",
  precios: {
   "1": 2.95,
   "3": 1.95,
   "6": 1.65,
  },
  imagen: "Img/Imagen309.jpg",
  stock: 7
},
     {
  nombre: "5311ORGANIZADOR DE HUEVOS",
  categoria: "Hogar / Cocina",
  descripcion: "Diseño plegable sin montaje, acomoda hasta 24 huevos en capas separadas. Hecho de plástico resistente, ideal para mantener frescura y ahorrar espacio en tu refrigerador.",
  precios: {
   "1": 5.95,
  },
  imagen: "Img/Imagen310.jpeg",
  stock: 3
},
       {
  nombre: "5312MANGO UNIVERSAL PARA TAPAS",
  categoria: "Hogar / Cocina",
  descripcion: "De acero y madera resistente, mide 5.5 x 3 cm — ¡fácil de instalar y duradero! Ideal para renovar tus tapas de olla y darles un toque elegante y funcional.",
  precios: {
   "1": 2.95,
   "3": 1.55,
   "6": 1.25,
   "12": 0.95,
  },
  imagen: "Img/Imagen310.jpeg",
  stock: 18
},
  {
  nombre: "5315TOALLITAS HIGIÉNICAS DE NOCHE",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Diseñadas para la noche, con alas y absorción rápida para mayor protección. Hechas de tela de algodón, suaves y cómodas con flujo moderado. Paquete de 10 unidades, 100% sin filtraciones y extra suave con tu piel.",
  precios: {
   "1": 4.95,
   "3": 3.55,
  },
  imagen: "Img/Imagen313.jpeg",
  stock: 4
},
 {
  nombre: "5317INFLADOR DE LLANTAS Y PELOTAS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Práctico y portátil, ideal para autos, bicicletas, pelotas y más. Fácil de usar, con gran potencia y diseño compacto para llevar a cualquier lugar.",
  precios: {
   "1": 4.95,
   "3": 3.95,
  },
  imagen: "Img/Imagen314.jpeg",
  stock: 7
},
   {
  nombre: "5319PAÑITOS HÚMEDOS EN LATA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Suaves, sin alcohol y con Aloe Vera para cuidar y refrescar tu piel al instante. Llévalas en tu cartera, auto u oficina — ¡siempre listas para acompañarte!",
  precios: {
   "1": 3.95,
   "3": 2.95,
  },
  imagen: "Img/Imagen316.png",
  stock: 9
},
  {
  nombre: "5321SPLASH PARA EL CABELLO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Las lociones para el cabello son preparaciones destinadas a cuidar del aspecto y la salud del cabello, sin dañar tu cuero cabelludo. Harán lucir tu cabello brillante y con aroma exquisito. Te encantará ya que también sirve como hidratante para el cabello.",
  precios: {
   "1": 6.95,
     },
  imagen: "Img/Imagen317.jpg",
  stock: 2
},
    {
  nombre: "5322PACK DE 10 VELAS MÁGICAS REENCENDIBLES",
  categoria: "Decoración / Fiesta",
  descripcion: "Sopla y sorpréndete al ver cómo se encienden solas otra vez. Perfectas para cumpleaños divertidos y momentos inolvidables.",
  precios: {
   "1": 2.95,
   "3": 1.55,
   "6": 1.25,
   "12": 0.95,
  },
  imagen: "Img/Imagen318.jpeg",
  stock: 12
},
      {
  nombre: "5324ARBOL DE 60CM CON ACCESORIOS",
  categoria: "Navidad / Regalos",
  descripcion: "Ideal para decorar tu oficina centro de trabajo o habitación. Medida: 60 cm",
  precios: {
   "1": 8.95,
  },
  imagen: "Img/Imagen319.jpeg",
  stock: 1
},
        {
  nombre: "5325HADA VOLADORA",
  categoria: "Juguetes",
  descripcion: "Gira, vuela y brilla con magia. Fácil de usar, solo enciéndela y déjala volar. Diversión mágica para niñas y niños.",
  precios: {
   "1": 6.95,
   "3": 5.95,
  },
  imagen: "Img/Imagen320.png",
  stock: 24
},
  {
  nombre: "5326FIGURA LED NAVIDEÑA - 1 PIEZA",
  categoria: "Navidad / Regalos",
  descripcion: "Ideal para la decoración de la sala, dormitorio, etc. Se adhiere con su ventosa. Material: Plástico",
  precios: {
   "1": 5.95,
   "3": 4.95,
   "6": 4.65,
  },
  imagen: "Img/Imagen321.jpeg",
  stock: 28
},
    {
  nombre: "5327ARMABLE DIDÁCTICO ITALIAN BRAINROT",
  categoria: "Juguetes",
  descripcion: "Divertidos sets para armar con entre 56 y 73 piezas, según el modelo. Estimula la creatividad, la concentración y la coordinación. Ideal para niños desde 6 años.",
  precios: {
   "1": 5.95,
   "3": 4.25,
   "6": 3.95,
  },
  imagen: "Img/Imagen322.jpeg",
  stock: 11
},
    {
  nombre: "5328DUPES DE PERFUMES ARABES",
  categoria: "Perfumeria",
  descripcion: "Fragancias intensas, elegantes y duraderas — inspiran lujo y sofisticación. Aromas que conquistan con su estilo exótico y sensual. Capacidad: 250ml",
  precios: {
   "1": 9.95,
  },
  imagen: "Img/Imagen323.jpeg",
  stock: 2
},
      {
  nombre: "5329SET DE LENTES + 1 PAR DE GANCHOS",
  categoria: "Accesorios",
  descripcion: "Incluye lentes modernos y ganchos para el cabello a juego. Perfecto para un look fresco, divertido y con mucho estilo.",
  precios: {
   "1": 3.95,
   "3": 2.95,
  },
  imagen: "Img/Imagen324.jpeg",
  stock: 15
},
        {
  nombre: "5330ROMPECABEZAS DE MADERA DIDÁCTICO",
  categoria: "Escolar / Papelería",
  descripcion: "Diseños divertidos de animalitos y dinosaurios que estimulan la motricidad y creatividad. Mide 10.8 × 10.8 × 0.5 cm — ¡ideal para manos pequeñas y horas de diversión educativa!",
  precios: {
   "1": 2.95,
   "3": 1.95,
   "6": 1.75,
  },
  imagen: "Img/Imagen325.jpeg",
  stock: 7
},
  {
  nombre: "5331DOMINÓ CLÁSICO",
  categoria: "Juguetes",
  descripcion: "Fichas negras con puntos blancos, presentadas en caja resistente y elegante. Mide 14.7 × 5 × 3 cm — ¡perfecto para jugar en casa o llevar a cualquier lugar!",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
  },
  imagen: "Img/Imagen326.jpeg",
  stock: 14
},
  {
  nombre: "5332GANCHO CLIP FLOWER",
  categoria: "Accesorios",
  descripcion: "Diseño de flores brillantes que aportan un toque fresco y veraniego. Ideal para uso diario, ocasiones especiales o looks creativos — ¡práctica y hermosa!",
  precios: {
   "1": 2.95,
   "3": 1.95,
   "6": 1.65,
  },
  imagen: "Img/Imagen327.jpeg",
  stock: 19
},
   {
  nombre: "5334PACK DE 10 BOLSAS PARA HIELO",
  categoria: "Hogar / Cocina",
  descripcion: "Hecho de 100% esteres de BPA y ftalato. Autosellado, no se necesita máquina de sellado. Se puede utilizar para hacer diferentes sabores de cubitos de hielo según su gusto. Puedes añadir varias frutas, verduras, dulces, etc.",
  precios: {
   "1": 2.95,
   "3": 1.65,
   "6": 1.35,
   "6": 1.05,
  },
  imagen: "Img/Imagen328.png",
  stock: 14
},
      {
  nombre: "5337ROLLO DE ADHESIVO DE VENTANA",
  categoria: "Hogar / Cocina",
  descripcion: "Medida: 60cm x 2m. Ideal para privacidad y decoración, dejando pasar la luz natural. Fácil de colocar.",
  precios: {
   "1": 5.95,
   "3": 4.25,
   "6": 3.95,
  },
  imagen: "Img/Imagen330.jpeg",
  stock: 7
},
      {
  nombre: "5338PROTECTOR DE TALÓN",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Olvídate de las molestias! Protector antiampollas para el talón. Suave, cómodo y discreto. Evita roces y ampollas. Ideal para caminar, correr o usar zapatos nuevos.",
  precios: {
   "1": 2.95,
   "3": 1.95,
  },
  imagen: "Img/Imagen331.png",
  stock: 17
},
        {
  nombre: "5339SET DE CUBRE PEZONES",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Contiene 5 pares. ¡Discreción y seguridad en cada look! Se adhieren fácilmente. Perfectos para ropa sin tirantes o escotes profundos. ¡Luce libre y sin preocupaciones!",
  precios: {
   "1": 3.95,
   "3": 2.95,
  },
  imagen: "Img/Imagen332.jpeg",
  stock: 13
},
          {
  nombre: "5340PORTA TOALLITAS HÚMEDAS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Cierre Hermético. Fácil de Usar. ️Bolsa dispensadora. Delgado para llevarlo en el bolso, pañalera, etc.",
  precios: {
   "1": 3.95,
   "3": 2.95,
  },
  imagen: "Img/Imagen333.png",
  stock: 15
},
             {
  nombre: "5342LINTERNA DE LARGO ALCANCE",
  categoria: "Hogar / Cocina",
  descripcion: "Iluminación potente con varios modos de luz. Diseño compacto, resistente y fácil de llevar. Incluye cable USB para carga rápida y práctica.",
  precios: {
   "1": 5.95,
   "3": 4.95,
  },
  imagen: "Img/Imagen335.jpeg",
  stock: 6
},
{
  nombre: "5343RIÑONERA CON DETALLES TORNASOLADOS",
  categoria: "Accesorios",
  descripcion: "Moderna y brillante. Ideal para llevar celular, llaves y accesorios con estilo. Perfecta para paseos, viajes o looks urbanos con toque fashion.",
  precios: {
   "1": 7.95,
   "3": 6.95,
  },
  imagen: "Img/Imagen336.jpeg",
  stock: 8
},
    {
  nombre: "5348PELUCHE TRALALERO MUSICAL",
  categoria: "Juguetes",
  descripcion: "Con luz y musical. Tamaño entre 25 y 30 cm.",
  precios: {
   "1": 8.95,
   "3": 7.95,
  },
  imagen: "Img/Imagen338.jpeg",
  stock: 4
},
    {
  nombre: "5356BLOQUES ARMABLES 3D - TRALALERO",
  categoria: "Juguetes",
  descripcion: "Set de bloques 3D para armar divertidas figuras de animales y personajes. Piezas multicolores que estimulan la creatividad y la concentración. Son 12 modelos coleccionables, incluye instrucciones para el armado.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "5": 2.65,
  },
  imagen: "Img/Imagen343.jpg",
  stock: 5
},
      {
  nombre: "5360ESTUCHE DE 20 COLET KAWAII",
  categoria: "Accesorios",
  descripcion: "El paquete más tierno y colorido de ligas para el cabello: ¡20 gomas elásticas con diseños de frutas, flores y/o animales! Son suaves y seguras (no dañan el cabello), perfectas para peinados diarios que encantarán a tus niñas.",
  precios: {
   "1": 3.95,
   "3": 2.95,
  },
  imagen: "Img/Imagen344.jpeg",
  stock: 1
},
        {
  nombre: "5363CINTA LED DE 3 METROS",
  categoria: "Navidad / Regalos",
  descripcion: "Use esta cinta led para crear un ambiente festivo, ideal para empacar regalos de Navidad, hacer coronas navideñas, decorar árboles de Navidad, etc. Material sobre cinta: hecho de organza. Color de la cinta: Dorado",
  precios: {
   "1": 5.95,
   "3": 4.95,
  },
  imagen: "Img/Imagen345.png",
  stock: 4
},
  {
  nombre: "5366PIANITO MUSICAL",
  categoria: "Juguetes",
  descripcion: "Diseño colorido y divertido.  Medida: 22 x 10 cm. Ideal para los peques que aman la música y Disney.",
  precios: {
   "1": 8.95,
  },
  imagen: "Img/Imagen347.jpg",
  stock: 3
},
      {
  nombre: "5369TAZA DE CERAMICA NAVIDEÑA 20onzas",
  categoria: "Navidad / Regalos",
  descripcion: "Tazas festivas con diseños súper lindos de Navidad, perfectas para regalar o decorar tu cocina. Material resistente, colores vibrantes y listos para darle magia a tus mañanas.",
  precios: {
   "1": 5.95,
   "3": 4.55,
  },
  imagen: "Img/Imagen350.jpeg",
  stock: 13
},
        {
  nombre: "5370GUITARRITA MUSICAL",
  categoria: "Juguetes",
  descripcion: "Divertida guitarra con personajes Disney y sonidos encantadores. Ideal para estimular la creatividad musical de los más pequeños. Perfecta para regalo, ligera y fácil de usar.",
  precios: {
   "1": 9.95,
  },
  imagen: "Img/Imagen351.jpeg",
  stock: 3
},
           {
  nombre: "5372GORRO DISEÑO MILITAR",
  categoria: "Accesorios",
  descripcion: "Gorra estilo militar. Resistente, cómoda y con actitud. Ajustable, perfecta para un look urbano, táctico o casual.",
  precios: {
   "1": 5.95,
  },
  imagen: "Img/Imagen353.jpeg",
  stock: 4
},
              {
  nombre: "5374ESMALTE DE UÑAS",
  categoria: "Belleza / Cosmética",
  descripcion: "Colores vibrantes y de larga duración para lucir uñas perfectas. Acabado brillante y profesional en cada aplicación. Ideal para uso diario o para completar tu look con estilo.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
  },
  imagen: "Img/Imagen355.jpeg",
  stock: 6
},
                  {
  nombre: "5376PORTAVELAS DE CRISTAL EN FORMA DE CORONA",
  categoria: "Decoración / Fiesta",
  descripcion: "Aporta un brillo elegante y sofisticado a tu hogar o eventos. Perfecto para crear ambientes cálidos y mágicos. Ideal como decoración o detalle especial para ocasiones únicas.",
  precios: {
   "1": 3.95,
   "3": 2.95,
  },
  imagen: "Img/Imagen357.jpeg",
  stock: 9
},
{
  nombre: "5377BASE MÓVIL",
  categoria: "Decoración / Fiesta",
  descripcion: "Transporta balones, cubos de agua, macetas, etc. Material: plástico. Capacidad: 40kg",
  precios: {
   "1": 6.95,
  },
  imagen: "Img/Imagen358.jpeg",
  stock: 19
},
  {
  nombre: "5378PACK DE 24 SLIME DE ARCILLAS",
  categoria: "Escolar / Papelería",
  descripcion: "Texturas suaves y elásticas perfectas para moldear, aplastar y crear. Incluye 24 unidades en colores variados para horas de diversión. Ideal para niños, manualidades, regalos y actividades sensoriales.",
  precios: {
   "1": 4.95,
   "3": 3.95,
   "6": 3.65,
  },
  imagen: "Img/Imagen359.jpeg",
  stock: 20
},
    {
  nombre: "5379JABONERA CON CAJÓN",
  categoria: "Hogar / Cocina",
  descripcion: "Jabonera elegante con drenaje. Diseño moderno que evita la acumulación de agua y mantiene tu jabón siempre fresco y duradero.",
  precios: {
   "1": 5.95,
   "3": 4.95,
  },
  imagen: "Img/Imagen360.png",
  stock: 9
},
   {
  nombre: "5381CELULAR EDUCATIVO",
  categoria: "Juguetes",
  descripcion: "Incluye sonidos, música y actividades para aprender jugando. Estimula la memoria, colores, números y palabras. Recargable. Color al azar.",
  precios: {
   "1": 8.95,
  },
  imagen: "Img/Imagen361.jpeg",
  stock: 7
},
       {
  nombre: "5383FOCO LED 30W",
  categoria: "Hogar / Cocina",
  descripcion: "Iluminación potente y de bajo consumo energético. Ideal para interiores o exteriores, brinda luz clara y uniforme. Ahorra energía y disfruta de mayor durabilidad.",
  precios: {
   "1": 5.95,
   "3": 4.95,
  },
  imagen: "Img/Imagen363.jpeg",
  stock: 11
},
  {
  nombre: "5385PROTECTORES DE ANTEBRAZO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Protectores de antebrazo de cuero PU resistente, impermeables y duraderos. Fácil limpieza y reutilizables, ideales para mantener la ropa protegida en todo momento. Perfectos para cocina, limpieza, jardinería, pesca, carnicería y más.",
  precios: {
   "1": 3.95,
   "3": 2.95,
     },
  imagen: "Img/Imagen366.jpeg",
  stock: 32
},
    {
  nombre: "5386PACK DE 10 LUCES HADA",
  categoria: "Navidad / Regalos",
  descripcion: "Perfecto para tus decoraciones, envases, detalles, globos, regalos y mucho más. Medida aprox.: 3m. Funciona con pilas.",
  precios: {
   "1": 13.95,
     },
  imagen: "Img/Imagen367.jpg",
  stock: 3
},
      {
  nombre: "5387SET DE MINI DRAGONES",
  categoria: "Hogar / Cocina",
  descripcion: "Incluye 6 mini dragones con detalles increíbles y llenos de carácter. Fabricados en resina, resistentes y perfectos para coleccionar o decorar. Ideales para escritorios, repisas o como regalo para amantes de la fantasía.",
  precios: {
   "1": 4.95,
   "1": 3.95,
     },
  imagen: "Img/Imagen368.jpeg",
  stock: 18
},
        {
  nombre: "5388PULSERA DE ABUNDANCIA Y RIQUEZA",
  categoria: "Accesorios",
  descripcion: "Atrae buena vibra. Favorece la llegada del dinero. Protege de la envidia. Ideal como amuleto diario.",
  precios: {
   "1": 2.95,
   "3": 1.95,
     },
  imagen: "Img/Imagen369.jpeg",
  stock: 12
},
   {
  nombre: "5390SMARTWATCH D20 MACARON",
  categoria: "Electrónica / Gadgets",
  descripcion: "Con este moderno reloj inteligente podrás llevar tus actividades diarias con estilo. Incluye funciones deportivas, monitorización básica y pantalla táctil para mayor comodidad. Disponible en diseños juveniles y brillantes, ideal para regalar o usar a diario.",
  precios: {
   "1": 9.90,
     },
  imagen: "Img/Imagen371.jpeg",
  stock: 5
},
            {
  nombre: "5391CAMPANAS DE VIENTO MÍSTICOS Y ENERGÉTICOS",
  categoria: "Hogar / Cocina",
  descripcion: "Atrae paz, armonía y vibras positivas con estos carillones llenos de simbolismo espiritual. Sus detalles representan protección, equilibrio y buena fortuna para tu hogar. Perfectos para decorar interiores o exteriores, con un sonido relajante que llena cualquier espacio de magia.",
  precios: {
   "1": 7.90,
     },
  imagen: "Img/Imagen372.jpeg",
  stock: 4
},
  {
  nombre: "5393COLET ELEGANTE",
  categoria: "Accesorios",
  descripcion: "Hermoso diseño sofisticado que realza cualquier peinado. Suave, resistente y perfecto para lucir un estilo chic en cualquier ocasión. Ideal para uso diario o eventos especiales.",
  precios: {
   "1": 2.95,
   "3": 1.85,
   "6": 1.55,
     },
  imagen: "Img/Imagen373.jpeg",
  stock: 7
},
    {
  nombre: "5394STAR BELLY LAVABLE DE FELPA",
  categoria: "Juguetes",
  descripcion: "Suave y adorable peluche con luz proyectora, hecho de felpa súper cómoda. Es lavable, ideal para mantenerlo siempre limpio y listo para acompañar a los peques. Perfecto para dormir con tranquilidad y llenar la habitación de magia.",
  precios: {
   "1": 14.90,
     },
  imagen: "Img/Imagen374.jpeg",
  stock: 5
},
   {
  nombre: "5406CARTERA MODERNO – LUXE",
  categoria: "Accesorios",
  descripcion: "Elegante, compacta y súper práctica, ideal para acompañarte en el día a día. Con detalles en tono cuero, estampado clásico y correa ajustable, aporta un toque sofisticado a cualquier outfit. Medida: 25 x 18 x 8 cm",
  precios: {
   "1": 14.90,
     },
  imagen: "Img/Imagen378.jpeg",
  stock: 6
},
       {
  nombre: "5408CINTA DOBLE CONTACTO",
  categoria: "Hogar / Cocina",
  descripcion: "Medida aprox.: 5 metros. Ideal para fijar objetos de forma rápida y segura sin necesidad de clavos. Adhiere en superficies lisas como paredes, vidrio, metal y plástico. Perfecta para manualidades, decoración y uso doméstico.",
  precios: {
   "1": 4.95,
   "3": 3.65,
   "6": 3.35,
   "12": 3.05,
     },
  imagen: "Img/Imagen380.jpeg",
  stock: 10
},
           {
  nombre: "5410CORTADOR DE PAPEL PORTÁTIL",
  categoria: "Escolar / Papelería",
  descripcion: "Medida: 33.5 x 6.5 cm. Material: Plástico. Ideal para manualidades, scrapbooking y trabajos escolares, con medida precisa y deslizador suave para cortes limpios.",
  precios: {
   "1": 5.95,
     },
  imagen: "Img/Imagen382.png",
  stock: 2
},
            {
  nombre: "5411PRINCESA MUSICAL GIRATORIA",
  categoria: "Juguetes",
  descripcion: "Encantadora muñeca sirena que baila, gira y brilla con luces de colores. Incluye música divertida y movimientos que capturan la atención de los peques. Ideal para niñas desde 3 años y perfecto como regalo mágico.",
  precios: {
   "1": 12.95,
     },
  imagen: "Img/Imagen383.jpeg",
  stock: 3
},
              {
  nombre: "5415SET x 12 PLUMONES MÁGICOS - CAMBIAN DE COLOR",
  categoria: "Escolar / Papelería",
  descripcion: "Contiene 12 plumones. ¿Ya conocías los PLUMONES MÁGICOS? Sí, estos plumones te van a sorprender ya que cambian de color. Ponte muy creativo e imagina todo lo que podrás hacer con ellos decorar, pintar, letras, títulos, manualidades y mucho más.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
     },
  imagen: "Img/Imagen384.jpeg",
  stock: 17
},
                {
  nombre: "5416SET AROMÁTICO DECORATIVO EN CAJA",
  categoria: "Hogar / Cocina",
  descripcion: "Hermoso set ideal para decorar, aromatizar y crear un ambiente relajante en tu hogar. Incluye velas, portavelas de vidrio y adornos decorativos, todo presentado en una elegante cajita. Color al azar",
  precios: {
   "1": 7.90,
     },
  imagen: "Img/Imagen385.jpeg",
  stock: 4
},
  {
  nombre: "5418ALMOHADA VICOELÁSTICA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Anti Ácaros - Anti Moho - Anti Sudor - Anti Bacterianas. Ayuda a regular la temperatura. Descanso sin interrupciones.",
  precios: {
   "1": 15.95,
     },
  imagen: "Img/Imagen387.jpeg",
  stock: 2
},
    {
  nombre: "5420ORUGUITA DE PELUCHE",
  categoria: "Juguetes",
  descripcion: "Suave, colorida y perfecta para abrazar, ideal para niños y bebés. Diseño tierno con múltiples colores que encantan a primera vista. Medida: 39 x 12.5 x 10 cm",
  precios: {
   "1": 8.95,
     },
  imagen: "Img/Imagen389.jpeg",
  stock: 7
},
  {
  nombre: "5424PARLANTE BLUETOOTH PORTÁTIL",
  categoria: "Electrónica / Gadgets",
  descripcion: "Sonido potente para disfrutar tu música al máximo. Conexión inalámbrica compatible con celulares y más dispositivos. Compactos, ligeros y perfectos para llevar a todas partes.",
  precios: {
   "1": 9.95,
     },
  imagen: "Img/Imagen393.jpeg",
  stock: 2
},
           {
  nombre: "5426ORGANIZADOR DE ROPA",
  categoria: "Hogar / Cocina",
  descripcion: "Mantén tu ropa interior, medias y accesorios siempre ordenados. Diseño tierno, material de malla transpirable y resistente. Ahorra espacio y cuelga fácilmente en tu clóset o ropero.",
  precios: {
   "1": 4.95,
   "3": 3.95,
     },
  imagen: "Img/Imagen394.jpeg",
  stock: 10
},
  {
  nombre: "5428TOBOGÁN ELÉCTRICO DE DINOSAURIOS",
  categoria: "Juguetes",
  descripcion: "Horas de diversión con luces LED brillantes y efectos de sonido emocionantes. Los mini dinos suben solitos y se deslizan una y otra vez. ¡El regalo perfecto para pequeños amantes de dinosaurios y aventuras!",
  precios: {
   "1": 25.95,
     },
  imagen: "Img/Imagen396.jpeg",
  stock: 5
},
    {
  nombre: "5436CAJA DE 50 MASCARILLAS DE TRES PLIEGUES",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Protección confiable y cómoda con mascarillas desechables de 3 pliegues. Alta filtración de partículas y gotículas para mayor seguridad. Pack de 50 unidades, ideal para uso diario, laboral o profesional.",
  precios: {
   "1": 5.95,
   "3": 4.55,
   "6": 4.25,
   "12": 3.95,
     },
  imagen: "Img/Imagen401.jpeg",
  stock: 49
},
     {
  nombre: "5437CAJA DE 10 MASCARILLAS BLANCAS KN95",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Alta protección y ajuste seguro al rostro. Filtración eficiente de partículas y gotículas. Cómodas, livianas y de uso diario.",
  precios: {
   "1": 4.95,
   "3": 3.95,
   "6": 3.65,
     },
  imagen: "Img/Imagen402.jpeg",
  stock: 31
},
     {
  nombre: "5439TOALLA DE ENFRIAMIENTO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Refresca al instante al mojarla y escurrirla. Ideal para deporte, gimnasio o días de calor. Ligera, reutilizable y fácil de llevar.",
  precios: {
   "1": 3.55,
   "3": 2.15,
   "6": 1.85,
   "12": 1.55,
     },
  imagen: "Img/Imagen403.jpg",
  stock: 19
},
      {
  nombre: "5440AUDÍFONO M10",
  categoria: "Electrónica / Gadgets",
  descripcion: "Para tu música y llamadas. Cómodo diseño ergonómico para uso diario sin molestias. Conexión rápida, disfruta tu día.",
  precios: {
   "1": 11.95,
     },
  imagen: "Img/Imagen404.png",
  stock: 12
},
        {
  nombre: "5441CORTINA IMANTADA",
  categoria: "Hogar / Cocina",
  descripcion: "Fácil instalación, se abre y cierra sola con imanes. Medida 2 m x 1 m, ideal para puertas. Color al azar, mantiene fuera insectos y deja pasar el aire.",
  precios: {
   "1": 6.95,
   "3": 5.95,
     },
  imagen: "Img/Imagen405.png",
  stock: 16
},
          {
  nombre: "111 PALIBOMBITAS",
  categoria: "Hogar / Cocina",
  descripcion: "Perfectos para fiestas de verano, reuniones familiares, o simplemente para disfrutar de un día caluroso, estos globos de agua son ideales para cualquier evento al aire libre. Cada paquete tiene 3 ramilletes (total 111 globos). Incluye adaptador.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
     },
  imagen: "Img/Imagen406.png",
  stock: 26
},
          {
  nombre: "5446SET SORBETES REUTILIZABLES + CEPILLO DE LIMPIEZA",
  categoria: "Hogar / Cocina",
  descripcion: "Set contiene: 1 Sorbete Curvo + 1 Sorbete Recto + 1 Cepillo Limpiador de Metal. Práctico y muy útil juego de 2 cañitas. una con punta diagonal para mayor comodidad y otra cañita recta para cuando la prefiera. Y para su limpieza se incluye el limpiador de Sorbetes. Sorbete de acero Inoxidable, ideal para batidos, jugos, te de burbujas, también recomendado para uso de adultos mayores, etc.",
  precios: {
   "1": 3.95,
   "3": 2.25,
   "6": 1.95,
     },
  imagen: "Img/Imagen407.png",
  stock: 13
},
  {
  nombre: "5448VISERA DE DAMA COLOR ENTERO",
  categoria: "Accesorios",
  descripcion: "Ideal para protegerte del sol con estilo y comodidad. Diseño moderno y ligero, perfecto para salidas y paseos. Aporta un toque elegante a tus outfits veraniegos. Color al azar",
  precios: {
   "1": 5.95,
   "3": 4.25,
   "6": 3.95,
     },
  imagen: "Img/Imagen408.jpeg",
  stock: 7
},
      {
  nombre: "5451CARPETA PARA ARCHIVOS CON ASA",
  categoria: "Escolar / Papelería",
  descripcion: "Carpeta de archivo portátil: también es buena para músicos, músicos, estudiantes, profesores, trabajadores de oficina, empresarios, etc. Diseño al azar.",
  precios: {
   "1": 7.95,
   "3": 6.25,
   "6": 5.95,
     },
  imagen: "Img/Imagen410.jpeg",
  stock: 21
},
    {
  nombre: "5510SET DE 168 PLUMONES DUAL BRUSH",
  categoria: "Escolar / Papelería",
  descripcion: "SET DE ROTULADORES DOBLE PUNTA – 168 COLORES - ¡Potencia tu creatividad con este set profesional de 168 marcadores de doble punta, que incluye un practico estuche organizador portátil! Ideales para dibujo y caligrafía, ofrecen una punta pincel flexible para trazos artísticos y una punta fina para detalles precisos en cada proyecto.",
  precios: {
   "1": 54.90,
     },
  imagen: "Img/Imagen399.png",
  stock: 9
}, 
    {
  nombre: "5452CARGADOR REDD DE 75W + CABLE TIPO C",
  categoria: "Electrónica / Gadgets",
  descripcion: "Carga súper rápida para celulares, tablets y laptops compatibles. Incluye cable Tipo C resistente y de alto rendimiento. Ideal para uso diario, viajes y carga eficiente sin esperar horas.",
  precios: {
   "1": 12.95,
     },
  imagen: "Img/Imagen376.jpeg",
  stock: 14
},
      {
  nombre: "5453DEPILADORA DE CEJA RECARGABLE",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Discreto y portátil del tamaño de un delineador. Depila al instante, sin dolor ni quemaduras o irritación. Suficientemente suave como para utilizarlo todos los días. Rápido y preciso para una depilación perfecta. Punta fina para que tengas una ceja perfecta. Color al azar.",
  precios: {
   "1": 6.95,
   "3": 5.95,
     },
  imagen: "Img/Imagen411.png",
  stock: 25
},
        {
  nombre: "5450FLUORESCENTE PORTÁTIL",
  categoria: "Hogar / Cocina",
  descripcion: "Ilumina cualquier espacio de forma práctica y versátil, ideal para el hogar, auto o emergencias. Medida: 52 cm. Diferentes tipos de luz para cada necesidad. Presentación en caja. Sistema imantado para fácil colocación. Botón de encendido y cambio de luz. Incluye cable USB",
  precios: {
   "1": 7.95,
     },
  imagen: "Img/Imagen412.png",
  stock: 18
},
          {
  nombre: "5457PORTA LAPICERO ANIMADO",
  categoria: "Escolar / Papelería",
  descripcion: "Medida 15 × 10 × 5.5 cm. Material tipo madera, resistente y duradero. Ideal para escritorio o estudio. Modelos variados.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
     },
  imagen: "Img/Imagen413.jpeg",
  stock: 18
},
      {
  nombre: "5465EMPAQUE DE 50 POST IT TRANSPARENTES",
  categoria: "Escolar / Papelería",
  descripcion: "Estas notas son ideales para hacer anotaciones en libros de texto, ya que puedes ver a través de ellas para resaltar o llamar a un contenido específico. Utilízalas en manualidades para calcar imágenes o patrones de otros artículos. Cada paquete tiene 50 hojitas.",
  precios: {
   "1": 3.95,
   "3": 2.05,
   "6": 1.85,
   "12": 1.55,
     },
  imagen: "Img/Imagen418.png",
  stock: 41
},
  {
  nombre: "5466PROTECTOR ANTISALPICADURA PARA LAVADERO",
  categoria: "Hogar / Cocina",
  descripcion: "Evita que el agua salpique al lavar. Ideal para lavaderos y fregaderos. Mantiene el área limpia y seca.",
  precios: {
   "1": 4.95,
   "3": 3.25,
   "6": 2.95,
     },
  imagen: "Img/Imagen419.jpeg",
  stock: 13
},
  {
  nombre: "5467PACK 10 FORRO FÁCIL",
  categoria: "Escolar / Papelería",
  descripcion: "Práctica y fácil para forrar cuadernos escolares. Pack de 10 unidades. No requiere cinta adhesiva. Medida aprox.: 29 × 46 cm",
  precios: {
   "1": 6.95,
   "3": 5.95,
     },
  imagen: "Img/Imagen420.jpeg",
  stock: 25
},
     {
  nombre: "5469SET DE 12 COLORES DUAL JUMBO",
  categoria: "Escolar / Papelería",
  descripcion: "24 tonos en total (doble punta). Tamaño jumbo, fácil agarre. Ideal para el cole y manualidades.",
  precios: {
   "1": 7.95,
     },
  imagen: "Img/Imagen422.png",
  stock: 6
},
  {
  nombre: "5470TAJADOR CON BORRADOR",
  categoria: "Escolar / Papelería",
  descripcion: "Tajador práctico con tapa para evitar desorden. Cuenta con 2 agujeros: tamaño normal y jumbo. Incluye borrador integrado, ideal para la escuela. Diseño funcional y compacto, perfecto para el día a día.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
     },
  imagen: "Img/Imagen423.jpeg",
  stock: 39
},
   {
  nombre: "5471SET DE 12 LÁPICES TÉCNICO 2B",
  categoria: "Escolar / Papelería",
  descripcion: "Trazo suave y uniforme. Ideales para dibujo y escritura. Perfectos para colegio u oficina.",
  precios: {
   "1": 5.95,
   "3": 4.85,
   "6": 4.55,
     },
  imagen: "Img/Imagen424.jpeg",
  stock: 7
},
   {
  nombre: "5472SET DE 12 LÁPICES CHEQUEO",
  categoria: "Escolar / Papelería",
  descripcion: "Incluye borrador integrado para correcciones rápidas. Ideales para chequeo, marcado y uso escolar. Perfectos para colegio, academia u oficina.",
  precios: {
   "1": 5.95,
   "3": 4.85,
     },
  imagen: "Img/Imagen425.jpeg",
  stock: 3
},
    {
  nombre: "5474SET DE 8 LÁPICES METÁLICOS",
  categoria: "Escolar / Papelería",
  descripcion: "Lápices con acabado metálico, modernos y llamativos. Contiene 8 unidades ideales para uso escolar u oficina. Escritura suave y cómoda para el día a día. Prácticos, resistentes y de excelente presentación.",
  precios: {
   "1": 5.95,
   "3": 4.85,
   "6": 4.55,
   "12": 4.25,
     },
  imagen: "Img/Imagen427.jpeg",
  stock: 15
},
   {
  nombre: "5475GOMA EN BARRA - 40 GRAMOS",
  categoria: "Escolar / Papelería",
  descripcion: "Pega en forma rápida, limpia y sencilla; papel, fotos, cartón, cartulina, tela, etc. Tapa hermética que garantiza un pegamento fresco. Ideal para el colegio, hogar y oficina.",
  precios: {
   "1": 3.55,
   "3": 2.25,
   "6": 1.95,
     },
  imagen: "Img/Imagen428.jpeg",
  stock: 39
},
     {
  nombre: "5476JUEGO DE MESA TETRIS 3D",
  categoria: "Juguetes",
  descripcion: "Juego competitivo para 2 jugadores, con timbre incluido. Bloques de madera de colores + tarjetas de desafío. Ideal desde los 3 años, desarrolla lógica y coordinación. Diversión educativa que reta la mente y la velocidad.",
  precios: {
   "1": 16.95,
     },
  imagen: "Img/Imagen429.jpeg",
  stock: 2
},
       {
  nombre: "5461FLOTADOR DE 60 CM",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Ideal para la piscina o la playa, súper colorido y divertido. Diseños infantiles llamativos que encantan a los más pequeños. Perfecto para el verano, fácil de inflar y llevar a todos lados.",
  precios: {
   "1": 3.95,
   "3": 2.95,
     },
  imagen: "Img/Imagen430.jpeg",
  stock: 2
},
         {
  nombre: "5479SET DE 10 CUBIERTAS DE ALUMINIO",
  categoria: "Hogar / Cocina",
  descripcion: "Incluye 10 piezas. Resistentes y reutilizables. Ideales para conservar y proteger alimentos.",
  precios: {
   "1": 3.95,
   "3": 2.25,
   "6": 1.95,
     },
  imagen: "Img/Imagen431.jpeg",
  stock: 17
},
             {
  nombre: "5482SET DE 15 PINCELES ARTÍSTICOS",
  categoria: "Escolar / Papelería",
  descripcion: "Incluye 15 pinceles de distintos tamaños y formas. Ideal para acrílico, acuarela, óleo y manualidades. Cerdas resistentes y mangos cómodos de madera. Perfecto para estudiantes, artistas y principiantes.",
  precios: {
   "1": 4.95,
   "3": 3.95,
   "6": 3.65,
     },
  imagen: "Img/Imagen433.jpeg",
  stock: 14
},
               {
  nombre: "5484MINI BILLETERA CON POMPÓN",
  categoria: "Accesorios",
  descripcion: "Diseño adorable diseño orejitas, compacta y súper elegante. Incluye pompón suave que le da un toque único y moderno. Espacios para billetes, tarjetas y monedas, todo bien organizado. Ideal para regalo, práctica para llevar en cualquier bolso.",
  precios: {
   "1": 4.95,
   "3": 3.95,
   "6": 3.65,
     },
  imagen: "Img/Imagen434.jpeg",
  stock: 23
},
  {
  nombre: "5485ABACO VERTICAL",
  categoria: "Escolar / Papelería",
  descripcion: "Compresión del sistema numérico decimal. Favorece el aprendizaje en las operaciones aritméticas básicas. Incentiva el cálculo mental. Material: madera",
  precios: {
   "1": 7.95,
     },
  imagen: "Img/Imagen435.jpeg",
  stock: 6
},
    {
  nombre: "5487ACUARELA DE 12 COLORES + PINCEL",
  categoria: "Escolar / Papelería",
  descripcion: "Incluye 12 colores vibrantes y pincel. Medida aprox.: 20 x 8.5 cm. Ideal para escolares, estudiantes y artistas Compacta y fácil de transportar.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
     },
  imagen: "Img/Imagen436.jpeg",
  stock: 8
},
      {
  nombre: "5488SET DE 20 PAPELES FOTOGRÁFICOS A4 SIN ADHESIVO",
  categoria: "Escolar / Papelería",
  descripcion: "Tamaño A4 ideal para imprimir fotos, trabajos y recuerdos especiales. Acabado de alta calidad para colores vivos y detalles nítidos. Pack de 20 hojas, perfecto para casa, estudio y oficina.",
  precios: {
   "1": 5.95,
   "3": 4.95,
     },
  imagen: "Img/Imagen437.jpeg",
  stock: 3
},
        {
  nombre: "5490BLOCK PAPEL LUSTRE A4",
  categoria: "Escolar / Papelería",
  descripcion: "Colores vivos y brillantes. Tamaño A4 ideal para trabajos escolares. Incluye 14 hojas surtidas. Perfecto para manualidades y decoración.",
  precios: {
   "1": 4.95,
   "3": 3.95,
   "6": 3.65,
     },
  imagen: "Img/Imagen438.jpeg",
  stock: 10
},
          {
  nombre: "5492DIDÁCTICO DE MADERA GEOMÉTRICO",
  categoria: "Escolar / Papelería",
  descripcion: "Juego educativo para aprender formas, colores y números. Ideal para estimulación temprana y aprendizaje divertido. Elaborado en madera resistente y duradera. Incluye múltiples piezas para armar y encajar. Medida: 18 x 18 cm, modelo al azar.",
  precios: {
   "1": 6.95,
     },
  imagen: "Img/Imagen439.jpeg",
  stock: 8
},
 {
  nombre: "5493SHAMPOO DE SÁBILA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Estimula el CRECIMIENTO del cabello. Aporta BRILLO y SUAVIDAD. Reduce la caída. Fortalece la raíz. Hidrata y nutre el cuero cabelludo.",
  precios: {
   "1": 9.95,
     },
  imagen: "Img/Imagen440.jpeg",
  stock: 8
},
   {
  nombre: "5494TOMATODO LICENCIA 860 ML",
  categoria: "Escolar / Papelería",
  descripcion: "Ideal para el colegio, paseos o deportes. Diseños divertidos y coloridos que encantan a los peques. Resistente, práctico y fácil de llevar todos los días. Capacidad: 860 ml. Modelo: al azar.",
  precios: {
   "1": 9.95,
     },
  imagen: "Img/Imagen441.jpeg",
  stock: 10
},
   {
  nombre: "5495SET DE 10 PLUMONES INDELEBLES DELGADO - DOBLE PUNTA",
  categoria: "Escolar / Papelería",
  descripcion: "Plumones de doble punta fina, ideales para escribir, marcar y detallar con precisión. Perfectos para el colegio, oficina o manualidades creativas.",
  precios: {
   "1": 5.95,
   "3": 4.95,
     },
  imagen: "Img/Imagen442.jpeg",
  stock: 5
},
  {
  nombre: "5496TOMATODO KPOP",
  categoria: "Escolar / Papelería",
  descripcion: "Capacidad de 700 ml, ideal para mantenerte hidratado todo el día con estilo. Perfecto para el colegio, gimnasio o uso diario, práctico y con diseño moderno.",
  precios: {
   "1": 4.95,
   "3": 3.95,
     },
  imagen: "Img/Imagen443.jpeg",
  stock: 19
},
      {
  nombre: "5497CINTA MASKING TAPE DE 1\"",
  categoria: "Escolar / Papelería",
  descripcion: "Excelente para el taller, oficina y hogar. Fácil de cortar. Dura como ninguno",
  precios: {
   "1": 2.95,
   "3": 1.55,
     },
  imagen: "Img/Imagen444.jpeg",
  stock: 37
},
  {
  nombre: "5498CINTA MASKING TAPE DE 2\"",
  categoria: "Escolar / Papelería",
  descripcion: "Excelente para el taller, oficina y hogar. Buena adhesión en diferentes superficies. Medida: 2\" x 18 yardas",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
     },
  imagen: "Img/Imagen445.jpeg",
  stock: 33
},
  {
  nombre: "5499CINTA DE EMBALAJE DE 60 YARDAS",
  categoria: "Escolar / Papelería",
  descripcion: "Es la solución ideal para sellado seguro de cajas, paquetes y envíos. Perfecta para uso industrial, comercial o doméstico.",
  precios: {
   "1": 2.95,
   "6": 1.85,
     },
  imagen: "Img/Imagen446.jpeg",
  stock: 8
},
    {
  nombre: "5500CINTA DE EMBALAJE 200 YARDAS",
  categoria: "Escolar / Papelería",
  descripcion: "Alta resistencia y excelente adherencia para sellado seguro de cajas y paquetes. Ideal para uso escolar, oficina o negocio, práctica y funcional para el día a día.",
  precios: {
   "1": 4.95,
   "3": 3.95,
   "6": 3.65,
   "12": 3.35,
     },
  imagen: "Img/Imagen447.jpeg",
  stock: 18
},
      {
  nombre: "5501JUEGO DE ESCUADRAS - 5 PCS",
  categoria: "Escolar / Papelería",
  descripcion: "Incluye regla, transportador, escuadras y plantilla circular. Colores llamativos y material resistente. Ideal para escuela, dibujo técnico y uso diario.",
  precios: {
   "1": 3.95,
   "3": 2.55,
   "6": 2.25,
     },
  imagen: "Img/Imagen448.jpeg",
  stock: 8
},
       {
  nombre: "5502PAQUETE DE 10 MICAS A4",
  categoria: "Escolar / Papelería",
  descripcion: "Protege tus documentos del polvo, humedad y dobleces, manteniéndolos siempre como nuevos. Ideal para oficina, colegio o presentaciones, práctica y lista para usar.",
  precios: {
   "1": 5.95,
   "3": 4.25,
   "6": 3.95,
     },
  imagen: "Img/Imagen449.jpeg",
  stock: 6
},
         {
  nombre: "5503MOCHILA K-POP",
  categoria: "Escolar / Papelería",
  descripcion: "Amplio espacio para cuadernos y útiles. Ideal para el cole, paseos o uso diario.",
  precios: {
   "1": 38.90,
     },
  imagen: "Img/Imagen450.jpeg",
  stock: 2
},
  {
  nombre: "5504JUEGO DE LABERINTO",
  categoria: "Escolar / Papelería",
  descripcion: "Medida aprox.: 11 × 9 × 9 cm. Desafía la lógica y la coordinación. Ideal para niños y entretenimiento educativo.",
  precios: {
   "1": 5.95,
   "3": 4.25,
   "6": 3.95,
     },
  imagen: "Img/Imagen451.png",
  stock: 25
},
             {
  nombre: "5505GEL DE ÁRNICA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Dolor rodilla, codos, espalda, cuello y cintura. Antiflamatorio. Artritis. Golpes y quemaduras. Picaduras. Dolor de huesos. Dolor ciatica-lumbago. Modo de uso: 2 a 3 veces al día con un masaje a la zona afectada.",
  precios: {
   "1": 3.95,
   "3": 2.55,
   "6": 2.25,
   "12": 1.95,
     },
  imagen: "Img/Imagen452.jpeg",
  stock: 30
},
 {
  nombre: "5506BOTIQUÍN VIAJERO",
  categoria: "Hogar / Cocina",
  descripcion: "Compacto y práctico, ideal para viajes, auto u hogar (24 × 20 × 9.5 cm). Espacio suficiente para medicamentos y artículos de primeros auxilios. Color al azar.",
  precios: {
   "1": 4.95,
   "3": 3.95,
     },
  imagen: "Img/Imagen453.png",
  stock: 11
},
 {
  nombre: "5508GEL LIMPIADOR DE INODORO",
  categoria: "Hogar / Cocina",
  descripcion: "Sello de gel de larga duración, mantiene el inodoro limpio y perfumado en cada descarga. Incluye dispensador + gel, limpieza. desodorizante práctico y sin contacto.",
  precios: {
   "1": 9.95,
   "3": 8.95,
     },
  imagen: "Img/Imagen454.jpeg",
  stock: 3
},
   {
  nombre: "5511SET DE 24 PLUMONES PUNTA FINA",
  categoria: "Escolar / Papelería",
  descripcion: "Colores surtidos de alta intensidad. Ideales para colorear, escribir y detallar. Apto para uso escolar y artístico.",
  precios: {
   "1": 6.95,
   "3": 5.65,
     },
  imagen: "Img/Imagen455.jpeg",
  stock: 4
},
     {
  nombre: "5512PAPEL TISSUE 1200 HOJAS",
  categoria: "Hogar / Cocina",
  descripcion: "Papel Tissue para pared. Gracias a su excelente capacidad de absorción, resistencia al rasgado y suavidad, el papel tissue se utiliza como pañuelo facial, papel de cocina, servilletas, pañuelos y papel higiénico.",
  precios: {
   "1": 6.95,
     },
  imagen: "Img/Imagen456.jpeg",
  stock: 2
},
       {
  nombre: "5513ROMPECABEZAS DIDÁCTICO CUERPO HUMANO",
  categoria: "Escolar / Papelería",
  descripcion: "Aprende las partes del cuerpo en español e inglés de forma divertida. Ideal para niños, desarrolla memoria, lógica y coordinación.",
  precios: {
   "1": 5.95,
   "3": 4.95,
   "6": 4.65,
     },
  imagen: "Img/Imagen457.jpeg",
  stock: 11
},
         {
  nombre: "5515MINI DISPENSADOR DE PERFUME",
  categoria: "Hogar / Cocina",
  descripcion: "¿Alguna vez quisiste llevar tu perfume favorito en la maleta de viaje,  trabajo o a estudiar? Mini atomizador en spray te ayudará a recargar con tu perfume favorito y llevarlo a donde quieras.",
  precios: {
   "1": 2.95,
   "3": 1.95,
     },
  imagen: "Img/Imagen458.png",
  stock: 8
},
{
  nombre: "4292TUBO DE 12 CINTAS ESCOLAR 12 mm x 14 yardas",
  categoria: "Escolar / Papelería",
  descripcion: "Set de 12 cintas escolares de colores. Medida perfecta para decorar, forrar cuadernos o manualidades.",
  precios: {
    "1": 4.90,
    "2": 3.95,
  },
  imagen: "Img/Imagen170.jpg",
  stock: 2
}
];























































































































































































































































































































