import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-6 sm:p-12">
      <header className="max-w-5xl mx-auto mb-6 fade-up">
        <div className="flex items-center gap-3">
          <Image src="/next.svg" alt="logo" width={140} height={30} />
          <div>
            <h1 className="text-2xl font-bold">عرض تطوير تطبيق القرآن الكريم</h1>
            <div className="mt-2 text-sm muted">HollyQuran • عرض للمشروع</div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto space-y-6 prose prose-lg">
        <section className="card fade-up">
          <h2>اختر تقنية العرض</h2>
          <p className="muted">اضغط على أي زر لعرض تفاصيل العرض الخاص بتقنية Flutter أو React Native</p>

          <div className="mt-6 flex gap-4 flex-col sm:flex-row">
            <Link href="/flutter" className="btn-primary">
              <div className="flex items-center gap-3">
                <Image src="https://www.svgrepo.com/show/473613/flutter.svg" alt="flutter" width={20} height={20} />
                <div className="text-sm">
                  <div className="font-semibold">Flutter</div>
                  <div className="text-sm muted">أداء عالي وتجربة مستخدم ثابتة عبر المنصات</div>
                </div>
              </div>
            </Link>

            <Link href="/react-native" className="btn-primary" >
              <div className="flex items-center gap-3">
                <Image src="https://www.svgrepo.com/show/521303/react-16.svg" alt="react native" width={20} height={20} />
                <div className="text-sm">
                  <div className="font-semibold">React Native</div>
                  <div className="text-sm muted">تطوير سريع ودعم واسع لمكتبات JavaScript</div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <section className="card fade-up">
          <h2>ملاحظات</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>الأسعار والمدة تقديرية وتُعدل بعد مراجعة المتطلبات التفصيلية.</li>
            <li>أعرض خطة دفع مجزأة ومدة ضمان ودعم فني بعد التسليم.</li>
          </ul>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-12 text-sm muted">
        <div className="card flex items-center justify-between">
          <div>للاستفسار والتواصل: khall@soft-magic.com</div>
          <div className="text-sm muted">متاح عبر البريد الإلكتروني</div>
        </div>
      </footer>

      {/* corner toggle for quick nav between pages */}
      <div className="fixed left-4 bottom-4">
        <div className="card p-2 rounded-full w-12 h-12 flex items-center justify-center">
          <Link href="/react-native" className="text-sm muted">تبديل</Link>
        </div>
      </div>
    </div>
  );
}
