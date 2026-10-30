export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com/" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "blog", label: "Blog", url: "https://example.com/blog" },
];
