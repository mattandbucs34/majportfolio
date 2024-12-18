import BloccitPNG from '../../assets/images/bloccit.png'
import MattPedia from '../../assets/images/matt-a-pedia.png';
import { IProjectType } from '../../interfaces/IProjects';

export const node_projects: IProjectType[] = [
  {
    projectName: "Whats It",
    imagePath: BloccitPNG,
    alt:"Whats It Thumbnail",
    href: "https://mattandbucs34-bloccit.herokuapp.com/"
  },
  {
    projectName: "Matt-A-Pedia",
    imagePath: MattPedia,
    alt: "Matt-a-Pedia Thumbnail",
    href: "https://mattandbucs34-matt-a-pedia.herokuapp.com/"
  }
]