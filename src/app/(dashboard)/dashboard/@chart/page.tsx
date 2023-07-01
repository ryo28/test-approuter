export default async function Dashboard() {
  // const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // const json = await data.json();
  await sleep(5000);

  // throw Error("エラーが発生しました")
  return (
    <div>
      <main>チャート</main>
      <div>なんかしらのチャートがでる</div>
    </div>
  );
}

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));
