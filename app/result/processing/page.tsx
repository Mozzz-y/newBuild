import Image from "next/image";

export default function ResultProcessingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-4 py-10">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-main">Результат проверки</h1>
        <p className="mt-2 text-base text-muted">
          Сравниваем данные по плану и результат анализа снимка. Ниже - сводная таблица по технике.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center rounded-2xl bg-processing px-4 py-20">
          <Image src="/main/refresh.svg" alt="" width={32} height={32} />
          <p className="mt-4 text-muted">Обрабатываем снимок</p>
        </div>

        <button
          type="button"
          disabled
          className="mt-6 w-full rounded-xl bg-button-disabled py-3.5 text-base font-medium text-muted"
        >
          Проверить снимок
        </button>
      </div>
    </div>
  );
}
