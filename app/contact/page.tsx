// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! سنقوم بالرد عليك خلال 24 ساعة.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "الهاتف",
      details: "0550-123-456",
      description: "متاح من 8 صباحاً إلى 10 مساءً",
    },
    {
      icon: "✉️",
      title: "البريد الإلكتروني",
      details: "info@helwaty-djelfa.dz",
      description: "رد خلال 24 ساعة",
    },
    {
      icon: "📍",
      title: "العنوان",
      details: "الجلفة، الجزائر",
      description: "مركز المدينة - شارع الاستقلال",
    },
    {
      icon: "🕒",
      title: "ساعات العمل",
      details: "يومياً من 8 ص إلى 10 م",
      description: "جميع أيام الأسبوع",
    },
  ];

  const faqs = [
    {
      question: "ما هي مدة التوصيل؟",
      answer:
        "مدة التوصيل من 30 دقيقة إلى ساعة في مدينة الجلفة، ومن 1-3 أيام للمدن الأخرى.",
    },
    {
      question: "هل تقدمون توصيل مجاني؟",
      answer:
        "نعم، نقدم توصيل مجاني للطلبات التي تزيد عن 5000 دينار جزائري في مدينة الجلفة.",
    },
    {
      question: "كيف يمكنني تتبع طلبي؟",
      answer:
        "بعد تأكيد الطلب، سنرسل لك رسالة تحتوي على رابط لتتبع حالة الطلب.",
    },
    {
      question: "هل يمكنني إرجاع المنتج؟",
      answer:
        "نعم، يمكنك إرجاع المنتج خلال 24 ساعة من الاستلام في حال وجود عيب في الصنعة.",
    },
  ];

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
              <Link href="/contact" className="text-orange-600 font-bold ml-6">
                اتصل بنا
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* الهيرو */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">اتصل بنا</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسار
          </p>
        </div>
      </section>

      {/* طرق التواصل */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-orange-600 font-medium mb-2">
                  {method.details}
                </p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* نموذج الاتصال والخريطة */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* نموذج الاتصال */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                أرسل رسالة
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="05xx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">الموضوع</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">اختر الموضوع</option>
                      <option value="استفسار عن منتج">استفسار عن منتج</option>
                      <option value="شكوى">شكوى</option>
                      <option value="مقترح">مقترح</option>
                      <option value="تعاون">تعاون</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">الرسالة</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* معلومات إضافية */}
            <div className="space-y-8">
              {/* الخريطة */}
              <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="text-4xl mb-4">🗺️</div>
                    <div>خريطة موقع المتجر في الجلفة</div>
                    <div className="text-sm mt-2">
                      شارع الاستقلال، وسط المدينة
                    </div>
                  </div>
                </div>
              </div>

              {/* الأسئلة الشائعة */}
              <div className="bg-white rounded-2xl shadow-sm border p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  الأسئلة الشائعة
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <h4 className="font-bold text-gray-800 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* وسائل التواصل الاجتماعي */}
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold mb-4">
                  تابعنا على وسائل التواصل
                </h3>
                <div className="flex justify-center space-x-4 space-x-reverse">
                  <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <span className="text-lg">📘</span>
                  </button>
                  <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <span className="text-lg">📷</span>
                  </button>
                  <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <span className="text-lg">🐦</span>
                  </button>
                </div>
              </div>
            </div>
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
