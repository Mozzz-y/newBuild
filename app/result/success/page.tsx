import Image from "next/image";

export default function ResultSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-4 py-10">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-main">Результат проверки</h1>
        <p className="mt-2 text-base text-muted">
          Сравниваем данные по плану и результат анализа снимка. Ниже - сводная таблица по технике.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl bg-surface">
          <div className="grid grid-cols-3 gap-4 px-4 py-3 text-sm text-label">
            <span>Техника</span>
            <span>По плану</span>
            <span>На снимке</span>
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-border px-4 py-4">
            <span className="font-semibold text-main">Экскаватор</span>
            <span className="text-success">Требуется</span>
            <span className="text-success">Обнаружен</span>
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-border px-4 py-4">
            <span className="font-semibold text-main">Самосвал</span>
            <span className="text-success">Требуется</span>
            <span className="text-success">Обнаружен</span>
          </div>
        </div>

        <div className="mt-6 flex gap-3 rounded-2xl bg-success-bg px-4 py-4">
          <Image src="/main/check.svg" alt="" width={24} height={24} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-main">Вся необходимая техника обнаружена.</p>
            <p className="mt-1 text-sm text-muted">
              На снимке присутствует вся техника, предусмотренная этапом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
