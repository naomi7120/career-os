import type { Metadata } from "next";
import Link from "next/link";

import { JobCard } from "@/components/jobs/JobCard";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "岗位收藏",
};

export default function JobsPage() {
  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            岗位收藏中心
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            集中管理目标岗位，为后续的职业分析和成长规划做好准备。
          </p>
        </div>
        <Link
          href="/jobs/new"
          className="inline-flex w-fit items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          添加岗位
        </Link>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900">已收藏岗位</h2>
        <p className="text-sm text-slate-500">共 {jobs.length} 个岗位</p>
      </div>

      <div className="mt-4 grid gap-5 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
