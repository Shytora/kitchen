ServerEvents.tags('item', event => {
// unifies silver nuggets
event.add('c:nuggets/silver', 'mythicmetals:silver_nugget')
// unifies steel nuggets
event.add('c:nuggets/steel', 'mythicmetals:steel_nugget')
});

ServerEvents.recipes(event => {
	event.shapeless("enderio:enderman_head", "butchery:enderman_head");
});
