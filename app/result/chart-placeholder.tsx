import Image from "next/image";

export default function ChartPlaceholder() {
  return (
    <div
      className="mt-8 flex min-h-[220px] flex-col items-center justify-center rounded-2xl bg-surface px-6 py-10 text-center"
      aria-label="Место для графика"
    >
      <Image src="/main/chart.svg" alt="" width={24} height={24} />
      <p className="mt-3 font-semibold text-main">График</p>
      <p className="mt-1 max-w-xs text-sm text-muted">Здесь позже появится график по технике.</p>
    </div>
  );
}
