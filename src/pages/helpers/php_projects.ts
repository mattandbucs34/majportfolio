import { IProjectType } from "../../interfaces/IProjects";
import ToDoPNG from '../../assets/images/php-to-do-list.png';
import PHPQuotes from '../../assets/images/php-quotes.png';
import Zippys from '../../assets/images/zippys.png';
import Wedding from '../../assets/images/wedding_thumb.png';

export const php_projects: IProjectType[] = [
  {
    projectName: "Beard Johnson Wedding",
    imagePath: Wedding,
    alt: "Beard-Johnson Wedding Thumbnail",
    href: "http://beardjohnsonwedding.com/"
  }
  ,{
    projectName: "To Do List",
    imagePath: ToDoPNG,
    alt: "To Do List Thumbnail",
    href: "https://php-to-do-app.herokuapp.com/"
  },
  {
    projectName: "PHP Quotes",
    imagePath: PHPQuotes,
    alt: "PHP Quotes Thumbnail",
    href: "https://mj-quotes-rest.herokuapp.com/"
  },
  {
    projectName: "Zippy's Used Autos",
    imagePath: Zippys,
    alt: "Zippy's Used Autos Thumbnail",
    href: "https://mattandbucs34-zippyusedauto.herokuapp.com/"
  }
]