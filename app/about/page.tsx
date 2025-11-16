// app/about/page.tsx
"use client";

import Link from "next/link";

export default function About() {
  const team = [
    {
      name: "الشيف أحمد",
      role: "شيف حلويات رئيسي",
      image: "/team/chef1.jpg",
      experience: "10 سنوات",
    },
    {
      name: "فاطمة",
      role: "خبيرة في الكعك العربي",
      image: "/team/chef2.jpg",
      experience: "8 سنوات",
    },
    {
      name: "محمد",
      role: "مساعد شيف",
      image: "/team/chef3.jpg",
      experience: "5 سنوات",
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "التأسيس",
      description: "بداية المشروع من مطبخ صغير في الجلفة",
    },
    {
      year: "2019",
      title: "التوسع",
      description: "فتح أول فرع في وسط المدينة",
    },
    {
      year: "2021",
      title: "التميز",
      description: "الحصول على جائزة أفضل حلويات في الولاية",
    },
    {
      year: "2024",
      title: "التجارة الإلكترونية",
      description: "إطلاق المتجر الإلكتروني",
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
              <Link href="/about" className="text-orange-600 font-bold">
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

      {/* الهيرو */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            عن متجر حلويات الجلفة
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            رحلة طعم تمتد لأكثر من 6 سنوات في صناعة أطيب الحلويات بأيدي خبراء
            متخصصين
          </p>
        </div>
      </section>

      {/* قصة المتجر */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">قصتنا</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  بدأت رحلة "حلويات الجلفة" من مطبخ صغير في مدينة الجلفة عام
                  2018، حيث كان حبنا للحلويات والرغبة في تقديم الأفضل هو الدافع
                  وراء انطلاقتنا.
                </p>
                <p>
                  على مر السنين، تطورنا من مشروع عائلي صغير إلى متجر معترف به في
                  جميع أنحاء الولاية، وذلك بفضل ثقة عملائنا الكرام وتميز
                  منتجاتنا.
                </p>
                <p>
                  نحن نؤمن بأن الجودة هي أساس النجاح، لذلك نستخدم فقط أفضل
                  المكونات الطازجة ونلتزم بأعلى معايير النظافة والسلامة
                  الغذائية.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🎂</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
              <p className="text-gray-700">
                أن نكون الوجهة الأولى لمحبي الحلويات في الجزائر، من خلال تقديم
                تجربة طعم فريدة وخدمة استثنائية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* لماذا تختارنا */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            لماذا تختار حلويات الجلفة؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                جودة عالية
              </h3>
              <p className="text-gray-600">
                نستخدم أفضل المكونات الطازجة والمستوردة لضمان جودة لا تضاهى في
                كل منتج.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                خبرة متخصصة
              </h3>
              <p className="text-gray-600">
                فريقنا من الشيفات المحترفين يمتلك سنوات من الخبرة في صناعة
                الحلويات.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                توصيل سريع
              </h3>
              <p className="text-gray-600">
                خدمة توصيل سريعة وموثوقة لضمان وصول منتجاتك طازجة وفي الوقت
                المحدد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* محطات التطور */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            محطات تطورنا
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-200 h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1"></div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full z-10"></div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border mx-8">
                    <div className="text-orange-500 font-bold text-lg mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* فريق العمل */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            فريقنا المتخصص
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden text-center"
              >
                <div className="h-64 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                  <div className="text-6xl">👨‍🍳</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600">خبرة: {member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* إحصائيات */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1,250+</div>
              <div>عميل سعيد</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div>طلب مكتمل</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div>منتج مميز</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6+</div>
              <div>سنوات خبرة</div>
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
