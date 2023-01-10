type Props = {
  title: string;
  getInTouch: boolean;
};

export default function Heading({ title }: Props) {
  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-48">
        <h1 className="pt-24 text-[55px] font-bold leading-[1] tracking-tight sm:pt-0 sm:text-center sm:text-7xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
