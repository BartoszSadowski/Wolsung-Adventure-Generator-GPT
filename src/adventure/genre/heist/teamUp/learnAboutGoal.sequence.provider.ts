import { SequenceElement } from '../../../scene/scene';
import { ScenePartProvider } from '../../../scene/scenePart.provider';
import { LearnAboutGoalSequenceSource } from './learnAboutGoal.sequence.source';

export class LearnAboutGoalSequenceProvider extends ScenePartProvider<SequenceElement> {
  providees = LearnAboutGoalSequenceSource.get();
}

