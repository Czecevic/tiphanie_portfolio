import { EmploiCardProps } from "@/interfaces";

export function EmploiCard({ emploi, type }: EmploiCardProps) {
  const filteredEmplois = emploi.filter((item) => {
    const itemType = item.type.toLowerCase();
    const targetType = type.toLowerCase();
    return itemType === targetType || itemType === `${targetType}s`;
  });

  if (filteredEmplois.length === 0) {
    return null;
  }

  return (
    <div className={`${type === "Associatif" && `border-b pb-8`}`}>
      <h3 className={`${type != "Stage" && `border-t pt-8`} text-3xl font-heading text-[#7e1114] pb-2 mb-4 capitalize`}>
        {type}s
      </h3>
      <div className="space-y-4">
        {filteredEmplois.map((item) => (
          <div
            key={item.id}
            className="p-4"
          >
            <h4 className="font-heading text-base md:text-lg mb-2">
              {item.title}
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm ">
              {item.desc.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
