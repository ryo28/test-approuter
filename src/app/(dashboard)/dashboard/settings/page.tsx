import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <form className="flex gap-x-4 py-10">
        <label>名前</label>
        <input type="text" className="border-2 border-black" />
      </form>
    </div>
  );
}
