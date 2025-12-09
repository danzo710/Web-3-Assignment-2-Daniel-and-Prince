// men Images
import MensBottomsImg from "../assets/mens/Men-Bottoms.jpg";
import MensSweatersImg from "../assets/mens/Men-Sweater.jpg";
import MensOuterwearImg from "../assets/mens/Men-Outerwear.jpg";
import MensTopsImg from "../assets/mens/Men-Tops.jpg";
import MensAccessoriesImg from "../assets/mens/Men-Accessories.jpg";
import MensJumpsuitsImg from "../assets/mens/Men-Jumpsuit.jpg";
import MensShoesImg from "../assets/mens/Men-Shoes.jpg";
import MensLoungeWearImg from "../assets/mens/Men-Loungewear.jpg";

// women Images
import WomensTopsImg from "../assets/womens/Women-Tops.jpg";
import WomensBottomsImg from "../assets/womens/Women-Bottoms.jpg";
import WomensDressesImg from "../assets/womens/Women-Dresses.jpg";
import WomensOuterwearImg from "../assets/womens/Women-Outerwear.jpg";
import WomensJumpsuitsImg from "../assets/womens/Women-Jumpsuits.jpg";
import WomensSweatersImg from "../assets/womens/Women-Sweaters.jpg";
import WomensAccessoriesImg from "../assets/womens/Women-Accessories.jpg";
import WomensLoungeWearImg from "../assets/womens/Women-Loungewear.jpg";
import WomensShoesImg from "../assets/womens/Women-Shoes.jpg";
import WomensIntimatesImg from "../assets/womens/Women-Intimates.jpg";
import WomensSwimwearImg from "../assets/womens/Women-Swimwears.jpg";

// Hero images
import MenHero from "../assets/hero/Hero-Men.jpg";
import WomenHero from "../assets/hero/Women-Hero.jpg";

// Config objects
const heroImages = {
  mens: MenHero,
  womens: WomenHero,
};

const categoryConfig = {
  mens: [
    { name: "Bottoms", image: MensBottomsImg },
    { name: "Sweaters", image: MensSweatersImg },
    { name: "Outerwear", image: MensOuterwearImg },
    { name: "Tops", image: MensTopsImg },
    { name: "Accessories", image: MensAccessoriesImg },
    { name: "Jumpsuits", image: MensJumpsuitsImg },
    { name: "Shoes", image: MensShoesImg },
    { name: "LoungeWear", image: MensLoungeWearImg },
  ],
  womens: [
    { name: "Tops", image: WomensTopsImg },
    { name: "Bottoms", image: WomensBottomsImg },
    { name: "Dresses", image: WomensDressesImg },
    { name: "Outerwear", image: WomensOuterwearImg },
    { name: "Jumpsuits", image: WomensJumpsuitsImg },
    { name: "Sweaters", image: WomensSweatersImg },
    { name: "Accessories", image: WomensAccessoriesImg },
    { name: "LoungeWear", image: WomensLoungeWearImg },
    { name: "Shoes", image: WomensShoesImg },
    { name: "Intimates", image: WomensIntimatesImg },
    { name: "Swimwear", image: WomensSwimwearImg },
  ],
};

// Named exports
export { heroImages, categoryConfig };
