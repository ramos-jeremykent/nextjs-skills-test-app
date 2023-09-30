type CardLinkProps = {
  className?: string;
  onClick: () => void;
};

export function CardLink(props: CardLinkProps) {
  const { className, onClick } = props;

  return (
    <div className="flex-auto mt-6 cursor-pointer" onClick={onClick}>
      <span className="border-b-2 border-red-600 pb-2">READ MORE</span>
    </div>
  );
}
