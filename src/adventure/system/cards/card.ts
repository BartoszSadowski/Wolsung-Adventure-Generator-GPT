import { Attribute } from '../resource/attribute';
import { AdvantageType } from '../advantage/advantage';
import { Wound } from '../resource/wound';

export enum Color {
  SPADES = '♠',
  HEARTS = '♥',
  DIAMONDS = '♦',
  CLUBS = '♣',
}

export class CardEffect {
  constructor(
    public readonly color: Color,
    public readonly description: string,
    public readonly name: string,
    public readonly result: string,
  ) {
  }
}

export const colorAttributeMapping: Record<Color, Attribute> = {
  [Color.SPADES]: Attribute.REPUTATION,
  [Color.HEARTS]: Attribute.CONDITION,
  [Color.DIAMONDS]: Attribute.WEALTH,
  [Color.CLUBS]: Attribute.MANA,
};

export const colorAdvantageMapping: Record<Color, AdvantageType> = {
  [Color.SPADES]: AdvantageType.STATUS,
  [Color.HEARTS]: AdvantageType.ALLY,
  [Color.DIAMONDS]: AdvantageType.GADGET,
  [Color.CLUBS]: AdvantageType.MAGIC,
};

export const colorWoundMapping: Record<Color, Wound> = {
  [Color.SPADES]: Wound.SOCIAL,
  [Color.HEARTS]: Wound.PHYSICAL,
  [Color.DIAMONDS]: Wound.FINANCIAL,
  [Color.CLUBS]: Wound.SPIRITUAL,
};
