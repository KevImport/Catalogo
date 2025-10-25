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
  nombre: "5044PAPEL TISSUE, 300 HOJAS APROX.",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Suave, absorbente y rendidor. Ideal para el hogar u oficina con 300 hojas de comodidad.",
  precios: {
    "1": 2.95,
    "3": 1.85,
    "6": 1.55,
  },
  imagen: "Img/Imagen6.jpg",
  stock: 24
},
{
  nombre: "5030BALDE CANCHERO + VASO TOMATODO \"PITUFOS\"",
  categoria: "Navidad / Regalos",
  descripcion: "¡Diversión y estilo para los más peques! Incluye balde canchero y vaso tomatodo con diseño de Los Pitufos.",
  precios: {
    "1": 6.95,
  },
  imagen: "Img/Imagen9.jpg",
  stock: 2
},
{
  nombre: "5027CURITAS X 100",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "¡Siempre prevenido! Pack económico de 100 curitas adhesivas para cortes y raspones. Indispensables en casa, oficina o viajes.",
  precios: {
    "1": 4.95,
    "3": 3.95,
  },
  imagen: "Img/Imagen11.jpg",
  stock: 3
},
{
  nombre: "5017CANASTILLA PLEGABLE",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza con estilo. Esta canastilla se pliega fácilmente cuando no la usas, ahorrando espacio y manteniendo todo en orden.",
  precios: {
    "1": 3.95,
  },
  imagen: "Img/Imagen12.jpg",
  stock: 1
},
{
  nombre: "5015LIMPIADOR MULTIUSOS",
  categoria: "Hogar / Cocina",
  descripcion: "Poder de limpieza en tus manos. Este limpiador multiusos elimina grasa, suciedad y deja todo reluciente. ¡Imprescindible!",
  precios: {
    "1": 4.95,
    "3": 3.95,
  },
  imagen: "Img/Imagen13.jpg",
  stock: 3
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
  nombre: "5009MINI CÁMARA ESPÍA",
  categoria: "Electrónica / Gadgets",
  descripcion: "Discreta y potente. Esta mini cámara espía graba video y audio en alta calidad. Ideal para seguridad o vigilancia personal.",
  precios: {
    "1": 9.95,
  },
  imagen: "Img/Imagen16.jpg",
  stock: 2
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
  stock: 17
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
  categoria: "Navidad / Regalos",
  descripcion: "¡Para los verdaderos gamers! Esta taza con diseño único es perfecta para tus sesiones de juego con café o chocolate.",
  precios: {
    "1": 10.90,
  },
  imagen: "Img/Imagen27.jpg",
  stock: 2
},
{
  nombre: "4964SET DE 3 ORGANIZADORES",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza todo con estilo. Este set de 3 organizadores es ideal para ropa interior, cosméticos o accesorios.",
  precios: {
    "1": 8.95,
  },
  imagen: "Img/Imagen28.jpg",
  stock: 1
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
  nombre: "4903CÁPSULAS x100 - BIOTINA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Fortalece tu cabello, piel y uñas. Suplemento de biotina en cápsulas, con 100 unidades por frasco.",
  precios: {
    "1": 9.90,
    "3": 8.90,
  },
  imagen: "Img/Imagen32.jpg",
  stock: 12
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
  nombre: "4899SET DE PLUMÓN DOBLE TRAZO",
  categoria: "Escolar / Papelería",
  descripcion: "¡Doble creatividad! Plumones con punta doble para trazos finos y gruesos. Colores intensos y duraderos.",
  precios: {
    "1": 9.90,
  },
  imagen: "Img/Imagen37.jpg",
  stock: 1
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
  stock: 2
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
  nombre: "4843COLLAR EQUIPO",
  categoria: "Accesorios",
  descripcion: "Muestra tu pasión por tu equipo. Collar con dije deportivo, ideal como regalo o uso diario.",
  precios: {
    "1": 7.95,
  },
  imagen: "Img/Imagen47.jpg",
  stock: 1
 },
{
  nombre: "4832KIT DE MANICURE",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Uñas siempre perfectas. Kit completo con herramientas esenciales para tu cuidado personal en casa o de viaje.",
  precios: {
    "1": 5.95,
  },
  imagen: "Img/Imagen49.jpg",
  stock: 4
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
  stock: 5
},
{
  nombre: "4706CHUPÓN ALIMENTADOR CON REPUESTO",
  categoria: "Hogar / Cocina",
  descripcion: "Alimentación segura para bebés. Chupón de silicona con orificios y repuesto, ideal para frutas blandas.",
  precios: {
    "1": 7.95,
    "3": 6.55
  },
  imagen: "Img/Imagen54.jpg",
  stock: 3
},
{
  nombre: "4704MINI TELESCOPIO",
  categoria: "Navidad / Regalos",
  descripcion: "Explora el mundo desde cerca. Mini telescopio compacto y portátil, ideal para niños curiosos o actividades al aire libre.",
  precios: {
    "1": 24.90,
  },
  imagen: "Img/Imagen55.jpg",
  stock: 3
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
  stock: 15
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
  stock: 22
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
  nombre: "4330BLÍSTER DE 12 PARES DE ARETES",
  categoria: "Accesorios",
  descripcion: "Variedad y estilo. Blíster con 12 pares de aretes para cambiar de look todos los días.",
  precios: {
    "1": 2.90,
    "5": 1.80,
    "10": 1.50,
  },
  imagen: "Img/Imagen70.jpg",
  stock: 10
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
  stock: 12
},
{
  nombre: "4154JUEGO TWISTER",
  categoria: "Navidad / Regalos",
  descripcion: "¡Gira, estírate y ríe! Juego clásico que pone a prueba tu equilibrio y coordinación. Ideal para reuniones.",
  precios: {
    "1": 11.90,
  },
  imagen: "Img/Imagen77.jpg",
  stock: 1
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
  nombre: "2756SET DE 12 VELAS NAVIDEÑAS",
  categoria: "Navidad / Regalos",
  descripcion: "Ilumina la Navidad. Set de velas con diseños festivos para decorar mesas, repisas o centros de mesa.",
  precios: {
    "1": 13.90,
  },
  imagen: "Img/Imagen82.jpg",
  stock: 1
},
{
  nombre: "4041VELA LED NAVIDEÑA",
  categoria: "Navidad / Regalos",
  descripcion: "Vela LED con diseño navideño que ilumina y decora sin riesgo. Ideal para crear ambientes cálidos y festivos.",
  precios: {
    "1": 4.00,
    "3": 2.90,
  },
  imagen: "Img/Imagen83.jpg",
  stock: 6
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
  nombre: "3352COLLAR SATURNO",
  categoria: "Accesorios",
  descripcion: "Collar moderno con diseño de Saturno, perfecto para destacar tu look con un toque único y astral.",
  precios: {
    "1": 7.90,
  },
  imagen: "Img/Imagen93.jpg",
  stock: 3
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
  stock: 33
},
{
  nombre: "3054AVE DE EQUILIBRIO",
  categoria: "Navidad / Regalos",
  descripcion: "Curiosa figura de ave que se equilibra mágicamente en una superficie. Sorprende a grandes y chicos.",
  precios: {
    "1": 1.00,
  },
  imagen: "Img/Imagen95.jpg",
  stock: 48
},
{
  nombre: "3053JUGUETE BALANCE",
  categoria: "Navidad / Regalos",
  descripcion: "Divertido juguete educativo que ayuda a desarrollar la coordinación y el equilibrio en los más pequeños.",
  precios: {
    "1": 10.90,
  },
  imagen: "Img/Imagen96.jpg",
  stock: 5
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
  nombre: "3025MUÑECOS EN ACCIÓN",
  categoria: "Navidad / Regalos",
  descripcion: "Figuras articuladas llenas de aventura. Ideales para juegos creativos y coleccionistas.",
  precios: {
    "1": 10.90,
  },
  imagen: "Img/Imagen98.jpg",
  stock: 1
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
  stock: 6
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
  categoria: "Navidad / Regalos",
  descripcion: "Excavadora realista con control remoto. Diversión garantizada para los fanáticos de la construcción.",
  precios: {
    "1": 17.90,
  },
  imagen: "Img/Imagen105.jpg",
  stock: 2
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
  nombre: "2708EQUIPO DE PROTECCIÓN",
  categoria: "Varios",
  descripcion: "Kit básico de protección para tareas que requieren seguridad personal. Incluye elementos esenciales para cuidar tu bienestar.",
  precios: {
    "1": 6.90,
  },
  imagen: "Img/Imagen109.jpg",
  stock: 3
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
  stock: 13
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
  nombre: "2441EXTRACTOR DE ABOLLADURAS",
  categoria: "Varios",
  descripcion: "Herramienta útil para reparar pequeñas abolladuras en vehículos de forma rápida y sin dañar la pintura.",
  precios: {
    "1": 7.90,
  },
  imagen: "Img/Imagen115.jpg",
  stock: 2
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
  stock: 18
},
{
  nombre: "5008JABÓN DE ARROZ",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Jabón con extracto de arroz que limpia profundamente y ayuda a iluminar la piel. Ideal para el uso diario.",
  precios: {
    "1": 4.95,
    "3": 3.25,
    "6": 2.95,
  },
  imagen: "Img/Imagen126.jpg",
  stock: 11
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
  stock: 18
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
  nombre: "4979MASCARILLA CON COLÁGENO FLOWER SECRET",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Mascarilla facial enriquecida con colágeno para hidratar y rejuvenecer la piel. Ideal para una rutina de belleza efectiva.",
  precios: {
    "1": 9.95,
  },
  imagen: "Img/Imagen130.jpg",
  stock: 1
},
{
  nombre: "4920SET DE UÑAS POSTIZAS - MODELO #2",
  categoria: "Belleza / Cosmética",
  descripcion: "Set de uñas postizas con diseño moderno. Fáciles de colocar, resistentes y perfectas para cualquier ocasión.",
  precios: {
    "1": 3.90,
    "6": 2.95,
  },
  imagen: "Img/Imagen135.jpg",
  stock: 3
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
  stock: 15
},
{
  nombre: "4890MASAJEADOR CORPORAL",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Masajeador manual para relajar músculos y mejorar la circulación. Ideal para aliviar el estrés diario.",
  precios: {
    "1": 26.90,
  },
  imagen: "Img/Imagen137.jpg",
  stock: 1
},
{
  nombre: "4885DELINEADOR 2 EN 1",
  categoria: "Belleza / Cosmética",
  descripcion: "Delineador doble función con punta precisa y otro extremo para difuminar. Perfecto para crear looks intensos y definidos.",
  precios: {
    "1": 4.95,
    "3": 3.85,
  },
  imagen: "Img/Imagen138.jpg",
  stock: 3
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
  stock: 6
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
  nombre: "4757SET DE 5 PARCHES ADELGAZANTES",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Parches reductores para zonas específicas del cuerpo. Apóyate en tu rutina fitness con este práctico complemento.",
  precios: {
    "1": 3.95,
    "2": 2.95,
  },
  imagen: "Img/Imagen145.jpg",
  stock: 2
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
    "1": 3.95,
    "3": 2.25,
    "6": 1.95,
  },
  imagen: "Img/Imagen147.jpg",
  stock: 7
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
  nombre: "4711BOXER DAMA CK",
  categoria: "Ropa interior",
  descripcion: "Boxer femenino inspirado en la comodidad y estilo de Calvin Klein. Ajuste perfecto para uso diario.",
  precios: {
    "1": 4.95,
    "3": 4.65,
  },
  imagen: "Img/Imagen153.jpg",
  stock: 3
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
  stock: 9
},
{
  nombre: "5031SET DE 7 TEMPERAS + PALETA Y PINCEL",
  categoria: "Escolar / Papelería",
  descripcion: "Kit de pintura ideal para pequeños artistas. Incluye 7 témperas, paleta y pincel para crear sin límites.",
  precios: {
    "1": 6.95,
    "3": 5.65,
    "6": 5.35,
  },
  imagen: "Img/Imagen156.jpg",
  stock: 8
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
  stock: 15
},
{
  nombre: "4566LÁPIZ PORTA MINA SANRIO",
  categoria: "Escolar / Papelería",
  descripcion: "Lápiz porta mina con diseño adorable de Sanrio. Ideal para estudiantes que disfrutan de lo tierno y funcional.",
  precios: {
    "1": 2.95,
    "2": 1.95,
  },
  imagen: "Img/Imagen162.jpg",
  stock: 2
},
{
  nombre: "4303PACK DE 6 LAPICEROS ARCO IRIS",
  categoria: "Escolar / Papelería",
  descripcion: "Conjunto de lapiceros con tinta de colores vibrantes tipo arco iris. Perfectos para escribir o decorar con estilo.",
  precios: {
    "1": 4.50,
    "3": 3.50,
    "5": 3.20,
  },
  imagen: "Img/Imagen168.jpg",
  stock: 5
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
  stock: 5
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
  descripcion: "Material: algodón. Talla disponible: 12L",
  precios: {
    "1": 3.95,
    "3": 2.95,
    "6": 2.65,
    "12": 2.35
  },
  imagen: "Img/Imagen178.jpeg",
  stock: 12
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
  nombre: "5071CREMA FACIAL ANTIARRUGAS CON VITAMINA C",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Hidrata y mejora la elasticidad de la piel. Ayuda a reducir líneas de expresión. Ilumina y unifica el tono del rostro. Ideal para uso diario y todo tipo de piel.",
  precios: {
    "1": 9.95
 },
  imagen: "Img/Imagen182.jpeg",
  stock: 1
},
{
  nombre: "5074PAQUETE DE 20 PAPELES FOTOGRÁFICOS BRILLANTE A4",
  categoria: "Escolar / Papelería",
  descripcion: "Ideal para impresiones full color. Acabado brillante para fotos vibrantes. Tamaño A4 – 180g. Contiene 20 hojas por paquete. Perfecto para proyectos creativos y recuerdos.",
  precios: {
    "1": 13.90
 },
  imagen: "Img/Imagen184.jpeg",
  stock: 5
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
  nombre: "5083PESTAÑAS POSTIZAS EN RACIMO",
  categoria: "Belleza / Cosmética",
  descripcion: "Ideal para lograr un look natural o glam. Fáciles de aplicar y súper cómodas. ¡Resalta tu mirada en segundos!. Perfectas para maquillaje profesional o diario.",
  precios: {
    "1": 4.95,
    "3": 3.95,
 },
  imagen: "Img/Imagen189.jpeg",
  stock: 3
},
 {
  nombre: "5086TURBANTE TOALLA PARA EL CABELLO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "¡Seca tu cabello con estilo! Turbante de microfibra súper absorbente. Ideal para después de la ducha, suave y ligero. ¡Práctico, cómodo y elegante!",
  precios: {
    "1": 3.95,
    "2": 2.85,
 },
  imagen: "Img/Imagen190.jpeg",
  stock: 2
},
{
  nombre: "5090BOLSA DE 50 GANCHOS TREBOL",
  categoria: "Organización / Almacenamiento",
  descripcion: "Olvídate de clavos ya es hora de renovarse. Estos ganchos son la mejor alternativa. Buena resistencia. Gancho multiusos para baño, cocina, oficina, dormitorio, etc. Color transparente modelo trébol.",
  precios: {
    "1": 9.90,
 },
  imagen: "Img/Imagen193.png",
  stock: 2
},
{
  nombre: "5095AGENDA A5",
  categoria: "Escolar / Papelería",
  descripcion: "Agenda anillada A5 con diseños surtidos y 50 hojas. Ideal para notas, apuntes o planificar tu día con estilo. Perfecta para llevar en tu bolso o mochila y tener tus ideas siempre a mano.",
  precios: {
    "1": 4.95,
 },
  imagen: "Img/Imagen195.jpeg",
  stock: 3
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
  nombre: "5105CINTA RGB",
  categoria: "Hogar / Cocina",
  descripcion: "Con su control remoto. Medida aprox.: 5 metros de largo. Al ser flexible pueden ser colocadas en cualquier lugar.",
  precios: {
    "1": 9.95,
 },
  imagen: "Img/Imagen199.jpg",
  stock: 1
},
{
  nombre: "5108CEPILLO DE BAMBU",
  categoria: "Hogar / Cocina",
  descripcion: "Ecológico, biodegradable y libre de plásticos. Cuida tu sonrisa y también el planeta.",
  precios: {
    "1": 3.95,
    "3": 2.25,
    "6": 1.95,
 },
  imagen: "Img/Imagen200.jpeg",
  stock: 11
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
  nombre: "5114DUPE INVICTUS BLACK",
  categoria: "Perfumeria",
  descripcion: "Perfume inspiración Invictus Black – Paco Rabanne. Aroma masculino, intenso y elegante, ideal para destacar en cualquier ocasión. Contenido: 250 ML",
  precios: {
    "1": 13.95,
 },
  imagen: "Img/Imagen204.jpeg",
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
  stock: 12
},
  {
  nombre: "5119LONCHERA TERMICA",
  categoria: "Hogar / Cocina",
  descripcion: "Mantiene tus comidas frescas y a la temperatura ideal por más tiempo. Compacta, ligera y fácil de llevar al trabajo, colegio o picnic. Interior aislante y cremallera segura para conservar mejor tus alimentos.",
  precios: {
    "1": 5.95,
 },
  imagen: "Img/Imagen206.jpeg",
  stock: 1
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
  nombre: "5123BALANZA GRAMERA",
  categoria: "Hogar / Cocina",
  descripcion: "Balanza gramera digital pesa desde 1 gramo hasta 5 kg. Tiene botón de tarar (tare) así solo pesas el contenido del recipiente. Apagado automático. Fácil de usar, guardar y transportar. Funciona con 2 pilas AA (Incluye pilas).",
  precios: {
    "1": 7.95,
 },
  imagen: "Img/Imagen210.jpeg",
  stock: 3
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
  stock: 4
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
  stock: 23
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
  stock: 34
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
    "6": 1.55,
 },
  imagen: "Img/Imagen220.png",
  stock: 12
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
    "6": 3.55,
 },
  imagen: "Img/Imagen224.png",
  stock: 12
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
  nombre: "5158SHAMPOO DE ROMERO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Estimula el crecimiento: Fórmula enriquecida con romero que promueve un cabello más fuerte y voluminoso. Fortalece y nutre: Aporta nutrientes esenciales para revitalizar y mejorar la salud de tu cabello. Reduce la caída: Combate la caída excesiva y mejora la resistencia de tu cabello. Capacidad: 1000ML",
  precios: {
    "1": 12.90,
 },
  imagen: "Img/Imagen229.jpg",
  stock: 1
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
  nombre: "5171JABON CON FRAGANCIA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Sensación de pureza. Cuidado para piel mixta. Fórmula suave con colonia.",
  precios: {
    "1": 3.95,
    "2": 2.25,
 },
  imagen: "Img/Imagen231.jpeg",
  stock: 2
},
 {
  nombre: "5174LUCES ESPACIAL",
  categoria: "Hogar / Cocina",
  descripcion: "Lámpara Proyector Estrellado. Proyección giratoria de luna y estrellas. Recargable por USB. Ideal para decoración y noches relajantes. Perfecta para dormitorio, sala o regalo especial.",
  precios: {
    "1": 5.40,
 },
  imagen: "Img/Imagen232.jpeg",
  stock: 8
},
 {
  nombre: "5179ALFOMBRA ABSORBENTE",
  categoria: "Hogar / Cocina",
  descripcion: "Alfombra absorbente antideslizante. Seca rápido, protege el piso y luce increíble en tu hogar. Medida aprox.: 38 x 58 cm",
  precios: {
   "1": 5.95,
   "3": 4.85,
   "6": 4.55,
 },
  imagen: "Img/Imagen236.jpeg",
  stock: 6
},
 {
  nombre: "5181BASE DE UÑAS DE KERATINA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Fortalece y protege tus uñas mientras les da un acabado natural y saludable. Nutre y repara uñas débiles o quebradizas. Aporta brillo duradero. Con keratina que ayuda al crecimiento y resistencia.",
  precios: {
   "1": 3.55,
   "3": 2.55,
 },
  imagen: "Img/Imagen238.jpeg",
  stock: 5
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
  nombre: "5189ESPALDAR LUMBAR",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Alivia el estrés en la espalda y mejora tu postura. Ideal para coche y oficina, con correa elástica resistente. Ajustable y mantiene la curvatura natural de tu espalda. Soporte lumbar que reduce molestias en espalda y cuello. Material: Malla + alambre de acero.",
  precios: {
   "1": 5.95,
   "3": 4.95,
 },
  imagen: "Img/Imagen240.jpeg",
  stock: 6
},
{
  nombre: "5195CASCADA DE INCIENSO",
  categoria: "Hogar / Cocina",
  descripcion: "Porta incienso tipo cascada de cerámica, ideal para crear un ambiente relajante. Al colocar el cono, el humo desciende en forma de cascada mágica. Medida: 10 × 11 × 3.5 cm – colores surtidos. Perfecto para meditación, yoga o decorar tu espacio con estilo.",
  precios: {
   "1": 7.95,
   "3": 6.95,
 },
  imagen: "Img/Imagen242.jpeg",
  stock: 3
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
  stock: 10
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
  stock: 10
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
  nombre: "5218LUCES LINEALES 100 FOCOS - ÁMBAR",
  categoria: "Navidad / Regalos",
  descripcion: "Ilumina tus espacios con un brillo cálido y elegante. Perfectas para decorar interiores y exteriores. Fáciles de colocar y de bajo consumo energético.",
  precios: {
   "1": 5.95,
   "3": 4.95,
 },
  imagen: "Img/Imagen248.jpeg",
  stock: 9
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
  nombre: "5224RENOVADOR DE MADERA",
  categoria: "Hogar / Cocina",
  descripcion: "Renueva tu mobiliario con nuestro RENOVADOR DE MADERA. ¡Dales nueva vida a tus espacios! Disfrutar de muebles como nuevos por mucho más tiempo. No dejes que el paso del tiempo afecte su belleza.",
  precios: {
   "1": 8.95,
 },
  imagen: "Img/Imagen251.png",
  stock: 1
},
{
  nombre: "5228CREMA EXFOLIANTE DE ALOE VERA - 300 ML",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Suaviza y renueva la piel eliminando células muertas de forma delicada. Gracias al poder del aloe vera, hidrata y calma, dejando una sensación fresca y natural.",
  precios: {
   "1": 6.95,
 },
  imagen: "Img/Imagen252.jpeg",
  stock: 1
},
{
  nombre: "5232LUCES CASCADA 3 METROS",
  categoria: "Navidad / Regalos",
  descripcion: "Crea un ambiente cálido y acogedor en tu hogar. Ideal para decorar fiestas, eventos o habitaciones. Fáciles de instalar, bajo consumo y con efecto mágico.",
  precios: {
   "1": 7.95,
   "3": 6.95,
 },
  imagen: "Img/Imagen254.jpeg",
  stock: 16
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
  stock: 11
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
  stock: 7
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
  stock: 6
},
  {
  nombre: "5238GEL DE ALOE VERA ROSA HIDRATANTE BIOAQUA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "¡Descubre el secreto de una piel radiante y fresca! Enriquecido con aloe vera, brinda hidratación profunda. Ideal para todo tipo de piel, incluso la más sensible.",
  precios: {
   "1": 5.95,
   "3": 4.95,
 },
  imagen: "Img/Imagen258.jpg",
  stock: 22
},
 {
  nombre: "5239LIMPIADOR SCHUBERT",
  categoria: "Hogar / Cocina",
  descripcion: "Renueva, limpia y protege con su fórmula especializada. Elimina suciedad y mugre de manera efectiva sin dañar superficies pintadas. Ideal para sillas, mesas, muebles y también para el carro. ¡Un solo producto para múltiples usos, práctico y de gran rendimiento!",
  precios: {
   "1": 6.95,
   "3": 5.95,
 },
  imagen: "Img/Imagen259.png",
  stock: 4
},
 {
  nombre: "5243PACK DE 10 MASCARILLAS BIOAQUA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Pack de 10 mascarillas BIOAQUA. ¡Cuidado facial al siguiente nivel con Bioaqua! Perfectas para cada tipo de piel. Hidrata, revitaliza y luce un rostro radiante todos los días. ¡Elige tu favorita y conciéntete hoy mismo!",
  precios: {
   "1": 9.95,
 },
  imagen: "Img/Imagen260.jpeg",
  stock: 6
},
  {
  nombre: "5244INDIVIDUALES REDONDOS ROJOS",
  categoria: "Navidad / Regalos",
  descripcion: "Hechos de polipropileno tejido, resistentes y duraderos. Color rojo elegante que protege y decora tu mesa con estilo. Ideales para uso diario o para lucir en ocasiones especiales.",
  precios: {
   "1": 3.95,
   "3": 2.95,
   "6": 2.65,
 },
  imagen: "Img/Imagen261.jpeg",
  stock: 17
},
  {
  nombre: "5246BOLSA DE REGALO NAVIDEÑA – 32 x 26 x 10 CM",
  categoria: "Navidad / Regalos",
  descripcion: "Diseño festivo, resistente y práctico para envolver tus obsequios. Ideal para ropa, juguetes, accesorios u otros presentes navideños. Tamaño perfecto y reutilizable para dar un toque especial a tus regalos.",
  precios: {
   "1": 3.95,
   "3": 2.55,
   "6": 2.25,
   "12": 1.95,
 },
  imagen: "Img/Imagen262.jpeg",
  stock: 18
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
  stock: 16
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
  stock: 29
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
  nombre: "5252ROLLO DE STICKERS PARA CONDIMENTOS",
  categoria: "Hogar / Cocina",
  descripcion: "Transforma tu cocina, despensa u oficina con estas prácticas y elegantes. Ideales para organizar frascos de especias, contenedores de alimentos, cajas de almacenamiento y más. Incluye plumón blanco, contiene 120 stickers aproximadamente.",
  precios: {
   "1": 4.95,
   "3": 3.65,
   "3": 3.35,
 },
  imagen: "Img/Imagen267.jpeg",
  stock: 4
},
 {
  nombre: "5253MINI SELLADOR",
  categoria: "Hogar / Cocina",
  descripcion: "Mini sellador de bolsas recargable. Mantén tus alimentos frescos por más tiempo. Práctico, portátil y fácil de usar en segundos.",
  precios: {
   "1": 6.95,
   "3": 5.95,
 },
  imagen: "Img/Imagen268.png",
  stock: 10
},
 {
  nombre: "5254CARRITOS HW",
  categoria: "Decoración / Fiesta",
  descripcion: "De imitación, presentación: Blíster, para tus sorpresas, día del novio, graduado, cumpleaños, etc.",
  precios: {
   "1": 5.95,
   "3": 4.85,
   "6": 4.55,
 },
  imagen: "Img/Imagen269.jpeg",
  stock: 23
},
 {
  nombre: "5255TAPIZ NAVIDEÑO",
  categoria: "Navidad / Regalos",
  descripcion: "Decora tu hogar con un toque festivo y acogedor. Ideal para pared, sala o fondo de fotos. Medida: 250 x 220 cm",
  precios: {
   "1": 23.95,
 },
  imagen: "Img/Imagen270.png",
  stock: 4
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
  stock: 11
},
 {
  nombre: "5257JUEGO DE EQUILIBRIO FROG BALANCE",
  categoria: "Navidad / Regalos",
  descripcion: "Desafía tu destreza colocando ranitas sin que caigan. Un juego dinámico y educativo para todas las edades. Ideal para compartir momentos de diversión en familia.",
  precios: {
   "1": 6.95,
 },
  imagen: "Img/Imagen272.png",
  stock: 12
},
  {
  nombre: "5264CORTINA ÁMBAR NAVIDEÑA CON DISEÑO",
  categoria: "Navidad / Regalos",
  descripcion: "Figuras de arbolitos con diseños navideños (Santa, reno, muñeco de nieve y más). Luces cálidas que crean un ambiente mágico y festivo. Ideal para decorar ventanas, salas o tu arbolito. Dale un brillo especial a tu Navidad. Medida: 3m x 1.5m",
  precios: {
   "1": 14.95,
 },
  imagen: "Img/Imagen273.jpeg",
  stock: 16
},
   {
  nombre: "5267MOUSE & RAT",
  categoria: "Hogar / Cocina",
  descripcion: "¿Cansado de las ratas y pericotes? Aquí llegó a la solución en el nuevo PEGA RATA ,su fácil y simple manejo te brinda excelentes resultados, dile adiós a los roedores.",
  precios: {
   "1": 3.95,
   "3": 2.15,
   "6": 1.85,
   "12": 1.55,
 },
  imagen: "Img/Imagen275.jpeg",
  stock: 16
},
   {
  nombre: "5268CABLE 4 EN 1",
  categoria: "Electrónica / Gadgets",
  descripcion: "Potencia de 65W. Versátil, resistente y perfecto para el día a día. Ideal para viajes, oficina o uso diario en casa.",
  precios: {
   "1": 4.95,
   "3": 3.95,
 },
  imagen: "Img/Imagen276.png",
  stock: 4
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
  stock: 19
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
  stock: 16
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
  stock: 22
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
  stock: 11
},
 {
  nombre: "5273VELA FLOR MUSICAL DE CUMPLEAÑOS",
  categoria: "Decoración / Fiesta",
  descripcion: "Al encenderla se abre en forma de flor y gira con música. Cada pétalo incluye pequeñas velitas encendidas. Ideal para dar un toque mágico y especial a la celebración.",
  precios: {
   "1": 4.95,
   "3": 3.25,
   "6": 2.95,
  },
  imagen: "Img/Imagen281.png",
  stock: 30
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
  stock: 26
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
   "12": 1.95,
  },
  imagen: "Img/Imagen285.png",
  stock: 18
},
  {
  nombre: "5278PIJAMA DE DOS PIEZAS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Conjunto: camiseta manga corta + short. Cómodo, ligero y perfecto para descansar con estilo.",
  precios: {
   "1": 9.90,
  },
  imagen: "Img/Imagen286.jpeg",
  stock: 3
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
   "6": 3.95,
  },
  imagen: "Img/Imagen289.png",
  stock: 9
},
 {
  nombre: "5285CAJA DE ABEJITAS",
  categoria: "Pirotecnicos",
  descripcion: "Presentación: Caja con 12 unidades. ¡Los clásicos cohetes que nunca faltan! Diversión segura para celebraciones y momentos especiales. Ideal para fiestas, cumpleaños, Año Nuevo y cualquier ocasión festiva.",
  precios: {
   "1": 3.95,
   "3": 2.95,
  },
  imagen: "Img/Imagen290.jpeg",
  stock: 20
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
  stock: 250
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
  stock: 110
},
  {
  nombre: "5288PAVITO REAL – FUEGOS ARTIFICIALES",
  categoria: "Pirotecnicos",
  descripcion: "Disfruta del increíble efecto colorido en forma de pavo real que ilumina la noche. Ideal para celebraciones y momentos especiales.",
  precios: {
   "1": 2.95,
   "3": 1.95,
  },
  imagen: "Img/Imagen293.jpeg",
  stock: 40
},
 {
  nombre: "5289DOCENA DE CHISPITAS MARIPOSA",
  categoria: "Pirotecnicos",
  descripcion: "Destellos brillantes que hacen tus fiestas más mágicas. Perfectas para celebraciones, cumpleaños y momentos especiales.",
  precios: {
   "1": 5.95,
   "3": 4.85,
   "6": 4.55,
  },
  imagen: "Img/Imagen294.jpeg",
  stock: 6
},
  {
  nombre: "5290PARCHE DE CUERO 50 x 130 CM - COLOR NEGRO",
  categoria: "Hogar / Cocina",
  descripcion: "Tamaño amplio para múltiples reparaciones. Ideal para sofás, asientos, carteras y más. Resistente, elegante y fácil de aplicar.",
  precios: {
   "1": 6.95,
   "3": 5.95,
  },
  imagen: "Img/Imagen295.png",
  stock: 7
},
  {
  nombre: "5291BURLETE",
  categoria: "Hogar / Cocina",
  descripcion: "Material: PU + esponja",
  precios: {
   "1": 4.95,
   "3": 3.25,
   "6": 2.95,
   "12": 2.65,
  },
  imagen: "Img/Imagen296.png",
  stock: 25
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
  stock: 13
},
   {
  nombre: "5297PROTECTOR SOLAR BIOAQUA SPF50+",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Fórmula ligera que protege tu piel de los rayos UVA y UVB. Hidratante, no grasoso y de rápida absorción para uso diario. Ideal para rostro y cuerpo, dejando la piel suave y luminosa.",
  precios: {
   "1": 9.95,
  },
  imagen: "Img/Imagen298.png",
  stock: 1
},
  {
  nombre: "5299PACK DE 10 IMPERDIBLES DE PANTALÓN CON PERLAS",
  categoria: "Accesorios",
  descripcion: "Accesorio elegante para ajustar la cintura de tus jeans sin necesidad de coser.  Decorado con perlas y detalles dorados que añaden un toque chic. Práctico, reutilizable y perfecto para realzar tu estilo diario. Medida aprox.: 7 cm",
  precios: {
   "1": 8.95,
  },
  imagen: "Img/Imagen299.png",
  stock: 1
},
  {
  nombre: "5300JABONERA PORTATIL",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Ligera y fácil de transportar, ideal para llevar tu jabón a cualquier lugar. Su tapa unida la hace más resistente y evita derrames. Perfecta para casa, viajes, camping o actividades al aire libre.",
  precios: {
   "1": 2.95,
   "3": 1.95,
  },
  imagen: "Img/Imagen300.jpg",
  stock: 13
},
  {
  nombre: "5303SET DE 2 SUJETADORES IMANTADOS DE CORTINA",
  categoria: "Hogar / Cocina",
  descripcion: "Diseño magnético, fácil de usar.",
  precios: {
   "1": 4.95,
   "3": 3.85,
   "6": 3.55,
  },
  imagen: "Img/Imagen301.jpeg",
  stock: 7
},
   {
  nombre: "PERFUME PARA MUJER CLHG165 - DUPE CAROLINA HERRERA GOOD GIRL",
  categoria: "Perfumeria",
  descripcion: "Dupe de Carolina Herrera Good Girl, elegante y seductor. Fragancia dulce y sofisticada que resalta tu feminidad. Ideal para ocasiones especiales y dejar huella donde vayas.",
  precios: {
   "1": 9.95,
  },
  imagen: "Img/Imagen302.jpeg",
  stock: 1
},
{
  nombre: "5301PERFUME DE MUJER PHG168 - DUPE DE PARIS HILTON",
  categoria: "Perfumeria",
  descripcion: "Dupe de Paris Hilton. Un perfume elegante inspirado en Paris Hilton, con notas dulces y frutales. Ideal para mujeres modernas, radiantes y seguras de sí mismas.",
  precios: {
   "1": 13.95,
  },
  imagen: "Img/Imagen304.jpeg",
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
  stock: 10
},
      {
  nombre: "5306TOALLA DE MANO KAWAII",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Suave, absorbente y con adorables diseños que llenan de ternura tu rutina. Perfecta para baño, rostro o llevar en la mochila — ¡cute y práctica!",
  precios: {
   "1": 3.95,
   "3": 2.25,
   "6": 1.95,
   "12": 1.65,
  },
  imagen: "Img/Imagen306.jpeg",
  stock: 21
},
  {
  nombre: "5307ENCENDEDOR RECARGABLE DE COCINA",
  categoria: "Hogar / Cocina",
  descripcion: "Alimentado por una batería recargable. (Incluye cable USB). No crea una llama, es operado eléctricamente y respetuoso con el medio ambiente. Apto para cocina casera, barbacoa al aire libre, Etc.",
  precios: {
   "1": 8.95,
   "3": 7.95,
  },
  imagen: "Img/Imagen307.png",
  stock: 8
},
  {
  nombre: "5308PAQUETE DE BOLSAS CUBRE PLATOS",
  categoria: "Hogar / Cocina",
  descripcion: "El paquete contiene aprox. 100 bolsas. No tóxico, insípido, ecológico y seguro, por lo que se puede utilizar con seguridad para cubrir alimentos.",
  precios: {
   "1": 3.95,
   "3": 2.55,
   "6": 2.25,
  },
  imagen: "Img/Imagen308.jpeg",
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
  stock: 14
},
     {
  nombre: "5311ORGANIZADOR DE HUEVOS",
  categoria: "Hogar / Cocina",
  descripcion: "Diseño plegable sin montaje, acomoda hasta 24 huevos en capas separadas. Hecho de plástico resistente, ideal para mantener frescura y ahorrar espacio en tu refrigerador.",
  precios: {
   "1": 5.95,
  },
  imagen: "Img/Imagen310.jpeg",
  stock: 5
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
  nombre: "4292TUBO DE 12 CINTAS ESCOLAR 12 mm x 14 yardas",
  categoria: "Escolar / Papelería",
  descripcion: "Set de 12 cintas escolares de colores. Medida perfecta para decorar, forrar cuadernos o manualidades.",
  precios: {
    "1": 4.90,
    "3": 2.60,
    "6": 2.30
  },
  imagen: "Img/Imagen170.jpg",
  stock: 6
}
];
















































































































