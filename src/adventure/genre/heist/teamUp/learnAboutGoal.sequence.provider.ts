import { SequenceElement } from '../../../scene/scene';
import { ScenePartProvider } from '../../../scene/scenePart.provider';
import { PartyType, partyTypeTranslations } from '../../../party/partyType';
import { goalTags } from '../../../party/goal/goalTags';

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
      affectsLocation: [],
    },
    {
      value: {
        who: partyTypeTranslations[PartyType.TEAM],
        with: 'wizyta w muzeum',
        what: this.WHAT,
      },
      partiesAffected: [
        {
          type: PartyType.GOAL,
          probability: 1,
        },
      ],
    },
    {
      value: {
        who: partyTypeTranslations[PartyType.TEAM],
        with: 'gazeta',
        what: this.WHAT,
      },
      partiesAffected: [],
    },
  ];
}

