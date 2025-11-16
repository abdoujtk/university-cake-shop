// app/shipping/page.tsx
"use client";

import Link from "next/link";

export default function Shipping() {
  const shippingPolicies = [
    {
      area: "مدينة الجلفة",
      cost: "مجاني للطلبات فوق 5000 د.ج",
      time: "30 دقيقة - 1 ساعة",
      details: "خدمة توصيل سريعة داخل المدينة",
    },
    {
      area: "ضواحي الجلفة",
      cost: "200 د.ج",
      time: "1-2 ساعة",
      details: "توصيل لجميع مناطق الضواحي",
    },
    {
      area: "ولايات مجاورة",
      cost: "500-1000 د.ج",
      time: "1-3 أيام",
      details: "التكلفة حسب المسافة والوزن",
    },
    {
      area: "ولايات أخرى",
      cost: "1000-2000 د.ج",
      time: "3-7 أيام",
      details: "بالتعاون مع شركات الشحن الوطنية",
    },
  ];

  const returnPolicies = [
    {
      condition: "منتج تالف",
      period: "24 ساعة",
      process: "استبدال فوري أو استرجاع كامل المبلغ",
      notes: "يجب الإبلاغ فور الاستلام",
    },
    {
      condition: "خطأ في الطلب",
      period: "48 ساعة",
      process: "استبدال بالمنتج الصحيح",
      notes: "نتحمل تكاليف الشحن",
    },
    {
      condition: "تغيير رأي",
      period: "غير مسموح",
      process: "لا نقبل الإرجاع",
      notes: "بسبب طبيعة المنتجات الغذائية",
    },
    {
      condition: "تأخير في التوصيل",
      period: "أثناء التوصيل",
      process: "خصم 20% على الطلب",
      notes: "في حال التأخير أكثر من ساعتين",
    },
  ];

  const faqs = [
    {
      question: "كيف أتأكد من وصول الطلب طازجاً؟",
      answer:
        "نستخدم عبوات مبردة خاصة للحلويات ونضمن وصولها طازجة وفي حالة ممتازة.",
    },
    {
      question: "ماذا لو لم أكن في المنزل وقت التوصيل؟",
      answer:
        "سيتصل بك مندوب التوصيل لتحديد وقت آخر، أو يمكنك استلام الطلب من أقرب فرع لنا.",
    },
    {
      question: "هل يمكنني تتبع طلبي؟",
      answer:
        "نعم، بعد تأكيد الطلب سنرسل لك رسالة تحتوي على رابط التتبع ورقم الطلب.",
    },
    {
      question: "ماذا عن المنتجات سريعة التلف؟",
      answer:
        "نحن نضمن جودة المنتجات لمدة 24 ساعة من الاستلام عند الالتزام بتعليمات التخزين.",
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
              <Link
                href="/contact"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                اتصل بنا
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* الهيرو */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            سياسة الشحن والإرجاع
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            نضمن لك تجربة تسوق سلسة مع سياسات شحن وإرجاع واضحة وعادلة
          </p>
        </div>
      </section>

      {/* سياسة الشحن */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            سياسة الشحن
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {shippingPolicies.map((policy, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {policy.area}
                </h3>
                <div className="text-orange-600 font-bold text-lg mb-2">
                  {policy.cost}
                </div>
                <div className="text-gray-700 mb-2">⏱️ {policy.time}</div>
                <p className="text-gray-600 text-sm">{policy.details}</p>
              </div>
            ))}
          </div>

          {/* معلومات إضافية عن الشحن */}
          <div className="bg-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              معلومات مهمة عن الشحن
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-800 mb-4">🛡️ ضمان الجودة</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• نستخدم عبوات مبردة للحفاظ على الجودة</li>
                  <li>• فريق توصيل مدرب على التعامل مع المنتجات الغذائية</li>
                  <li>• تتبع مباشر للطلب من التحميل حتى التسليم</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-4">📋 شروط الشحن</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• يجب أن يكون العنوان واضحاً وكاملاً</li>
                  <li>• يفضل وجود رقم هاتف للمستلم</li>
                  <li>• لا نتحمل مسؤولية الأخطاء في العنوان</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* سياسة الإرجاع */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            سياسة الإرجاع والاستبدال
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {returnPolicies.map((policy, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {policy.condition}
                </h3>
                <div className="flex items-center space-x-2 space-x-reverse mb-3">
                  <span className="text-orange-500 font-bold">⏰ المدة:</span>
                  <span>{policy.period}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse mb-3">
                  <span className="text-orange-500 font-bold">🔄 الإجراء:</span>
                  <span>{policy.process}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <span className="text-orange-500 font-bold">💡 ملاحظات:</span>
                  <span className="text-sm text-gray-600">{policy.notes}</span>
                </div>
              </div>
            ))}
          </div>

          {/* عملية الإرجاع */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              كيفية طلب الإرجاع أو الاستبدال
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">الاتصال بنا</h4>
                <p className="text-gray-600 text-sm">
                  اتصل على 0550-123-456 خلال 24 ساعة من الاستلام
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">تقديم الأدلة</h4>
                <p className="text-gray-600 text-sm">
                  أرسل صوراً للمنتج تظهر المشكلة
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">الموافقة</h4>
                <p className="text-gray-600 text-sm">
                  سنقوم بمراجعة الطلب والموافقة خلال ساعتين
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">الحل</h4>
                <p className="text-gray-600 text-sm">
                  استبدال أو استرجاع خلال 24 ساعة من الموافقة
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الأسئلة الشائعة */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            أسئلة شائعة عن الشحن والإرجاع
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* دعوة للاتصال */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            هل لديك المزيد من الأسئلة؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            فريق خدمة العملاء لدينا مستعد لمساعدتك في أي استفسار
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              اتصل بنا الآن
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300">
              📞 0550-123-456
            </button>
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
