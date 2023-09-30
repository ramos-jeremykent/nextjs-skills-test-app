import { cn } from "@/app/utils/cn";
import Image from "next/image";

type CardImageProps = {
  alt: string;
  className?: string;
  main_photo: string;
};

export function CardImage(props: CardImageProps) {
  const { alt, className, main_photo } = props;

  return (
    <div className="flex-shrink-0">
      <div
        className={cn(
          "h-[360px] w-full relative hover:cursor-pointer border-b-4 border-red-600 overflow-hidden",
          className
        )}
      >
        <Image
          alt={alt}
          className=" transform transition duration-500 hover:scale-110"
          blurDataURL={main_photo}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          src={main_photo}
        />
      </div>
    </div>
  );
}
