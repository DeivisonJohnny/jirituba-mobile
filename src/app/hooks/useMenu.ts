import { useEffect, useState } from "react";
import MenuItens from "../utils/listMenu";

type Categorys = "Principal" | "Sobre o App";

export type itemMenu = {
  title: string;
  icon: string;
  uri: string;
  prefixIcon?: "default" | "outline" | "sharp";

  sizeIcon?: number; //default 20
  sizeTitle?: number;
  widthTitle?: number;
  widthIcon?: number;
  category: Categorys;
};

export const CategorysMenu = ["Principal", "Sobre o App"] as Categorys[];

export default function useMenu() {
  const [itensMenu, setItensMenu] = useState<itemMenu[]>(MenuItens);

  const addItemMenu = (item: itemMenu) => {
    setItensMenu((prevItens) => [
      ...prevItens,
      {
        title: item.title,
        uri: item.uri,
        icon: item.icon + `${item.prefixIcon ? "-" + item.prefixIcon : ""}`,
        prefixIcon: item.prefixIcon,
        sizeIcon: item.sizeIcon ?? 20,
        sizeTitle: item.sizeTitle,
        widthTitle: item.widthTitle,
        widthIcon: item.widthIcon,
        category: item.category,
      },
    ]);
  };

  return { itensMenu, addItemMenu };
}
