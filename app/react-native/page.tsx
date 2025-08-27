import Link from "next/link";
import Image from "next/image";

export default function RNOffer() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 sm:p-12">
      <header className="max-w-5xl mx-auto mb-6 fade-up">
        <div className="flex items-center gap-3">
          <Image src="/next.svg" alt="logo" width={140} height={30} />
          <div>
            <h1 className="text-2xl font-bold">عرض مفصل: تطوير تطبيق القرآن باستخدام React Native</h1>
            <div className="mt-2 text-sm muted">حل متوازن بين السرعة وتكلفة التطوير مع نظام بيئي واسع لمكتبات JavaScript</div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto space-y-6 prose prose-lg">
        <section className="card fade-up">
          <h2>الملخّص التنفيذي</h2>
          <p>
            هذا العرض يهدف إلى بناء تطبيق قرآن كامل باللغتين العربية والإنجليزية، يتيح للمستخدمين
            القراءة والاستماع بتجربة مستخدم سلسة ومزامنة تلاوة-نصية (follow along)، مع إدارة حسابات
            المستخدمين، مزامنة المفضلات، وتنبيهات مواقيت الصلاة بناءً على الموقع.
          </p>
        </section>

        <section className="card fade-up">
          <h2>المميزات الأساسية بالتفصيل</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li>
              <strong>عرض النص الكامل للقرآن:</strong> عرض سور وآيات مع تحكم بحجم ونمط الخط،
              إمكانية التنقل حسب السورة أو الرقم أو البحث.
            </li>
            <li>
              <strong>التلاوات الصوتية:</strong> مكتبة قراء مشهودين (قابل للزيادة)، خيارات للبث أو
              التحميل، مؤشرات جودة الصوت، ودعم resume/seek.
            </li>
            <li>
              <strong>هايلايت النص أثناء التلاوة (Follow along):</strong> تزامن بين ملف الصوت ومكان الآية
              مع تحريك تلقائي للخط وتظليل الآية الحالية.
            </li>
            <li>
              <strong>مواقيت الصلاة والتنبيهات:</strong> حساب دقيق للمواقيت حسب الموقع (GPS) أو إعداد يدوي،
              وإرسال إشعارات للأذان والتنبيه قبل الصلاة.
            </li>
            <li>
              <strong>حسابات المستخدمين والمزامنة:</strong> تسجيل عبر البريد وGoogle/Facebook، مزامنة
              المفضلات والعلامات المرجعية والسجل السمعي بين الأجهزة.
            </li>
            <li>
              <strong>ميزات مساعدة:</strong> بحث متقدم في النصوص، إضافة إشارات مرجعية وملاحظات، مشاركة الآيات
              على منصات التواصل، وضع ليلي ووضع تكبير للخط.
            </li>
            <li>
              <strong>لوحة تحكم بسيطة لإدارة المحتوى:</strong> رفع تلاوات جديدة وإدارة قائمة القراء
              وتحديث البيانات الوصفية للآيات.
            </li>
          </ol>
        </section>

        <section className="card fade-up">
          <h2>التقنيات المقترحة</h2>
          <ul className="list-inside list-disc space-y-1">
            <li><strong>Frontend:</strong> React Native (TypeScript) + React Navigation</li>
            <li><strong>State:</strong> Redux Toolkit أو Zustand حسب تبسيط الحالة المطلوبة</li>
            <li><strong>Backend & Auth:</strong> Firebase أو Supabase للمصادقة وتخزين المستخدمين والبيانات</li>
            <li><strong>Storage:</strong> Cloud Storage لصوتيات القراء مع CDN و caching محلي</li>
            <li><strong>APIs:</strong> AlAdhan أو API مشابه لمواقيت الصلاة، ونظام لإدارة القراء والملفات</li>
            <li><strong>Analytics & Crash:</strong> Sentry + Firebase Analytics</li>
          </ul>
        </section>

        <section className="card fade-up">
          <h2>خريطة التنفيذ وال milestones</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li><strong>الأسبوعان 1-2:</strong> جمع متطلبات تفصيلية، تصميم UI/UX ونموذج تفاعلي (Figma).</li>
            <li><strong>الأسابيع 3-5:</strong> إعداد البنية الأساسية للمشروع، المصادقة، ونموذج البيانات.</li>
            <li><strong>الأسابيع 6-9:</strong> تنفيذ عرض القرآن، التلاوات الصوتية، ووظيفة الهايلايت المتزامن.</li>
            <li><strong>الأسابيع 10-11:</strong> مواقيت الصلاة والتنبيهات، وإعدادات المستخدمين والمزامنة.</li>
            <li><strong>الأسابيع 12-13:</strong> اختبار شامل، إصلاح الأخطاء، وتحسين الأداء.</li>
            <li><strong>الأسبوع 14:</strong> تسليم النسخة النهائية ونشر على المتاجر وتجهيز المواد التسويقية.</li>
          </ol>
          <p className="muted">المدة الكاملة: تقريبًا 12 - 14 أسبوعًا (3 - 3.5 أشهر).</p>
        </section>

        <section className="card fade-up">
          <h2>التكلفة والتكلفة التفصيلية</h2>
          <p className="font-semibold text-lg">التكلفة الإجمالية (تقديري): 180,000 جنيه مصري</p>
          <ul className="list-inside list-disc space-y-1">
            <li>تحليل وتصميم: 15,000 جنيه</li>
            <li>تطوير البنية الأساسية والمصادقة: 30,000 جنيه</li>
            <li>تطوير واجهة القرآن والصوتيات: 60,000 جنيه</li>
            <li>مواقيت الصلاة والتنبيهات + تكامل API: 15,000 جنيه</li>
            <li>اختبارات وضمان الجودة: 20,000 جنيه</li>
                        <li>نشر ودعم أولي: 10,000 جنيه</li>
          </ul>
        </section>

        <section className="card fade-up">
          <h2>ترخيصات النشر السنوية</h2>
          <h3>متجر جوجل بلاي (Google Play Store)</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>اشتراك سنوي: 100 دولار أمريكي</li>
          </ul>
          <h3>متجر تطبيقات آبل (Apple App Store)</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>اشتراك سنوي: 150 دولار أمريكي</li>
          

        
          </ul>
        </section>

        <section className="card fade-up">
          <h2>خطة الدفع المقترحة</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li><strong>الدفعة الأولى — 40%:</strong> عند توقيع العقد وبدء العمل — 72,000 جنيه.</li>
            <li><strong>الدفعة الثانية — 30%:</strong> عند تسليم نسخة تجريبية (Prototype) — 54,000 جنيه.</li>
            <li><strong>الدفعة الثالثة — 30%:</strong> عند تسليم النسخة الكاملة قبل الاختبارات النهائية — 54,000 جنيه.</li>
          </ol>
          <p className="muted">يمكن الاتفاق على خطة دفع بديلة أو دفعات أصغر حسب الاتفاق.</p>
        </section>

        <section className="card fade-up">
          <h2>التسليمات (Deliverables)</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>تطبيق مهيأ للنشر على Google Play و App Store (تعبئة المتاجر).</li>
            <li>لوحة إدارة بسيطة للقراء والملفات (واجهة ويب خفيفة أو استخدام Firebase Console).</li>
            <li>مستند تقنية يشرح البنية، واجهات الـ API المهمة، وتعليمات النشر.</li>
            <li>ملفات التصميم (Figma) ومكونات الواجهة القابلة لإعادة الاستخدام.</li>
          </ul>
        </section>

        <section className="card fade-up">
          <h2>الدعم وخيارات ما بعد الإطلاق</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>شهر ضمان مجاني لتصحيح الأخطاء الحرجة بعد التسليم.</li>
            <li>باقات دعم وصيانة اختيارية: شهرية أو ربع سنوية (تحديثات، مراقبة، ودعم فني).</li>
            <li>خدمة تحسين الأداء وإضافة قراءات جديدة أو ملفات صوتية بعقود إضافية.</li>
          </ul>
        </section>

        <section className="card fade-up">
          <h2>المخاطر وخطة التخفيف</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>تأخّر مزود الصوتيات: الاحتفاظ بخطة بديلة للقراء أو استخدام CDN خارجي.</li>
            <li>مشكلات توافقية عبر نسخ أندرويد/آي أو إس: اختبارات مبكرة على أجهزة حقيقية وتغطية جهازية واسعة.</li>
            <li>متطلبات قانونية أو تراخيص للقراء: التحقق المبكر من رخص الاستخدام وإبرام اتفاقيات واضحة.</li>
          </ul>
        </section>

        <div className="flex gap-3">
          <Link href="/" className="btn-primary">العودة</Link>
          <Link href="/flutter" className="btn-primary">عرض Flutter</Link>
        </div>
      </main>
    </div>
  );
}
