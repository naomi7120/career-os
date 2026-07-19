import type { Job } from "@/types/job";

export const jobs: Job[] = [
  {
    id: "jd-ecommerce-operation",
    companyName: "京东",
    jobTitle: "电商运营专员",
    category: "电商运营",
    city: "北京",
    salary: "15K-22K",
    description:
      "负责店铺日常运营与活动策划，跟踪核心经营指标，通过数据分析持续优化商品和流量策略。要求具备良好的数据敏感度与跨团队协作能力。",
    source: "公司招聘官网",
    createdAt: "2026-07-18",
  },
  {
    id: "byte-content-operation",
    companyName: "字节跳动",
    jobTitle: "内容运营",
    category: "内容运营",
    city: "上海",
    salary: "18K-28K",
    description:
      "负责内容生态建设和作者运营，策划平台内容活动，结合用户反馈和数据表现优化内容策略。关注互联网内容趋势，有成熟的内容判断能力。",
    source: "Boss 直聘",
    createdAt: "2026-07-16",
  },
  {
    id: "xiaohongshu-user-operation",
    companyName: "小红书",
    jobTitle: "用户运营经理",
    category: "用户运营",
    city: "上海",
    salary: "20K-30K",
    description:
      "围绕用户生命周期制定精细化运营策略，负责用户拉新、活跃和留存，通过用户洞察推动产品体验与运营机制持续迭代。",
    source: "拉勾",
    createdAt: "2026-07-14",
  },
  {
    id: "perfect-diary-brand-operation",
    companyName: "逸仙电商",
    jobTitle: "品牌运营专员",
    category: "品牌运营",
    city: "广州",
    salary: "12K-18K",
    description:
      "协助品牌年度营销规划与项目落地，维护品牌内容和视觉表达，联动渠道与内容团队提升品牌认知和用户心智。",
    source: "猎聘",
    createdAt: "2026-07-12",
  },
];

export function getJobById(id: string) {
  return jobs.find((job) => job.id === id);
}
