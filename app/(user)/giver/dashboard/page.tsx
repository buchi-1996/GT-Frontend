import { redirect } from "next/navigation";

export default function DashboardRootPage() {
  redirect("/giver/dashboard/overview");
  return null;
}