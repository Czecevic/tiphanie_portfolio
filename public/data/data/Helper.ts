export const assetPath = (folder: string) => (file: string) =>
  `/data/img/${folder}/${file}`;

export const toImages = (links: string[]) =>
  links.map((imglink, id) => ({ id, imglink }));

export const numbered = (
  build: (file: string) => string,
  base: string,
  count: number,
  ext = "png",
  start = 1,
) =>
  Array.from({ length: count }, (_, i) => build(`${base}_${start + i}.${ext}`));
