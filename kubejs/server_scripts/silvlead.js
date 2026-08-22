ServerEvents.recipes(event => {
// silver
event.recipes.createCrushing([
  CreateItem.of('create:crushed_raw_silver', 0.2),
  CreateItem.of('mythicmetals:silver_nugget', 0.2)
], 'minecraft:deepslate')
// lead
event.recipes.createCrushing([
  CreateItem.of('create:crushed_raw_lead', 0.2),
  CreateItem.of('createnuclear:lead_nugget', 0.2)
], 'minecraft:basalt')
// charcoal recipes
event.recipes.createCompacting(
CreateItem.of('minecraft:charcoal', 0.5),
'minecraft:bamboo_block'
).heated();

event.recipes.createCompacting(
'minecraft:charcoal',
'minecraft:dried_kelp_block'
).heated();

});
