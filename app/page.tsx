export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mx-auto max-w-5xl">

        <h1 className="text-4xl font-bold">
          Career OS
        </h1>

        <p className="mt-4 text-gray-600">
          AI职业成长助手
          <br />
          帮助大学生发现目标岗位、提升能力、记录成长。
        </p>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">
              📰 岗位收藏
            </h2>

            <p className="mt-3 text-gray-500">
              收集目标岗位，AI分析招聘需求。
            </p>
          </div>


          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">
              🗺️ 能力地图
            </h2>

            <p className="mt-3 text-gray-500">
              根据目标岗位生成能力提升路径。
            </p>
          </div>


          <div className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">
              🤖 AI分析
            </h2>

            <p className="mt-3 text-gray-500">
              智能拆解JD，发现能力差距。
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}