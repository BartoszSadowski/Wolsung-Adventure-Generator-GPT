import { PartyType, partyTypeTranslations } from '../../../party/partyType';
import { goalTags } from '../../../party/goal/goalTags';
import { locationTags } from '../../../location/locationTags';
import { Relation, relationType } from '../../../party/relation';

export class LearnAboutGoalSequenceSource {

  private static readonly WHAT = 'dowiaduje się o celu';

  public static get() {
    return [
      {
        value: {
          who: partyTypeTranslations[PartyType.TEAM],
          what: this.WHAT,
          with: 'list od przyjaciela',
        },
        partiesAffected: [
          {
            type: PartyType.GOAL,
            tag: goalTags.PERSONAL,
            probability: 1,
          },
          {
            type: PartyType.LOCATION,
            tag: locationTags.PRIVATE_COLLECTION,
            relation: new Relation(
              PartyType.ANTAGONIST,
              relationType.LOCATION.OWNED,
            ),
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
          what: this.WHAT,
          with: 'wizyta w muzeum',
        },
        partiesAffected: [
          {
            type: PartyType.LOCATION,
            probability: 1,
            tag: locationTags.MUSEUM,
          },
          {
            type: PartyType.GOAL,
            tag: goalTags.ARTIFACT,
            probability: 1,
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
          what: this.WHAT,
          with: 'gazeta',
        },
        partiesAffected: [
          {
            type: PartyType.GOAL,
            tag: goalTags.ARTIFACT,
            probability: 1,
          },
          {
            type: PartyType.LOCATION,
            probability: 1,
            tag: locationTags.MUSEUM,
          },
        ],
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
}

