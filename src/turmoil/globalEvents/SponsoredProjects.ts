import { IGlobalEvent } from './IGlobalEvent';
import { GlobalEventName } from './GlobalEventName';
import { PartyName } from '../parties/PartyName';
import { Game } from '../../Game';
import { Turmoil } from '../Turmoil';

export class SponsoredProjects implements IGlobalEvent {
    public name = GlobalEventName.SPONSORED_PROJECTS;
    public revealedDelegate = PartyName.SCIENTISTS;
    public currentDelegate = PartyName.GREENS;
    public resolve(game: Game, turmoil: Turmoil) {
        game.getPlayers().forEach(player => {
            player.getCardsWithResources().forEach(card => card.resourceCount && card.resourceCount++);
            for (let i = 0; i < turmoil.getPlayerInfluence(player); i++) {
                player.cardsInHand.push(game.dealer.dealCard());
              }
            
        });    
    }
}    