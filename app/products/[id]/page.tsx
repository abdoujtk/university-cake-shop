// app/products/[id]/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // بيانات المنتج (في تطبيق حقيقي سيتم جلبها من API)
  const product = {
    id: productId,
    name: "كعك الشوكولاتة الفاخر",
    price: 1200,
    originalPrice: 1500,
    images: [
      "/images/chocolate-cake.jpg",
      "/images/chocolate-cake-2.jpg",
      "/images/chocolate-cake-3.jpg",
    ],
    category: "فاخر",
    rating: 4.8,
    reviews: 47,
    description:
      "شوكولاتة بلجيكية فاخرة مع توبينغ من الكراميل، مصنوعة بأفضل المكونات الطازجة والمستوردة. تتميز بنسيجها الناعم وطعمها الغني الذي يناسب جميع الأذواق.",
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
  };

  const relatedProducts = [
    {
      id: 2,
      name: "تشيز كيك بالتوت",
      price: 1500,
      image: "/images/cheesecake.jpg",
      category: "مميز",
    },
    {
      id: 4,
      name: "ماكارون فرنسي",
      price: 600,
      image: "/images/macaron.jpg",
      category: "تقليدي",
    },
    {
      id: 6,
      name: "كعك الجبن بالعسل",
      price: 1300,
      image: "/images/cheese-cake.jpg",
      category: "تقليدي",
    },
  ];

  const reviews = [
    {
      id: 1,
      user: "أحمد محمد",
      rating: 5,
      comment: "أطيب كعك جربته في حياتي! النكهة رائعة والجودة ممتازة.",
      date: "2024-01-15",
    },
    {
      id: 2,
      user: "فاطمة الزهراء",
      rating: 4,
      comment: "جيد جداً ولكن أتمنى لو كان الحجم أكبر قليلاً.",
      date: "2024-01-10",
    },
    {
      id: 3,
      user: "محمد أمين",
      rating: 5,
      comment: "شوكولاتة بلجيكية حقيقية، أنصح الجميع بتجربته.",
      date: "2024-01-08",
    },
  ];

  const addToCart = () => {
    alert(`تم إضافة ${quantity} من ${product.name} إلى السلة!`);
  };

  const addToWishlist = () => {
    alert(`تم إضافة ${product.name} إلى المفضلة!`);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 font-arabic flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            المنتج غير موجود
          </h2>
          <p className="text-gray-600 mb-6">
            عذراً، لم نتمكن من العثور على المنتج المطلوب
          </p>
          <Link
            href="/products"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            العودة إلى المنتجات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-arabic">
      {/* الهيدر */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 space-x-reverse mb-4 md:mb-0">
              <Link
                href="/"
                className="flex items-center space-x-3 space-x-reverse"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex flex-col items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">حلويات</span>
                  <span className="text-white font-bold text-xs">الجلفة</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    حلويات الجلفة
                  </h1>
                </div>
              </Link>
            </div>

            <nav className="flex space-x-6 space-x-reverse text-sm">
              <Link
                href="/"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                الرئيسية
              </Link>
              <Link
                href="/products"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                المنتجات
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                عن المتجر
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-orange-600 transition-colors ml-6"
              >
                اتصل بنا
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* مسار التنقل */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex space-x-2 space-x-reverse text-sm text-gray-600">
          <Link href="/" className="hover:text-orange-600">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-orange-600">
            المنتجات
          </Link>
          <span>/</span>
          <span className="text-orange-600">{product.name}</span>
        </nav>
      </div>

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* معرض الصور */}
          <div>
            {/* الصورة الرئيسية */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
              <div className="h-96 bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🎂</div>
                  <div className="text-lg">صورة {product.name}</div>
                </div>
              </div>
            </div>

            {/* الصور المصغرة */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-white rounded-lg shadow-sm border-2 overflow-hidden transition-all duration-200 ${
                    selectedImage === index
                      ? "border-orange-500"
                      : "border-transparent hover:border-orange-300"
                  }`}
                >
                  <div className="h-24 bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center">
                    <div className="text-2xl">🎂</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* تفاصيل المنتج */}
          <div>
            {/* العلامات */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* اسم المنتج */}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            {/* التقييم والمبيعات */}
            <div className="flex items-center space-x-4 space-x-reverse mb-6">
              <div className="flex items-center space-x-1 space-x-reverse">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} تقييم)</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-green-600 font-medium">
                ⚡ بيع {product.soldThisMonth} هذا الشهر
              </span>
            </div>

            {/* السعر */}
            <div className="flex items-center space-x-4 space-x-reverse mb-6">
              <span className="text-3xl font-bold text-orange-600">
                {product.price.toLocaleString()} د.ج
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    {product.originalPrice.toLocaleString()} د.ج
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    وفر{" "}
                    {(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                      100
                    ).toFixed(0)}
                    %
                  </span>
                </>
              )}
            </div>

            {/* الوصف المختصر */}
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* المعلومات السريعة */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-gray-500">⏱️</span>
                <span>التحضير: {product.preparationTime}</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-gray-500">⚖️</span>
                <span>الوزن: {product.weight}</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-gray-500">📦</span>
                <span>الأبعاد: {product.dimensions}</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <span className="text-gray-500">📅</span>
                <span>مدة الصلاحية: {product.shelfLife}</span>
              </div>
            </div>

            {/* الكمية والإجراءات */}
            <div className="space-y-6">
              {/* اختيار الكمية */}
              <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-gray-700 font-medium">الكمية:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* أزرار الإجراء */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={addToCart}
                  className="flex-1 bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 space-x-reverse text-lg"
                >
                  <span>🛒</span>
                  <span>
                    أضف إلى السلة -{" "}
                    {(product.price * quantity).toLocaleString()} د.ج
                  </span>
                </button>
                <button
                  onClick={addToWishlist}
                  className="px-6 py-4 border-2 border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <span>❤️</span>
                  <span>المفضلة</span>
                </button>
              </div>

              {/* ضمانات سريعة */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-600">
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <span>🚚</span>
                  <span>توصيل سريع</span>
                </div>
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <span>↩️</span>
                  <span>إرجاع مجاني</span>
                </div>
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <span>🔒</span>
                  <span>دفع آمن</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* التبويبات التفصيلية */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 space-x-reverse">
              {[
                { id: "description", label: "الوصف التفصيلي" },
                { id: "ingredients", label: "المكونات" },
                { id: "nutrition", label: "القيمة الغذائية" },
                { id: "reviews", label: `التقييمات (${reviews.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-orange-500 text-orange-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "description" && (
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: product.detailedDescription,
                }}
              />
            )}

            {activeTab === "ingredients" && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  المكونات
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.ingredients.map((ingredient, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 space-x-reverse"
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "nutrition" && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  القيمة الغذائية (لكل 100 جرام)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {product.nutrition.calories}
                    </div>
                    <div className="text-gray-600">سعرة حرارية</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {product.nutrition.fat}g
                    </div>
                    <div className="text-gray-600">دهون</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {product.nutrition.carbs}g
                    </div>
                    <div className="text-gray-600">كربوهيدرات</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {product.nutrition.protein}g
                    </div>
                    <div className="text-gray-600">بروتين</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  تقييمات العملاء
                </h3>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white p-6 rounded-lg shadow-sm border"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-gray-800">
                            {review.user}
                          </h4>
                          <div className="flex items-center space-x-1 space-x-reverse mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <span className="text-gray-500 text-sm">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* منتجات ذات صلة */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            منتجات ذات صلة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
              >
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">🎂</div>
                      <div className="text-sm">صورة {relatedProduct.name}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-orange-600">
                        {relatedProduct.price.toLocaleString()} د.ج
                      </span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                        {relatedProduct.category}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* الفوتر */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-4">
              © 2024 حلويات الجلفة. جميع الحقوق محفوظة | مشروع التسويق
              الإلكتروني الجامعي
            </p>
            <p className="text-orange-300">
              تم التطوير بواسطة: [اسمك] | سنة الميلاد: [سنة ميلادك]
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
