import Image from "next/image";

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-page px-4 py-10">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-main">Результаты</h1>
            <p className="mt-2 text-base text-muted">
              Здесь отображается видео и учёт техники с отметками о заездах.
            </p>

            <h2 className="mt-10 text-xl font-bold text-main">Учёт техники</h2>

            <div className="mt-4">
              <div className="grid grid-cols-2 gap-4 border-b border-border pb-3 text-sm text-label">
                <span>Техника</span>
                <span>Заехала</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-border py-4">
                <span className="font-semibold text-main">Грузовик</span>
                <span className="text-main">время</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-border py-4">
                <span className="font-semibold text-main">Трактор</span>
                <span className="text-main">-</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-b border-border py-4">
                <span className="font-semibold text-main">Экскаватор</span>
                <span className="text-main">время</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/main/video-preview.jpg"
              alt="Видео со стройплощадки"
              width={800}
              height={450}
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Image src="/main/play.svg" alt="" width={48} height={48} />
            </div>
            <span className="absolute bottom-3 right-4 text-sm font-medium text-white">
              3:02
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
