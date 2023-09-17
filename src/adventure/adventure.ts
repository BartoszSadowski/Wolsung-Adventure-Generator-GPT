import { Scene } from './scene/scene';

export class Adventure {
  act1 = new Scene();

  act2 = new Scene();

  act3 = new Scene();

  act4 = new Scene();

  act5 = new Scene();

  toJson() {
    return {
      act1: this.act1.toJson(),
      act2: this.act2.toJson(),
      act3: this.act3.toJson(),
      act4: this.act4.toJson(),
      act5: this.act5.toJson(),
    };
  }
}