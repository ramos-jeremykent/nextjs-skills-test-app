import { cn } from "@/app/utils/cn";

type ArticleSectionTitleProps = {
  className?: string;
  title: string;
};

export function ArticleSectionTitle(props: ArticleSectionTitleProps) {
  const { className, title } = props;

  return (
    <p
      className={cn(
        "uppercase text-5xl text-center font-openSansLight pb-8",
        className
      )}
    >
      {title}
    </p>
  );
}

export default ArticleSectionTitle;
