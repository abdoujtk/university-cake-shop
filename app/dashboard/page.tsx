// app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  // إحصائيات افتراضية
  const stats = {
    totalSales: 1250000,
    totalOrders: 347,
    totalProducts: 24,
    totalCustomers: 189,
  };

  const recentOrders = [
    {
      id: 1,
      customer: "أحمد محمد",
      product: "كعك الشوكولاتة",
      amount: 1200,
      status: "مكتمل",
      date: "2024-01-15",
    },
    {
      id: 2,
      customer: "فاطمة الزهراء",
      product: "تشيز كيك بالتوت",
      amount: 1500,
      status: "قيد التوصيل",
      date: "2024-01-15",
    },
    {
      id: 3,
      customer: "محمد أمين",
      product: "كعك عيد الميلاد",
      amount: 4500,
      status: "مكتمل",
      date: "2024-01-14",
    },
  ];

  const topProducts = [
    { name: "كعك الشوكولاتة", sales: 23, revenue: 27600 },
    { name: "تشيز كيك بالتوت", sales: 18, revenue: 27000 },
    { name: "ماكارون فرنسي", sales: 45, revenue: 27000 },
  ];

  // التحقق من تسجيل الدخول
  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (!auth) {
      router.push("/login");
    } else {
      setUser(JSON.parse(auth));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/");
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 font-arabic flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600">جاري التحقق من الصلاحية...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-arabic">
      {/* شريط التنقل العلوي */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 space-x-reverse mb-4 md:mb-0">
              <Link
                href="/"
                className="flex items-center space-x-3 space-x-reverse"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex flex-col items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs">حلويات</span>
                  <span className="text-white font-bold text-xs">الجلفة</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    لوحة التحكم
                  </h1>
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="text-right">
                <p className="text-gray-600">مرحباً، {user.username}</p>
                <p className="text-sm text-gray-500">
                  آخر دخول: {new Date(user.loginTime).toLocaleString("ar-EG")}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2 space-x-reverse"
              >
                <span>🚪</span>
                <span>تسجيل الخروج</span>
              </button>
              <Link
                href="/"
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2 space-x-reverse"
              >
                <span>🏠</span>
                <span>الرئيسية</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* الشريط الجانبي */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`w-full text-right px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "overview"
                        ? "bg-orange-100 text-orange-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    📊 نظرة عامة
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("products")}
                    className={`w-full text-right px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "products"
                        ? "bg-orange-100 text-orange-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    🎂 إدارة المنتجات
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className={`w-full text-right px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "orders"
                        ? "bg-orange-100 text-orange-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    📦 الطلبات
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("customers")}
                    className={`w-full text-right px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "customers"
                        ? "bg-orange-100 text-orange-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    👥 العملاء
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("analytics")}
                    className={`w-full text-right px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "analytics"
                        ? "bg-orange-100 text-orange-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    📈 التحليلات
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full text-right px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "settings"
                        ? "bg-orange-100 text-orange-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    ⚙️ الإعدادات
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* بطاقات الإحصائيات */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600">إجمالي المبيعات</p>
                        <p className="text-2xl font-bold text-gray-800">
                          {stats.totalSales.toLocaleString()} د.ج
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💰</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600">عدد الطلبات</p>
                        <p className="text-2xl font-bold text-gray-800">
                          {stats.totalOrders}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📦</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600">المنتجات</p>
                        <p className="text-2xl font-bold text-gray-800">
                          {stats.totalProducts}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🎂</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600">العملاء</p>
                        <p className="text-2xl font-bold text-gray-800">
                          {stats.totalCustomers}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👥</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* الطلبات الأخيرة */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    الطلبات الأخيرة
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-right py-3 px-4">العميل</th>
                          <th className="text-right py-3 px-4">المنتج</th>
                          <th className="text-right py-3 px-4">المبلغ</th>
                          <th className="text-right py-3 px-4">التاريخ</th>
                          <th className="text-right py-3 px-4">الحالة</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((order) => (
                          <tr key={order.id} className="border-b">
                            <td className="py-3 px-4">{order.customer}</td>
                            <td className="py-3 px-4">{order.product}</td>
                            <td className="py-3 px-4">
                              {order.amount.toLocaleString()} د.ج
                            </td>
                            <td className="py-3 px-4">{order.date}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs ${
                                  order.status === "مكتمل"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* أفضل المنتجات مبيعاً */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    أفضل المنتجات مبيعاً
                  </h2>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {product.sales} وحدة مباعة
                          </p>
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-orange-600">
                            {product.revenue.toLocaleString()} د.ج
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "products" && (
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    إدارة المنتجات
                  </h2>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2 space-x-reverse">
                    <span>➕</span>
                    <span>إضافة منتج جديد</span>
                  </button>
                </div>
                <div className="text-center py-12 text-gray-500">
                  <div className="text-4xl mb-4">🎂</div>
                  <p>هنا يمكنك إضافة وتعديل وحذف المنتجات</p>
                  <p className="text-sm mt-2">هذه الصفحة قيد التطوير</p>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  إدارة الطلبات
                </h2>
                <div className="text-center py-12 text-gray-500">
                  <div className="text-4xl mb-4">📦</div>
                  <p>هنا يمكنك إدارة جميع طلبات العملاء</p>
                  <p className="text-sm mt-2">هذه الصفحة قيد التطوير</p>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  الإعدادات
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">
                      معلومات الحساب
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p>
                        <strong>اسم المستخدم:</strong> {user.username}
                      </p>
                      <p>
                        <strong>آخر دخول:</strong>{" "}
                        {new Date(user.loginTime).toLocaleString("ar-EG")}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-800 mb-3">
                      تغيير كلمة المرور
                    </h3>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="كلمة المرور الحالية"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <input
                        type="password"
                        placeholder="كلمة المرور الجديدة"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                        تحديث كلمة المرور
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
