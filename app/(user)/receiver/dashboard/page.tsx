import { redirect } from "next/navigation";

export default function DashboardRootPage() {
  redirect("/receiver/dashboard/overview");
  return null;
}