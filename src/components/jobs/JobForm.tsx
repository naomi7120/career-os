"use client";

import { useState, type FormEvent } from "react";

import { JOB_CATEGORIES } from "@/types/job";

const inputClassName =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export function JobForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          公司名称
          <input
            name="companyName"
            type="text"
            required
            placeholder="例如：小红书"
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          岗位名称
          <input
            name="jobTitle"
            type="text"
            required
            placeholder="例如：用户运营经理"
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          岗位类别
          <select
            name="category"
            required
            defaultValue=""
            className={inputClassName}
          >
            <option value="" disabled>
              请选择岗位类别
            </option>
            {JOB_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-slate-700">
          城市
          <input
            name="city"
            type="text"
            required
            placeholder="例如：上海"
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          薪资
          <input
            name="salary"
            type="text"
            required
            placeholder="例如：15K-25K"
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          来源
          <input
            name="source"
            type="text"
            required
            placeholder="例如：Boss 直聘"
            className={inputClassName}
          />
        </label>

        <label className="text-sm font-medium text-slate-700 sm:col-span-2">
          招聘 JD
          <textarea
            name="description"
            required
            rows={9}
            placeholder="粘贴完整的岗位职责和任职要求"
            className={`${inputClassName} resize-y`}
          />
        </label>
      </div>

      {submitted && (
        <p
          role="status"
          className="mt-6 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
        >
          表单校验已通过。当前为 mock 版本，岗位数据不会被持久化保存。
        </p>
      )}

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          保存岗位
        </button>
      </div>
    </form>
  );
}
