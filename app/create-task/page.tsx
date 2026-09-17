"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const MONTH_NAMES = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const WEEKDAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const EQUIPMENT_OPTIONS = [
  { value: "", label: "Не выбрано" },
  { value: "samosval", label: "Самосвал" },
  { value: "ekskavator", label: "Экскаватор" },
  { value: "kran", label: "Кран" },
  { value: "buldozer", label: "Бульдозер" },
  { value: "pogruzchik", label: "Погрузчик" },
  { value: "katok", label: "Каток" },
  { value: "betononasos", label: "Бетононасос" },
  { value: "avtobeton", label: "Автобетоносмеситель" },
  { value: "avtovyshka", label: "Автовышка" },
  { value: "greyder", label: "Грейдер" },
  { value: "manipulyator", label: "Манипулятор" },
  { value: "mini-pogruzchik", label: "Мини-погрузчик" },
  { value: "svayeboy", label: "Сваебойная установка" },
  { value: "gidromolot", label: "Гидромолот" },
  { value: "vibroplita", label: "Виброплита" },
  { value: "kompressor", label: "Компрессор" },
  { value: "tral", label: "Трал" },
  { value: "vodovoz", label: "Водовоз" },
];

function getCalendarDays(year: number, month: number) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const mondayOffset = firstWeekday === 0 ? 6 : firstWeekday - 1;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<number | null> = Array(mondayOffset).fill(null);

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day);
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function SelectField({
  value,
  onChange,
  options,
  ariaLabel,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  ariaLabel: string;
}) {
  return (
    <div className="relative">
      <select
        aria-label={ariaLabel}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full cursor-pointer appearance-none rounded-xl border border-border bg-input px-4 py-3 pr-10 text-main outline-none"
      >
        {options.map((option) => (
          <option key={option.value || "empty"} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Image
        src="/main/chevron.svg"
        alt=""
        width={16}
        height={16}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
      />
    </div>
  );
}

export default function CreateTaskPage() {
  const [viewDate, setViewDate] = useState(() => new Date(2026, 8, 1));
  const [selectedDate, setSelectedDate] = useState(() => new Date(2026, 8, 17));
  const [startTime, setStartTime] = useState("11:00");
  const [task, setTask] = useState("");
  const [mainEquipment, setMainEquipment] = useState("samosval");
  const [extraEquipment, setExtraEquipment] = useState([
    "ekskavator",
    "kran",
    "manipulyator",
    "svayeboy",
    "kompressor",
    "",
  ]);

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const days = useMemo(() => getCalendarDays(year, month), [year, month]);
  const today = new Date(2026, 8, 17);

  const isSelected = (day: number) =>
    selectedDate.getFullYear() === year &&
    selectedDate.getMonth() === month &&
    selectedDate.getDate() === day;

  const isToday = (day: number) =>
    today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;

  const goToPreviousMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const addExtraEquipment = () => {
    setExtraEquipment((current) => [...current, ""]);
  };

  const updateExtraEquipment = (index: number, value: string) => {
    setExtraEquipment((current) =>
      current.map((item, itemIndex) => (itemIndex === index ? value : item)),
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-4 py-10">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-main">Создание задачи</h1>
        <p className="mt-2 text-base text-muted">
          Укажите параметры, по которым нужно проверить наличие техники на объекте.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-base font-semibold text-main">Дата</p>
            <div className="rounded-2xl border border-border bg-input p-4">
              <div className="mb-4 flex items-center justify-between">
                <button
                  type="button"
                  className="cursor-pointer rounded-lg p-1 hover:bg-surface"
                  aria-label="Предыдущий месяц"
                  onClick={goToPreviousMonth}
                >
                  <Image src="/main/chevron-left.svg" alt="" width={16} height={16} />
                </button>
                <p className="font-semibold text-main">
                  {MONTH_NAMES[month]} {year}
                </p>
                <button
                  type="button"
                  className="cursor-pointer rounded-lg p-1 hover:bg-surface"
                  aria-label="Следующий месяц"
                  onClick={goToNextMonth}
                >
                  <Image src="/main/chevron-right.svg" alt="" width={16} height={16} />
                </button>
              </div>

              <div className="mb-2 grid grid-cols-7 gap-1 text-center text-sm text-label">
                {WEEKDAYS.map((weekday) => (
                  <span key={weekday}>{weekday}</span>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {days.map((day, index) =>
                  day ? (
                    <button
                      key={`${year}-${month}-${day}`}
                      type="button"
                      onClick={() => setSelectedDate(new Date(year, month, day))}
                      aria-pressed={isSelected(day)}
                      aria-label={`Выбрать ${day} ${MONTH_NAMES[month]} ${year}`}
                      className={`flex h-9 cursor-pointer items-center justify-center rounded-full ${
                        isSelected(day)
                          ? "bg-accent font-semibold text-accent-text"
                          : isToday(day)
                            ? "font-semibold text-main ring-1 ring-border"
                            : "text-main hover:bg-surface"
                      }`}
                    >
                      {day}
                    </button>
                  ) : (
                    <div key={`empty-${index}`} className="h-9" />
                  ),
                )}
              </div>

              <p className="mt-4 text-center text-sm text-muted">
                Выбрано: <span className="font-medium text-main">{formatDate(selectedDate)}</span>
              </p>
            </div>

            <button
              type="button"
              className="mt-4 w-full cursor-pointer rounded-xl bg-accent py-3.5 text-base font-medium text-accent-text"
            >
              Далее
            </button>
          </div>

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
                  value={startTime}
                  onChange={(event) => setStartTime(event.target.value)}
                  className="w-full cursor-pointer appearance-none rounded-xl border border-border bg-input py-3 pl-11 pr-10 text-main outline-none"
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
              <label htmlFor="task-name" className="mb-2 block text-base font-semibold text-main">
                Задача
              </label>
              <textarea
                id="task-name"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                placeholder="Опишите задачу своими словами, например: отсыпка котлована и вывоз грунта"
                rows={4}
                className="w-full resize-y rounded-xl border border-border bg-input px-4 py-3 text-main outline-none placeholder:text-muted"
              />
            </div>

            <div>
              <label className="mb-2 block text-base font-semibold text-main">
                Требуемая техника
              </label>
              <SelectField
                ariaLabel="Требуемая техника"
                value={mainEquipment}
                onChange={setMainEquipment}
                options={EQUIPMENT_OPTIONS.filter((option) => option.value)}
              />
            </div>

            {extraEquipment.map((value, index) => (
              <div key={`extra-${index}`}>
                <label className="mb-2 block text-base font-semibold text-main">
                  Доп. техника {index + 1}
                </label>
                <SelectField
                  ariaLabel={`Дополнительная техника ${index + 1}`}
                  value={value}
                  onChange={(nextValue) => updateExtraEquipment(index, nextValue)}
                  options={EQUIPMENT_OPTIONS}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addExtraEquipment}
              className="w-full cursor-pointer rounded-xl border border-border bg-input py-3 text-sm font-medium text-main hover:bg-surface"
            >
              Добавить ещё технику
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
