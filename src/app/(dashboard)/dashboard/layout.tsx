import Link from "next/link";

export default function Layout({
  children,
  chart,
  pv,
}: {
  children: React.ReactNode;
  chart: React.ReactNode;
  pv: React.ReactNode;
}) {
  return (
    <div className="flex">
      <header className="bg-blue-200 p-10">
        <nav className="flex h-screen flex-col gap-x-8">
          <Link href="/dashboard">サマリー</Link>
          <Link href="/dashboard/settings">設定</Link>
          <Link href="/" className="mt-auto">
            ログアウト
          </Link>
        </nav>
      </header>
      <div className="flex items-start p-10">
        <div className="bg-purple-200 p-10"> {children}</div>
        <div className="bg-orange-200 p-10"> {chart}</div>
        <div className="bg-purple-200 p-10"> {pv}</div>
      </div>
    </div>
  );
}
