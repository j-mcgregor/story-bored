import sciFi from './genres/sciFi';
import crime from './genres/crime';
import horror from './genres/horror';
import romance from './genres/romance';
import fantasy from './genres/fantasy';
import religious from './genres/religious';
import historical from './genres/historical';
import inspiration from './genres/inspiration';

interface IKeywords {
  [key: string]: string[];
}
export const keywords: IKeywords = {
  sciFi,
  crime,
  horror,
  romance,
  fantasy,
  religious,
  historical,
  inspiration
};
