
import { IProjectCard } from "./IProjectCard";
import { Tags } from "./Tags";
import { CardType } from "./CardType";
import { Player } from "../Player";
import { Game } from "../Game";
import { Resources } from '../Resources';

export class MethaneFromTitan implements IProjectCard {
    public cost: number = 28;
    public tags: Array<Tags> = [Tags.JOVIAN, Tags.SPACE];
    public name: string = "Methane From Titan";
    public cardType: CardType = CardType.AUTOMATED;
    public canPlay(player: Player, game: Game): boolean {
        return game.getOxygenLevel() >= 2 - player.getRequirementsBonus(game);
    }
    public play(player: Player) {
        player.setProduction(Resources.HEAT,2);
        player.plantProduction += 2;
        return undefined;
    }
    public getVictoryPoints() {
        return 2;
    }
}
