import { redirect } from "next/navigation";

export default function SettingsRootPage() {
  redirect("/receiver/dashboard/settings/profile");
  return null;
}