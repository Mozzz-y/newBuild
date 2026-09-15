import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-page px-4 py-10">
      <div className="mx-auto w-full max-w-xl">
        <h1 className="text-3xl font-bold text-main">Данные для проверки</h1>
        <p className="mt-2 text-base text-muted">
          Укажите этап из графика, заполните данные и загрузите фото с площадки.
        </p>

        <form className="mt-8 space-y-6">
          {/* Этап из графика */}
          <div>
            <label className="mb-2 block text-base font-semibold text-main">
              Этап из графика
            </label>
            <div className="relative">
              <select
                defaultValue="kotlovan"
                className="w-full appearance-none rounded-xl border border-border bg-input px-4 py-3 pr-10 text-main outline-none"
              >
                <option value="kotlovan">Разработка котлована</option>
                <option value="fundament">Устройство фундамента</option>
                <option value="steny">Возведение стен</option>
              </select>
              <Image
                src="/main/chevron.svg"
                alt=""
                width={16}
                height={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              />
            </div>

            <div className="mt-3 grid grid-cols-1 gap-4 rounded-xl bg-surface px-4 py-4 sm:grid-cols-3">
              <div>
                <p className="text-sm text-label">Зона</p>
                <p className="mt-1 font-semibold text-main">Котлован</p>
              </div>
              <div>
                <p className="text-sm text-label">Дата</p>
                <p className="mt-1 font-semibold text-main">15.09.2026 - 15.10.2026</p>
              </div>
              <div>
                <p className="text-sm text-label">Требуемая техника</p>
                <p className="mt-1 font-semibold text-main">Экскаватор, Самосвал</p>
              </div>
            </div>
          </div>

          {/* Время съёмки */}
          <div>
            <label className="mb-2 block text-base font-semibold text-main">
              Время съёмки
            </label>
            <div className="relative">
              <Image
                src="/main/calendar.svg"
                alt=""
                width={20}
                height={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
              />
              <select
                defaultValue="11:00"
                className="w-full appearance-none rounded-xl border border-border bg-input py-3 pl-11 pr-10 text-main outline-none"
              >
                <option value="09:00">15.09.2026 09:00</option>
                <option value="11:00">15.09.2026 11:00</option>
                <option value="13:00">15.09.2026 13:00</option>
                <option value="15:00">15.09.2026 15:00</option>
                <option value="17:00">15.09.2026 17:00</option>
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

          {/* Загрузка изображений */}
          <div>
            <label className="mb-2 block text-base font-semibold text-main">
              Загрузите изображения
            </label>
            <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl bg-surface px-4 py-14 text-center">
              <Image
                src="/main/upload.svg"
                alt=""
                width={32}
                height={32}
                className="mb-3"
              />
              <span className="text-sm text-muted">
                Перетащите видео сюда или выберите файл
              </span>
              <input type="file" accept="image/*,video/*" className="hidden" />
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-button py-3.5 text-base font-medium text-button-text"
          >
            Проверить снимок
          </button>
        </form>
      </div>
    </div>
  );
}
