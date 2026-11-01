/* Curated World of Warcraft: Forever (1.60.1) ability planning snapshot, October 30, 2026. Not a complete spellbook. */
window.KBF_DATA = (() => {
  const groups = ['Damage','Defensive','Movement','Control','Utility','Healing','Cooldown','Racial','Game Controls','Targeting','Custom'];
  // Active racials only. These are spells the player can actually bind, not passive racial traits.
  const raceSkills = {
    Human:['Will to Survive','Perception'], Dwarf:['Stoneform','Find Treasure'],
    'Night Elf':["Elune's Light",'Shadowmeld'], Gnome:['Escape Artist','Eureka!'],
    Orc:['Blood Fury','Shatter Curse'], Troll:['Berserking','Rapid Regeneration'],
    Tauren:['War Stomp','Cultivation'], Undead:['Will of the Forsaken','Cannibalize'],
    'Skyborne (Alliance)':['Walk on Air','Skysight'],
    'Skyborne (Horde)':['Walk on Air','Read Leyline']
  };
  const playable = {
    Warrior:['Human','Dwarf','Night Elf','Gnome','Orc','Troll','Tauren','Undead','Skyborne (Alliance)','Skyborne (Horde)'],
    Paladin:['Human','Dwarf','Undead'],
    Hunter:['Human','Dwarf','Night Elf','Orc','Troll','Tauren','Skyborne (Alliance)','Skyborne (Horde)'],
    Rogue:['Human','Dwarf','Night Elf','Gnome','Orc','Troll','Undead','Skyborne (Alliance)','Skyborne (Horde)'],
    Priest:['Human','Dwarf','Night Elf','Gnome','Troll','Undead'],
    Shaman:['Dwarf','Orc','Troll','Tauren','Skyborne (Horde)'],
    Mage:['Human','Gnome','Orc','Troll','Undead','Skyborne (Alliance)'],
    Warlock:['Human','Gnome','Orc','Troll','Undead'],
    Druid:['Night Elf','Tauren','Skyborne (Alliance)','Skyborne (Horde)']
  };
  // Suggested defaults, deliberately NOT pre-assigned to existing layouts.
  // WoW's keybinding identifiers are used for companion addon exports.
  const general = [
    {name:'World Map',category:'Game Controls',defaultKey:'M',command:'TOGGLEWORLDMAP',priority:2},
    {name:'Auto Run',category:'Game Controls',defaultKey:'NumLock',command:'TOGGLEAUTORUN',priority:1},
    {name:'Backpack',category:'Game Controls',defaultKey:'B',command:'TOGGLEBACKPACK',priority:2},
    {name:'Open All Bags',category:'Game Controls',defaultKey:'B',defaultMod:'shift',command:'OPENALLBAGS',priority:2},
    {name:'Character Panel',category:'Game Controls',defaultKey:'C',command:'TOGGLECHARACTER0',priority:2},
    {name:'Spellbook',category:'Game Controls',defaultKey:'P',command:'TOGGLESPELLBOOK',priority:3},
    {name:'Quest Log',category:'Game Controls',defaultKey:'L',command:'TOGGLEQUESTLOG',priority:2},
    {name:'Talents',category:'Game Controls',defaultKey:'N',command:'TOGGLETALENTS',priority:3},
    {name:'Legacy Talents',category:'Game Controls',defaultKey:'Y',command:'TOGGLELEGACYSYSTEM',priority:3},
    {name:'Professions',category:'Game Controls',defaultKey:'K',command:'TOGGLEPROFESSIONBOOK',priority:3},
    {name:'Social',category:'Game Controls',defaultKey:'O',command:'TOGGLESOCIAL',priority:3},
    {name:'Guild & Communities',category:'Game Controls',defaultKey:'J',command:'TOGGLEGUILDTAB',priority:3},
    {name:'Honor & PvP',category:'Game Controls',defaultKey:'H',command:'TOGGLEPVP',priority:3},
    {name:'Looking for Group',category:'Game Controls',defaultKey:'I',command:'TOGGLEGROUPFINDER',priority:3},
    {name:'Reputations',category:'Game Controls',defaultKey:'U',command:'TOGGLECHARACTER4',priority:3},
    {name:'Game Menu',category:'Game Controls',defaultKey:'Esc',command:'TOGGLEGAMEMENU',priority:3},
    {name:'Enemy Nameplates',category:'Game Controls',defaultKey:'V',command:'NAMEPLATES',priority:2},
    {name:'Friendly Nameplates',category:'Game Controls',defaultKey:'V',defaultMod:'shift',command:'FRIENDNAMEPLATES',priority:2},
    {name:'Target Nearest Enemy',category:'Targeting',defaultKey:'Tab',command:'TARGETNEARESTENEMY',priority:1},
    {name:'Target Previous Enemy',category:'Targeting',defaultKey:'Tab',defaultMod:'shift',command:'TARGETPREVIOUSENEMY',priority:2},
    {name:'Assist Target',category:'Targeting',defaultKey:'F',command:'ASSISTTARGET',priority:1},
    {name:'Target Last Hostile',category:'Targeting',defaultKey:'G',command:'TARGETLASTHOSTILE',priority:1},
    {name:'Auto Attack',category:'Targeting',defaultKey:'T',command:'ATTACKTARGET',priority:2},
    {name:'Jump',category:'Game Controls',defaultKey:'Space',command:'JUMP',priority:2}
  ].map(a=>({...a,id:'general:'+a.command,type:'command',scope:'Forever control',talent:false,defaultMod:a.defaultMod||'normal'}));
  // name | category | urgency (1 high, 2 medium, 3 low) | optional talent marker (*)
  const spells = {
    Warrior:{
      common:'Heroic Strike|Damage|1;Rend|Damage|2;Hamstring|Control|2;Charge|Movement|1;Intercept|Movement|1;Pummel|Control|1;Shield Bash|Control|1;Battle Shout|Utility|2;Bloodrage|Cooldown|2;Demoralizing Shout|Utility|2;Intimidating Shout|Control|1;Shield Wall|Defensive|1;Retaliation|Defensive|2;Execute|Damage|1;Berserker Rage|Defensive|1;Taunt|Utility|1',
      specs:{
        Arms:{spells:'Mortal Strike|Damage|1|*;Spearing Strike|Damage|1|*;Overpower|Damage|1;Sweeping Strikes|Cooldown|2|*', rotation:['Keep Battle Shout active; open with Charge when safe.','Use Mortal Strike and Spearing Strike when talented; manage Rage for each.','Use Overpower when triggered; maintain Rend when appropriate.','Use Execute when the target is low on health.'],aoe:['Use Sweeping Strikes when talented and appropriate.','Use Cleave for multi-target rage spending.']},
        Fury:{spells:'Bloodthirst|Damage|1|*;Whirlwind|Damage|1;Cleave|Damage|2;Death Wish|Cooldown|2|*',rotation:['Maintain Battle Shout and manage rage.','Use Bloodthirst when talented; weave Whirlwind.','Spend excess rage on Heroic Strike without starving priority abilities.','Use Execute during execute phase.'],aoe:['Use Whirlwind and Cleave while managing rage.']},
        Protection:{spells:'Shield Slam|Damage|1|*;Revenge|Damage|1;Sunder Armor|Utility|1;Shield Block|Defensive|1;Last Stand|Defensive|1|*',rotation:['Keep defensive stance and needed mitigation active.','Use Shield Slam when talented and Revenge when available.','Build and maintain threat with Sunder Armor.','Use Shield Block to manage incoming hits.'],aoe:['Use Demoralizing Shout and spread threat across enemies.']}
      }
    },
    Mage:{
      common:'Frostbolt|Damage|1;Frost Blast|Damage|1;Frostfire Bolt|Damage|2;Comprehend Scroll|Utility|3;Fireball|Damage|1;Arcane Missiles|Damage|2;Fire Blast|Damage|1;Frost Nova|Control|1;Polymorph|Control|1;Blink|Movement|1;Counterspell|Control|1;Ice Armor|Defensive|2;Mana Shield|Defensive|2;Evocation|Cooldown|2;Remove Lesser Curse|Utility|2;Arcane Explosion|Damage|2;Cone of Cold|Damage|2;Conjure Mana Gem|Utility|3',
      specs:{
        Frost:{spells:'Ice Barrier|Defensive|1|*;Ice Block|Defensive|1|*;Cold Snap|Cooldown|1|*;Ice Lance|Damage|1|*;Blizzard|Damage|2',rotation:['Maintain appropriate armor and keep safe distance.','Use Frostbolt as filler; consider Ice Lance on frozen/Fingers of Frost targets when talented.','Use Fire Blast or instant abilities to finish or while moving.','Use Frost Nova, Blink, and defensives to survive.'],aoe:['Use Blizzard for controlled packs.','Use Frost Nova or Cone of Cold for spacing.']},
        Fire:{spells:'Pyroblast|Damage|2|*;Blast Wave|Damage|2|*;Scorch|Damage|1;Flamestrike|Damage|2;Combustion|Cooldown|1|*',rotation:['Use Fireball and manage Heating Up/Pyroblast interactions when talented.','Use Scorch to move or maintain relevant debuffs.','Use Combustion if talented for a planned burst window.','Use Fire Blast for instant damage.'],aoe:['Use Flamestrike and Blast Wave when appropriate.']},
        Arcane:{spells:'Presence of Mind|Cooldown|1|*;Arcane Power|Cooldown|1|*;Arcane Blast|Damage|1|*;Arcane Wrath|Damage|1|*;Arcane Explosion|Damage|1',rotation:['Build Arcane Blast stacks when talented, then spend on an appropriate follow-up spell.','Cast Arcane Missiles or Frostbolt/Fireball as your build requires.','Use Arcane Power and Presence of Mind if talented.','Conserve mana for the length of an encounter.'],aoe:['Use Arcane Explosion when safe.']}
      }
    },
    Rogue:{
      common:'Sinister Strike|Damage|1;Eviscerate|Damage|1;Slice and Dice|Cooldown|1;Kick|Control|1;Sprint|Movement|1;Evasion|Defensive|1;Vanish|Defensive|1;Cheap Shot|Control|1;Kidney Shot|Control|1;Gouge|Control|1;Sap|Control|2;Stealth|Utility|1;Feint|Defensive|2;Rupture|Damage|2;Backstab|Damage|1;Blind|Control|1;Distract|Utility|2',
      specs:{
        Assassination:{spells:'Cold Blood|Cooldown|1|*;',rotation:['Open from Stealth when appropriate.','Generate combo points with your selected builder.','Keep Slice and Dice uptime where valuable.','Spend combo points on Eviscerate or Rupture.'],aoe:['Use Blade Flurry only if talented through a different spec.','Prioritise controlled target swaps.']},
        Combat:{spells:'Blade Flurry|Cooldown|1|*;Adrenaline Rush|Cooldown|1|*;Riposte|Damage|2|*',rotation:['Maintain Slice and Dice.','Build combo points with Sinister Strike.','Use Eviscerate as finisher after upkeep.','Plan Blade Flurry and Adrenaline Rush around target uptime.'],aoe:['Activate Blade Flurry when talented for extra cleave.']},
        Subtlety:{spells:'Hemorrhage|Damage|1|*;Preparation|Cooldown|1|*;Ghostly Strike|Damage|2|*',rotation:['Open from Stealth with the right control ability.','Build with Hemorrhage if talented, or your chosen builder.','Maintain Slice and Dice in longer fights.','Finish with Eviscerate or Rupture as appropriate.'],aoe:['Use crowd control to isolate targets.']}
      }
    },
    Priest:{
      common:'Smite|Damage|2;Mind Blast|Damage|1;Shadow Word: Pain|Damage|1;Power Word: Shield|Defensive|1;Flash Heal|Healing|1;Heal|Healing|1;Fear Ward|Defensive|1;Devouring Plague|Damage|1;Divine Spirit|Utility|2;Shadow Word: Death|Damage|1;Renew|Healing|2;Dispel Magic|Utility|1;Abolish Disease|Utility|2;Psychic Scream|Control|1;Power Word: Fortitude|Utility|3;Fade|Defensive|1;Inner Fire|Defensive|2;Resurrection|Utility|3;Mana Burn|Control|2',
      specs:{
        Discipline:{spells:'Power Infusion|Cooldown|1|*;Inner Focus|Cooldown|1|*;Penance|Healing|1|*',rotation:['Maintain relevant buffs.','Use an efficient heal for sustained damage.','Use Flash Heal or Penance if talented for urgent healing.','Time Power Infusion or Inner Focus when talented.'],aoe:['Prioritise the most threatened allies.']},
        Holy:{spells:'Holy Nova|Healing|2|*;Prayer of Mending|Healing|1|*;Binding Heal|Healing|1|*;Greater Heal|Healing|1;Prayer of Healing|Healing|1',rotation:['Choose heal size based on damage intake.','Use efficient Heal or Greater Heal when safe.','Use Flash Heal when urgency matters.','Use Prayer of Healing for appropriate group damage.'],aoe:['Use Prayer of Healing for your group.']},
        Shadow:{spells:'Mind Flay|Damage|1|*;Vampiric Embrace|Utility|2|*;Shadowform|Cooldown|1|*',rotation:['Maintain Shadow Word: Pain where worthwhile.','Use Mind Blast on priority targets.','Channel Mind Flay when talented between cooldowns.','Manage mana and use Vampiric Embrace if available.'],aoe:['Apply Shadow Word: Pain to durable targets.']}
      }
    },
    Hunter:{
      common:'Auto Shot|Damage|1;Aimed Shot|Damage|1;Arcane Shot|Damage|1;Serpent Sting|Damage|2;Multi-Shot|Damage|1;Concussive Shot|Control|1;Wing Clip|Control|1;Feign Death|Defensive|1;Disengage|Movement|2;Hunter\'s Mark|Utility|2;Rapid Fire|Cooldown|1;Aspect of the Hawk|Utility|2;Aspect of the Cheetah|Movement|2;Mend Pet|Healing|1;Tranquilizing Shot|Utility|1;Freezing Trap|Control|1;Immolation Trap|Damage|2;Call Pet|Utility|3',
      specs:{
        'Beast Mastery':{spells:'Bestial Wrath|Cooldown|1|*;Intimidation|Control|1|*',rotation:['Maintain your pet and choose your abilities based on pet family and talented skills.','Maintain Auto Shot timing.','Use Multi-Shot/Arcane Shot as appropriate.','Time Bestial Wrath if talented.'],aoe:['Use Multi-Shot when targets permit.','Manage pet threat carefully.']},
        Marksmanship:{spells:'Trueshot Aura|Utility|2|*;Scatter Shot|Control|1|*;Sniper Shot|Damage|1|*',rotation:['Maintain Auto Shot cadence.','Aimed Shot is baseline at level 20; coordinate it with Multi-Shot, which shares its cooldown.','Use Multi-Shot on cooldown as mana allows.','Watch threat and pet positioning.'],aoe:['Multi-Shot for cleave when safe.']},
        Survival:{spells:'Strider Kick|Movement|1|*;Counterattack|Control|2|*;Deterrence|Defensive|1|*',rotation:['Keep your pet engaged.','Maintain Auto Shot and use shots selectively.','Use traps and movement to create space.','Use survival cooldowns when targeted.'],aoe:['Use traps and Multi-Shot for pack control.']}
      }
    },
    Paladin:{
      common:'Judgement|Damage|1;Seal of Righteousness|Utility|1;Consecration|Damage|2;Holy Strike|Damage|1;Hammer of Justice|Control|1;Blessing of Freedom|Utility|1;Blessing of Protection|Defensive|1;Divine Shield|Defensive|1;Divine Protection|Defensive|2;Lay on Hands|Healing|1;Cleanse|Utility|1;Holy Light|Healing|1;Flash of Light|Healing|1;Blessing of Might|Utility|3;Blessing of Wisdom|Utility|3;Redemption|Utility|3',
      specs:{
        Holy:{spells:'Holy Shock|Healing|1|*;Divine Favor|Cooldown|1|*',rotation:['Maintain appropriate blessings, use baseline Holy Strike for damage, and plan support cooldowns.','Use Flash of Light for efficient maintenance healing.','Use Holy Light for heavier damage.','Use Holy Shock for an instant response if talented.'],aoe:['Use cooldowns to stabilise focused damage.']},
        Protection:{spells:'Holy Shield|Defensive|1|*;Consecration|Damage|1',rotation:['Maintain appropriate Seal and buffs.','Use Judgement and Consecration for threat.','Use Holy Shield when talented.','Respond with defensive abilities when needed.'],aoe:['Use baseline Consecration for controlled, limited-target threat.']},
        Retribution:{spells:'Repentance|Control|1|*;Seal of Command|Damage|1|*;Twist of Light|Cooldown|1|*;Judgement|Damage|1',rotation:['Maintain a damage-focused Seal.','Judgement no longer consumes your active Seal; use it without recasting the Seal each time.','Keep attacking to benefit from weapon swings and procs.','Support allies with emergency utility.'],aoe:['Use Consecration when mana and positioning allow.']}
      }
    },
    Shaman:{
      common:'Lightning Bolt|Damage|1;Chain Lightning|Damage|1;Earth Shock|Control|1;Flame Shock|Damage|1;Frost Shock|Control|1;Healing Wave|Healing|1;Lesser Healing Wave|Healing|1;Chain Heal|Healing|1;Purge|Utility|1;Ghost Wolf|Movement|1;Earthbind Totem|Control|1;Call of the Elements|Utility|2;Totemic Recall|Utility|2;Totemic Projection|Utility|1;Grounding Totem|Utility|1;Tremor Totem|Utility|1;Windfury Totem|Utility|2;Strength of Earth Totem|Utility|2;Searing Totem|Damage|2;Mana Spring Totem|Utility|2;Reincarnation|Utility|3',
      specs:{
        Elemental:{spells:'Elemental Mastery|Cooldown|1|*;',rotation:['Keep appropriate totems active.','Cast Lightning Bolt as filler.','Use Chain Lightning for burst when helpful.','Shock when appropriate for damage, interrupt, or movement.'],aoe:['Use Chain Lightning and suitable totems.']},
        Enhancement:{spells:'Stormstrike|Damage|1|*;Rage of the Farseer|Cooldown|1|*;Windfury Weapon|Utility|2',rotation:['Keep weapon enhancement and totems active.','Use Stormstrike when talented.','Use shocks strategically while watching mana.','Maintain melee uptime.'],aoe:['Use Chain Lightning only when it fits mana and build.']},
        Restoration:{spells:'Mana Tide Totem|Cooldown|1|*;Riptide|Healing|1|*;Water Shield|Defensive|1|*;Nature\'s Swiftness|Cooldown|1|*;Chain Heal|Healing|1',rotation:['Use the new Call, Totemic Projection and Totemic Recall tools to manage totem placement.','Use Healing Wave/Lesser Healing Wave as needed.','Cast Chain Heal for suitable group damage.','Use Riptide, Mana Tide Totem and Nature\'s Swiftness if selected in your build.'],aoe:['Use Chain Heal for clustered group damage.']}
      }
    },
    Warlock:{
      common:'Shadow Bolt|Damage|1;Corruption|Damage|1;Bane of Agony|Damage|2;Bane of Doom|Damage|2;Curse of the Elements|Utility|2;Immolate|Damage|2;Life Tap|Utility|1;Drain Life|Healing|1;Drain Soul|Utility|2;Fear|Control|1;Death Coil|Control|1;Howl of Terror|Control|1;Healthstone|Defensive|1;Soulstone|Utility|3;Summon Imp|Utility|3;Summon Voidwalker|Utility|3;Banish|Control|2;Shadow Ward|Defensive|2;Searing Pain|Damage|2;Hellfire|Damage|2',
      specs:{
        Affliction:{spells:'Siphon Life|Damage|1|*;Wrack|Damage|1|*;Dark Pact|Utility|2|*;Curse of Exhaustion|Control|1|*',rotation:['Maintain important damage-over-time effects.','Cast Shadow Bolt when no refresh is needed.','Use Life Tap and health recovery carefully.','Maintain Bane of Agony separately from a utility Curse; they occupy different slots.'],aoe:['Apply damage-over-time spells to durable targets.']},
        Demonology:{spells:'Soul Link|Defensive|1|*;Fel Domination|Cooldown|1|*;Demonic Sacrifice|Cooldown|2|*',rotation:['Keep the pet or sacrifice buff appropriate to your build.','Maintain important curses/DoTs.','Fill with Shadow Bolt.','Use defensive utility and pet management as needed.'],aoe:['Spread DoTs or use AoE spells only when safe.']},
        Destruction:{spells:'Conflagrate|Damage|1|*;Incinerate|Damage|1|*;Shadowburn|Damage|1|*;Rain of Fire|Damage|2',rotation:['Maintain Immolate when relevant to your build.','Cast Shadow Bolt as main filler where appropriate.','Use Conflagrate or Shadowburn if talented.','Manage threat and mana.'],aoe:['Use Rain of Fire on sustained packs.']}
      }
    },
    Druid:{
      common:'Wrath|Damage|1;Starfire|Damage|1;Moonfire|Damage|1;Revive|Utility|2;Rejuvenation|Healing|1;Regrowth|Healing|1;Healing Touch|Healing|1;Entangling Roots|Control|1;Barkskin|Defensive|1;Bear Form|Defensive|1;Cat Form|Movement|1;Travel Form|Movement|1;Rebirth|Utility|1;Remove Curse|Utility|2;Abolish Poison|Utility|2;Innervate|Cooldown|1;Faerie Fire|Utility|2;Mark of the Wild|Utility|3;Dash|Movement|1;Prowl|Utility|2',
      specs:{
        Balance:{spells:'Moonkin Form|Utility|2|*;Insect Swarm|Damage|1|*;Hurricane|Damage|2',rotation:['Apply Moonfire and Insect Swarm if talented and worth the mana.','Cast Starfire or Wrath according to build.','Refresh debuffs when efficient.','Use Innervate strategically.'],aoe:['Use Hurricane for suitable packs.']},
        'Feral Combat':{spells:'Primal Bite|Damage|1|*;Lacerate|Damage|1;Berserk|Cooldown|1|*;Claw|Damage|1;Shred|Damage|1;Rake|Damage|1;Rip|Damage|1;Ferocious Bite|Damage|1;Tiger\'s Fury|Cooldown|1;Frenzied Regeneration|Defensive|1;Bash|Control|1;Swipe|Damage|2;Maul|Damage|1;Feral Charge|Movement|1|*',rotation:['Enter the right form for your role.','Cat: generate combo points and maintain efficient damage effects.','Bear: maintain threat with Maul/Swipe and defensive management.','Use finishers or survival abilities based on the encounter.'],aoe:['Bear: Swipe for multi-target threat.','Cat: manage target swaps and energy.']},
        Restoration:{spells:'Swiftmend|Healing|1|*;Wild Growth|Healing|1|*;Nature\'s Swiftness|Cooldown|1|*;Tranquility|Healing|1',rotation:['Maintain Rejuvenation or Regrowth on appropriate allies.','Use Healing Touch for efficient direct healing.','Use Swiftmend if talented for burst recovery.','Use Innervate and Nature\'s Swiftness strategically.'],aoe:['Use Tranquility in safe group-healing windows.']}
      }
    }
  };
  const icons = {Damage:'⚔',Defensive:'🛡',Movement:'➜',Control:'✦',Utility:'✧',Healing:'✚',Cooldown:'◈',Racial:'◇','Game Controls':'⌘',Targeting:'◎',Custom:'✳'};
  const knownLevels={'Mage:Frost Blast':24,'Mage:Frostfire Bolt':40,'Paladin:Holy Strike':6,'Priest:Shadow Word: Death':32,'Hunter:Aimed Shot':20};
  const list = (raw, owner, scope) => (raw || '').split(';').filter(Boolean).map(part => {
    const [name,category,priority,mark] = part.split('|');
    return {id:`${owner}:${name}`,name,category,priority:Number(priority||2),talent:mark==='*',type:'spell',scope,level:knownLevels[`${owner}:${name}`]||null};
  });
  function abilities(cls,spec,race,custom=[]){
    const definition=spells[cls], specData=definition.specs[spec];
    const map = new Map();
    [...list(definition.common,cls,'Class'),...list(specData.spells,cls,'Specialisation')].forEach(a => {
      if(!map.has(a.id)) map.set(a.id,a);
      else if(a.talent) map.set(a.id,{...map.get(a.id),talent:true});
    });
    for(const racial of raceSkills[race]||[]){
      map.set(`racial:${racial}`,{id:`racial:${racial}`,name:racial,category:'Racial',priority:2,talent:false,type:'spell',scope:'Racial'});
    }
    for(const item of map.values())if(item.name==='Healthstone')item.type='item';
    for(const action of general)map.set(action.id,action);
    custom.forEach(a=>map.set(a.id,a));
    return [...map.values()];
  }
  return {groups,raceSkills,playable,spells,abilities,icons,general,patch:"1.60.1",snapshot:"30 October 2026"};
})();
