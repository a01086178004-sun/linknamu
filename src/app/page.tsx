import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-4 py-10">
      <ThemeToggle />
      <div className="flex w-full max-w-sm flex-col items-center gap-8 rounded-[2.5rem] border-2 border-foreground/15 px-6 py-12 sm:py-16">
        <ProfileHeader name="권태양" intro="DOS 팀장" />
        <LinkList links={links} />
      </div>
    </main>
  );
}
