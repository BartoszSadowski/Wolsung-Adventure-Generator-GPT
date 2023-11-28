import { TestType } from './test.type';
import { CardEffect } from '../cards/card';
import { Ability } from '../ability/ability';

export class Test {

  static TestBuilder = class {
    private _challengeRating: number = 0;

    private _toughness: number = 0;

    private _modifiers: Array<string> = [];

    private _cards: number = 0;

    private _aces: Array<string> = [];

    private _chances: Array<CardEffect> = [];

    private _dangers: Array<CardEffect> = [];

    private _abilities: Array<Ability> = [];

    private _testType: TestType = TestType.TEST;


    private _result: string = '';

    private _consequence: string = '';


    public challengeRating(value: number) {
      this._challengeRating = value;
      return this;
    }

    public toughness(value: number) {
      this._toughness = value;
      return this;
    }

    public modifiers(value: Array<string>) {
      this._modifiers = value;
      return this;
    }

    public cards(value: number) {
      this._cards = value;
      return this;
    }

    public result(value: string) {
      this._result = value;
      return this;
    }

    public consequence(value: string) {
      this._consequence = value;
      return this;
    }

    public aces(value: Array<string>) {
      this._aces = value;
      return this;
    }

    public chances(value: Array<CardEffect>) {
      this._chances = value;
      return this;
    }

    public dangers(value: Array<CardEffect>) {
      this._dangers = value;
      return this;
    }

    public abilities(value: Array<Ability>) {
      this._abilities = value;
      return this;
    }

    public testType(value: TestType) {
      this._testType = value;
      return this;
    }


    public build() {
      return new Test(
        this._challengeRating,
        this._toughness,
        this._modifiers,
        this._cards,
        this._result,
        this._consequence,
        this._aces,
        this._chances,
        this._dangers,
        this._abilities,
        this._testType,
      );
    }
  };

  constructor(
    private readonly challengeRating: number,
    private readonly toughness: number,
    private readonly modifiers: Array<string>,
    private readonly cards: number,
    private readonly result: string,
    private readonly consequence: string,
    private readonly aces: Array<string>,
    private readonly chances: Array<CardEffect>,
    private readonly dangers: Array<CardEffect>,
    private readonly abilities: Array<Ability>,
    private readonly testType: TestType,
  ) {
  }

  public static builder() {
    return new this.TestBuilder();
  }
}
