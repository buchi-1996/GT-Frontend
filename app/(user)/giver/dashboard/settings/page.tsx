import { redirect } from "next/navigation";

export default function SettingsRootPage() {
  redirect("/giver/dashboard/settings/profile");
  return null;
}