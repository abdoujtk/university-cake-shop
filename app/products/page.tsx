// app/products/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, Product } from "../data/products";

export default function ProductsPage() {
  // دالة لمعالجة أخطاء تحميل الصور
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    fallbackId: string
  ) => {
    const target = e.target as HTMLImageElement;
    target.style.display = "none";
    const fallback = document.getElementById(fallbackId);
    if (fallback) {
      fallback.style.display = "flex";
    }
  };

  // حالات التصفية
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("default");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // جميع الفئات المتاحة
  const categories = ["فاخر", "مميز", "مناسبات", "تقليدي", "سناك", "صحي"];

  // تطبيق جميع الفلاتر
  useEffect(() => {
    let result = [...products];

    // فلترة بالنص
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // فلترة بالفئات
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // فلترة بالسعر
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // فلترة بالتقييم
    if (minRating > 0) {
      result = result.filter((product) => product.rating >= minRating);
    }

    // فلترة بالمتوفر
    if (inStockOnly) {
      result = result.filter((product) => product.inStock);
    }

    // فلترة بالمميز
    if (featuredOnly) {
      result = result.filter((product) => product.isFeatured);
    }

    // الترتيب
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        result.sort((a, b) => b.soldThisMonth - a.soldThisMonth);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // الترتيب الافتراضي (الأكثر مبيعاً أولاً)
        result.sort((a, b) => b.soldThisMonth - a.soldThisMonth);
    }

    setFilteredProducts(result);
  }, [
    searchTerm,
    selectedCategories,
    priceRange,
    minRating,
    sortBy,
    inStockOnly,
    featuredOnly,
  ]);

  // إدارة الفئات المختارة
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // إضافة للسلة (مؤقت)
  const addToCart = (productId: number) => {
    alert(`تمت إضافة المنتج إلى السلة! (ID: ${productId})`);
  };

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
              <Link href="/products" className="text-orange-600 font-bold">
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

      {/* قسم البحث والتحكم */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* شريط البحث */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن منتج معين..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-right"
                />
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
              </div>
            </div>

            {/* أزرار التحكم */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 space-x-reverse px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <span>🔍 التصفية</span>
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="default">ترتيب حسب: الأكثر مبيعاً</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="rating">الأعلى تقييماً</option>
                <option value="popular">الأكثر شعبية</option>
                <option value="name">الاسم: أ-ي</option>
              </select>
            </div>
          </div>

          {/* الفلاتر المتقدمة */}
          {showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* الفئات */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">الفئات</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center space-x-2 space-x-reverse cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="rounded text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* نطاق السعر */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">
                    نطاق السعر: {priceRange[0]} - {priceRange[1]} د.ج
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>0 د.ج</span>
                      <span>5000 د.ج</span>
                    </div>
                  </div>
                </div>

                {/* التقييم */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">
                    التقييم الأدنى
                  </h3>
                  <div className="space-y-2">
                    {[4, 3, 2, 1, 0].map((rating) => (
                      <label
                        key={rating}
                        className="flex items-center space-x-2 space-x-reverse cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === rating}
                          onChange={() => setMinRating(rating)}
                          className="text-orange-500 focus:ring-orange-500"
                        />
                        <span className="text-gray-700">
                          {rating === 0 ? "جميع التقييمات" : `${rating}+ نجوم`}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* خيارات إضافية */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-3">
                    خيارات إضافية
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2 space-x-reverse cursor-pointer">
                      <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        className="rounded text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">
                        متوفر في المخزون فقط
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 space-x-reverse cursor-pointer">
                      <input
                        type="checkbox"
                        checked={featuredOnly}
                        onChange={(e) => setFeaturedOnly(e.target.checked)}
                        className="rounded text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">
                        المنتجات المميزة فقط
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* إعادة تعيين الفلاتر */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 5000]);
                    setMinRating(0);
                    setInStockOnly(false);
                    setFeaturedOnly(false);
                    setSearchTerm("");
                  }}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  إعادة تعيين الفلاتر
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* المحتوى الرئيسي */}
      <main className="container mx-auto px-4 py-8">
        {/* معلومات النتائج */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-gray-600">
            عرض {filteredProducts.length} من {products.length} منتج
          </div>
          <div className="text-sm text-gray-500">
            {selectedCategories.length > 0 &&
              `الفئات: ${selectedCategories.join("، ")} • `}
            {minRating > 0 && `التقييم: ${minRating}+ • `}
            {inStockOnly && "متوفر فقط • "}
            {featuredOnly && "مميز فقط"}
          </div>
        </div>

        {/* شبكة المنتجات */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="block"
              >
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  {/* صورة المنتج */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    {/* الصورة الحقيقية */}
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={300}
                      height={192}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                      onError={(e) =>
                        handleImageError(e, `product-fallback-${product.id}`)
                      }
                    />

                    {/* Fallback يظهر فقط إذا فشل تحميل الصورة */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-50 to-pink-50"
                      style={{ display: "none" }}
                      id={`product-fallback-${product.id}`}
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
                      {!product.inStock && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          غير متوفر
                        </span>
                      )}
                    </div>

                    {/* التقييم */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1 space-x-reverse text-xs">
                      <svg
                        className="w-3 h-3 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-800 font-bold">
                        {product.rating}
                      </span>
                      <span className="text-gray-500">({product.reviews})</span>
                    </div>

                    {/* عدد المبيعات */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      ⚡ بيع {product.soldThisMonth} هذا الشهر
                    </div>
                  </div>

                  {/* تفاصيل المنتج */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-800 text-lg">
                        {product.name}
                      </h3>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* المعلومات الإضافية */}
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <span>⏱️</span>
                        <span>{product.preparationTime}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <span>🔥</span>
                        <span>{product.nutrition.calories} سعرة</span>
                      </div>
                    </div>

                    {/* السعر والإجراءات */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <span className="text-xl font-bold text-orange-600">
                          {product.price.toLocaleString()} د.ج
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-400 line-through">
                            {product.originalPrice.toLocaleString()} د.ج
                          </span>
                        )}
                      </div>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product.id);
                        }}
                        disabled={!product.inStock}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          product.inStock
                            ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:scale-105"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {product.inStock ? "🛒 أضف للسلة" : "غير متوفر"}
                      </button>
                    </div>

                    {/* نسبة التوفير */}
                    {product.originalPrice > product.price && (
                      <div className="mt-2 text-center">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                          وفر{" "}
                          {(
                            ((product.originalPrice - product.price) /
                              product.originalPrice) *
                            100
                          ).toFixed(0)}
                          %
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* لا توجد نتائج */
          <div className="text-center py-16">
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
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              لا توجد منتجات
            </h3>
            <p className="text-gray-600 mb-6">
              لم نتمكن من العثور على منتجات تطابق معايير البحث الخاصة بك
            </p>
            <button
              onClick={() => {
                setSelectedCategories([]);
                setPriceRange([0, 5000]);
                setMinRating(0);
                setInStockOnly(false);
                setFeaturedOnly(false);
                setSearchTerm("");
              }}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              عرض جميع المنتجات
            </button>
          </div>
        )}
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
