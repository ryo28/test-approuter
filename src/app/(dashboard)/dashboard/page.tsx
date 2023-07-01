
export default async function Dashboard() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();

  // throw Error("エラーが発生しました")
  return (
    <div>
      <main>ダッシュボード</main>
      <div>{json.userId}</div>
    </div>
  );
}

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));
