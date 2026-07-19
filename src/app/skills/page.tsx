import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "能力地图",
};

export default function SkillsPage() {
  return (
    <PageHeader
      title="能力地图"
      description="建立你的能力档案与成长路径。具体业务功能将在后续迭代中接入。"
    />
  );
}
