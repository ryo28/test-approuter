import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-green-500 p-10">
        <nav className="flex gap-x-8">
          <Link href="/">トップページ</Link>
          <Link href="/about">アバウトページ</Link>
          <Link href="/dashboard" className="ml-auto">ログイン</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
