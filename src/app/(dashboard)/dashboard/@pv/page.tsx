export default async function Dashboard() {
  // const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // const json = await data.json();
  await sleep(3000);

  // throw Error("エラーが発生しました")
  return (
    <div>
      <main>PV数</main>
      <div>1000</div>
    </div>
  );
}

const sleep = (msec: number) => new Promise((resolve) => setTimeout(resolve, msec));
