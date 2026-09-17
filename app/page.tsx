import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-4 py-10">
      <div className="w-full max-w-4xl rounded-sm bg-white px-8 py-12 sm:px-16 sm:py-14">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/result/success"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-main"
          >
            <Image src="/main/chart.svg" alt="" width={16} height={16} />
            Перейти к графикам
          </Link>
          <Link
            href="/create-task"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-main"
          >
            <Image src="/main/gear.svg" alt="" width={16} height={16} />
            Настройки дат
          </Link>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <h1 className="text-3xl font-bold text-main">Загрузите фото</h1>
          <p className="mt-2 text-base text-muted">
            Выберите фото, укажите дату и настройте график.
          </p>

          <form className="mt-8">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.4fr_1fr]">
              <label className="flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 py-10 text-center">
                <Image src="/main/image.svg" alt="" width={32} height={32} className="mb-3" />
                <span className="text-sm text-muted">
                  Выберите фото или перетащите его сюда
                </span>
                <input type="file" accept="image/*" className="hidden" />
              </label>

              <div className="space-y-3">
                <div className="relative">
                  <Image
                    src="/main/calendar.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                  />
                  <select
                    defaultValue="15.09.2026"
                    className="w-full appearance-none rounded-full border border-border bg-white py-3 pl-11 pr-10 text-sm text-main outline-none"
                  >
                    <option value="15.09.2026">15.09.2026</option>
                    <option value="16.09.2026">16.09.2026</option>
                    <option value="17.09.2026">17.09.2026</option>
                  </select>
                  <Image
                    src="/main/chevron.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                  />
                </div>

                <div className="relative">
                  <Image
                    src="/main/clock.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                  />
                  <select
                    defaultValue="11:00"
                    className="w-full appearance-none rounded-full border border-border bg-white py-3 pl-11 pr-10 text-sm text-main outline-none"
                  >
                    <option value="09:00">09:00</option>
                    <option value="11:00">11:00</option>
                    <option value="13:00">13:00</option>
                    <option value="15:00">15:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                  <Image
                    src="/main/chevron.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                  />
                </div>
              </div>
            </div>

            <Link
              href="/result/processing"
              className="mt-10 flex w-full items-center justify-center rounded-xl bg-button py-3.5 text-base font-medium text-button-text"
            >
              Далее →
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
