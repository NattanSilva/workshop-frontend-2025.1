import { BugIcon } from './bug'
import { ColorlessIcon } from './colorless'
import { DarkIcon } from './dark'
import { DragonIcon } from './dragon'
import { ElectricIcon } from './electric'
import { FightingIcon } from './fighting'
import { FireIcon } from './fire'
import { FlyingIcon } from './flying'
import { GhostIcon } from './ghost'
import { GrassIcon } from './grass'
import { GroundIcon } from './ground'
import { IceIcon } from './ice'
import { NormalIcon } from './normal'
import { PoisonIcon } from './poison'
import { PsychicIcon } from './psychic'
import { RockIcon } from './rock'
import { SteelIcon } from './steel'
import { WaterIcon } from './water'

export function TypeIcons({ types }: Readonly<{ types: string[] }>) {
  return (
    <span className="flex flex-wrap gap-1">
      {types.includes('Lightning') && <ElectricIcon />}
      {types.includes('Bug') && <BugIcon />}
      {types.includes('Darkness') && <DarkIcon />}
      {types.includes('Dragon') && <DragonIcon />}
      {types.includes('Fairy') && <DragonIcon />}
      {types.includes('Fighting') && <FightingIcon />}
      {types.includes('Fire') && <FireIcon />}
      {types.includes('Flying') && <FlyingIcon />}
      {types.includes('Ghost') && <GhostIcon />}
      {types.includes('Grass') && <GrassIcon />}
      {types.includes('Ground') && <GroundIcon />}
      {types.includes('Ice') && <IceIcon />}
      {types.includes('Normal') && <NormalIcon />}
      {types.includes('Posion') && <PoisonIcon />}
      {types.includes('Psychic') && <PsychicIcon />}
      {types.includes('Rock') && <RockIcon />}
      {types.includes('Metal') && <SteelIcon />}
      {types.includes('Water') && <WaterIcon />}
      {types.includes('Colorless') && <ColorlessIcon />}
    </span>
  )
}
