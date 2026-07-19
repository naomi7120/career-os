import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "AI 分析",
};

export default function AnalysisPage() {
  return (
    <PageHeader
      title="AI 分析"
      description="分析岗位要求与个人能力差距。具体业务功能将在后续迭代中接入。"
    />
  );
}
