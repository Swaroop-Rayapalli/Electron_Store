export const products = [
    {
        id: "1",
        name: "iPhone 16 Pro Max",
        price: "1,44,900",
        category: "Mobiles",
        image: "/iphone16-main.jpg",
        images: [
            "/iphone16-main.jpg",
            "/iphone16-1.jpg",
            "/iphone16-2.jpg",
        ],
        isNew: true,
        badge: "",
        description: "Experience the next level of performance and innovation. Engineered for perfection, this device brings you the latest technology features in a stunning premium design.",
        specs: {
            "Brand": "Apple",
            "Model": "iPhone 16 Pro Max",
            "Display": "6.9-inch Super Retina XDR",
            "Processor": "A19 Pro Chip",
            "Storage": "256GB / 512GB / 1TB",
            "Battery": "Up to 30 hours video playback",
            "Color": "Natural Titanium / Space Black / Silver",
        }
    },
    {
        id: "2",
        name: "MacBook Air M3",
        price: "1,14,900",
        category: "Laptops",
        image: "/macbook-main.jpg",
        images: [
            "/macbook-main.jpg",
            "/macbook-1.jpg",
        ],
        badge: "Bestseller",
        isNew: false,
        description: "Supercharged by M3. The world's most popular laptop is better than ever. With up to 18 hours of battery life and a stunning Liquid Retina display.",
        specs: {
            "Brand": "Apple",
            "Model": "MacBook Air M3",
            "Display": "13.6-inch Liquid Retina",
            "Processor": "Apple M3 Chip",
            "Storage": "256GB / 512GB",
            "Battery": "Up to 18 hours battery life",
            "Color": "Midnight / Starlight / Space Gray / Silver",
        }
    },
    {
        id: "3",
        name: "Sony Bravia XR 65\"",
        price: "2,09,900",
        category: "TVs",
        image: "/sony-main.jpg",
        images: [
            "/sony-main.jpg",
            "/sony-1.jpg",
        ],
        isNew: false,
        badge: "",
        description: "Intelligent cognitive processing for an incredibly lifelike picture. Experience the brilliance of 4K HDR OLED.",
        specs: {
            "Brand": "Sony",
            "Model": "Bravia XR 65\"",
            "Display": "65-inch 4K OLED",
            "Processor": "Cognitive Processor XR",
            "Refresh Rate": "120Hz",
            "Audio": "Acoustic Surface Audio+",
            "Connectivity": "HDMI 2.1, Wi-Fi 6",
        }
    },
    {
        id: "4",
        name: "AirPods Pro Gen 2",
        price: "24,900",
        category: "Audio",
        image: "/airpods-main.jpg",
        images: [
            "/airpods-main.jpg",
            "/airpods-1.jpg",
        ],
        isNew: true,
        badge: "",
        description: "Re-engineered for richer audio. Up to 2x more Active Noise Cancellation. Adaptive Transparency.",
        specs: {
            "Brand": "Apple",
            "Model": "AirPods Pro Gen 2",
            "Chip": "H2 Headphone Chip",
            "Noise Cancellation": "Active Noise Cancellation",
            "Battery": "Up to 6 hours listening time",
            "Case": "MagSafe Charging Case (USB-C)",
            "Water Resistance": "IP54 Rating",
        }
    },
    {
        id: "5",
        name: "Samsung Galaxy S24 Ultra",
        price: "1,29,900",
        category: "Mobiles",
        image: "/samsung-main.jpg",
        images: [
            "/samsung-main.jpg",
            "/samsung-1.jpg",
        ],
        isNew: false,
        badge: "",
        description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility.",
        specs: {
            "Brand": "Samsung",
            "Model": "Galaxy S24 Ultra",
            "Display": "6.8-inch Dynamic AMOLED 2X",
            "Processor": "Snapdragon 8 Gen 3 for Galaxy",
            "Camera": "200MP Main + 50MP Telephoto",
            "Battery": "5000 mAh",
            "S Pen": "Built-in",
        }
    },
    {
        id: "6",
        name: "Dell XPS 15 2026",
        price: "1,89,900",
        category: "Laptops",
        image: "https://dl.dell.com/newsroom/XPS_15_9530_Touch_9.jpg",
        images: [
            "https://dl.dell.com/newsroom/XPS_15_9530_Touch_9.jpg",
            "https://dl.dell.com/newsroom/XPS_15_9530_NonTouch_1.jpg",
        ],
        isNew: true,
        badge: "",
        description: "Creators, this is your laptop. Powered by up to the latest Intel Core i9 processors and NVIDIA GeForce RTX graphics.",
        specs: {
            "Brand": "Dell",
            "Model": "XPS 15",
            "Display": "15.6-inch OLED 3.5K Touch",
            "Processor": "Intel Core Ultra 9",
            "RAM": "32GB LPDDR5x",
            "Storage": "1TB PCIe Gen4 SSD",
            "GPU": "NVIDIA RTX 4070",
        }
    },
    {
        id: "7",
        name: "Logitech G Pro Keyboard",
        price: "12,900",
        category: "Accessories",
        image: "https://resource.logitechg.com/w_692,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-keyboard-gallery-1.png?v=1",
        images: [
            "https://resource.logitechg.com/w_692,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-keyboard-gallery-1.png?v=1",
            "https://resource.logitechg.com/w_692,c_lpad,ar_16:9,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-keyboard/pro-keyboard-gallery-2.png?v=1",
        ],
        isNew: false,
        badge: "",
        description: "Built with and for esports athletes for competition-level performance, speed and precision. Featuring GX switch technology.",
        specs: {
            "Brand": "Logitech",
            "Model": "G Pro",
            "Type": "Mechanical Gaming Keyboard",
            "Switches": "GX Blue Clicky",
            "Lighting": "LIGHTSYNC RGB",
            "Connection": "Detachable USB",
            "Format": "Tenkeyless",
        }
    },
    {
        id: "8",
        name: "LG OLED C3 55\"",
        price: "1,49,900",
        category: "TVs",
        image: "/lg.jpg",
        images: [
            "/lg.jpg",
        ],
        isNew: false,
        badge: "",
        description: "Experience the magic of LG OLED. Perfect black, infinite contrast, and over a billion colors for an exceptional picture.",
        specs: {
            "Brand": "LG",
            "Model": "OLED55C3",
            "Display": "55-inch 4K OLED evo",
            "Processor": "α9 AI Processor Gen6",
            "Refresh Rate": "120Hz native",
            "Gaming": "G-SYNC, FreeSync Premium",
            "Smart Platform": "webOS 23",
        }
    }
];

export const getProduct = (id: string) => {
    return products.find(p => p.id === id) || products[0];
};
