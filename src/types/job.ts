export const JOB_CATEGORIES = [
  "电商运营",
  "品牌运营",
  "用户运营",
  "营销策划",
  "内容运营",
] as const;

export type JobCategory = (typeof JOB_CATEGORIES)[number];

export type Job = {
  id: string;
  companyName: string;
  jobTitle: string;
  category: JobCategory;
  city: string;
  salary: string;
  description: string;
  source: string;
  createdAt: string;
};

export type JobFormValues = Omit<Job, "id" | "createdAt">;
