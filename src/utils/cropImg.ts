import noImagePlaceholder from "../assets/no-image-placeholder.webp";
// Org url: https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg
// New url: https://media.rawg.io/media/crop/600/400/games/562/562553814dd54e001a541e4ee83a591c.jpg

const cropImg = (url: string) => {
  if (url === null || url === "" || !url) return noImagePlaceholder;
  const keyword = "media/";
  const index = url.indexOf(keyword) + keyword.length;
  const newUrl =
    url.substring(0, index) + "crop/600/400/" + url.substring(index);

  return newUrl;
};

export default cropImg;
