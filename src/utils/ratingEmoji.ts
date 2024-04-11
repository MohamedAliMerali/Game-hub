import meh from "../../src/assets/meh.webp";
import thumbsUp from "../../src/assets/thumbs-up.webp";
import bullsEye from "../../src/assets/bulls-eye.webp";

const ratingEmoji = (rating: number) => {
  if (rating < 3)
    return {
      imgSrc: "",
      imgAlt: "",
    };

  const emojiMap: { [key: number]: { src: string; alt: string } } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  return {
    imgSrc: emojiMap[rating].src,
    imgAlt: emojiMap[rating].alt,
  };
};

export default ratingEmoji;
