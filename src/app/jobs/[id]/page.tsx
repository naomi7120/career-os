import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getJobById, jobs } from "@/data/jobs";

type JobDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({
  params,
}: JobDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const job = getJobById(id);

  return {
    title: job ? `${job.jobTitle} - ${job.companyName}` : "岗位不存在",
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = await params;
  const job = getJobById(id);

  if (!job) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/jobs"
        className="text-sm font-medium text-slate-600 hover:text-slate-950"
      >
        ← 返回岗位收藏
      </Link>

      <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-medium text-slate-500">{job.companyName}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              {job.jobTitle}
            </h1>
          </div>
          <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {job.category}
          </span>
        </div>

        <dl className="grid gap-5 border-b border-slate-100 py-6 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-slate-500">城市</dt>
            <dd className="mt-1 font-medium text-slate-950">{job.city}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">薪资</dt>
            <dd className="mt-1 font-medium text-slate-950">{job.salary}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">来源</dt>
            <dd className="mt-1 font-medium text-slate-950">{job.source}</dd>
          </div>
        </dl>

        <section className="pt-6">
          <h2 className="text-lg font-semibold text-slate-950">招聘 JD</h2>
          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">
            {job.description}
          </p>
        </section>
      </article>
    </div>
  );
}
