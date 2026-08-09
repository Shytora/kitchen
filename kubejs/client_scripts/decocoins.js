ItemEvents.modifyTooltips(event => {
  // Add a tooltip to all createdeco coins showing they're only cosmetic and not part of our currency system
  event.add(['createdeco:gold_coin', 'createdeco:gold_coinstack',
  'createdeco:netherite_coin','createdeco:netherite_coinstack',
  'createdeco:brass_coin','createdeco:brass_coinstack',
  'createdeco:iron_coin','createdeco:iron_coinstack',
  'createdeco:copper_coin','createdeco:copper_coinstack',
  'createdeco:industrial_iron_coin','createdeco:industrial_iron_coinstack',
  'createdeco:zinc_coin','createdeco:zinc_coinstack'
  ], 'Cosmetic only')
})
