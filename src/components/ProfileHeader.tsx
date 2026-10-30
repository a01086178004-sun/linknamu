type ProfileHeaderProps = {
  name: string;
  intro: string;
};

export default function ProfileHeader({ name, intro }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-foreground/30 bg-foreground/5">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-14 w-14 opacity-40"
          aria-hidden="true"
        >
          <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
        </svg>
      </div>
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="mt-1 text-sm opacity-60">{intro}</p>
      </div>
    </div>
  );
}
