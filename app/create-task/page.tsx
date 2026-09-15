import Image from "next/image";

export default function CreateTaskPage() {
  // Сентябрь 2026: 1-е число — вторник
  const days = [
    "", 1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, "", "", "",
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-4 py-10">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-main">Создание задачи</h1>
        <p className="mt-2 text-base text-muted">
          Укажите параметры, по которым нужно проверить наличие техники на объекте.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Дата + календарь */}
          <div>
            <p className="mb-3 text-base font-semibold text-main">Дата</p>
            <div className="rounded-2xl border border-border bg-input p-4">
              <div className="mb-4 flex items-center justify-between">
                <button type="button" className="p-1" aria-label="Предыдущий месяц">
                  <Image src="/main/chevron-left.svg" alt="" width={16} height={16} />
                </button>
                <p className="font-semibold text-main">Сентябрь 2026</p>
                <button type="button" className="p-1" aria-label="Следующий месяц">
                  <Image src="/main/chevron-right.svg" alt="" width={16} height={16} />
                </button>
              </div>

              <div className="mb-2 grid grid-cols-7 gap-1 text-center text-sm text-label">
                <span>Пн</span>
                <span>Вт</span>
                <span>Ср</span>
                <span>Чт</span>
                <span>Пт</span>
                <span>Сб</span>
                <span>Вс</span>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {days.map((day, index) => (
                  <div
                    key={`${day}-${index}`}
                    className={`flex h-9 items-center justify-center ${
                      day === 16
                        ? "rounded-full bg-accent font-semibold text-accent-text"
                        : "text-main"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-accent py-3.5 text-base font-medium text-accent-text"
            >
              Далее
            </button>
          </div>

          {/* Поля справа */}
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-base font-semibold text-main">
                Время начала
              </label>
              <div className="relative">
                <Image
                  src="/main/clock.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2"
                />
                <select
                  defaultValue="11:00"
                  className="w-full appearance-none rounded-xl border border-border bg-input py-3 pl-11 pr-10 text-main outline-none"
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

            <div>
              <label className="mb-2 block text-base font-semibold text-main">
                Задача
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
            </div>

            <div>
              <label className="mb-2 block text-base font-semibold text-main">
                Требуемая техника
              </label>
              <div className="relative">
                <select
                  defaultValue="samosval"
                  className="w-full appearance-none rounded-xl border border-border bg-input px-4 py-3 pr-10 text-main outline-none"
                >
                  <option value="samosval">Самосвал</option>
                  <option value="ekskavator">Экскаватор</option>
                  <option value="kran">Кран</option>
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
        </div>
      </div>
    </div>
  );
}
