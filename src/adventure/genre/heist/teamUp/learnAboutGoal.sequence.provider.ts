import { SequenceElement } from '../../../scene/scene';
import { ScenePartProvider } from '../../../scene/scenePart.provider';
import { PartyType, partyTypeTranslations } from '../../../party/partyType';
import { goalTags } from '../../../party/goal/goalTags';
import { locationTags } from '../../../location/locationTags';

export class LearnAboutGoalSequenceProvider extends ScenePartProvider<SequenceElement> {
  private readonly WHAT = 'dowiaduje się o celu';

  providees = [
    {
      value: {
        who: partyTypeTranslations[PartyType.TEAM],
        with: 'list od przyjaciela',
        what: this.WHAT,
      },
      partiesAffected: [
        {
          type: PartyType.GOAL,
          tag: goalTags.PERSONAL,
          probability: 1,
        },
      ],
      affectsLocation: [
        {
          tag: {
            value: locationTags.PEACEFUL,
          },
          probability: 1,
        },
        {
          tag: {
            value: locationTags.COFFEE_TIME,
          },
          probability: 0.5,
        },
        {
          tag: {
            value: locationTags.PUBLIC_PLACE,
          },
          probability: 0.5,
        },
      ],
    },
    {
      value: {
        who: partyTypeTranslations[PartyType.TEAM],
        with: 'wizyta w muzeum',
        what: this.WHAT,
      },
      partiesAffected: [
        {
          type: PartyType.LOCATION,
          probability: 1,
          tag: locationTags.MUSEUM,
        },
      ],
      affectsLocation: [{
        tag: {
          value: locationTags.MUSEUM,
        },
        probability: 1,
      }],
    },
    {
      value: {
        who: partyTypeTranslations[PartyType.TEAM],
        with: 'gazeta',
        what: this.WHAT,
      },
      partiesAffected: [],
      affectsLocation: [{
        tag: {
          value: locationTags.PEACEFUL,
        },
        probability: 1,
      },
      {
        tag: {
          value: locationTags.COFFEE_TIME,
        },
        probability: 0.5,
      },
      {
        tag: {
          value: locationTags.PUBLIC_PLACE,
        },
        probability: 0.5,
      }],
    },
  ];
}

