import Image from "next/image";

export const DesignSystem = ({ desc, img }: { desc: string[]; img: string }) => {
  return (
    <div>
      <h1>Design system</h1>
      <ul>
        {desc.map((elem) => (
          <li key={elem}>{elem}</li>
        ))}
      </ul>
      <Image
        src={img}
        alt={`DS img`}
        width={2000}
        height={2000}
        loading="eager"
        className="w-full object-contain p-5"
      />
    </div>
  );
};
