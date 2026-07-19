import Link from "next/link";

import type { Job } from "@/types/job";

type JobCardProps = {
  job: Job;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{job.companyName}</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">
            {job.jobTitle}
          </h2>
        </div>
        <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          {job.category}
        </span>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-slate-500">城市</dt>
          <dd className="mt-1 font-medium text-slate-900">{job.city}</dd>
        </div>
        <div>
          <dt className="text-slate-500">薪资</dt>
          <dd className="mt-1 font-medium text-slate-900">{job.salary}</dd>
        </div>
      </dl>

      <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
        {job.description}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-xs text-slate-500">来源：{job.source}</span>
        <Link
          href={`/jobs/${job.id}`}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950"
        >
          查看岗位详情
        </Link>
      </div>
    </article>
  );
}
