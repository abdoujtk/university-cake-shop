// app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);

  // بيانات المنتجات مع تفاصيل أكثر
  const products = [
    {
      id: 1,
      name: "كعك الشوكولاتة الفاخر",
      price: 1200,
      originalPrice: 1500,
      image: "/images/chocolate-cake.jpg",
      category: "فاخر",
      rating: 4.8,
      description: "شوكولاتة بلجيكية فاخرة مع توبينغ من الكراميل",
      tags: ["الأكثر مبيعاً", "جديد"],
    },
    {
      id: 2,
      name: "تشيز كيك بالتوت",
      price: 1500,
      originalPrice: 1800,
      image: "/images/tot.jpg",
      category: "مميز",
      rating: 4.9,
      description: "تشيز كيك كريمي مع صلصة توت طازجة",
      tags: ["محدود"],
    },
    {
      id: 3,
      name: "كعك عيد الميلاد",
      price: 4500,
      originalPrice: 5000,
      image: "/images/birthday-cake1.jpg",
      category: "مناسبات",
      rating: 4.7,
      description: "تصميم خاص حسب الطلب لجميع المناسبات",
      tags: ["تصميم خاص"],
    },
    {
      id: 4,
      name: "ماكارون فرنسي",
      price: 600,
      originalPrice: 750,
      image: "/images/macaron.jpg",
      category: "تقليدي",
      rating: 4.6,
      description: "ماكارون فرنسي أصلي بألوان ونكهات متعددة",
      tags: ["تشكيلة"],
    },
    {
      id: 5,
      name: "دوناتس بالتوت",
      price: 800,
      originalPrice: 1000,
      image: "/images/donuts.jpg",
      category: "سناك",
      rating: 4.5,
      description: "دوناتس طازجة مغطاة بصلصة التوت",
      tags: ["جديد"],
    },
    {
      id: 6,
      name: "البقلاوة ",
      price: 1300,
      originalPrice: 1600,
      image: "/images/baklaoi.jpg",
      category: "تقليدي",
      rating: 4.8,
      description:
        "طبقات رقيقة من العجين محشوة بالمكسرات وتحلى بالقطر أو العسل",
      tags: ["صحي"],
    },
  ];

  const categories = ["الكل", "فاخر", "مميز", "مناسبات", "تقليدي", "سناك"];
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "الكل" || product.category === selectedCategory;
    const matchesSearch =
      product.name.includes(searchTerm) ||
      product.description.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
    // تأثير مؤقت للإضافة للسلة
    const button = document.getElementById(`product-${productId}`);
    if (button) {
      button.classList.add("scale-110", "bg-green-500");
      setTimeout(() => {
        button.classList.remove("scale-110", "bg-green-500");
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 font-arabic">
      {/* الهيدر مع تأثير شفافية عند التمرير */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* اللوجو والدعاية */}
            <div className="flex items-center space-x-4 space-x-reverse mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex flex-col items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">حلويات</span>
                <span className="text-white font-bold text-sm">الجلفة</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  حلويات الجلفة
                </h1>
                <p className="text-gray-600 text-sm">
                  أطيب الحلويات بأفضل الأسعار
                </p>
              </div>
            </div>

            {/* شريط البحث المحسن */}
            <div className="w-full md:w-64">
              <div className="relative">
                <input
                  type="text"
                  dir="rtl"
                  placeholder={isSearchFocused ? "" : "...ابحث عن المنتج"}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-4 py-2 pr-10 rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-right placeholder:text-right bg-white/80 backdrop-blur-sm transition-all duration-300"
                />

                {/* أيقونة البحث - تختفي عند التركيز */}
                {!isSearchFocused && !searchTerm && (
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                )}

                {/* أيقونة المسح - تظهر عند وجود نص */}
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* سلة التسوق */}
            <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
              <div className="relative">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {cart.length}
                  </span>
                )}
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                طلب الآن
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* قسم الهيرو مع عرض ترويجي */}
      <section className="relative bg-gradient-to-r from-orange-400 to-pink-500 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              30% خصم يصل الى
            </h2>
            <p className="text-xl mb-8">
              على جميع أنواع الكعك الفاخر لمدة محدودة
            </p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                تسوق الآن
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
                تعرف على العروض
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-white/20 backdrop-blur-sm"></div>
      </section>

      {/* الفئات */}
      <section className="py-8 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-orange-200 hover:border-orange-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* المنتجات */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            منتجاتنا المميزة
          </h2>
          <p className="text-gray-600 text-lg">
            اكتشف تشكيلتنا الواسعة من الحلويات الشهية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
            >
              {/* صورة المنتج مع تأثيرات - تم التحديث باستخدام Image */}
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-pink-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // إذا فشل تحميل الصورة، عرض بديل
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 space-x-reverse">
                  <svg
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-800 font-bold text-sm">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* تفاصيل المنتج */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {product.name}
                  </h3>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* السعر والعروض */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-2xl font-bold text-orange-600">
                      {product.price.toLocaleString()} د.ج
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-400 line-through">
                        {product.originalPrice.toLocaleString()} د.ج
                      </span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                      وفر{" "}
                      {(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                        100
                      ).toFixed(0)}
                      %
                    </span>
                  )}
                </div>

                {/* أزرار الإجراء */}
                <div className="flex space-x-3 space-x-reverse">
                  <button
                    id={`product-${product.id}`}
                    onClick={() => addToCart(product.id)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-bold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span>أضف إلى السلة</span>
                  </button>
                  <button className="w-12 h-12 border-2 border-orange-500 text-orange-500 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* رسالة عند عدم وجود نتائج */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
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
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              لا توجد منتجات
            </h3>
            <p className="text-gray-600">
              لم نتمكن من العثور على منتجات تطابق بحثك
            </p>
          </div>
        )}
      </main>

      {/* قسم المميزات */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                جودة عالية
              </h3>
              <p className="text-gray-600">
                نستخدم أفضل المكونات الطازجة في جميع منتجاتنا
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                توصيل سريع
              </h3>
              <p className="text-gray-600">
                توصيل خلال 30 دقيقة في مدينة الجلفة
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                دعم مستمر
              </h3>
              <p className="text-gray-600">
                فريق دعم متاح 24/7 لمساعدتك في أي استفسار
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ح</span>
                </div>
                <h3 className="text-xl font-bold">حلويات الجلفة</h3>
              </div>
              <p className="text-gray-400">
                أطيب الحلويات بأفضل الأسعار في مدينة الجلفة
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    منتجاتنا
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    عروض خاصة
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    اتصل بنا
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">معلومات الاتصال</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 الجلفة، الجزائر</p>
                <p>📞 0550-123-456</p>
                <p>✉️ info@helwaty-djelfa.dz</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">
                اشترك في النشرة البريدية
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 rounded-r-lg text-gray-800 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-l-lg font-bold hover:from-orange-600 hover:to-pink-600 transition-all">
                  اشترك
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              © 2024 حلويات الجلفة. جميع الحقوق محفوظة | مشروع التسويق
              الإلكتروني الجامعي
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
