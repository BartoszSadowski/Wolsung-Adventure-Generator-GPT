import { Country } from './country';
import { getRandomElement } from '../../random/list.utils';
import { Gender } from '../system/advantage/ally/gender';

export const nameSet: Record<Gender, Record<Country, Array<string>>> = {
  [Gender.FEMALE]: {
    [Country.ALFHEIM]: [
      'Adda', 'Alice', 'Bethan', 'Bridget', 'Catriona', 'Davina', 'Daisy',
      'Elspeth', 'Erin', 'Fanny', 'Florence', 'Gwen', 'Heather', 'Ivy', 'Jane',
      'Lowri', 'Mabel', 'Maud', 'May', 'Nelly', 'Rhiannon', 'Rose', 'Sioned',
      'Una', 'Victoria', 'Violet',
    ],
    [Country.WOTANY]: [
      'Adele', 'Alberga', 'Bernadette', 'Bertha', 'Clotilde', 'Dagmare', 'Emma',
      'Erna', 'Eva', 'Felisberta', 'Gretchen', 'Gudrun', 'Hedwig', 'Holdailse',
      'Johenna', 'Lindie', 'Marhilde', 'Rosamunda', 'Solviga', 'Ulla', 'Wilda',
      'Willemina', 'Ysela',
    ],
    [Country.AKWITANY]: [
      'Amélia', 'Anguine', 'Antoinette', 'Bimpe', 'Chloe', 'Demilade', 'Elana',
      'Gwendola', 'Isabelle', 'Jade', 'Laura', 'Lorraine', 'Mélody', 'Morana',
      'Muriel', 'Nina', 'Odette', 'Olayinka', 'Penelope', 'Placide', 'Reine',
      'Sacha', 'Sofiat', 'Tifenn', 'Yanna', 'Zénaïde',
    ],
  },
  [Gender.MALE]: {
    [Country.ALFHEIM]: [
      'Alfred', 'Arthur', 'Cecil', 'Charles', 'Cerl', 'Clarence', 'Drystan',
      'Elgar', 'Frank', 'Frederick', 'Galahad', 'Hedd', 'Henry', 'Idris',
      'Jonathan', 'Keithen', 'Lloyd', 'Michael', 'Osian', 'Rupert', 'Seril',
      'Steward', 'Thomas', 'Victor', 'Willem', 'Winston',
    ],
    [Country.WOTANY]: [
      'Adewolf', 'Alrick', 'Audrick', 'Berthold', 'Bruno', 'Burhardt',
      'Dietrich', 'Eduard', 'Erich', 'Friedrich', 'Gerhard', 'Hans',
      'Heinrich', 'Johen', 'Jurgen', 'Leopold', 'Lothar', 'Ludwig', 'Manfred',
      'Michael', 'Otto', 'Reinhardt', 'Sigwalt', 'Sygurd', 'Volker', 'Walmond',
      'Werner', 'Wotan',
    ],
    [Country.AKWITANY]: [
      'Alain', 'Justupe', 'Ausian', 'Laurent', 'Adisa', 'Nicolas', 'Blaise',
      'Olawale', 'Bernard', 'Paul', 'Claude', 'Pierce', 'Daniel', 'Quentin',
      'Dorien', 'Rafiatu', 'Frederic', 'Rene', 'Sebastien', 'Jean-Luc',
      'Stephen', 'Jean-Pierre', 'Thierry', 'Julien', 'Vincent',
    ],
  },
};

export function getRandomName(gender: Gender, country: Country) {
  return getRandomElement(nameSet[gender][country]);
}

export const surnameSet: Record<Country, Array<string>> = {
  [Country.ALFHEIM]: [
    'Allen', 'Bennet', 'Clarke', 'Davies', 'Evans', 'Green', 'Hill', 'Jones',
    'Morgan', 'Price', 'Shaw', 'Turner', 'Wilson', 'Blackhusk', 'Blackthorn',
    'Blackblood', 'Blackbone', 'Blackscale', 'Blackvenom', 'Blackcrawl',
    'Blackhowl', 'Blackblight', 'Blackvine', 'Blackspire', 'Blackbane',
    'Blackdusk', 'Blackroot', 'Blackleaf', 'Blackwine', 'Blackacorn',
    'Blackfeather', 'Blackmead', 'Blacksoar', 'Blacksong',
    'Blackbud', 'Blackwood', 'Blacktower', 'Blackberry',
    'Blackshine', 'Hornhusk', 'Hornthorn', 'Hornblood', 'Hornbone',
    'Hornscale', 'Hornvenom', 'Horncrawl', 'Hornhowl', 'Hornblight',
    'Hornvine', 'Hornspire', 'Hornbane', 'Horndusk', 'Hornroot',
    'Hornleaf', 'Hornwine', 'Hornacorn', 'Hornfeather', 'Hornmead',
    'Hornsoar', 'Hornsong', 'Hornbud', 'Hornwood', 'Horntower',
    'Hornberry', 'Hornshine', 'Yewhusk', 'Yewthorn', 'Yewblood', 'Yewbone',
    'Yewscale', 'Yewvenom', 'Yewcrawl', 'Yewhowl', 'Yewblight', 'Yewvine',
    'Yewspire', 'Yewbane', 'Yewdusk', 'Yewroot', 'Yewleaf', 'Yewwine',
    'Yewacorn', 'Yewfeather', 'Yewmead', 'Yewsoar', 'Yewsong', 'Yewbud',
    'Yewwood', 'Yewtower', 'Yewberry', 'Yewshine', 'Toadhusk', 'Toadthorn',
    'Toadblood', 'Toadbone', 'Toadscale', 'Toadvenom', 'Toadcrawl', 'Toadhowl',
    'Toadblight', 'Toadvine', 'Toadspire', 'Toadbane', 'Toaddusk', 'Toadroot',
    'Toadleaf', 'Toadwine', 'Toadacorn', 'Toadfeather', 'Toadmead', 'Toadsoar',
    'Toadsong', 'Toadbud', 'Toadwood', 'Toadtower', 'Toadberry', 'Toadshine',
    'Snakehusk', 'Snakethorn', 'Snakeblood', 'Snakebone', 'Snakescale',
    'Snakevenom', 'Snakecrawl', 'Snakehowl', 'Snakeblight', 'Snakevine',
    'Snakespire', 'Snakebane', 'Snakedusk', 'Snakeroot', 'Snakeleaf',
    'Snakewine', 'Snakeacorn', 'Snakefeather', 'Snakemead', 'Snakesoar',
    'Snakesong', 'Snakebud', 'Snakewood', 'Snaketower', 'Snakeberry',
    'Adderhusk', 'Adderthorn', 'Adderblood', 'Adderbone', 'Adderscale',
    'Addercrawl', 'Adderhowl', 'Adderblight', 'Addervine', 'Adderspire',
  ],
  [Country.WOTANY]: [
    'Schäfer', 'Koch', 'Bauer', 'Müller', 'Schmidt', 'Schneider',
    'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Hoffmann',
    'Schulz', 'Richter', 'Klein',
  ],
  [Country.AKWITANY]: [
    'Beaumont', 'Blanchet', 'Couture', 'D’aureville', 'Dupont', 'Fontaine',
    'LaRue', 'Moreau', 'Moulin', 'Renaud', 'Toussaint', 'Vernie',
  ],
};

export function getRandomSurname(country: Country) {
  return getRandomElement(surnameSet[country]);
}
