import { IMAGES_LINK } from "../../constants";

export const getUserImage = (image) => {
  if (image) {
    return IMAGES_LINK + image;
  } else return "/images/89288184.png";
};
