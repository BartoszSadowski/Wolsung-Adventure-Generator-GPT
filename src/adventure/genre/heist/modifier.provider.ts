import { ScenePartProvider } from '../../scene/scenePart.provider';
import { ModifierSource } from './modifier.source';

export class ModifierProvider extends ScenePartProvider<string> {
  providees = ModifierSource.get();
}
