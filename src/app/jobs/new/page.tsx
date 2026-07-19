import type { Metadata } from "next";
import Link from "next/link";

import { JobForm } from "@/components/jobs/JobForm";

export const metadata: Metadata = {
  title: "添加岗位",
};

export default function NewJobPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/jobs"
        className="text-sm font-medium text-slate-600 hover:text-slate-950"
      >
        ← 返回岗位收藏
      </Link>
      <div className="mb-8 mt-5">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">
          添加岗位
        </h1>
        <p className="mt-3 text-slate-600">
          记录岗位基本信息和招聘要求，当前版本使用本地 mock 数据。
        </p>
      </div>
      <JobForm />
    </div>
  );
}
