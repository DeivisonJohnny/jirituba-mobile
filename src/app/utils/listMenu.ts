import { useState } from 'react';

type Categorys = "Principal" | "Sobre o App"

export type itemMenu = {
  title: string;
  icon: string;
  prefixIcon?: "default" | "outline" | "sharp";

  sizeIcon?: number; //default 20
  sizeTitle?: number;
  widthTitle?: number;
  widthIcon?: number;
  category: Categorys;
};

export const CategorysMenu = [ 
  "Principal" ,
  "Sobre o App"
] as Categorys[]


export function useItemMenu() {
  const [itensMenu, setItensMenu] = useState<itemMenu[]>([]);


  const addItemMenu = (item: itemMenu) => {
    setItensMenu(prevItens => [
      ...prevItens,
      {
        title: item.title,
        icon: item.icon + `${item.prefixIcon ? '-' + item.prefixIcon : ''}`,
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
