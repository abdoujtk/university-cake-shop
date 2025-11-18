// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);
  const [viewedProducts, setViewedProducts] = useState<number[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // بيانات المنتجات المحسنة
  const products = [
    {
      id: 1,
      name: "كعك الشوكولاتة الفاخر",
      price: 1200,
      originalPrice: 1500,
      image: "/images/chocolate-cake.jpg",
      category: "فاخر",
      rating: 4.8,
      reviews: 47,
      description: "شوكولاتة بلجيكية فاخرة مع توبينغ من الكراميل",
      tags: ["الأكثر مبيعاً", "جديد"],
      soldThisMonth: 23,
      preparationTime: "15-20 دقيقة",
      ingredients: ["شوكولاتة بلجيكية", "كريمة طازجة", "كراميل"],
      nutrition: "320 سعرة حرارية",
    },
    {
      id: 2,
      name: "تشيز كيك بالتوت",
      price: 1500,
      originalPrice: 1800,
      image: "/images/cheesecake.jpg",
      category: "مميز",
      rating: 4.9,
      reviews: 32,
      description: "تشيز كيك كريمي مع صلصة توت طازجة",
      tags: ["محدود", "صحي"],
      soldThisMonth: 18,
      preparationTime: "20-25 دقيقة",
      ingredients: ["جبن كريمي", "توت طازج", "بسكويت"],
      nutrition: "280 سعرة حرارية",
    },
    {
      id: 3,
      name: "كعك عيد الميلاد",
      price: 4500,
      originalPrice: 5000,
      image: "/images/birthday-cake1.jpg",
      category: "مناسبات",
      rating: 4.7,
      reviews: 28,
      description: "تصميم خاص حسب الطلب لجميع المناسبات",
      tags: ["تصميم خاص", "كبير"],
      soldThisMonth: 12,
      preparationTime: "2-3 أيام",
      ingredients: ["كريمة زبدة", "شوكولاتة", "فواكه طازجة"],
      nutrition: "450 سعرة حرارية",
    },
    {
      id: 4,
      name: "ماكارون فرنسي",
      price: 600,
      originalPrice: 750,
      image: "/images/macaron.jpg",
      category: "تقليدي",
      rating: 4.6,
      reviews: 89,
      description: "ماكارون فرنسي أصلي بألوان ونكهات متعددة",
      tags: ["تشكيلة", "سريع"],
      soldThisMonth: 45,
      preparationTime: "10-15 دقيقة",
      ingredients: ["لوز", "سكر", "كريمة"],
      nutrition: "95 سعرة حرارية",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);

  // دالة لمعالجة أخطاء تحميل الصور
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    productId: number
  ) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const fallback = document.getElementById(`fallback-${productId}`);
    if (fallback) {
      fallback.style.display = "flex";
    }
  };

  // تتبع حالة تسجيل الدخول
  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (auth) {
      setIsLoggedIn(true);
    }
  }, []);

  // تتبع المنتجات التي تم مشاهدتها
  useEffect(() => {
    const storedViewed = localStorage.getItem("viewedProducts");
    if (storedViewed) {
      setViewedProducts(JSON.parse(storedViewed));
    }
  }, []);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const categories = ["الكل", "فاخر", "مميز", "مناسبات", "تقليدي", "سناك"];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "الكل" || product.category === selectedCategory;
    const matchesSearch =
      product.name.includes(searchTerm) ||
      product.description.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 font-arabic">
      {/* نافذة تأكيد الإضافة للسلة */}
      {showCartPopup && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          ✅ تمت الإضافة إلى السلة بنجاح!
        </div>
      )}

      {/* الهيدر المحسن */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* اللوجو والتنقل */}
            <div className="flex items-center space-x-8 space-x-reverse mb-4 md:mb-0">
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

              {/* قائمة التنقل */}
              <nav className="hidden md:flex space-x-6 space-x-reverse">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  الرئيسية
                </Link>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  جميع المنتجات
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  عن المتجر
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors ml-6"
                >
                  اتصل بنا
                </Link>
              </nav>
            </div>

            {/* شريط البحث والمستخدم */}
            <div className="flex items-center space-x-4 space-x-reverse w-full md:w-auto">
              {/* شريط البحث المحسن */}
              <div className="flex-1 md:w-64">
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
                </div>
              </div>

              {/* أيقونات المستخدم والسلة */}
              <div className="flex items-center space-x-3 space-x-reverse">
                {isLoggedIn ? (
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Link
                      href="/dashboard"
                      className="flex items-center space-x-2 space-x-reverse px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <span>👨‍💼</span>
                      <span>لوحة التحكم</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 space-x-reverse px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <span>🚪</span>
                      <span>تسجيل خروج</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center space-x-2 space-x-reverse px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    <span>🔐</span>
                    <span>تسجيل دخول</span>
                  </Link>
                )}

                <div className="relative">
                  <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
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
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      {cart.length}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* قسم العروض الترويجية */}
      <section className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center items-center space-x-6 space-x-reverse text-sm">
            <span>🚚 توصيل مجاني للطلبات فوق 5000 د.ج</span>
            <span>•</span>
            <span>⭐ ضمان استرجاع خلال 24 ساعة</span>
            <span>•</span>
            <span>🎁 هدية مجانية مع كل طلب</span>
          </div>
        </div>
      </section>

      {/* الهيرو مع عداد تنازلي للعرض */}
      <section className="relative bg-gradient-to-r from-orange-500 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">خصم 30%</h1>
            <p className="text-xl md:text-2xl mb-8">
              على جميع أنواع الكعك الفاخر لمدة محدودة
            </p>

            {/* عداد تنازلي */}
            <div className="flex justify-center space-x-4 space-x-reverse mb-8">
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">02</div>
                <div className="text-sm">أيام</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm">ساعات</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm ml-4">
                <div className="text-2xl font-bold">45</div>
                <div className="text-sm">دقائق</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 space-x-reverse">
              <Link
                href="/products"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg text-lg text-center"
              >
                🛒 تسوق الآن
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 text-lg">
                📞 0550-123-456
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* إحصائيات المتجر */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                1,250+
              </div>
              <div className="text-gray-600">عميل سعيد</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">طلب شهري</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
              <div className="text-gray-600">تقييم عام</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">30+</div>
              <div className="text-gray-600">منتج مميز</div>
            </div>
          </div>
        </div>
      </section>

      {/* المنتجات المميزة */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              المنتجات الأكثر طلباً
            </h2>
            <p className="text-gray-600 text-lg">
              اكتشف تشكيلتنا الأكثر شعبية بين العملاء
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center overflow-hidden">
                  {/* الصورة الحقيقية */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={160}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => handleImageError(e, product.id)}
                  />

                  {/* Fallback يظهر فقط إذا فشل تحميل الصورة */}
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50"
                    style={{ display: "none" }}
                    id={`fallback-${product.id}`}
                  >
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">🎂</div>
                      <div className="text-sm">صورة {product.name}</div>
                    </div>
                  </div>

                  {/* العلامات */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-600">
                      {product.price.toLocaleString()} د.ج
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm"
                    >
                      عرض المنتج
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/products"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-bold"
            >
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-gray-800 text-white py-12">
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
