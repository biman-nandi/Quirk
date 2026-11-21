import { MenuDataProps } from "@/types";


// export const menuData = [
//   {
//     title: "MEN",
//     section1: [
//       {
//         heading: "Topwear",
//         items: [
//           { title: "T-Shirts", slug: "t-shirts" },
//           { title: "Casual Shirts", slug: "casual-shirts" },
//           { title: "Formal Shirts", slug: "formal-shirts" },
//           { title: "Sweatshirts", slug: "sweatshirts" },
//           { title: "Sweaters", slug: "sweaters" },
//           { title: "Jackets", slug: "jackets" },
//           { title: "Blazers & Coats", slug: "blazers-and-coats" },
//           { title: "Suits", slug: "suits" },
//           { title: "Rain Jackets", slug: "rain-jackets" },
//         ],
//       },
//       {
//         heading: "Indian & Festive Wear",
//         items: [
//           { title: "Kurtas & Kurta Sets", slug: "kurtas-and-kurta-sets" },
//           { title: "Sherwanis", slug: "sherwanis" },
//           { title: "Nehru Jackets", slug: "nehru-jackets" },
//           { title: "Dhotis", slug: "dhotis" },
//         ],
//       },
//     ],
//     section2: [
//       {
//         heading: "Bottomwear",
//         items: [
//           { title: "Jeans", slug: "jeans" },
//           { title: "Casual Trousers", slug: "casual-trousers" },
//           { title: "Formal Trousers", slug: "formal-trousers" },
//           { title: "Shorts", slug: "shorts" },
//           { title: "Track Pants & Joggers", slug: "track-pants-and-joggers" },
//         ],
//       },
//       {
//         heading: "Innerwear & Sleepwear",
//         items: [
//           { title: "Briefs & Trunks", slug: "briefs-and-trunks" },
//           { title: "Boxers", slug: "boxers" },
//           { title: "Vests", slug: "vests" },
//           { title: "Sleepwear & Loungewear", slug: "sleepwear-and-loungewear" },
//           { title: "Thermals", slug: "thermals" },
//         ],
//       },
//       {
//         heading: "Plus Size",
//         items: [],
//       },
//     ],
//     section3: [
//       {
//         heading: "Footwear",
//         items: [
//           { title: "Casual Shoes", slug: "casual-shoes" },
//           { title: "Sports Shoes", slug: "sports-shoes" },
//           { title: "Formal Shoes", slug: "formal-shoes" },
//           { title: "Sneakers", slug: "sneakers" },
//           { title: "Sandals & Floaters", slug: "sandals-and-floaters" },
//           { title: "Flip Flops", slug: "flip-flops" },
//           { title: "Socks", slug: "socks" },
//         ],
//       },
//       { heading: "Personal Care & Grooming", items: [] },
//       { heading: "Sunglasses & Frames", items: [] },
//       { heading: "Watches", items: [] },
//     ],
//     section4: [
//       {
//         heading: "Sports & Active Wear",
//         items: [
//           { title: "Sports Shoes", slug: "sports-shoes" },
//           { title: "Sports Sandals", slug: "sports-sandals" },
//           { title: "Active T-Shirts", slug: "active-t-shirts" },
//           { title: "Track Pants & Shorts", slug: "track-pants-and-shorts" },
//           { title: "Tracksuits", slug: "tracksuits" },
//           { title: "Jackets & Sweatshirts", slug: "jackets-and-sweatshirts" },
//           { title: "Sports Accessories", slug: "sports-accessories" },
//           { title: "Swimwear", slug: "swimwear" },
//         ],
//       },
//       {
//         heading: "Gadgets",
//         items: [
//           { title: "Smart Wearables", slug: "smart-wearables" },
//           { title: "Fitness Gadgets", slug: "fitness-gadgets" },
//           { title: "Headphones", slug: "headphones" },
//           { title: "Speakers", slug: "speakers" },
//         ],
//       },
//     ],
//     section5: [
//       {
//         heading: "Fashion Accessories",
//         items: [
//           { title: "Wallets", slug: "wallets" },
//           { title: "Belts", slug: "belts" },
//           { title: "Perfumes & Body Mists", slug: "perfumes-and-body-mists" },
//           { title: "Trimmers", slug: "trimmers" },
//           { title: "Deodorants", slug: "deodorants" },
//           { title: "Ties, Cufflinks & Pocket Squares", slug: "ties-cufflinks-and-pocket-squares" },
//           { title: "Accessory Gift Sets", slug: "accessory-gift-sets" },
//           { title: "Caps & Hats", slug: "caps-and-hats" },
//           { title: "Mufflers, Scarves & Gloves", slug: "mufflers-scarves-and-gloves" },
//           { title: "Phone Cases", slug: "phone-cases" },
//           { title: "Rings & Wristwear", slug: "rings-and-wristwear" },
//           { title: "Helmets", slug: "helmets" },
//         ],
//       },
//       { heading: "Bags & Backpacks", items: [] },
//       { heading: "Luggages & Trolleys", items: [] },
//     ],
//   },

//   {
//     title: "WOMEN",
//     section1: [
//       {
//         heading: "Indian & Fusion Wear",
//         items: [
//           { title: "Kurtas & Suits", slug: "kurtas-and-suits" },
//           { title: "Kurtis, Tunics & Tops", slug: "kurtis-tunics-and-tops" },
//           { title: "Sarees", slug: "sarees" },
//           { title: "Ethnic Wear", slug: "ethnic-wear" },
//           { title: "Leggings, Salwars & Churidars", slug: "leggings-salwars-and-churidars" },
//           { title: "Skirts & Palazzos", slug: "skirts-and-palazzos" },
//           { title: "Dress Materials", slug: "dress-materials" },
//           { title: "Lehenga Cholis", slug: "lehenga-cholis" },
//           { title: "Dupattas & Shawls", slug: "dupattas-and-shawls" },
//           { title: "Jackets", slug: "jackets" },
//         ],
//       },
//       { heading: "Belts, Scarves & More", items: [] },
//       { heading: "Watches & Wearables", items: [] },
//     ],
//     section2: [
//       {
//         heading: "Western Wear",
//         items: [
//           { title: "Dresses", slug: "dresses" },
//           { title: "Tops", slug: "tops" },
//           { title: "Tshirts", slug: "tshirts" },
//           { title: "Jeans", slug: "jeans" },
//           { title: "Trousers & Capris", slug: "trousers-and-capris" },
//           { title: "Shorts & Skirts", slug: "shorts-and-skirts" },
//           { title: "Co-ords", slug: "co-ords" },
//           { title: "Playsuits", slug: "playsuits" },
//           { title: "Jumpsuits", slug: "jumpsuits" },
//           { title: "Shrugs", slug: "shrugs" },
//           { title: "Sweaters & Sweatshirts", slug: "sweaters-and-sweatshirts" },
//           { title: "Jackets & Coats", slug: "jackets-and-coats" },
//           { title: "Blazers & Waistcoats", slug: "blazers-and-waistcoats" },
//         ],
//       },
//       { heading: "Plus Size", items: [] },
//     ],
//     section3: [
//       { heading: "Maternity", items: [] },
//       { heading: "Sunglasses & Frames", items: [] },
//       {
//         heading: "Footer",
//         items: [
//           { title: "Flats", slug: "flats" },
//           { title: "Casual Shoes", slug: "casual-shoes" },
//           { title: "Heels", slug: "heels" },
//           { title: "Boots", slug: "boots" },
//           { title: "Sports Shoes & Floaters", slug: "sports-shoes-and-floaters" },
//         ],
//       },
//       {
//         heading: "Sports & Active Wear",
//         items: [
//           { title: "Clothing", slug: "clothing" },
//           { title: "Footwear", slug: "footwear" },
//           { title: "Sports Accessories", slug: "sports-accessories" },
//           { title: "Sports Equipment", slug: "sports-equipment" },
//         ],
//       },
//     ],
//     section4: [
//       {
//         heading: "Lingerie & Sleepwear",
//         items: [
//           { title: "Bra", slug: "bra" },
//           { title: "Briefs", slug: "briefs" },
//           { title: "Shapewear", slug: "shapewear" },
//           { title: "Sleepwear & Loungewear", slug: "sleepwear-and-loungewear" },
//           { title: "Swimwear", slug: "swimwear" },
//           { title: "Camisoles & Thermals", slug: "camisoles-and-thermals" },
//         ],
//       },
//       {
//         heading: "Beauty & Personal Care",
//         items: [
//           { title: "Makeup", slug: "makeup" },
//           { title: "Skincare", slug: "skincare" },
//           { title: "Premium Beauty", slug: "premium-beauty" },
//           { title: "Lipsticks", slug: "lipsticks" },
//           { title: "Fragrances", slug: "fragrances" },
//         ],
//       },
//     ],
//     section5: [
//       {
//         heading: "Gadgets",
//         items: [
//           { title: "Smart Wearables", slug: "smart-wearables" },
//           { title: "Fitness Gadgets", slug: "fitness-gadgets" },
//           { title: "Headphones", slug: "headphones" },
//           { title: "Speakers", slug: "speakers" },
//         ],
//       },
//       {
//         heading: "Jewellery",
//         items: [
//           { title: "Fashion Jewellery", slug: "fashion-jewellery" },
//           { title: "Fine Jewellery", slug: "fine-jewellery" },
//           { title: "Earrings", slug: "earrings" },
//         ],
//       },
//       { heading: "Backpacks", items: [] },
//       { heading: "Handbags, Bags & Wallets", items: [] },
//       { heading: "Luggages & Trolleys", items: [] },
//     ],
//   },

//   {
//     title: "KIDS",
//     section1: [
//       {
//         heading: "Boys Clothing",
//         items: [
//           { title: "T-Shirts", slug: "t-shirts" },
//           { title: "Shirts", slug: "shirts" },
//           { title: "Shorts", slug: "shorts" },
//           { title: "Jeans", slug: "jeans" },
//           { title: "Trousers", slug: "trousers" },
//           { title: "Clothing Sets", slug: "clothing-sets" },
//           { title: "Ethnic Wear", slug: "ethnic-wear" },
//           { title: "Track Pants & Pyjamas", slug: "track-pants-and-pyjamas" },
//           { title: "Jacket, Sweater & Sweatshirts", slug: "jacket-sweater-and-sweatshirts" },
//           { title: "Party Wear", slug: "party-wear" },
//           { title: "Innerwear & Thermals", slug: "innerwear-and-thermals" },
//           { title: "Nightwear & Loungewear", slug: "nightwear-and-loungewear" },
//           { title: "Value Packs", slug: "value-packs" },
//         ],
//       },
//     ],
//     section2: [
//       {
//         heading: "Girls Clothing",
//         items: [
//           { title: "Dresses", slug: "dresses" },
//           { title: "Tops", slug: "tops" },
//           { title: "Tshirts", slug: "tshirts" },
//           { title: "Clothing Sets", slug: "clothing-sets" },
//           { title: "Lehenga choli", slug: "lehenga-choli" },
//           { title: "Kurta Sets", slug: "kurta-sets" },
//           { title: "Party wear", slug: "party-wear" },
//           { title: "Dungarees & Jumpsuits", slug: "dungarees-and-jumpsuits" },
//           { title: "Skirts & shorts", slug: "skirts-and-shorts" },
//           { title: "Tights & Leggings", slug: "tights-and-leggings" },
//           { title: "Jeans, Trousers & Capris", slug: "jeans-trousers-and-capris" },
//           { title: "Jacket, Sweater & Sweatshirts", slug: "jacket-sweater-and-sweatshirts" },
//           { title: "Innerwear & Thermals", slug: "innerwear-and-thermals" },
//           { title: "Nightwear & Loungewear", slug: "nightwear-and-loungewear" },
//           { title: "Value Packs", slug: "value-packs" },
//         ],
//       },
//     ],
//     section3: [
//       {
//         heading: "Footwear",
//         items: [
//           { title: "Casual Shoes", slug: "casual-shoes" },
//           { title: "Flipflops", slug: "flipflops" },
//           { title: "Sports Shoes", slug: "sports-shoes" },
//           { title: "Flats", slug: "flats" },
//           { title: "Sandals", slug: "sandals" },
//           { title: "Heels", slug: "heels" },
//           { title: "School Shoes", slug: "school-shoes" },
//           { title: "Socks", slug: "socks" },
//         ],
//       },
//       {
//         heading: "Toys & Games",
//         items: [
//           { title: "Learning & Development", slug: "learning-and-development" },
//           { title: "Activity Toys", slug: "activity-toys" },
//           { title: "Soft Toys", slug: "soft-toys" },
//           { title: "Action Figure / Play set", slug: "action-figure-play-set" },
//         ],
//       },
//     ],
//     section4: [
//       {
//         heading: "Infants",
//         items: [
//           { title: "Bodysuits", slug: "bodysuits" },
//           { title: "Rompers & Sleepsuits", slug: "rompers-and-sleepsuits" },
//           { title: "Clothing Sets", slug: "clothing-sets" },
//           { title: "Tshirts & Tops", slug: "tshirts-and-tops" },
//           { title: "Dresses", slug: "dresses" },
//           { title: "Bottom wear", slug: "bottom-wear" },
//           { title: "Winter Wear", slug: "winter-wear" },
//           { title: "Innerwear & Sleepwear", slug: "innerwear-and-sleepwear" },
//           { title: "Infant Care", slug: "infant-care" },
//         ],
//       },
//       { heading: "Home & Bath", items: [] },
//       { heading: "Personal Care", items: [] },
//     ],
//   },

//   {
//     title: "ACCESSORIES",
//     section1: [
//       {
//         heading: "Indian & Fusion Wear",
//         items: [
//           { title: "Kurtas & Suits", slug: "kurtas-and-suits" },
//           { title: "Kurtis", slug: "kurtis" },
//           { title: "Sarees", slug: "sarees" },
//           { title: "Ethnic Wear", slug: "ethnic-wear" },
//         ],
//       },
//       {
//         heading: "Western Wear",
//         items: [
//           { title: "Dresses", slug: "dresses" },
//           { title: "Tops", slug: "tops" },
//           { title: "Jeans", slug: "jeans" },
//           { title: "Co-ords", slug: "co-ords" },
//         ],
//       },
//     ],
//   },
// ];

export const menuData: MenuDataProps[] = [
  {
    title: "MEN",
    section1: [
      {
        heading: "Topwear",
        slug: "men/topwear",
        items: [
          { title: "T-Shirts", slug: "men/topwear/t-shirts" },
          { title: "Casual Shirts", slug: "men/topwear/casual-shirts" },
          { title: "Formal Shirts", slug: "men/topwear/formal-shirts" },
          { title: "Sweatshirts", slug: "men/topwear/sweatshirts" },
          { title: "Sweaters", slug: "men/topwear/sweaters" },
          { title: "Jackets", slug: "men/topwear/jackets" },
          { title: "Blazers & Coats", slug: "men/topwear/blazers-and-coats" },
          { title: "Suits", slug: "men/topwear/suits" },
          { title: "Rain Jackets", slug: "men/topwear/rain-jackets" },
        ],
      },
      {
        heading: "Indian & Festive Wear",
        slug: "men/indian-and-festive-wear",
        items: [
          { title: "Kurtas & Kurta Sets", slug: "men/indian-and-festive-wear/kurtas-and-kurta-sets" },
          { title: "Sherwanis", slug: "men/indian-and-festive-wear/sherwanis" },
          { title: "Nehru Jackets", slug: "men/indian-and-festive-wear/nehru-jackets" },
          { title: "Dhotis", slug: "men/indian-and-festive-wear/dhotis" },
        ],
      },
    ],
    section2: [
      {
        heading: "Bottomwear",
        slug: "men/bottomwear",
        items: [
          { title: "Jeans", slug: "men/bottomwear/jeans" },
          { title: "Casual Trousers", slug: "men/bottomwear/casual-trousers" },
          { title: "Formal Trousers", slug: "men/bottomwear/formal-trousers" },
          { title: "Shorts", slug: "men/bottomwear/shorts" },
          { title: "Track Pants & Joggers", slug: "men/bottomwear/track-pants-and-joggers" },
        ],
      },
      {
        heading: "Innerwear & Sleepwear",
        slug: "men/innerwear-and-sleepwear",
        items: [
          { title: "Briefs & Trunks", slug: "men/innerwear-and-sleepwear/briefs-and-trunks" },
          { title: "Boxers", slug: "men/innerwear-and-sleepwear/boxers" },
          { title: "Vests", slug: "men/innerwear-and-sleepwear/vests" },
          { title: "Sleepwear & Loungewear", slug: "men/innerwear-and-sleepwear/sleepwear-and-loungewear" },
          { title: "Thermals", slug: "men/innerwear-and-sleepwear/thermals" },
        ],
      },
      {
        heading: "Plus Size",
        slug: "men/plus-size",
        items: [],
      },
    ],
    section3: [
      {
        heading: "Footwear",
        slug: "men/footwear",
        items: [
          { title: "Casual Shoes", slug: "men/footwear/casual-shoes" },
          { title: "Sports Shoes", slug: "men/footwear/sports-shoes" },
          { title: "Formal Shoes", slug: "men/footwear/formal-shoes" },
          { title: "Sneakers", slug: "men/footwear/sneakers" },
          { title: "Sandals & Floaters", slug: "men/footwear/sandals-and-floaters" },
          { title: "Flip Flops", slug: "men/footwear/flip-flops" },
          { title: "Socks", slug: "men/footwear/socks" },
        ],
      },
      {
        heading: "Personal Care & Grooming",
        slug: "men/personal-care-and-grooming",
        items: [],
      },
      {
        heading: "Sunglasses & Frames",
        slug: "men/sunglasses-and-frames",
        items: [],
      },
      {
        heading: "Watches",
        slug: "men/watches",
        items: [],
      },
    ],
    section4: [
      {
        heading: "Sports & Active Wear",
        slug: "men/sports-and-active-wear",
        items: [
          { title: "Sports Shoes", slug: "men/sports-and-active-wear/sports-shoes" },
          { title: "Sports Sandals", slug: "men/sports-and-active-wear/sports-sandals" },
          { title: "Active T-Shirts", slug: "men/sports-and-active-wear/active-t-shirts" },
          { title: "Track Pants & Shorts", slug: "men/sports-and-active-wear/track-pants-and-shorts" },
          { title: "Tracksuits", slug: "men/sports-and-active-wear/tracksuits" },
          { title: "Jackets & Sweatshirts", slug: "men/sports-and-active-wear/jackets-and-sweatshirts" },
          { title: "Sports Accessories", slug: "men/sports-and-active-wear/sports-accessories" },
          { title: "Swimwear", slug: "men/sports-and-active-wear/swimwear" },
        ],
      },
      {
        heading: "Gadgets",
        slug: "men/gadgets",
        items: [
          { title: "Smart Wearables", slug: "men/gadgets/smart-wearables" },
          { title: "Fitness Gadgets", slug: "men/gadgets/fitness-gadgets" },
          { title: "Headphones", slug: "men/gadgets/headphones" },
          { title: "Speakers", slug: "men/gadgets/speakers" },
        ],
      },
    ],
    section5: [
      {
        heading: "Fashion Accessories",
        slug: "men/fashion-accessories",
        items: [
          { title: "Wallets", slug: "men/fashion-accessories/wallets" },
          { title: "Belts", slug: "men/fashion-accessories/belts" },
          { title: "Perfumes & Body Mists", slug: "men/fashion-accessories/perfumes-and-body-mists" },
          { title: "Trimmers", slug: "men/fashion-accessories/trimmers" },
          { title: "Deodorants", slug: "men/fashion-accessories/deodorants" },
          { title: "Ties, Cufflinks & Pocket Squares", slug: "men/fashion-accessories/ties-cufflinks-and-pocket-squares" },
          { title: "Accessory Gift Sets", slug: "men/fashion-accessories/accessory-gift-sets" },
          { title: "Caps & Hats", slug: "men/fashion-accessories/caps-and-hats" },
          { title: "Mufflers, Scarves & Gloves", slug: "men/fashion-accessories/mufflers-scarves-and-gloves" },
          { title: "Phone Cases", slug: "men/fashion-accessories/phone-cases" },
          { title: "Rings & Wristwear", slug: "men/fashion-accessories/rings-and-wristwear" },
          { title: "Helmets", slug: "men/fashion-accessories/helmets" },
        ],
      },
      {
        heading: "Bags & Backpacks",
        slug: "men/bags-and-backpacks",
        items: [],
      },
      {
        heading: "Luggages & Trolleys",
        slug: "men/luggages-and-trolleys",
        items: [],
      },
    ],
  },

  {
    title: "WOMEN",
    section1: [
      {
        heading: "Indian & Fusion Wear",
        slug: "women/indian-and-fusion-wear",
        items: [
          { title: "Kurtas & Suits", slug: "women/indian-and-fusion-wear/kurtas-and-suits" },
          { title: "Kurtis, Tunics & Tops", slug: "women/indian-and-fusion-wear/kurtis-tunics-and-tops" },
          { title: "Sarees", slug: "women/indian-and-fusion-wear/sarees" },
          { title: "Ethnic Wear", slug: "women/indian-and-fusion-wear/ethnic-wear" },
          { title: "Leggings, Salwars & Churidars", slug: "women/indian-and-fusion-wear/leggings-salwars-and-churidars" },
          { title: "Skirts & Palazzos", slug: "women/indian-and-fusion-wear/skirts-and-palazzos" },
          { title: "Dress Materials", slug: "women/indian-and-fusion-wear/dress-materials" },
          { title: "Lehenga Cholis", slug: "women/indian-and-fusion-wear/lehenga-cholis" },
          { title: "Dupattas & Shawls", slug: "women/indian-and-fusion-wear/dupattas-and-shawls" },
          { title: "Jackets", slug: "women/indian-and-fusion-wear/jackets" },
        ],
      },
      {
        heading: "Belts, Scarves & More",
        slug: "women/belts-scarves-and-more",
        items: [],
      },
      {
        heading: "Watches & Wearables",
        slug: "women/watches-and-wearables",
        items: [],
      },
    ],
    section2: [
      {
        heading: "Western Wear",
        slug: "women/western-wear",
        items: [
          { title: "Dresses", slug: "women/western-wear/dresses" },
          { title: "Tops", slug: "women/western-wear/tops" },
          { title: "Tshirts", slug: "women/western-wear/tshirts" },
          { title: "Jeans", slug: "women/western-wear/jeans" },
          { title: "Trousers & Capris", slug: "women/western-wear/trousers-and-capris" },
          { title: "Shorts & Skirts", slug: "women/western-wear/shorts-and-skirts" },
          { title: "Co-ords", slug: "women/western-wear/co-ords" },
          { title: "Playsuits", slug: "women/western-wear/playsuits" },
          { title: "Jumpsuits", slug: "women/western-wear/jumpsuits" },
          { title: "Shrugs", slug: "women/western-wear/shrugs" },
          { title: "Sweaters & Sweatshirts", slug: "women/western-wear/sweaters-and-sweatshirts" },
          { title: "Jackets & Coats", slug: "women/western-wear/jackets-and-coats" },
          { title: "Blazers & Waistcoats", slug: "women/western-wear/blazers-and-waistcoats" },
        ],
      },
      {
        heading: "Plus Size",
        slug: "women/plus-size",
        items: [],
      },
    ],
    section3: [
      {
        heading: "Maternity",
        slug: "women/maternity",
        items: [],
      },
      {
        heading: "Sunglasses & Frames",
        slug: "women/sunglasses-and-frames",
        items: [],
      },
      {
        heading: "Footwear",
        slug: "women/footwear",
        items: [
          { title: "Flats", slug: "women/footwear/flats" },
          { title: "Casual Shoes", slug: "women/footwear/casual-shoes" },
          { title: "Heels", slug: "women/footwear/heels" },
          { title: "Boots", slug: "women/footwear/boots" },
          { title: "Sports Shoes & Floaters", slug: "women/footwear/sports-shoes-and-floaters" },
        ],
      },
      {
        heading: "Sports & Active Wear",
        slug: "women/sports-and-active-wear",
        items: [
          { title: "Clothing", slug: "women/sports-and-active-wear/clothing" },
          { title: "Footwear", slug: "women/sports-and-active-wear/footwear" },
          { title: "Sports Accessories", slug: "women/sports-and-active-wear/sports-accessories" },
          { title: "Sports Equipment", slug: "women/sports-and-active-wear/sports-equipment" },
        ],
      },
    ],
    section4: [
      {
        heading: "Lingerie & Sleepwear",
        slug: "women/lingerie-and-sleepwear",
        items: [
          { title: "Bra", slug: "women/lingerie-and-sleepwear/bra" },
          { title: "Briefs", slug: "women/lingerie-and-sleepwear/briefs" },
          { title: "Shapewear", slug: "women/lingerie-and-sleepwear/shapewear" },
          { title: "Sleepwear & Loungewear", slug: "women/lingerie-and-sleepwear/sleepwear-and-loungewear" },
          { title: "Swimwear", slug: "women/lingerie-and-sleepwear/swimwear" },
          { title: "Camisoles & Thermals", slug: "women/lingerie-and-sleepwear/camisoles-and-thermals" },
        ],
      },
      {
        heading: "Beauty & Personal Care",
        slug: "women/beauty-and-personal-care",
        items: [
          { title: "Makeup", slug: "women/beauty-and-personal-care/makeup" },
          { title: "Skincare", slug: "women/beauty-and-personal-care/skincare" },
          { title: "Premium Beauty", slug: "women/beauty-and-personal-care/premium-beauty" },
          { title: "Lipsticks", slug: "women/beauty-and-personal-care/lipsticks" },
          { title: "Fragrances", slug: "women/beauty-and-personal-care/fragrances" },
        ],
      },
    ],
    section5: [
      {
        heading: "Gadgets",
        slug: "women/gadgets",
        items: [
          { title: "Smart Wearables", slug: "women/gadgets/smart-wearables" },
          { title: "Fitness Gadgets", slug: "women/gadgets/fitness-gadgets" },
          { title: "Headphones", slug: "women/gadgets/headphones" },
          { title: "Speakers", slug: "women/gadgets/speakers" },
        ],
      },
      {
        heading: "Jewellery",
        slug: "women/jewellery",
        items: [
          { title: "Fashion Jewellery", slug: "women/jewellery/fashion-jewellery" },
          { title: "Fine Jewellery", slug: "women/jewellery/fine-jewellery" },
          { title: "Earrings", slug: "women/jewellery/earrings" },
        ],
      },
      {
        heading: "Backpacks",
        slug: "women/backpacks",
        items: [],
      },
      {
        heading: "Handbags, Bags & Wallets",
        slug: "women/handbags-bags-and-wallets",
        items: [],
      },
      {
        heading: "Luggages & Trolleys",
        slug: "women/luggages-and-trolleys",
        items: [],
      },
    ],
  },

  {
    title: "KIDS",
    section1: [
      {
        heading: "Boys Clothing",
        slug: "kids/boys-clothing",
        items: [
          { title: "T-Shirts", slug: "kids/boys-clothing/t-shirts" },
          { title: "Shirts", slug: "kids/boys-clothing/shirts" },
          { title: "Shorts", slug: "kids/boys-clothing/shorts" },
          { title: "Jeans", slug: "kids/boys-clothing/jeans" },
          { title: "Trousers", slug: "kids/boys-clothing/trousers" },
          { title: "Clothing Sets", slug: "kids/boys-clothing/clothing-sets" },
          { title: "Ethnic Wear", slug: "kids/boys-clothing/ethnic-wear" },
          { title: "Track Pants & Pyjamas", slug: "kids/boys-clothing/track-pants-and-pyjamas" },
          { title: "Jacket, Sweater & Sweatshirts", slug: "kids/boys-clothing/jacket-sweater-and-sweatshirts" },
          { title: "Party Wear", slug: "kids/boys-clothing/party-wear" },
          { title: "Innerwear & Thermals", slug: "kids/boys-clothing/innerwear-and-thermals" },
          { title: "Nightwear & Loungewear", slug: "kids/boys-clothing/nightwear-and-loungewear" },
          { title: "Value Packs", slug: "kids/boys-clothing/value-packs" },
        ],
      },
    ],
    section2: [
      {
        heading: "Girls Clothing",
        slug: "kids/girls-clothing",
        items: [
          { title: "Dresses", slug: "kids/girls-clothing/dresses" },
          { title: "Tops", slug: "kids/girls-clothing/tops" },
          { title: "Tshirts", slug: "kids/girls-clothing/tshirts" },
          { title: "Clothing Sets", slug: "kids/girls-clothing/clothing-sets" },
          { title: "Lehenga choli", slug: "kids/girls-clothing/lehenga-choli" },
          { title: "Kurta Sets", slug: "kids/girls-clothing/kurta-sets" },
          { title: "Party wear", slug: "kids/girls-clothing/party-wear" },
          { title: "Dungarees & Jumpsuits", slug: "kids/girls-clothing/dungarees-and-jumpsuits" },
          { title: "Skirts & shorts", slug: "kids/girls-clothing/skirts-and-shorts" },
          { title: "Tights & Leggings", slug: "kids/girls-clothing/tights-and-leggings" },
          { title: "Jeans, Trousers & Capris", slug: "kids/girls-clothing/jeans-trousers-and-capris" },
          { title: "Jacket, Sweater & Sweatshirts", slug: "kids/girls-clothing/jacket-sweater-and-sweatshirts" },
          { title: "Innerwear & Thermals", slug: "kids/girls-clothing/innerwear-and-thermals" },
          { title: "Nightwear & Loungewear", slug: "kids/girls-clothing/nightwear-and-loungewear" },
          { title: "Value Packs", slug: "kids/girls-clothing/value-packs" },
        ],
      },
    ],
    section3: [
      {
        heading: "Footwear",
        slug: "kids/footwear",
        items: [
          { title: "Casual Shoes", slug: "kids/footwear/casual-shoes" },
          { title: "Flipflops", slug: "kids/footwear/flipflops" },
          { title: "Sports Shoes", slug: "kids/footwear/sports-shoes" },
          { title: "Flats", slug: "kids/footwear/flats" },
          { title: "Sandals", slug: "kids/footwear/sandals" },
          { title: "Heels", slug: "kids/footwear/heels" },
          { title: "School Shoes", slug: "kids/footwear/school-shoes" },
          { title: "Socks", slug: "kids/footwear/socks" },
        ],
      },
      {
        heading: "Toys & Games",
        slug: "kids/toys-and-games",
        items: [
          { title: "Learning & Development", slug: "kids/toys-and-games/learning-and-development" },
          { title: "Activity Toys", slug: "kids/toys-and-games/activity-toys" },
          { title: "Soft Toys", slug: "kids/toys-and-games/soft-toys" },
          { title: "Action Figure / Play set", slug: "kids/toys-and-games/action-figure-play-set" },
        ],
      },
    ],
    section4: [
      {
        heading: "Infants",
        slug: "kids/infants",
        items: [
          { title: "Bodysuits", slug: "kids/infants/bodysuits" },
          { title: "Rompers & Sleepsuits", slug: "kids/infants/rompers-and-sleepsuits" },
          { title: "Clothing Sets", slug: "kids/infants/clothing-sets" },
          { title: "Tshirts & Tops", slug: "kids/infants/tshirts-and-tops" },
          { title: "Dresses", slug: "kids/infants/dresses" },
          { title: "Bottom wear", slug: "kids/infants/bottom-wear" },
          { title: "Winter Wear", slug: "kids/infants/winter-wear" },
          { title: "Innerwear & Sleepwear", slug: "kids/infants/innerwear-and-sleepwear" },
          { title: "Infant Care", slug: "kids/infants/infant-care" },
        ],
      },
      {
        heading: "Home & Bath",
        slug: "kids/home-and-bath",
        items: [],
      },
      {
        heading: "Personal Care",
        slug: "kids/personal-care",
        items: [],
      },
    ],
  },

  {
    title: "ACCESSORIES",
    section1: [
      {
        heading: "Fashion Accessories",
        slug: "accessories/fashion-accessories",
        items: [
          { title: "Wallets", slug: "accessories/fashion-accessories/wallets" },
          { title: "Belts", slug: "accessories/fashion-accessories/belts" },
          { title: "Ties, Cufflinks & Pocket Squares", slug: "accessories/fashion-accessories/ties-cufflinks-and-pocket-squares" },
          { title: "Caps & Hats", slug: "accessories/fashion-accessories/caps-and-hats" },
          { title: "Mufflers, Scarves & Gloves", slug: "accessories/fashion-accessories/mufflers-scarves-and-gloves" },
          { title: "Rings & Wristwear", slug: "accessories/fashion-accessories/rings-and-wristwear" },
          { title: "Accessory Gift Sets", slug: "accessories/fashion-accessories/accessory-gift-sets" },
        ],
      },
      {
        heading: "Jewellery",
        slug: "accessories/jewellery",
        items: [
          { title: "Fashion Jewellery", slug: "accessories/jewellery/fashion-jewellery" },
          { title: "Fine Jewellery", slug: "accessories/jewellery/fine-jewellery" },
          { title: "Earrings", slug: "accessories/jewellery/earrings" },
          { title: "Necklaces & Pendants", slug: "accessories/jewellery/necklaces-and-pendants" },
          { title: "Bangles & Bracelets", slug: "accessories/jewellery/bangles-and-bracelets" },
          { title: "Anklets", slug: "accessories/jewellery/anklets" },
        ],
      },
    ],
    section2: [
      {
        heading: "Bags & Backpacks",
        slug: "accessories/bags-and-backpacks",
        items: [
          { title: "Backpacks", slug: "accessories/bags-and-backpacks/backpacks" },
          { title: "Handbags", slug: "accessories/bags-and-backpacks/handbags" },
          { title: "Sling Bags", slug: "accessories/bags-and-backpacks/sling-bags" },
          { title: "Totes", slug: "accessories/bags-and-backpacks/totes" },
          { title: "Clutches", slug: "accessories/bags-and-backpacks/clutches" },
          { title: "Wallets & Purses", slug: "accessories/bags-and-backpacks/wallets-and-purses" },
          { title: "Laptop Bags", slug: "accessories/bags-and-backpacks/laptop-bags" },
        ],
      },
      {
        heading: "Luggages & Trolleys",
        slug: "accessories/luggages-and-trolleys",
        items: [
          { title: "Cabin Trolleys", slug: "accessories/luggages-and-trolleys/cabin-trolleys" },
          { title: "Medium Trolleys", slug: "accessories/luggages-and-trolleys/medium-trolleys" },
          { title: "Large Trolleys", slug: "accessories/luggages-and-trolleys/large-trolleys" },
          { title: "Duffel Bags", slug: "accessories/luggages-and-trolleys/duffel-bags" },
          { title: "Travel Accessories", slug: "accessories/luggages-and-trolleys/travel-accessories" },
        ],
      },
    ],
    section3: [
      {
        heading: "Watches & Wearables",
        slug: "accessories/watches-and-wearables",
        items: [
          { title: "Watches", slug: "accessories/watches-and-wearables/watches" },
          { title: "Smart Watches", slug: "accessories/watches-and-wearables/smart-watches" },
          { title: "Watch Straps", slug: "accessories/watches-and-wearables/watch-straps" },
          { title: "Fitness Bands", slug: "accessories/watches-and-wearables/fitness-bands" },
        ],
      },
      {
        heading: "Sunglasses & Frames",
        slug: "accessories/sunglasses-and-frames",
        items: [
          { title: "Sunglasses", slug: "accessories/sunglasses-and-frames/sunglasses" },
          { title: "Eyeglasses", slug: "accessories/sunglasses-and-frames/eyeglasses" },
          { title: "Reading Glasses", slug: "accessories/sunglasses-and-frames/reading-glasses" },
          { title: "Contact Lenses", slug: "accessories/sunglasses-and-frames/contact-lenses" },
        ],
      },
      {
        heading: "Belts, Scarves & More",
        slug: "accessories/belts-scarves-and-more",
        items: [],
      },
    ],
    section4: [
      {
        heading: "Footwear",
        slug: "accessories/footwear",
        items: [
          { title: "Casual Shoes", slug: "accessories/footwear/casual-shoes" },
          { title: "Sports Shoes", slug: "accessories/footwear/sports-shoes" },
          { title: "Formal Shoes", slug: "accessories/footwear/formal-shoes" },
          { title: "Sneakers", slug: "accessories/footwear/sneakers" },
          { title: "Sandals & Floaters", slug: "accessories/footwear/sandals-and-floaters" },
          { title: "Flip Flops", slug: "accessories/footwear/flip-flops" },
          { title: "Socks", slug: "accessories/footwear/socks" },
        ],
      },
      {
        heading: "Headphones & Speakers",
        slug: "accessories/headphones-and-speakers",
        items: [
          { title: "Headphones", slug: "accessories/headphones-and-speakers/headphones" },
          { title: "Earphones", slug: "accessories/headphones-and-speakers/earphones" },
          { title: "Bluetooth Speakers", slug: "accessories/headphones-and-speakers/bluetooth-speakers" },
          { title: "Power Banks", slug: "accessories/headphones-and-speakers/power-banks" },
          { title: "Phone Cases", slug: "accessories/headphones-and-speakers/phone-cases" },
        ],
      },
    ],
    section5: [
      {
        heading: "Personal Care & Grooming",
        slug: "accessories/personal-care-and-grooming",
        items: [
          { title: "Perfumes & Body Mists", slug: "accessories/personal-care-and-grooming/perfumes-and-body-mists" },
          { title: "Deodorants", slug: "accessories/personal-care-and-grooming/deodorants" },
          { title: "Trimmers", slug: "accessories/personal-care-and-grooming/trimmers" },
          { title: "Hair Care", slug: "accessories/personal-care-and-grooming/hair-care" },
          { title: "Skin Care", slug: "accessories/personal-care-and-grooming/skin-care" },
          { title: "Makeup", slug: "accessories/personal-care-and-grooming/makeup" },
        ],
      },
      {
        heading: "Helmets & Riding Gear",
        slug: "accessories/helmets-and-riding-gear",
        items: [
          { title: "Helmets", slug: "accessories/helmets-and-riding-gear/helmets" },
          { title: "Riding Gloves", slug: "accessories/helmets-and-riding-gear/riding-gloves" },
          { title: "Riding Jackets", slug: "accessories/helmets-and-riding-gear/riding-jackets" },
        ],
      },
    ],
  },
];