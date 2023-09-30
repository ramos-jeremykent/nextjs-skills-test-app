type CardContentProps = {
  excerpt: string;
  link: string;
  title: string;
};

export function CardContent(props: CardContentProps) {
  const { excerpt, link, title } = props;

  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="flex-1">
        <a href={link} className="block mt-2">
          <p className="text-lg pt-4 font-openSansBold sm:text-body md:text-header6 lg:text-2header6 text-Dark">
            {title}
          </p>
          <p className="text-subtitle text-gray-300 font-openSansLight mt-3 text-base text-dark60 hidden sm:block text-justify">
            {excerpt}
          </p>
        </a>
      </div>
    </div>
  );
}
