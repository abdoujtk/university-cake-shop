// app/data/products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  description: string;
  detailedDescription: string;
  ingredients: string[];
  nutrition: {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    sugar: number;
  };
  tags: string[];
  soldThisMonth: number;
  preparationTime: string;
  inStock: boolean;
  isFeatured: boolean;
  weight: string;
  dimensions: string;
  shelfLife: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "كعك الشوكولاتة الفاخر",
    price: 1200,
    originalPrice: 1500,
    images: [
      "/images/chocolate-cake.jpg",
      "/images/cheesecake.jpg",
      "/images/birthday-cake.jpg",
    ],
    category: "فاخر",
    rating: 4.8,
    reviews: 47,
    description: "شوكولاتة بلجيكية فاخرة مع توبينغ من الكراميل",
    detailedDescription: `
      <p>كعك الشوكولاتة الفاخر هو تحفة حلويات تجمع بين الأناقة والطعم الرائع. صنع هذا الكعك خصيصاً لعشاق الشوكولاتة الأصيلة.</p>
      
      <h4>المميزات:</h4>
      <ul>
        <li>شوكولاتة بلجيكية 70% كاكاو</li>
        <li>كريمة طازجة 100%</li>
        <li>توبينغ كراميل منزلي</li>
        <li>خالي من المواد الحافظة</li>
        <li>مناسب للتجميد</li>
      </ul>
      
      <h4>طريقة التقديم:</h4>
      <p>يقدم في درجة حرارة الغرفة مع كوب من القهوة أو الحليب.</p>
    `,
    ingredients: [
      "شوكولاتة بلجيكية",
      "كريمة طازجة",
      "كراميل",
      "زبدة",
      "سكر",
      "بيض",
      "دقيق",
      "فانيليا",
    ],
    nutrition: {
      calories: 320,
      fat: 15,
      carbs: 45,
      protein: 5,
      sugar: 30,
    },
    tags: ["الأكثر مبيعاً", "جديد", "مميز"],
    soldThisMonth: 23,
    preparationTime: "15-20 دقيقة",
    inStock: true,
    isFeatured: true,
    weight: "1 كجم",
    dimensions: "20 × 20 × 8 سم",
    shelfLife: "5 أيام في الثلاجة",
  },
  {
    id: 2,
    name: "تشيز كيك بالتوت",
    price: 1500,
    originalPrice: 1800,
    images: ["/images/cheesecake.jpg", "/images/chocolate-cake.jpg"],
    category: "مميز",
    rating: 4.9,
    reviews: 32,
    description: "تشيز كيك كريمي مع صلصة توت طازجة",
    detailedDescription: `
      <p>تشيز كيك كريمي مع صلصة توت طازجة، مصنوع بمكونات طبيعية 100%.</p>
      
      <h4>المميزات:</h4>
      <ul>
        <li>جبن كريمي عالي الجودة</li>
        <li>توت طازج من المزارع المحلية</li>
        <li>قاعدة بسكويت هشة</li>
        <li>خالي من المواد الحافظة</li>
      </ul>
      
      <h4>طريقة التقديم:</h4>
      <p>يقدم مبرداً مع قليل من صلصة التوت الإضافية.</p>
    `,
    ingredients: ["جبن كريمي", "توت طازج", "بسكويت", "قشطة", "سكر", "فانيليا"],
    nutrition: {
      calories: 280,
      fat: 12,
      carbs: 35,
      protein: 8,
      sugar: 25,
    },
    tags: ["محدود", "صحي"],
    soldThisMonth: 18,
    preparationTime: "20-25 دقيقة",
    inStock: true,
    isFeatured: true,
    weight: "1.2 كجم",
    dimensions: "22 × 22 × 10 سم",
    shelfLife: "4 أيام في الثلاجة",
  },
  {
    id: 3,
    name: "كعك عيد الميلاد",
    price: 4500,
    originalPrice: 5000,
    images: ["/images/birthday-cake1.jpg", "/images/cheesecake.jpg"],
    category: "مناسبات",
    rating: 4.7,
    reviews: 28,
    description: "تصميم خاص حسب الطلب لجميع المناسبات",
    detailedDescription: `
      <p>تصميم خاص حسب الطلب لجميع المناسبات، يمكن تخصيصه حسب رغبتك.</p>
      
      <h4>المميزات:</h4>
      <ul>
        <li>تصميم مخصص حسب الطلب</li>
        <li>كتابة اسم الشخص المهدى إليه</li>
        <li>تزيين بفواكه طازجة</li>
        <li>يناسب جميع المناسبات</li>
      </ul>
      
      <h4>طريقة التقديم:</h4>
      <p>يقدم في درجة حرارة الغرفة مع الشموع والتزيين المناسب.</p>
    `,
    ingredients: [
      "كريمة زبدة",
      "شوكولاتة",
      "فواكه طازجة",
      "دقيق",
      "بيض",
      "سكر",
    ],
    nutrition: {
      calories: 450,
      fat: 20,
      carbs: 60,
      protein: 6,
      sugar: 40,
    },
    tags: ["تصميم خاص", "كبير"],
    soldThisMonth: 12,
    preparationTime: "2-3 أيام",
    inStock: true,
    isFeatured: false,
    weight: "2 كجم",
    dimensions: "25 × 25 × 12 سم",
    shelfLife: "5 أيام في الثلاجة",
  },
  {
    id: 4,
    name: "ماكارون فرنسي",
    price: 600,
    originalPrice: 750,
    images: ["/images/macaron.jpg", "/images/chocolate-cake.jpg"],
    category: "تقليدي",
    rating: 4.6,
    reviews: 89,
    description: "ماكارون فرنسي أصلي بألوان ونكهات متعددة",
    detailedDescription: `
      <p>ماكارون فرنسي أصلي بألوان ونكهات متعددة، مصنوع حسب الوصفة الفرنسية الأصلية.</p>
      
      <h4>المميزات:</h4>
      <ul>
        <li>نكهات متعددة: فراولة، شوكولاتة، فانيليا</li>
        <li>ألوان طبيعية من الفواكه</li>
        <li>قشرة مقرمشة وداخل كريمي</li>
        <li>حجم مثالي للتقديم</li>
      </ul>
      
      <h4>طريقة التقديم:</h4>
      <p>يقدم مع الشاي أو القهوة كتحلية خفيفة.</p>
    `,
    ingredients: ["لوز", "سكر", "كريمة", "ملونات طبيعية", "نكهات طبيعية"],
    nutrition: {
      calories: 95,
      fat: 4,
      carbs: 15,
      protein: 2,
      sugar: 12,
    },
    tags: ["تشكيلة", "سريع"],
    soldThisMonth: 45,
    preparationTime: "10-15 دقيقة",
    inStock: true,
    isFeatured: true,
    weight: "250 جرام",
    dimensions: "15 × 15 × 5 سم",
    shelfLife: "7 أيام في الثلاجة",
  },
  {
    id: 5,
    name: "دوناتس بالتوت",
    price: 800,
    originalPrice: 1000,
    images: ["/images/donuts.jpg", "/images/birthday-cake.jpg"],
    category: "سناك",
    rating: 4.5,
    reviews: 56,
    description: "دوناتس طازجة مغطاة بصلصة التوت",
    detailedDescription: `
      <p>دوناتس طازجة مغطاة بصلصة التوت الطبيعية، مقرمشة من الخارج وطرية من الداخل.</p>
      
      <h4>المميزات:</h4>
      <ul>
        <li>صلصة توت طبيعية 100%</li>
        <li>مقلية بزيت نباتي نظيف</li>
        <li>حجم مناسب للوجبات الخفيفة</li>
        <li>تقدم طازجة يومياً</li>
      </ul>
      
      <h4>طريقة التقديم:</h4>
      <p>تقدم دافئة مع الحليب أو العصير.</p>
    `,
    ingredients: ["دقيق", "توت", "سكر", "زيت", "بيض", "خميرة"],
    nutrition: {
      calories: 210,
      fat: 8,
      carbs: 30,
      protein: 4,
      sugar: 15,
    },
    tags: ["جديد", "سريع"],
    soldThisMonth: 34,
    preparationTime: "10-12 دقيقة",
    inStock: true,
    isFeatured: false,
    weight: "400 جرام",
    dimensions: "18 × 18 × 6 سم",
    shelfLife: "3 أيام في الثلاجة",
  },
  {
    id: 6,
    name: "كعك الجبن بالعسل",
    price: 1300,
    originalPrice: 1600,
    images: ["/images/cheesecake.jpg", "/images/macaron.jpg"],
    category: "تقليدي",
    rating: 4.8,
    reviews: 41,
    description: "مزيج رائع من الجبن الكريمي والعسل الطبيعي",
    detailedDescription: `
      <p>مزيج رائع من الجبن الكريمي والعسل الطبيعي، يحافظ على الطعم الأصلي مع لمسة عصرية.</p>
      
      <h4>المميزات:</h4>
      <ul>
        <li>عسل طبيعي 100%</li>
        <li>جبن كريمي عالي الجودة</li>
        <li>قاعدة بسكويت بالزبدة</li>
        <li>خالي من السكريات المضافة</li>
      </ul>
      
      <h4>طريقة التقديم:</h4>
      <p>يقدم مبرداً مع قليل من العسل الإضافي.</p>
    `,
    ingredients: ["جبنة كريمة", "عسل طبيعي", "قشطة", "بسكويت", "زبدة"],
    nutrition: {
      calories: 290,
      fat: 14,
      carbs: 35,
      protein: 7,
      sugar: 22,
    },
    tags: ["صحي", "طبيعي"],
    soldThisMonth: 22,
    preparationTime: "18-22 دقيقة",
    inStock: true,
    isFeatured: true,
    weight: "1.1 كجم",
    dimensions: "21 × 21 × 9 سم",
    shelfLife: "4 أيام في الثلاجة",
  },
  {
    id: 7,
    name: "كعك اللوز بالشوكولاتة",
    price: 1100,
    originalPrice: 1400,
    images: ["/images/chocolate-cake.jpg", "/images/cheesecake.jpg"],
    category: "فاخر",
    rating: 4.7,
    reviews: 33,
    description: "كعك لوز مقرمش مع طبقة شوكولاتة غنية",
    detailedDescription: `
      <p>كعك لوز مقرمش مع طبقة شوكولاتة غنية، يجمع بين القرمشة والنعومة في قضمة واحدة.</p>
      
      <h4>المميزات:</h4>
      <ul>
        <li>لوز طبيعي 100%</li>
        <li>شوكولاتة داكنة عالية الجودة</li>
        <li>مزيج مثالي من القرمشة والنعومة</li>
        <li>مناسب لمحبي المكسرات</li>
      </ul>
      
      <h4>طريقة التقديم:</h4>
      <p>يقدم مع القهوة السادة أو الشاي.</p>
    `,
    ingredients: ["لوز", "شوكولاتة داكنة", "زبدة", "سكر", "بيض", "دقيق"],
    nutrition: {
      calories: 340,
      fat: 18,
      carbs: 40,
      protein: 6,
      sugar: 28,
    },
    tags: ["مقرمش", "جديد"],
    soldThisMonth: 19,
    preparationTime: "25-30 دقيقة",
    inStock: false,
    isFeatured: false,
    weight: "900 جرام",
    dimensions: "20 × 20 × 7 سم",
    shelfLife: "6 أيام في الثلاجة",
  },
  {
    id: 8,
    name: "كعك الموز بالكريمة",
    price: 950,
    originalPrice: 1200,
    images: ["/images/banana.jpg", "/images/macaron.jpg"],
    category: "صحي",
    rating: 4.4,
    reviews: 27,
    description: "كيكة الموز صحي مع كريمة جبن خفيفة",
    detailedDescription: `
      <p>كعك الموز صحي مع كريمة جبن خفيفة، مثالي لمن يبحث عن خيارات صحية دون التضحية بالطعم.</p>
      
      <h4>المميزات:</h4>
      <ul>
        <li>موز طازج طبيعي</li>
        <li>كريمة جبن خفيفة</li>
        <li>محتوى منخفض من السكر</li>
        <li>غني بالألياف الطبيعية</li>
      </ul>
      
      <h4>طريقة التقديم:</h4>
      <p>يقدم كتحلية صحية أو وجبة خفيفة.</p>
    `,
    ingredients: ["موز", "جوز", "كريمة جبن", "دقيق", "بيض", "عسل"],
    nutrition: {
      calories: 180,
      fat: 6,
      carbs: 28,
      protein: 5,
      sugar: 18,
    },
    tags: ["صحي", "قليل السكر"],
    soldThisMonth: 15,
    preparationTime: "30-35 دقيقة",
    inStock: true,
    isFeatured: false,
    weight: "1 كجم",
    dimensions: "20 × 20 × 8 سم",
    shelfLife: "5 أيام في الثلاجة",
  },
];
