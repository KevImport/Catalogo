const productos = [
 {
  nombre: "5053PAÑITOS HÚMEDOS X100",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "¡Limpieza rápida y delicada! Estos pañitos húmedos son suaves, resistentes y perfectos para el día a día. Paquete con 100 unidades.",
  precios: {
    "1": 4.95,
    "3": 3.95,
    "6": 3.75,
  },
  imagen: "Img/Imagen1.jpg",
   stock: 21
},
{
  nombre: "5048FIAMBRERA TÉRMICA",
  categoria: "Hogar / Cocina",
  descripcion: "¡Lleva tu almuerzo siempre caliente! Esta fiambrera térmica conserva el calor y es perfecta para la oficina, colegio o viajes.",
  precios: {
    "1": 8.95,
    "3": 7.95,
  },
  imagen: "Img/Imagen3.jpg",
  stock: 2
},
{
  nombre: "MINI ATOMIZADOR KWAI",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Refresca tu rostro al instante. El mini atomizador Kawaii es recargable y portátil, ideal para llevar a todas partes.",
  precios: {
    "1": 3.95,
    "3": 2.95,
  },
  imagen: "Img/Imagen4.jpg",
  stock: 5
},
{
  nombre: "5042PAPEL TISSUE, 300 HOJAS APROX.",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Suave, absorbente y rendidor. Ideal para el hogar u oficina con 300 hojas de comodidad.",
  precios: {
    "1": 2.95,
    "3": 1.85,
    "6": 1.55,
  },
  imagen: "Img/Imagen6.jpg",
  stock: 6
},
{
  nombre: "5042ROMPE CHORRO",
  categoria: "Hogar / Cocina",
  descripcion: "¡Ahorra agua y evita salpicaduras! Este rompe chorro se adapta fácilmente a cualquier grifo.",
  precios: {
    "1": 3.95,
    "3": 2.15,
    "6": 1.85,
  },
  imagen: "Img/Imagen7.jpg",
  stock: 6
},
{
  nombre: "5030BALDE CANCHERO + VASO TOMATODO \"PITUFOS\"",
  categoria: "Juguetes / Regalos",
  descripcion: "¡Diversión y estilo para los más peques! Incluye balde canchero y vaso tomatodo con diseño de Los Pitufos.",
  precios: {
    "1": 6.95,
  },
  imagen: "Img/Imagen9.jpg",
  stock: 5
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
  stock: 7
},
{
  nombre: "5017CANASTILLA PLEGABLE",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza con estilo. Esta canastilla se pliega fácilmente cuando no la usas, ahorrando espacio y manteniendo todo en orden.",
  precios: {
    "1": 3.95,
  },
  imagen: "Img/Imagen12.jpg",
  stock: 4
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
  stock: 8
},
{
  nombre: "5012COMEDERO + BEBEDERO DE MASCOTA",
  categoria: "Mascotas",
  descripcion: "¡Comodidad para tu engreído! Combo práctico de comedero y bebedero para mantener a tu mascota feliz y bien alimentada.",
  precios: {
    "1": 4.95,
    "3": 3.95,
    "6": 3.65,
  },
  imagen: "Img/Imagen15.jpg",
  stock: 6
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
  nombre: "5000AUDÍFONO P9",
  categoria: "Electrónica / Gadgets",
  descripcion: "Sonido envolvente y diseño moderno. El audífono P9 te ofrece calidad inalámbrica para música, llamadas y más.",
  precios: {
    "1": 12.95,
  },
  imagen: "Img/Imagen18.png",
  stock: 1
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
  stock: 35
},
{
  nombre: "4993ORGANIZADOR DE CALZADO",
  categoria: "Organización / Almacenamiento",
  descripcion: "Ahorra espacio y mantén tus zapatos en orden con este práctico organizador. Ideal para clósets o entradas.",
  precios: {
    "1": 3.95,
    "3": 2.25,
    "5": 1.95,
  },
  imagen: "Img/Imagen21.jpg",
  stock: 5
},
{
  nombre: "4986MOLDE DE SILICONA",
  categoria: "Hogar / Cocina",
  descripcion: "Ideal para repostería creativa. Molde de silicona antiadherente para hacer figuras dulces con estilo.",
  precios: {
    "1": 3.95,
  },
  imagen: "Img/Imagen23.jpg",
  stock: 2
},
{
  nombre: "4982ENCENDEDOR INFINITO",
  categoria: "Hogar / Cocina",
  descripcion: "¡Olvídate de los fósforos! Este encendedor recargable es resistente al viento y funciona sin gas ni combustible.",
  precios: {
    "1": 4.95,
    "2": 3.25,
  },
  imagen: "Img/Imagen24.jpg",
  stock: 2
},
{
  nombre: "4974KIT VIAJERO",
  categoria: "Varios",
  descripcion: "Todo lo que necesitas para tu viaje en un solo kit: cómodo, práctico y compacto. ¡Listo para la aventura!",
  precios: {
    "1": 5.95,
    "3": 4.95,
  },
  imagen: "Img/Imagen26.jpg",
  stock: 5
},
{
  nombre: "4966TAZA GAMER",
  categoria: "Juguetes / Regalos",
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
  nombre: "4970ESTANTE ORGANIZADOR DE MICROONDAS",
  categoria: "Hogar / Cocina",
  descripcion: "Aprovecha cada espacio en tu cocina. Este estante metálico sostiene el microondas y organiza utensilios a la vez.",
  precios: {
    "1": 22.90,
  },
  imagen: "Img/Imagen29.jpg",
  stock: 1
},
{
  nombre: "4962ESTANTE DE COCINA",
  categoria: "Hogar / Cocina",
  descripcion: "Práctico y resistente. Mantén tus condimentos, platos o accesorios organizados y siempre al alcance.",
  precios: {
    "1": 29.90
  },
  imagen: "Img/Imagen30.jpg",
  stock: 1
},
{
  nombre: "4955CHUPA PANZA",
  categoria: "Belleza / Cosmética",
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
  categoria: "Belleza / Cosmética",
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
  nombre: "4925TISSUE 1200 HOJAS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Tissue extra rendidor. Suavidad y resistencia en un solo producto. Ideal para el hogar o la oficina.",
  precios: {
    "1": 6.90,
},
  imagen: "Img/Imagen36.jpg",
  stock: 1
},
{
  nombre: "4899SET DE PLUMÓN DOBLE TRAZO",
  categoria: "Escolar / Papelería",
  descripcion: "¡Doble creatividad! Plumones con punta doble para trazos finos y gruesos. Colores intensos y duraderos.",
  precios: {
    "1": 9.90,
  },
  imagen: "Img/Imagen37.jpg",
  stock: 2
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
  stock: 22 
},
{
  nombre: "4865CONTENEDOR DE CEREALES",
  categoria: "Hogar / Cocina",
  descripcion: "Mantén tus cereales frescos y bien organizados. Práctico, hermético y fácil de usar en cualquier cocina.",
  precios: {
    "1": 4.95,
    "3": 3.95,
  },
  imagen: "Img/Imagen40.jpg",
  stock: 3
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
  stock: 12
},
{
  nombre: "4861PACK DE 12 VINCHAS",
  categoria: "Ropa / Accesorios",
  descripcion: "Colores para cada día. Set de 12 vinchas elásticas, cómodas y perfectas para peinados o uso diario.",
  precios: {
    "1": 8.90,
  },
  imagen: "Img/Imagen42.jpg",
  stock: 2
},
{
  nombre: "4855CHAL",
  categoria: "Ropa / Accesorios",
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
  stock: 5
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
  categoria: "Ropa / Accesorios",
  descripcion: "Muestra tu pasión por tu equipo. Collar con dije deportivo, ideal como regalo o uso diario.",
  precios: {
    "1": 7.95,
    "2": 6.95,
  },
  imagen: "Img/Imagen47.jpg",
  stock: 2
 },
{
  nombre: "4832KIT DE MANICURE",
  categoria: "Belleza / Cosmética",
  descripcion: "Uñas siempre perfectas. Kit completo con herramientas esenciales para tu cuidado personal en casa o de viaje.",
  precios: {
    "1": 5.95,
  },
  imagen: "Img/Imagen49.jpg",
  stock: 5
},
{
  nombre: "4831GUANTES TOUCH",
  categoria: "Ropa / Accesorios",
  descripcion: "¡Tecnología al alcance de tus dedos! Guantes cálidos compatibles con pantallas táctiles. Ideal para invierno.",
  precios: {
    "1": 4.95,
    "3": 3.85,
  },
  imagen: "Img/Imagen50.jpg",
  stock: 3
},
{
  nombre: "4788GORRO AESTHETIC",
  categoria: "Ropa / Accesorios",
  descripcion: "¡Dale estilo a tu outfit! Gorro moderno con diseño aesthetic, ideal para días fríos o looks urbanos.",
  precios: {
    "1": 6.95,
},
  imagen: "Img/Imagen52.jpg",
  stock: 1
},
{
  nombre: "4775BOLSO CORAZÓN",
  categoria: "Ropa / Accesorios",
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
  categoria: "Juguetes / Regalos",
  descripcion: "Explora el mundo desde cerca. Mini telescopio compacto y portátil, ideal para niños curiosos o actividades al aire libre.",
  precios: {
    "1": 24.90,
  },
  imagen: "Img/Imagen55.jpg",
  stock: 3
  },
{
  nombre: "4675COLLAR PURE LOVE",
  categoria: "Ropa / Accesorios",
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
  nombre: "4638TAPA SOL CON LICENCIA",
  categoria: "Ropa / Accesorios",
  descripcion: "Protección con estilo. Tapa sol con diseño licenciado para niños, ideal para salidas al aire libre.",
  precios: {
    "1": 6.95,
    "3": 5.95,
  },
  imagen: "Img/Imagen57.jpg",
  stock: 4
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
  nombre: "4622SET DE 5 FUNDAS PARA CEPILLO DE DIENTES",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Protege tus cepillos con estilo. Set de 5 fundas plásticas, ideales para viajes o mantener la higiene en casa.",
  precios: {
    "1": 3.95,
    "3": 2.25,
    "6": 1.95,
    "12": 1.65,
  },
  imagen: "Img/Imagen59.jpg",
  stock: 15
},
{
  nombre: "4576MOLDE PARA GOMITAS",
  categoria: "Hogar / Cocina",
  descripcion: "Haz tus propias gomitas en casa. Molde de silicona reutilizable con figuras divertidas y fácil de desmoldar.",
  precios: {
    "1": 3.95,
    "2": 2.95, 
  },
  imagen: "Img/Imagen61.jpg",
  stock: 2
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
  nombre: "4452FOCO FIESTA",
  categoria: "Decoración / Fiesta",
  descripcion: "Ilumina la diversión. Foco multicolor que proyecta luces giratorias para ambientar cualquier celebración.",
  precios: {
    "1": 4.95,
    "2": 3.95,
  },
  imagen: "Img/Imagen63.jpg",
  stock: 2
},
{
  nombre: "4445JABONERA DE LUJO",
  categoria: "Hogar / Cocina",
  descripcion: "Un toque elegante en tu baño. Jabonera resistente con diseño moderno, ideal para el hogar u oficina.",
  precios: {
    "1": 4.90,
    "3": 3.50,
    "6": 3.20,
  },
  imagen: "Img/Imagen64.jpg",
  stock: 6
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
  nombre: "4338SET DE 8 PLATOS OSITO + BASE",
  categoria: "Hogar / Cocina",
  descripcion: "Comidas divertidas para los peques. Set de platos con forma de osito y base antideslizante, ideal para niños.",
  precios: {
    "1": 9.00,
},
  imagen: "Img/Imagen69.jpg",
  stock: 1
},
{
  nombre: "4330BLÍSTER DE 12 PARES DE ARETES",
  categoria: "Ropa / Accesorios",
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
  nombre: "4195JUGUETE RESORTE RAINBOW",
  categoria: "Juguetes / Regalos",
  descripcion: "¡Diversión sin fin! Juguete resorte con colores arcoíris, ideal para jugar en escaleras o mesas.",
  precios: {
    "1": 2.90,
    "5": 1.80,
    "10": 1.50,
  },
  imagen: "Img/Imagen72.jpg",
  stock: 10
},
{
  nombre: "4183LENTES DE SOL 2025",
  categoria: "Ropa / Accesorios",
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
  categoria: "Decoración / Fiesta",
  descripcion: "Decora con espíritu navideño. Forro para silla con diseños festivos, ideal para cenas y reuniones familiares.",
  precios: {
    "3": 5.50,
  },
  imagen: "Img/Imagen75.jpg",
  stock: 12
},
{
  nombre: "4158PACK MASITAS CISNE",
  categoria: "Juguetes / Regalos",
  descripcion: "Diversión creativa para niños. Masitas moldeables con temática de cisne, perfectas para jugar y modelar.",
  precios: {
    "1": 5.90,
  },
  imagen: "Img/Imagen76.jpg",
  stock: 1
},
{
  nombre: "4154JUEGO TWISTER",
  categoria: "Juguetes / Regalos",
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
  nombre: "4097ESCUDO Y ESPADA",
  categoria: "Juguetes / Regalos",
  descripcion: "¡A la aventura! Set de escudo y espada de juguete para juegos de rol y horas de entretenimiento.",
  precios: {
    "1": 9.90,
  },
  imagen: "Img/Imagen79.jpg",
  stock: 4
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
  categoria: "Decoración / Fiesta",
  descripcion: "Ilumina la Navidad. Set de velas con diseños festivos para decorar mesas, repisas o centros de mesa.",
  precios: {
    "1": 13.90,
  },
  imagen: "Img/Imagen82.jpg",
  stock: 1
},
{
  nombre: "4041VELA LED NAVIDEÑA",
  categoria: "Decoración / Fiesta",
  descripcion: "Vela LED con diseño navideño que ilumina y decora sin riesgo. Ideal para crear ambientes cálidos y festivos.",
  precios: {
    "1": 4.00,
    "3": 2.90,
  },
  imagen: "Img/Imagen83.jpg",
  stock: 12
},
{
  nombre: "3930SET DE 6 INDIVIDUALES + 6 POSAVASOS NAVIDEÑOS",
  categoria: "Decoración / Fiesta",
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
  categoria: "Ropa / Accesorios",
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
  categoria: "Ropa / Accesorios",
  descripcion: "Collar moderno con diseño de Saturno, perfecto para destacar tu look con un toque único y astral.",
  precios: {
    "1": 7.90,
  },
  imagen: "Img/Imagen93.jpg",
  stock: 4
},
{
  nombre: "3159JUEGO DE 2 COLLARES – CORAZÓN MAGNÉTICO",
  categoria: "Ropa / Accesorios",
  descripcion: "Collares magnéticos para compartir con alguien especial. Al juntarse forman un corazón, ideal para parejas o amistades.",
  precios: {
    "1": 4.90,
    "3": 3.50,
    "6": 3.20,
    "12": 2.90,
  },
  imagen: "Img/Imagen94.jpg",
  stock: 34
},
{
  nombre: "3054AVE DE EQUILIBRIO",
  categoria: "Juguetes / Regalos",
  descripcion: "Curiosa figura de ave que se equilibra mágicamente en una superficie. Sorprende a grandes y chicos.",
  precios: {
    "1": 1.00,
  },
  imagen: "Img/Imagen95.jpg",
  stock: 48
},
{
  nombre: "3053JUGUETE BALANCE",
  categoria: "Juguetes / Regalos",
  descripcion: "Divertido juguete educativo que ayuda a desarrollar la coordinación y el equilibrio en los más pequeños.",
  precios: {
    "1": 10.90,
  },
  imagen: "Img/Imagen96.jpg",
  stock: 5
},
{
  nombre: "3038SHORT LEVANTA POMPIS",
  categoria: "Ropa / Accesorios",
  descripcion: "Short moldeador que realza tu figura. Comodidad y soporte con efecto push-up para tu día a día.",
  precios: {
    "1": 8.90,
  },
  imagen: "Img/Imagen97.jpg",
  stock: 3
},
{
  nombre: "3025MUÑECOS EN ACCIÓN",
  categoria: "Juguetes / Regalos",
  descripcion: "Figuras articuladas llenas de aventura. Ideales para juegos creativos y coleccionistas.",
  precios: {
    "1": 10.90,
  },
  imagen: "Img/Imagen98.jpg",
  stock: 1
},
{
  nombre: "2968CAJA NAVIDEÑA",
  categoria: "Decoración / Fiesta",
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
  categoria: "Ropa / Accesorios",
  descripcion: "Completo set de accesorios para peinar y decorar tu cabello. Práctico, variado y con mucho estilo.",
  precios: {
    "2": 4.50,
  },
  imagen: "Img/Imagen101.jpg",
  stock: 2
},
{
  nombre: "2819SET DE 6 VASOS NAVIDEÑOS",
  categoria: "Decoración / Fiesta",
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
  stock: 24
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
  categoria: "Juguetes / Regalos",
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
  categoria: "Ropa / Accesorios",
  descripcion: "Ganchitos coloridos y prácticos para sujetar el cabello o decorar peinados. Útiles y decorativos.",
  precios: {
    "2": 3.90,
  },
  imagen: "Img/Imagen107.jpg",
  stock: 2
},
{
  nombre: "2717LIGA DE CIERRE",
  categoria: "Ropa / Accesorios",
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
  stock: 3
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
  nombre: "2410CUCHARÓN ARDILLA",
  categoria: "Hogar / Cocina",
  descripcion: "Divertido cucharón con forma de ardilla. Ideal para servir sopas o guisos y alegrar tus momentos en la cocina.",
  precios: {
    "1": 1.90,
    "3": 0.90,
  },
  imagen: "Img/Imagen121.png",
  stock: 6
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
  categoria: "Belleza / Cosmética",
  descripcion: "Jabón con extracto de arroz que limpia profundamente y ayuda a iluminar la piel. Ideal para el uso diario.",
  precios: {
    "1": 4.95,
    "3": 3.25,
    "6": 2.95,
  },
  imagen: "Img/Imagen126.jpg",
  stock: 17
},
{
  nombre: "5016COLET ESPIRAL CORAZÓN",
  categoria: "Ropa / Accesorios",
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
  categoria: "Ropa / Accesorios",
  descripcion: "Elástico resistente de gran tamaño, ideal para recoger cabello abundante con firmeza y comodidad.",
  precios: {
    "1": 2.95,
    "6": 1.85, 
  },
  imagen: "Img/Imagen128.jpg",
  stock: 9
},
{
  nombre: "4979MASCARILLA CON COLÁGENO FLOWER SECRET",
  categoria: "Belleza / Cosmética",
  descripcion: "Mascarilla facial enriquecida con colágeno para hidratar y rejuvenecer la piel. Ideal para una rutina de belleza efectiva.",
  precios: {
    "1": 9.95,
    "3": 8.95,
  },
  imagen: "Img/Imagen130.jpg",
  stock: 6
},
{
  nombre: "4859SET DE CUIDADO FACIAL",
  categoria: "Belleza / Cosmética",
  descripcion: "Completo set para el cuidado facial diario. Limpia, hidrata y nutre tu piel para mantenerla radiante y saludable.",
  precios: {
    "1": 7.95, 
  },
  imagen: "Img/Imagen132.jpg",
  stock: 2
},
{
  nombre: "4927BOLSA DOY PACK DE 200 PAÑITOS HÚMEDOS PETETIN",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Bolsa resellable con 200 pañitos húmedos de alta calidad. Ideal para el hogar o llevar en viajes largos.",
  precios: {
    "1": 8.95,
    "6": 7.95,
  },
  imagen: "Img/Imagen133.jpg",
  stock: 3
},
{
  nombre: "4924STICKERS PARA UÑAS",
  categoria: "Belleza / Cosmética",
  descripcion: "Diseños creativos en stickers para uñas, fáciles de aplicar y perfectos para lograr un look profesional en casa.",
  precios: {
    "1": 3.95,
    "6": 2.95, 
  },
  imagen: "Img/Imagen134.jpg",
  stock: 3
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
  categoria: "Belleza / Cosmética",
  descripcion: "Pack de 3 perfiladores para cejas y vello facial. Precisión y suavidad para un acabado profesional.",
  precios: {
    "1": 3.90,
    "6": 2.15,
    "12": 1.85,
  },
  imagen: "Img/Imagen136.jpg",
  stock: 20
},
{
  nombre: "4890MASAJEADOR CORPORAL",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Masajeador manual para relajar músculos y mejorar la circulación. Ideal para aliviar el estrés diario.",
  precios: {
    "1": 26.90,
  },
  imagen: "Img/Imagen137.jpg",
  stock: 2
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
  stock: 4
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
  stock: 7
},
{
  nombre: "4760SUERO DE PESTAÑAS",
  categoria: "Belleza / Cosmética",
  descripcion: "Suero nutritivo que fortalece y estimula el crecimiento de tus pestañas, dándoles volumen y longitud natural.",
  precios: {
    "1": 6.95,
    "3": 5.95,
  },
  imagen: "Img/Imagen140.jpg",
  stock: 9
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
  nombre: "4806GLOSS BRILLO + LLAVERO",
  categoria: "Belleza / Cosmética",
  descripcion: "Brillo labial con efecto hidratante acompañado de un llavero decorativo. Ideal para llevar estilo en tu bolso.",
  precios: {
    "1": 4.95,
    "3": 3.75,
    "6": 3.45,
    "12": 3.15,
  },
  imagen: "Img/Imagen143.jpg",
  stock: 12
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
    "3": 2.95,
  },
  imagen: "Img/Imagen145.jpg",
  stock: 5
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
  nombre: "4492RUBOR LÍQUIDO KEVIN & COCO",
  categoria: "Belleza / Cosmética",
  descripcion: "Rubor líquido de textura ligera que se difumina fácilmente en la piel para un acabado natural y radiante.",
  precios: {
    "1": 4.90,
    "2": 3.50,
  },
  imagen: "Img/Imagen149.jpg",
  stock: 2
},
{
  nombre: "4491PESTAÑAS POSTIZAS 6D",
  categoria: "Belleza / Cosmética",
  descripcion: "Pestañas de efecto 6D para una mirada impactante. Mayor volumen y curvatura para destacar tu belleza.",
  precios: {
    "1": 4.90,
    "3": 3.20,
  },
  imagen: "Img/Imagen150.jpg",
  stock: 5
},
{
  nombre: "4680CACHETERO CAPIBARA PARA NIÑA",
  categoria: "Ropa / Accesorios",
  descripcion: "Ropa interior infantil con diseño de capibara. Suave, cómoda y con estilo divertido para las más pequeñas.",
  precios: {
    "3": 3.95,
  },
  imagen: "Img/Imagen152.jpg",
  stock: 6
},
{
  nombre: "4711BOXER DAMA CK",
  categoria: "Ropa / Accesorios",
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
  categoria: "Juguetes / Regalos",
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
  nombre: "5026CINTA DE EMBALAJE DE 60 YARDAS",
  categoria: "Organización / Almacenamiento",
  descripcion: "Cinta resistente de 60 yardas ideal para embalar, sellar y proteger cajas y paquetes de manera segura.",
  precios: {
    "1": 3.95,
    "6": 1.85,
  },
  imagen: "Img/Imagen157.jpg",
  stock: 6
},
{
  nombre: "5025CINTA DE EMBALAJE DE 200 YARDAS",
  categoria: "Organización / Almacenamiento",
  descripcion: "Cinta de embalaje extra larga para trabajos exigentes. Alta adherencia para asegurar tus envíos o almacenamiento.",
  precios: {
    "1": 2.95,
    "6": 1.95,
    "12": 1.65,
  },
  imagen: "Img/Imagen158.jpg",
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
  stock: 6
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
    "3": 1.95,
  },
  imagen: "Img/Imagen162.jpg",
  stock: 3
},
{
  nombre: "4454ROLLO CONTACT 1.5m",
  categoria: "Organización / Almacenamiento",
  descripcion: "Rollo adhesivo decorativo de 1.5 metros para proteger, forrar o personalizar superficies. Fácil de cortar y aplicar.",
  precios: {
    "1": 3.90,
    "3": 2.90,
  },
  imagen: "Img/Imagen163.jpg",
  stock: 4
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
  categoria: "Belleza / Cosmética",
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
  stock: 6
},
{
  nombre: "5059PROTECTOR DE SOFA",
  categoria: "Hogar / Cocina",
  descripcion: "Comodidad y estilo en uno. Cuida tu sofá del polvo, manchas y pelitos con este protector práctico y elegante.  Se adapta fácilmente, es lavable y perfecto para hogares con niños o mascotas. ¡Renueva tu sala sin cambiar de mueble!. De material: poliester, medida aprox.: 1.7 x 2.35 m.",
  precios: {
    "1": 19.90
  },
  imagen: "Img/Imagen174.jpeg",
  stock: 7
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
  stock: 10
},
{
  nombre: "5062TRUSA CACHETERO",
  categoria: "Ropa / Accesorios",
  descripcion: "Material: algodón. Suave y cómodo. Tallas disponibles: 1S y 3L",
  precios: {
    "1": 4.95,
    "3": 3.95
  },
  imagen: "Img/Imagen176.jpeg",
  stock: 4
},
{
  nombre: "4660CALZONCILLO CLÁSICO",
  categoria: "Ropa / Accesorios",
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
  categoria: "Ropa / Accesorios",
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
  nombre: "5070ACEITE DE ARGAN 60ML",
  categoria: "Belleza / Cosmética",
  descripcion: "Nutre, suaviza y repara puntas abiertas. Aporta brillo y controla el frizz. Rico en vitamina E y ácidos grasos. Práctico tamaño para llevar a donde quieras.",
  precios: {
    "1": 9.95
 },
  imagen: "Img/Imagen181.jpeg",
  stock: 6
},
{
  nombre: "5071CREMA FACIAL ANTIARRUGAS CON VITAMINA C",
  categoria: "Belleza / Cosmética",
  descripcion: "Hidrata y mejora la elasticidad de la piel. Ayuda a reducir líneas de expresión. Ilumina y unifica el tono del rostro. Ideal para uso diario y todo tipo de piel.",
  precios: {
    "1": 9.95
 },
  imagen: "Img/Imagen182.jpeg",
  stock: 5
},
{
  nombre: "5073CREMA + SPLASH + PERFUME PARA MUJER",
  categoria: "Belleza / Cosmética",
  descripcion: "Un trío encantador que dejará tu piel suave, radiante y deliciosamente perfumada. Presentación femenina y elegante. Ideal para regalar o darte un capricho.",
  precios: {
    "1": 13.90
 },
  imagen: "Img/Imagen183.png",
  stock: 3
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
  categoria: "Belleza / Cosmética",
  descripcion: "DUPE: Scandal Aroma seductor y femenino con un toque atrevido. Diseño único con piernas en tacones ¡pura actitud!. Ideal para destacar donde vayas. Contenido: 250ml.",
  precios: {
    "1": 13.95
 },
  imagen: "Img/Imagen186.jpeg",
  stock: 7
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
  stock: 17
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
  stock: 43
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
    "3": 2.85,
    "6": 2.55,
 },
  imagen: "Img/Imagen190.jpeg",
  stock: 10
},
{
  nombre: "5087BOLSO EXPANDIBLE CON ESTAMPADO",
  categoria: "Belleza / Cosmética",
  descripcion: "¡Bolso expandible con estilo! Con práctico diseño y estampado moderno, ideal para viajes, compras o el día a día. ¡Llévalo cómodo y con mucho espacio extra!",
  precios: {
    "1": 13.95,
 },
  imagen: "Img/Imagen191.png",
  stock: 11
},
 {
  nombre: "5089TORTA BURBUJAS",
  categoria: "Decoración / Fiesta",
  descripcion: "¡Diversión en forma de pastel! Esta máquina de burbujas con forma de torta lanza burbujas. Con luces y diseño seguro para peques. Funciona con pilas 2A. Ideal para fiestas, juegos y momentos mágicos.",
  precios: {
    "1": 18.95,
 },
  imagen: "Img/Imagen192.jpg",
  stock: 3
},
{
  nombre: "5090BOLSA DE 50 GANCHOS TREBOL",
  categoria: "Organización / Almacenamiento",
  descripcion: "Olvídate de clavos ya es hora de renovarse. Estos ganchos son la mejor alternativa. Buena resistencia. Gancho multiusos para baño, cocina, oficina, dormitorio, etc. Color transparente modelo trébol.",
  precios: {
    "1": 9.90,
 },
  imagen: "Img/Imagen193.png",
  stock: 11
},
{
  nombre: "5091SACA CORCHOS ELECTRICO",
  categoria: "Hogar / Cocina",
  descripcion: "Sacacorchos eléctrico. Abre tus botellas fácil y rápido, sin esfuerzo. Ideal para vino tinto, blanco o espumante.",
  precios: {
    "1": 18.90,
 },
  imagen: "Img/Imagen194.jpeg",
  stock: 4
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
  nombre: "5100PAQUETE DE PAPEL FREIDORA",
  categoria: "Hogar / Cocina",
  descripcion: "Contiene aprox. 50 bandejas de papel. Papel antiadherente. Resistente a altas temperaturas. A prueba de aceite. Multiusos: para freidora de aire, horno, microondas, cocina, etc.",
  precios: {
    "1": 3.95,
    "3": 2.95,
 },
  imagen: "Img/Imagen196.jpeg",
  stock: 6
},
{
  nombre: "5103TOMATODO TELEFONO",
  categoria: "Hogar / Cocina",
  descripcion: "Diseño kawaii con correa para llevar a todos lados. Ideal para jugos, agua o tus bebidas favoritas en cualquier momento.",
  precios: {
    "1": 6.95,
 },
  imagen: "Img/Imagen197.jpeg",
  stock: 5
},
{
  nombre: "5104FLORERO CON FLORES ARTIFICIALES",
  categoria: "Hogar / Cocina",
  descripcion: "Arreglo floral colorido y elegante, ideal para decorar tu hogar u oficina. Sin mantenimiento y siempre hermoso.",
  precios: {
    "1": 6.95,
 },
  imagen: "Img/Imagen198.jpeg",
  stock: 8
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
  stock: 17
},
{
  nombre: "5110BOLSA DE 25 GANCHOS PERNO",
  categoria: "Hogar / Cocina",
  descripcion: "Fáciles de colocar, sin taladros ni daños en la pared. Ideales para colgar cuadros, marcos o decoraciones. Adhesión fuerte y reutilizables.",
  precios: {
    "1": 7.95,
 },
  imagen: "Img/Imagen201.jpeg",
  stock: 4
},
{
  nombre: "5111RODILLO QUITAPELUSAS",
  categoria: "Hogar / Cocina",
  descripcion: "Rodillo quitapelusas reutilizable que atrapa pelos, pelusas y polvo en segundos. Ideal para ropa, sofás y mantas, fácil de limpiar y siempre listo para usar.",
  precios: {
    "1": 5.95,
 },
  imagen: "Img/Imagen202.jpeg",
  stock: 1
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

















