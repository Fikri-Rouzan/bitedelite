import logo from "./images/logo.png";
import background from "./images/background.png";
import poster from "./images/poster.png";
import basreng from "./images/basreng.png";
import kripca from "./images/kripca.png";

export const images = {
  logo,
  background,
  poster,
  basreng,
  kripca,
};

interface Product {
  name: string;
  image: string;
  description: string;
  price: string;
}

export const productsData: Product[] = [
  {
    name: "Basreng Pedas",
    image: images.basreng,
    description:
      "Basreng BiteDelite adalah camilan dari irisan bakso goreng yang digoreng kering dan dibumbui dengan racikan pedas gurih khas.",
    price: "4K",
  },
  {
    name: "Keripik Kaca Pedas",
    image: images.kripca,
    description:
      "Keripik Kaca BiteDelite adalah camilan unik berbahan dasar tepung yang digoreng tipis hingga transparan seperti kaca.",
    price: "4K",
  },
];
