import Link from "next/link";
import Image from "next/image";

export default function FlutterOffer() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 sm:p-12">
      <header className="max-w-5xl mx-auto mb-6 fade-up">
        <div className="flex items-center gap-3">
          <Image src="/next.svg" alt="logo" width={140} height={30} />
          <div>
            <h1 className="text-2xl font-bold">عرض مفصل: تطوير تطبيق القرآن باستخدام Flutter</h1>
            <div className="mt-2 text-sm muted">أداء عالي وتجربة مستخدم متسقة على جميع المنصات</div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto space-y-6 prose prose-lg">
        <section className="card fade-up">
          <h2>الملخّص التنفيذي</h2>
          <p>
            هذا العرض يقدّم بناء تطبيق قرآن قوي يعتمد على Flutter لتحقيق تجربة مستخدم سلسة
            وسرعة أداء عالية عبر Android و iOS و Web إن دعت الحاجة. يركّز التنفيذ على
            جودة التلاوة الصوتية، تزامن النص مع الصوت، وتجربة قراءة مريحة للمستخدمين.
          </p>
        </section>

        <section className="card fade-up">
          <h2>المميزات الأساسية بالتفصيل</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li>
              <strong>عرض النص الكامل للقرآن:</strong> واجهة عرض مرنة تسمح بالانتقال للسور والآيات،
              تغيير الخط وحجمه، ودعم قراءات متعددة (حفص، ورش، ...).
            </li>
            <li>
              <strong>تلاوة صوتية عالية الجودة:</strong> مكتبة قراء مع إمكانيات البث والتحميل،
              تحكم كامل بالتشغيل وقوائم تشغيل مخصصة.
            </li>
            <li>
              <strong>هايلايت متزامن أثناء التلاوة:</strong> تتبع الآية الحالية وتظليلها تلقائيًا
              مع تقدم التلاوة، مع خيار المتابعة يدوياً وإيقاف التزامن.
            </li>
            <li>
              <strong>مواقيت الصلاة وإشعارات مخصصة:</strong> حساب دقيق للمواقيت حسب الموقع أو إعداد يدوي
              مع تنبيهات قابلة للتخصيص وصوت الأذان.
            </li>
            <li>
              <strong>حسابات ومزامنة:</strong> تسجيل مستخدمين، مزامنة المفضلات والقياسات عبر الحسابات،
              واسترجاع السجل عبر الأجهزة.
            </li>
            <li>
              <strong>ميزات البحث والمشاركة:</strong> بحث بصيغ متعددة (نص، جزء، ترجمة)، مشاركة آيات مع
              التنسيق، وإحصائيات قراءة للمستخدم.
            </li>
            <li>
              <strong>وضعية الوصول والليلي:</strong> تصميم متدرج للألوان، دعم زيادة الوصول وتكبير الخط.
            </li>
          </ol>
        </section>

        <section className="card fade-up">
          <h2>التقنيات المقترحة</h2>
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Frontend:</strong> Flutter (Dart) مع بنية مكوّنات مرنة.</li>
            <li><strong>State:</strong> Riverpod أو Bloc حسب حاجة التعقيد.</li>
            <li><strong>Backend:</strong> Firebase / Supabase للمصادقة والتخزين السحابي.</li>
            <li><strong>تخزين الصوت:</strong> Cloud Storage + CDN مع caching محلي للملفات الصوتية.</li>
            <li><strong>مواقيت الصلاة:</strong> AlAdhan أو API مشابه، مع خيار استخدام مكتبات محلية للحساب.</li>
            <li><strong>تحليلات/مراقبة:</strong> Firebase Analytics و Sentry للأخطاء.</li>
          </ul>
        </section>

        <section className="card fade-up">
          <h2>خريطة التنفيذ وال milestones</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li><strong>الأسبوعان 1-2:</strong> جمع المتطلبات التفصيلية وتصميم UI/UX ونموذج أولي.</li>
            <li><strong>الأسابيع 3-6:</strong> تنفيذ عرض القرآن، التنقل، وإدارة المحتوى الأساسية.</li>
            <li><strong>الأسابيع 7-10:</strong> تنفيذ نظام الصوتيات والهايلايت المتزامن مع تحسينات الأداء.</li>
            <li><strong>الأسابيع 11-13:</strong> مواقيت الصلاة، الإشعارات، والتوثيق.
            </li>
            <li><strong>الأسبوع 14:</strong> اختبار نهائي، إصلاح الأخطاء، ونشر النسخة الأولى.</li>
          </ol>
          <p className="muted">المدة الكاملة: تقريبًا 14 - 16 أسبوعًا (3.5 - 4 أشهر).</p>
        </section>

        <section className="card fade-up">
          <h2>التكلفة وتفصيل التكلفة</h2>
          <p className="font-semibold text-lg">التكلفة الإجمالية (تقديري): 230,000 جنيه مصري</p>
          <ul className="list-inside list-disc space-y-1">
            <li>تصميم وادارة المشروع: 20,000 جنيه</li>
            <li>بناء البنية الأساسية والمصادقة: 35,000 جنيه</li>
            <li>تطوير واجهة القرآن ونظام الصوتيات: 80,000 جنيه</li>
            <li>مواقيت الصلاة والإشعارات والتكامل: 25,000 جنيه</li>
            <li>اختبارات وضمان الجودة والنشر: 30,000 جنيه</li>
            <li>دعم أولي وتوثيق: 40,000 جنيه</li>
          </ul>
        </section>

        <section className="card fade-up">
          <h2>خطة الدفع</h2>
          <ol className="list-inside list-decimal space-y-2">
              <li><strong>الدفعة الأولى — 40%:</strong> عند توقيع العقد وبدء العمل — 92,000 جنيه.</li>
              <li><strong>الدفعة الثانية — 30%:</strong> عند تسليم نسخة تجريبية — 69,000 جنيه.</li>
              <li><strong>الدفعة الثالثة — 30%:</strong> عند تسليم النسخة الكاملة قبل الاختبارات النهائية — 69,000 جنيه.</li>
          </ol>
          <p className="muted">خطة دفع مرنة متاحة بالتفاوض (دفعات إضافية أو جدول تفصيلي حسب اتفاق الطرفين).</p>
        </section>

        <section className="card fade-up">
          <h2>التسليمات</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>تطبيق جاهز للنشر على المتاجر (APK / AAB و App Store build).</li>
            <li>لوحة إدارة بسيطة أو توصية باستخدام Firebase Console لإدارة الملفات والقراء.</li>
            <li>مستندات تقنية (Architecture, APIs, Deployment guide) وملفات التصميم.</li>
            <li>نسخ احتياطية للبيانات وتعليمات الصيانة الأساسية.</li>
          </ul>
        </section>

        <section className="card fade-up">
          <h2>الدعم وما بعد الإطلاق</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>شهر ضمان مجاني لتصحيح الأخطاء الحرجة.</li>
            <li>باقات دعم وصيانة (تحديثات أمنية، مراقبة، إضافة قراءات جديدة) بعقود منفصلة.</li>
            <li>خدمة تحسينات الأداء وإصدار تحديثات متكررة عند الاتفاق.</li>
          </ul>
        </section>

        <section className="card fade-up">
          <h2>المخاطر وخطة التخفيف</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>تأخير توفير ملفات صوتية أو تراخيص: الاتفاق المسبق على الجدول الزمني والمصادر البديلة.</li>
            <li>قضايا توافقية على منصات قديمة: اختبار مبكر على مجموعة أجهزة واسعة والتخطيط للحد الأدنى من الإصدارات المدعومة.</li>
            <li>متطلبات إضافية غير متوقعة: توثيق نطاق العمل ووجود احتياطي للمتطلبات التغييرية (change requests).
            </li>
          </ul>
        </section>

        <div className="flex gap-3">
          <Link href="/" className="btn-primary">العودة</Link>
          <Link href="/react-native" className="btn-primary">عرض React Native</Link>
        </div>
      </main>
    </div>
  );
}
