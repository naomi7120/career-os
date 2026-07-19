import Link from "next/link";

import { PageHeader } from "@/components/ui/page-header";
import { navigationItems } from "@/lib/navigation";

const featureDescriptions: Record<string, string> = {
  "/jobs": "集中管理感兴趣的岗位与招聘信息。",
  "/analysis": "使用 AI 理解岗位要求与个人差距。",
  "/skills": "梳理能力现状，规划职业成长路径。",
};

export default function HomePage() {
  const features = navigationItems.filter((item) => item.href !== "/");

  return (
    <div>
      <PageHeader
        title="你的 AI 职业成长助手"
        description="从发现目标岗位，到分析能力差距，再到规划成长路径，Career OS 帮助你建立清晰、可持续的职业成长系统。"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <Link
            key={feature.href}
            href={feature.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-slate-950">
              {feature.label}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {featureDescriptions[feature.href]}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
