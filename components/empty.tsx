import Image from "next/image";

interface EmptyProps {
  label: string;
}
const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <p className="text-muted-foreground text-sm text-center">{label}</p>
      <div className="relative h-96 w-72">
        <Image className="" alt="Empty" fill src={"/empty.png"} />
      </div>
    </div>
  );
};

export default Empty;
