// Ürün taglerinin tanımları
const TAGS = {
    TASTE: {
        SWEET: 'tatlı',
        SOUR: 'ekşi',
        BITTER: 'acı',
        SPICY: 'baharatlı',
        SALTY: 'tuzlu',
        UMAMI: 'umami'
    },
    TEMPERATURE: {
        HOT: 'sıcak',
        COLD: 'soğuk',
        ROOM: 'oda sıcaklığı'
    },
    DIETARY: {
        VEGETARIAN: 'vejetaryen',
        VEGAN: 'vegan',
        GLUTEN_FREE: 'glutensiz',
        DAIRY_FREE: 'süt ürünsüz'
    },
    TIME: {
        BREAKFAST: 'kahvaltı',
        LUNCH: 'öğle yemeği',
        DINNER: 'akşam yemeği',
        SNACK: 'atıştırmalık'
    },
    MOOD: {
        ENERGETIC: 'enerjik',
        RELAXING: 'rahatlatıcı',
        REFRESHING: 'ferahlatıcı',
        COMFORT: 'konfor'
    },
    ALCOHOL_LEVEL: {
        NONE: 'alkolsüz',
        LIGHT: 'hafif alkollü',
        MEDIUM: 'orta alkollü',
        HIGH: 'yüksek alkollü'
    }
};

// Menü verileri
const menuData = {
    drinks: {
        cocktails: [
            { id: 'c1', name: 'Mojito', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400', description: 'Klasik Küba kokteyli: Taze nane yaprakları, lime dilimi, beyaz rom, soda ve şeker şurubu ile hazırlanır. Ferahlatıcı ve serinletici.', price: '120 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TASTE.SOUR, TAGS.TEMPERATURE.COLD, TAGS.MOOD.REFRESHING, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 100 },
            { id: 'c2', name: 'Piña Colada', image: 'https://images.unsplash.com/photo-1607446045710-d5a8fd0bc8db?w=400', description: 'Tropik lezzet: Ananas suyu, hindistan cevizi kreması, beyaz rom ve buz ile hazırlanan kremsi kokteyl.', price: '130 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.COLD, TAGS.MOOD.RELAXING, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 80 },
            { id: 'c3', name: 'Mai Tai', image: 'https://images.unsplash.com/photo-1563223771-375783ee91ad?w=400', description: 'Polinezya klasiği: Koyu ve açık rom, portakal likörü, badem şurubu ve lime suyu karışımı.', price: '140 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TASTE.SOUR, TAGS.TEMPERATURE.COLD, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.HIGH], stock: 60 },
            { id: 'c4', name: 'Margarita', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400', description: 'Meksika esintisi: Tekila, triple sec, taze lime suyu ve tuz ile servis edilir.', price: '125 ₺', tags: [TAGS.TASTE.SOUR, TAGS.TASTE.SALTY, TAGS.TEMPERATURE.COLD, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 90 },
            { id: 'c5', name: 'Sex on the Beach', image: 'https://images.unsplash.com/photo-1606928662944-3602c0ff4c48?w=400', description: 'Votka, şeftali likörü, portakal suyu ve kızılcık suyu karışımı. Yaz akşamları için ideal.', price: '135 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.COLD, TAGS.MOOD.RELAXING, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 75 },
            { id: 'c6', name: 'Blue Lagoon', image: 'https://images.unsplash.com/photo-1560963689-b5682b6440f8?w=400', description: 'Votka, blue curacao ve limonata ile hazırlanan mavi renkli kokteyl.', price: '130 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.COLD, TAGS.MOOD.REFRESHING, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 70 },
            { id: 'c7', name: 'Cosmopolitan', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400', description: 'Votka, triple sec, lime suyu ve kızılcık suyu ile hazırlanan şık kokteyl.', price: '140 ₺', tags: [TAGS.TASTE.SOUR, TAGS.TEMPERATURE.COLD, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 85 },
            { id: 'c8', name: 'Tequila Sunrise', image: 'https://images.unsplash.com/photo-1559842438-2942c907c8fe?w=400', description: 'Tekila, portakal suyu ve nar şurubu ile hazırlanan gün batımı renkli kokteyl.', price: '125 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.COLD, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 95 }
        ],
        beers: [
            { id: 'b1', name: 'Corona Extra', image: 'https://images.unsplash.com/photo-1613766748834-4b06c29c7fae?w=400', description: 'Meksika\'nın dünyaca ünlü birası. Misket limonu ile servis edilir. Hafif ve ferahlatıcı lezzet.', price: '90 ₺', tags: [TAGS.TASTE.BITTER, TAGS.TEMPERATURE.COLD, TAGS.MOOD.REFRESHING, TAGS.ALCOHOL_LEVEL.LIGHT], stock: 120 },
            { id: 'b2', name: 'Heineken', image: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?w=400', description: 'Hollanda\'nın premium birası. Dengeli aroması ve karakteristik tadıyla dünya standardında kalite.', price: '85 ₺', tags: [TAGS.TASTE.BITTER, TAGS.TEMPERATURE.COLD, TAGS.MOOD.REFRESHING, TAGS.ALCOHOL_LEVEL.LIGHT], stock: 150 },
            { id: 'b3', name: 'Bomonti Filtresiz', image: 'https://images.unsplash.com/photo-1571767454098-246b94fbcf70?w=400', description: 'Türkiye\'nin filtresiz birası. Yoğun ve karakteristik tadı ile bira tutkunlarının tercihi.', price: '80 ₺', tags: [TAGS.TASTE.BITTER, TAGS.TEMPERATURE.COLD, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 100 }
        ],
        wines: [
            { id: 'w1', name: 'Kavaklıdere Yakut', image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=400', description: 'Türkiye\'nin klasik kırmızı şarabı. Orta gövdeli, yumuşak tanenli ve meyvemsi aromalar.', price: '180 ₺', tags: [TAGS.TASTE.BITTER, TAGS.TEMPERATURE.ROOM, TAGS.MOOD.RELAXING, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 50 },
            { id: 'w2', name: 'Prosecco', image: 'https://images.unsplash.com/photo-1594044126493-d40daa46b72e?w=400', description: 'İtalyan köpüklü şarabı. Hafif, ferahlatıcı ve meyvemsi notalar içerir.', price: '220 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.COLD, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 40 },
            { id: 'w3', name: 'Chardonnay', image: 'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=400', description: 'Beyaz üzümden yapılan dünyaca ünlü şarap. Meyvemsi ve yağlı dokusu ile dikkat çeker.', price: '200 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.COLD, TAGS.MOOD.RELAXING, TAGS.ALCOHOL_LEVEL.MEDIUM], stock: 45 }
        ],
        spirits: [
            { id: 's1', name: 'Grey Goose Vodka', image: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?w=400', description: 'Fransız premium votkası. Yumuşak içimi ve saf tadı ile dikkat çeker.', price: '280 ₺', tags: [TAGS.TASTE.BITTER, TAGS.TEMPERATURE.ROOM, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.HIGH], stock: 30 },
            { id: 's2', name: 'Hendrick\'s Gin', image: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?w=400', description: 'İskoç premium cini. Salatalık ve gül yaprakları ile zenginleştirilmiş özel tarif.', price: '290 ₺', tags: [TAGS.TASTE.BITTER, TAGS.TEMPERATURE.ROOM, TAGS.MOOD.RELAXING, TAGS.ALCOHOL_LEVEL.HIGH], stock: 25 },
            { id: 's3', name: 'Jack Daniel\'s', image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400', description: 'Tennessee viskisi. Karakteristik aroması ve yumuşak içimi ile klasikleşmiş.', price: '260 ₺', tags: [TAGS.TASTE.BITTER, TAGS.TEMPERATURE.ROOM, TAGS.MOOD.RELAXING, TAGS.ALCOHOL_LEVEL.HIGH], stock: 35 },
            { id: 's4', name: 'Patron Silver', image: 'https://images.unsplash.com/photo-1609344093472-5d3681e69af3?w=400', description: 'Premium tekila. Pürüzsüz içimi ve agave karakteri ile öne çıkar.', price: '320 ₺', tags: [TAGS.TASTE.BITTER, TAGS.TEMPERATURE.ROOM, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.HIGH], stock: 20 },
            { id: 's5', name: 'Havana Club 7', image: 'https://images.unsplash.com/photo-1594373606301-5b6ec0ee14c1?w=400', description: '7 yıllık Küba romu. Karamel ve vanilya notaları ile zengin bir tat.', price: '270 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.ROOM, TAGS.MOOD.RELAXING, TAGS.ALCOHOL_LEVEL.HIGH], stock: 28 }
        ],
        nonalcoholic: [
            { id: 'n1', name: 'Virgin Mojito', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400', description: 'Alkolsüz mojito. Nane, lime ve soda ile hazırlanan ferahlatıcı içecek.', price: '55 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TASTE.SOUR, TAGS.TEMPERATURE.COLD, TAGS.MOOD.REFRESHING, TAGS.ALCOHOL_LEVEL.NONE, TAGS.DIETARY.VEGAN], stock: 150 },
            { id: 'n2', name: 'Tropical Smoothie', image: 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=400', description: 'Mango, ananas ve hindistan cevizi sütü ile hazırlanan tropik smoothie.', price: '60 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.COLD, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.NONE, TAGS.DIETARY.VEGAN], stock: 80 },
            { id: 'n3', name: 'Fresh Orange Juice', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400', description: 'Taze sıkılmış portakal suyu. C vitamini deposu ve enerji verici.', price: '45 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TASTE.SOUR, TAGS.TEMPERATURE.COLD, TAGS.MOOD.ENERGETIC, TAGS.ALCOHOL_LEVEL.NONE, TAGS.DIETARY.VEGAN], stock: 100 }
        ]
    },
    foods: {
        starters: [
            { id: 'st1', name: 'Bruschetta', image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400', description: 'Kızarmış ekşi maya ekmeği üzerinde domates, fesleğen, sarımsak ve zeytinyağı.', price: '85 ₺', tags: [TAGS.TASTE.SALTY, TAGS.TEMPERATURE.ROOM, TAGS.DIETARY.VEGETARIAN, TAGS.TIME.SNACK, TAGS.MOOD.COMFORT], stock: 50 },
            { id: 'st2', name: 'Nachos', image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400', description: 'Mısır cipsi üzerine eritilmiş peynir, guacamole, ekşi krema ve jalapeno.', price: '95 ₺', tags: [TAGS.TASTE.SALTY, TAGS.TASTE.SPICY, TAGS.TEMPERATURE.HOT, TAGS.TIME.SNACK, TAGS.MOOD.COMFORT], stock: 60 },
            { id: 'st3', name: 'Kalamar', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400', description: 'Çıtır kalamar, aioli sos ve limon ile servis edilir.', price: '110 ₺', tags: [TAGS.TASTE.SALTY, TAGS.TEMPERATURE.HOT, TAGS.TIME.SNACK, TAGS.MOOD.COMFORT], stock: 40 }
        ],
        pizzas: [
            { id: 'p1', name: 'Margherita', image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400', description: 'Domates sos, mozzarella, fesleğen ve zeytinyağı ile klasik İtalyan pizzası.', price: '120 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.DIETARY.VEGETARIAN, TAGS.TIME.DINNER, TAGS.MOOD.COMFORT], stock: 70 },
            { id: 'p2', name: 'Pepperoni', image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400', description: 'Domates sos, mozzarella ve pepperoni dilimleri.', price: '135 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TASTE.SPICY, TAGS.TEMPERATURE.HOT, TAGS.TIME.DINNER, TAGS.MOOD.COMFORT], stock: 65 }
        ],
        burgers: [
            { id: 'bg1', name: 'Classic Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', description: '200gr dana eti, cheddar peyniri, marul, domates, turşu ve özel sos.', price: '140 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.LUNCH, TAGS.MOOD.COMFORT], stock: 80 },
            { id: 'bg2', name: 'Beach Burger', image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400', description: 'Dana eti, karamelize soğan, mantarlı sos, rokfor peyniri ve trüf yağı.', price: '160 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.LUNCH, TAGS.MOOD.COMFORT], stock: 55 }
        ],
        wraps: [
            { id: 'w1', name: 'Falafel Wrap', image: 'https://images.unsplash.com/photo-1634462756238-9155d0ae9d42?w=400', description: 'Nohut köftesi, humus, közlenmiş biber, marul ve tahin sos.', price: '95 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.DIETARY.VEGAN, TAGS.TIME.LUNCH, TAGS.MOOD.COMFORT], stock: 75 },
            { id: 'w2', name: 'Tavuk Wrap', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400', description: 'Izgara tavuk, avokado, marul ve ranch sos.', price: '105 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.LUNCH, TAGS.MOOD.COMFORT], stock: 80 },
            { id: 'w3', name: 'Ton Balıklı Wrap', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400', description: 'Ton balığı, mısır, kırmızı soğan ve mayonez.', price: '100 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.LUNCH, TAGS.MOOD.COMFORT], stock: 70 }
        ],
        pastas: [
            { id: 'ps1', name: 'Linguine Frutti di Mare', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400', description: 'Deniz mahsulleri ile hazırlanan özel linguine makarna.', price: '160 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.DINNER, TAGS.MOOD.COMFORT], stock: 45 },
            { id: 'ps2', name: 'Penne Arrabiata', image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400', description: 'Acılı domates sos ile hazırlanan penne makarna.', price: '120 ₺', tags: [TAGS.TASTE.SPICY, TAGS.TEMPERATURE.HOT, TAGS.DIETARY.VEGETARIAN, TAGS.TIME.DINNER, TAGS.MOOD.ENERGETIC], stock: 55 },
            { id: 'ps3', name: 'Fettuccine Alfredo', image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400', description: 'Krema sos, parmesan ve maydanoz ile klasik makarna.', price: '130 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.DINNER, TAGS.MOOD.COMFORT], stock: 50 }
        ],
        mains: [
            { id: 'm1', name: 'Izgara Somon', image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400', description: 'Sebzeli pilav ve limon sos ile ızgara somon fileto.', price: '190 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.DINNER, TAGS.MOOD.COMFORT], stock: 35 },
            { id: 'm2', name: 'Beach Club Steak', image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400', description: 'Mantarlı sos ve kızarmış patates ile dana bonfile.', price: '220 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.DINNER, TAGS.MOOD.COMFORT], stock: 30 },
            { id: 'm3', name: 'Tavuk Şiş', image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400', description: 'Pilav, közlenmiş sebze ve özel sos ile tavuk şiş.', price: '150 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.DINNER, TAGS.MOOD.COMFORT], stock: 40 }
        ],
        salads: [
            { id: 'sl1', name: 'Sezar Salata', image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400', description: 'Marul, ızgara tavuk, kruton, parmesan ve sezar sos.', price: '95 ₺', tags: [TAGS.TASTE.SALTY, TAGS.TEMPERATURE.COLD, TAGS.TIME.LUNCH, TAGS.MOOD.REFRESHING], stock: 90 },
            { id: 'sl2', name: 'Yunan Salata', image: 'https://images.unsplash.com/photo-1522666257812-173fdc2d11fe?w=400', description: 'Domates, salatalık, soğan, zeytin ve feta peyniri.', price: '85 ₺', tags: [TAGS.TASTE.SALTY, TAGS.TEMPERATURE.COLD, TAGS.DIETARY.VEGETARIAN, TAGS.TIME.LUNCH, TAGS.MOOD.REFRESHING], stock: 85 }
        ],
        toasts: [
            { id: 't1', name: 'Club Toast', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', description: 'Tavuk, bacon, marul, domates ve mayonez.', price: '85 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.TIME.SNACK, TAGS.MOOD.COMFORT], stock: 95 },
            { id: 't2', name: 'Avokado Toast', image: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec3?w=400', description: 'Avokado ezmesi, poşe yumurta ve pul biber.', price: '75 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.DIETARY.VEGETARIAN, TAGS.TIME.BREAKFAST, TAGS.MOOD.COMFORT], stock: 85 },
            { id: 't3', name: 'Mozarella Toast', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400', description: 'Mozarella, domates, fesleğen ve zeytinyağı.', price: '80 ₺', tags: [TAGS.TASTE.UMAMI, TAGS.TEMPERATURE.HOT, TAGS.DIETARY.VEGETARIAN, TAGS.TIME.SNACK, TAGS.MOOD.COMFORT], stock: 90 }
        ],
        desserts: [
            { id: 'd1', name: 'Tiramisu', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400', description: 'İtalyan usulü kahveli pasta, mascarpone kreması.', price: '75 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.COLD, TAGS.MOOD.COMFORT, TAGS.TIME.SNACK], stock: 45 },
            { id: 'd2', name: 'Cheesecake', image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=400', description: 'New York usulü cheesecake, orman meyveleri sosu.', price: '80 ₺', tags: [TAGS.TASTE.SWEET, TAGS.TEMPERATURE.COLD, TAGS.MOOD.COMFORT, TAGS.TIME.SNACK], stock: 40 }
        ]
    }
};

// Stok kontrolü yapan fonksiyon
function checkStock(item) {
    const LOW_STOCK_THRESHOLD = Math.ceil(item.stock * 0.1); // Stok %10'dan az mı kontrolü
    
    if (item.stock === 0) {
        return 'out_of_stock';
    } else if (item.stock <= LOW_STOCK_THRESHOLD) {
        return 'low_stock';
    }
    return 'in_stock';
}

// Menü öğelerini oluştur (stok kontrolü ile)
function createMenuItems(type, category = 'all') {
    const container = document.querySelector(`#${type} .menu-items`);
    let items = [];

    if (type === 'drinks' && category === 'all') {
        Object.values(menuData.drinks).forEach(categoryItems => {
            items = items.concat(categoryItems.filter(item => checkStock(item) !== 'out_of_stock'));
        });
    } else {
        const categoryItems = type === 'drinks' ? menuData.drinks[category] : menuData.foods[category];
        items = categoryItems.filter(item => checkStock(item) !== 'out_of_stock');
    }
    
    container.innerHTML = items.map(item => {
        const stockStatus = checkStock(item);
        const lowStockWarning = stockStatus === 'low_stock' ? '<span class="low-stock-warning">Son birkaç adet!</span>' : '';
        
        return `
            <div class="menu-item" data-id="${item.id}" data-type="${type}" data-category="${item.id.charAt(0) === 'c' ? 'cocktails' : 
                                                                                          item.id.charAt(0) === 'b' ? 'beers' :
                                                                                          item.id.charAt(0) === 'w' ? 'wines' :
                                                                                          item.id.charAt(0) === 's' ? 'spirits' :
                                                                                          item.id.charAt(0) === 'n' ? 'nonalcoholic' :
                                                                                          item.id.substring(0, 2) === 'st' ? 'starters' :
                                                                                          item.id.charAt(0) === 'p' ? 'pizzas' :
                                                                                          item.id.substring(0, 2) === 'bg' ? 'burgers' :
                                                                                          item.id.charAt(0) === 'w' ? 'wraps' :
                                                                                          item.id.substring(0, 2) === 'ps' ? 'pastas' :
                                                                                          item.id.charAt(0) === 'm' ? 'mains' :
                                                                                          item.id.substring(0, 2) === 'sl' ? 'salads' :
                                                                                          item.id.charAt(0) === 't' ? 'toasts' :
                                                                                          item.id.charAt(0) === 'd' ? 'desserts' : ''}">
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-info">
                    <h3 class="menu-item-name">${item.name} ${lowStockWarning}</h3>
                    <p class="menu-item-description">${item.description}</p>
                    <p class="menu-item-click">Detay için tıklayın</p>
                </div>
            </div>
        `;
    }).join('');
}

// Sekme değiştirme işlevi
function switchTab(event) {
    const targetTab = event.target.dataset.tab;
    
    // Aktif sekme butonunu güncelle
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Aktif içeriği güncelle
    document.querySelectorAll('.menu-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(targetTab).classList.add('active');

    // İçecekler için tümünü, yiyecekler için varsayılan kategoriyi göster
    if (targetTab === 'drinks') {
        createMenuItems('drinks', 'all');
    } else {
        createMenuItems('foods', 'starters');
    }
}

// Kategori değiştirme
function switchCategory(event) {
    const category = event.target.dataset.category;
    const type = event.target.closest('.category-buttons').classList.contains('drink-categories') ? 'drinks' : 'foods';
    
    // Aktif kategori butonunu güncelle
    event.target.closest('.category-buttons').querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // İçerikleri güncelle
    createMenuItems(type, category);
}

// Modal işlevleri
function openModal(item, type, category) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    
    let menuItem;
    if (type === 'drinks') {
        // Tüm içecek kategorilerinde ara
        Object.values(menuData.drinks).forEach(categoryItems => {
            const found = categoryItems.find(i => i.id === item);
            if (found) menuItem = found;
        });
    } else {
        // Yemek kategorisinde ara
        menuItem = menuData.foods[category].find(i => i.id === item);
    }
    
    if (menuItem) {
        modalTitle.textContent = menuItem.name;
        modalImage.src = menuItem.image;
        modalImage.alt = menuItem.name;
        modalDescription.textContent = menuItem.description;
        modalPrice.textContent = menuItem.price;
        
        modal.style.display = 'block';
    }
}

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', () => {
    // URL kontrolü ve yönlendirme
    const currentPath = window.location.pathname;
    const baseUrl = currentPath.endsWith('beachclub-menu/') ? '/beachclub-menu/' : '/';
    
    // Sayfaya göre ilgili fonksiyonu çalıştır
    if (currentPath.includes('menu.html') || currentPath.endsWith('menu')) {
        createMenuItems('drinks', 'all');
        createMenuItems('foods', 'starters');
        
        // Sekme değiştirme
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', switchTab);
        });
        
        // Kategori değiştirme
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', switchCategory);
        });
    } else if (currentPath.includes('suggestion.html') || currentPath.endsWith('suggestion')) {
        createSuggestionPage();
    } else if (currentPath.includes('admin.html') || currentPath.endsWith('admin')) {
        // Admin paneli başlangıç durumu
        document.getElementById('adminPanel').style.display = 'none';
        loadAdminItems();
    }

    // Modal olayları
    const modal = document.getElementById('modal');
    if (modal) {
        document.querySelector('.close-modal').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Menü öğesi tıklama
    document.querySelectorAll('.menu-section').forEach(section => {
        section.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            if (menuItem) {
                const type = menuItem.dataset.type;
                const category = menuItem.dataset.category;
                const id = menuItem.dataset.id;
                
                if (id) openModal(id, type, category);
            }
        });
    });

    // Escape tuşu ile modal kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal) {
            modal.style.display = 'none';
        }
    });
});

// Öneri sistemi için soru setleri
const SUGGESTION_QUESTIONS = {
    initial: {
        id: 'mood',
        question: '💭 Nasıl bir ruh halindesin?',
        options: [
            { id: 'hungry', text: '🌀 Gurultulu bulutluyum (acıktım gibi bi\' hâlim var)', flow: 'food' },
            { id: 'energetic', text: '⚡ Enerjik hissediyorum!', flow: 'drink' },
            { id: 'relaxing', text: '🌊 Rahatlamak istiyorum', flow: 'drink' },
            { id: 'chill', text: '😊 Keyfim yerinde, şöyle serin bi\' şey olsa', flow: 'drink' }
        ]
    },
    food: {
        cuisine: {
            id: 'cuisine',
            question: '🍽️ Hangi mutfak daha çok hoşuna gider?',
            options: [
                { id: 'italian', text: '🍝 İtalyan – makarna, pizza, soslar!', tags: ['pizzas', 'pastas'] },
                { id: 'mexican', text: '🌮 Meksika – baharatlı, neşeli şeyler!', tags: ['spicy', 'comfort'] },
                { id: 'fresh', text: '🥗 Fresh şeyler – sağlıklı, yeşillikli', tags: ['salads', 'vegan'] },
                { id: 'surprise', text: '🍢 Sürprizle gelsin!', tags: ['all'] }
            ]
        },
        spicy: {
            id: 'spice',
            question: 'Ne kadar acıya dayanıklısın?',
            options: [
                { id: 'very_spicy', text: '🌶️ Acının sıcaklığını seviyorum', tag: TAGS.TASTE.SPICY },
                { id: 'mild_spicy', text: '😊 Azıcık acının kimseye zararı olmaz', tag: TAGS.TASTE.UMAMI },
                { id: 'no_spicy', text: '🚫 Hayat yeteri kadar acı ', tag: TAGS.TASTE.SWEET },
                { id: 'whatever', text: '🤷‍♂️ Hiç fark etmez', tag: null }
            ]
        }
    },
    drink: {
        type: {
            id: 'drink_type',
            question: 'Ne tarz bir içecekten hoşlanırsın?',
            options: [
                { id: 'alcoholic', text: '🍷 Alkollü, şöyle keyifli bir şey', tags: ['cocktails', 'wines', 'spirits'] },
                { id: 'mocktail', text: '🍹 Renkli ama alkolsüz', tags: ['nonalcoholic'] },
                { id: 'cold', text: '🧊 Ferahlatıcı soğuk içecekler', tags: ['cold'] },
                { id: 'fizzy', text: '🫧 Köpüklü, gazlı bir şey', tags: ['beers', 'nonalcoholic'] }
            ]
        },
        taste: {
            id: 'taste',
            question: 'Tat profili nasıl olsun?',
            options: [
                { id: 'fruity', text: '🍊 Meyveli, tatlımsı', tag: TAGS.TASTE.SWEET },
                { id: 'herbal', text: '🧉 Bitkisel, hafif buruk', tag: TAGS.TASTE.BITTER },
                { id: 'citrus', text: '🍋 Ekşi ve canlı', tag: TAGS.TASTE.SOUR },
                { id: 'surprise', text: '🎲 Ne olursa olsun, sürprizli olsun', tag: null }
            ]
        }
    }
};

// Kullanıcının seçimlerini saklamak için
let userPreferences = {
    flow: null,
    cuisine: [],
    spice: null,
    drink_type: [],
    taste: null
};

// Öneri algoritması
function getSuggestions() {
    let allItems = [];
    
    // Tüm ürünleri tek bir dizide topla
    Object.values(menuData.drinks).forEach(category => {
        allItems = allItems.concat(category);
    });
    Object.values(menuData.foods).forEach(category => {
        allItems = allItems.concat(category);
    });
    
    // Stok kontrolü - sadece normal stok seviyesindeki ürünleri al
    allItems = allItems.filter(item => {
        const stockStatus = checkStock(item);
        return stockStatus === 'in_stock'; // Düşük stoklu ve stoksuz ürünleri önerme
    });
    
    // Kullanıcı tercihlerine göre puanlama yap
    const scoredItems = allItems.map(item => {
        let score = 0;
        
        // Tag eşleşmelerine göre puan ver
        if (item.tags.includes(userPreferences.mood)) score += 3;
        if (item.tags.includes(userPreferences.taste)) score += 2;
        if (userPreferences.dietary && item.tags.includes(userPreferences.dietary)) score += 2;
        if (item.tags.includes(userPreferences.alcohol)) score += 2;
        
        return { ...item, score };
    });
    
    // Puanı yüksek olandan düşüğe doğru sırala
    scoredItems.sort((a, b) => b.score - a.score);
    
    // En yüksek puanlı 3 ürünü döndür
    return scoredItems.slice(0, 3);
}

// Öneri sayfasını oluştur
function createSuggestionPage() {
    let currentFlow = 'initial';
    let currentQuestion = SUGGESTION_QUESTIONS.initial;
    const container = document.querySelector('.suggestion-container');
    
    async function showQuestion(questionData) {
        // Eğer mevcut içerik varsa, önce onu sola kaydırarak çıkar
        if (container.children.length > 0) {
            container.firstElementChild.classList.add('slide-out');
            await new Promise(resolve => setTimeout(resolve, 500));
            container.innerHTML = '';
        }

        // Yeni soruyu hazırla
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <h2>${questionData.question}</h2>
            <div class="suggestion-options">
                ${questionData.options.map(option => `
                    <button class="suggestion-option" 
                            data-id="${option.id}" 
                            data-flow="${option.flow || ''}"
                            data-tags='${JSON.stringify(option.tags || [])}'>
                        <span>${option.text}</span>
                    </button>
                `).join('')}
            </div>
        `;
        container.appendChild(questionElement);

        // Seçenek butonlarına tıklama olayı ekle
        document.querySelectorAll('.suggestion-option').forEach(button => {
            button.addEventListener('click', async () => {
                const flow = button.dataset.flow;
                const tags = JSON.parse(button.dataset.tags || '[]');
                
                if (flow) {
                    userPreferences.flow = flow;
                    currentFlow = flow;
                    if (flow === 'food') {
                        currentQuestion = SUGGESTION_QUESTIONS.food.cuisine;
                    } else if (flow === 'drink') {
                        currentQuestion = SUGGESTION_QUESTIONS.drink.type;
                    }
                } else {
                    if (currentFlow === 'food') {
                        if (currentQuestion.id === 'cuisine') {
                            userPreferences.cuisine = tags;
                            currentQuestion = SUGGESTION_QUESTIONS.food.spicy;
                        } else if (currentQuestion.id === 'spice') {
                            userPreferences.spice = button.dataset.tag;
                            await showSuggestions();
                            return;
                        }
                    } else if (currentFlow === 'drink') {
                        if (currentQuestion.id === 'drink_type') {
                            userPreferences.drink_type = tags;
                            currentQuestion = SUGGESTION_QUESTIONS.drink.taste;
                        } else if (currentQuestion.id === 'taste') {
                            userPreferences.taste = button.dataset.tag;
                            await showSuggestions();
                            return;
                        }
                    }
                }
                
                await new Promise(resolve => setTimeout(resolve, 200));
                await showQuestion(currentQuestion);
            });
        });
    }
    
    async function showSuggestions() {
        // Mevcut içeriği sola kaydırarak çıkar
        if (container.children.length > 0) {
            container.firstElementChild.classList.add('slide-out');
            await new Promise(resolve => setTimeout(resolve, 500));
            container.innerHTML = '';
        }

        let suggestions = [];
        if (userPreferences.flow === 'food') {
            // Yemek önerileri
            Object.entries(menuData.foods).forEach(([category, items]) => {
                if (userPreferences.cuisine.includes('all') || userPreferences.cuisine.includes(category)) {
                    items.forEach(item => {
                        if (checkStock(item) === 'in_stock') {
                            // Acı tercihi varsa ve eşleşiyorsa veya acı tercihi 'whatever' ise
                            if (!userPreferences.spice || 
                                item.tags.includes(userPreferences.spice) || 
                                userPreferences.spice === null) {
                                suggestions.push({
                                    ...item,
                                    score: calculateScore(item)
                                });
                            }
                        }
                    });
                }
            });

            // Eğer hiç öneri bulunamazsa, stokta olan tüm yemekleri ekle
            if (suggestions.length === 0) {
                Object.values(menuData.foods).forEach(items => {
                    items.forEach(item => {
                        if (checkStock(item) === 'in_stock') {
                            suggestions.push({
                                ...item,
                                score: calculateScore(item)
                            });
                        }
                    });
                });
            }
        } else {
            // İçecek önerileri
            Object.entries(menuData.drinks).forEach(([category, items]) => {
                // Kategori eşleşmesi veya soğuk içecek tercihi kontrolü
                if (userPreferences.drink_type.includes(category) || 
                    (userPreferences.drink_type.includes('cold') && items[0]?.tags.includes(TAGS.TEMPERATURE.COLD))) {
                    items.forEach(item => {
                        if (checkStock(item) === 'in_stock') {
                            // Tat tercihi varsa ve eşleşiyorsa veya tat tercihi 'surprise' ise
                            if (!userPreferences.taste || 
                                item.tags.includes(userPreferences.taste) || 
                                userPreferences.taste === null) {
                                suggestions.push({
                                    ...item,
                                    score: calculateScore(item)
                                });
                            }
                        }
                    });
                }
            });

            // Eğer hiç öneri bulunamazsa, stokta olan tüm içecekleri ekle
            if (suggestions.length === 0) {
                Object.values(menuData.drinks).forEach(items => {
                    items.forEach(item => {
                        if (checkStock(item) === 'in_stock') {
                            suggestions.push({
                                ...item,
                                score: calculateScore(item)
                            });
                        }
                    });
                });
            }
        }

        // Puanlarına göre sırala ve en iyi 3 öneriyi seç
        suggestions.sort((a, b) => b.score - a.score);
        suggestions = suggestions.slice(0, 3);

        // Eğer hala öneri yoksa, varsayılan öneriler göster
        if (suggestions.length === 0) {
            const defaultItems = userPreferences.flow === 'food' 
                ? [menuData.foods.starters[0], menuData.foods.mains[0], menuData.foods.desserts[0]]
                : [menuData.drinks.cocktails[0], menuData.drinks.nonalcoholic[0], menuData.drinks.beers[0]];
            
            suggestions = defaultItems.filter(item => item && checkStock(item) === 'in_stock');
        }

        const suggestionsElement = document.createElement('div');
        suggestionsElement.classList.add('slide-in');
        suggestionsElement.innerHTML = `
            <h2>Size Özel Önerilerimiz</h2>
            <div class="suggestion-results">
                ${suggestions.map(item => `
                    <div class="suggestion-item">
                        <img src="${item.image}" alt="${item.name}">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p class="price">${item.price}</p>
                    </div>
                `).join('')}
            </div>
            <button class="start-over">Yeniden Başla</button>
        `;
        container.appendChild(suggestionsElement);
        
        // Yeniden başlama butonuna tıklama olayı ekle
        document.querySelector('.start-over').addEventListener('click', async () => {
            userPreferences = {
                flow: null,
                cuisine: [],
                spice: null,
                drink_type: [],
                taste: null
            };
            currentFlow = 'initial';
            currentQuestion = SUGGESTION_QUESTIONS.initial;
            await showQuestion(currentQuestion);
        });
    }
    
    // İlk soruyu göster
    showQuestion(currentQuestion);
}

// Öğe puanlama fonksiyonu
function calculateScore(item) {
    let score = 0;
    
    if (userPreferences.flow === 'food') {
        // Yemek puanlama
        if (userPreferences.cuisine.includes('all')) {
            score += 2;
        } else if (userPreferences.cuisine.some(cuisine => item.tags.includes(cuisine))) {
            score += 3;
        }
        
        if (item.tags.includes(userPreferences.spice)) {
            score += 2;
        } else if (userPreferences.spice === null) {
            score += 1;
        }
    } else {
        // İçecek puanlama
        if (userPreferences.drink_type.some(type => {
            if (type === 'cold') {
                return item.tags.includes(TAGS.TEMPERATURE.COLD);
            }
            return item.tags.includes(type);
        })) {
            score += 3;
        }
        
        if (item.tags.includes(userPreferences.taste)) {
            score += 2;
        } else if (userPreferences.taste === null) {
            score += 1;
        }
    }
    
    return score;
}

// Admin Panel Fonksiyonları
function toggleAdminPanel() {
    const adminPanel = document.getElementById('adminPanel');
    if (adminPanel.style.display === 'none') {
        adminPanel.style.display = 'block';
        loadAdminItems();
    } else {
        adminPanel.style.display = 'none';
    }
}

function closeAdminPanel() {
    document.getElementById('adminPanel').style.display = 'none';
}

function loadAdminItems() {
    const adminItems = document.getElementById('adminItems');
    adminItems.innerHTML = '';

    // Tüm kategorileri dolaş
    Object.entries(menuData).forEach(([section, categories]) => {
        Object.entries(categories).forEach(([category, items]) => {
            items.forEach(item => {
                const itemElement = createAdminItemElement(item, section, category);
                adminItems.appendChild(itemElement);
            });
        });
    });
}

function createAdminItemElement(item, section, category) {
    const div = document.createElement('div');
    div.className = 'admin-item';
    div.innerHTML = `
        <div class="admin-item-header">
            <h3 class="admin-item-name">${item.name}</h3>
            <span class="admin-item-category">${category}</span>
        </div>
        <div class="admin-item-stock">
            <input type="number" value="${item.stock}" min="0" id="stock-${item.id}">
            <button onclick="updateStock('${item.id}', '${section}', '${category}')">Güncelle</button>
        </div>
    `;
    return div;
}

function updateStock(itemId, section, category) {
    const stockInput = document.getElementById(`stock-${itemId}`);
    const newStock = parseInt(stockInput.value);
    
    if (isNaN(newStock) || newStock < 0) {
        alert('Lütfen geçerli bir stok miktarı girin!');
        return;
    }

    // Menü verisini güncelle
    const item = menuData[section][category].find(item => item.id === itemId);
    if (item) {
        item.stock = newStock;
        // Menüyü yeniden yükle
        createMenuItems(section === 'drinks' ? 'drinks' : 'foods', category);
        alert('Stok başarıyla güncellendi!');
    }
}

function filterAdminItems() {
    const searchText = document.getElementById('adminSearch').value.toLowerCase();
    const items = document.querySelectorAll('.admin-item');

    items.forEach(item => {
        const name = item.querySelector('.admin-item-name').textContent.toLowerCase();
        const category = item.querySelector('.admin-item-category').textContent.toLowerCase();
        
        if (name.includes(searchText) || category.includes(searchText)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
} 