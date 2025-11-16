// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // بيانات تسجيل الدخول الافتراضية
    const validCredentials = [
      { username: "admin", password: "admin123" },
      { username: "manager", password: "manager123" },
      { username: "user", password: "user123" },
    ];

    // محاكاة عملية التحقق
    setTimeout(() => {
      const isValid = validCredentials.some(
        (cred) =>
          cred.username === formData.username &&
          cred.password === formData.password
      );

      if (isValid) {
        // حفظ حالة تسجيل الدخول
        localStorage.setItem(
          "adminAuth",
          JSON.stringify({
            username: formData.username,
            loginTime: new Date().toISOString(),
          })
        );
        router.push("/dashboard");
      } else {
        setError("اسم المستخدم أو كلمة المرور غير صحيحة");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 font-arabic flex items-center justify-center p-4">
      {/* الهيدر */}
      <header className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 space-x-reverse"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex flex-col items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xs">حلويات</span>
                <span className="text-white font-bold text-xs">الجلفة</span>
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  حلويات الجلفة
                </h1>
              </div>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </header>

      {/* نموذج تسجيل الدخول */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🔐</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              تسجيل الدخول
            </h1>
            <p className="text-gray-600">أدخل بيانات الدخول للإدارة</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-gray-700 mb-2 text-right">
                اسم المستخدم
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-right"
                placeholder="أدخل اسم المستخدم"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 text-right">
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-right"
                placeholder="أدخل كلمة المرور"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl"
              } text-white`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2 space-x-reverse">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>جاري التحقق...</span>
                </div>
              ) : (
                "تسجيل الدخول"
              )}
            </button>
          </form>

          {/* معلومات تسجيل الدخول للاختبار */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold text-gray-800 mb-3 text-sm">
              بيانات اختبار:
            </h3>
            <div className="space-y-2 text-xs text-gray-600">
              <div>👨‍💼 المدير: admin / admin123</div>
              <div>👨‍💼 المساعد: manager / manager123</div>
              <div>👤 مستخدم: user / user123</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
