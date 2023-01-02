//priority: 1

/*

Version 3.0


MIT License:


Copyright (c) 2022 Quentin Farrell


Permission is hereby granted, free of charge, to any person obtaining a copy

of this software and associated documentation files (the "Software"), to deal

in the Software without restriction, including without limitation the rights

to use, copy, modify, merge, publish, distribute, sublicense, and/or sell

copies of the Software, and to permit persons to whom the Software is

furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in all

copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR

IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,

FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE

AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER

LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,

OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE

SOFTWARE.

*/


let lycheeCallbacks = {}


function registerLycheeCallback(name,func) {//Name is a unique string like 'cactus' Func is a function like function(ctx,value){return 1} Note: you MUST return a number

	if(lycheeCallbacks[name] != undefined) return

	lycheeCallbacks[name] = func

}


onEvent("command.registry", event => {//command registry event

    const { commands: Commands, arguments: Arguments} = event;//idk what this do

    event.register(//register a new command

        Commands.literal("lycheeCallback")//the command is called lycheeCallback

		.requires(src => src.hasPermission(2))

		.then(Commands.argument('recipe', Arguments.STRING.create(event))//takes argument string called recipe (used to determine which code to run)

			.then(Commands.argument('value', Arguments.STRING.create(event))//takes argument float called value (passed to the code)

				.executes(ctx => {//run the command

					const recipe = Arguments.STRING.getResult(ctx, "recipe");//get recipe

					const value = Arguments.STRING.getResult(ctx, "value");//get the value

					if(lycheeCallbacks[recipe] == undefined) return 0 //test if the recipe exists

					return lycheeCallbacks[recipe](ctx, value)//run the code for each recipe and pass the ctx and value pram  also return the results

					// (:

				})

			)

		)

    )

})


function LycheeContext() {

	this.array=[]

	this.nand = false

}


LycheeContext.prototype = {

	with: function(contextIn) {//takes an object like {type:'type',...}

		this.array.push(contextIn)

		return this

	},


	set: function(contextArrayIn) {//takes an array like [{type:'type',...},{type:'type',...}]

		this.array = contextArrayIn

		return this

	},


	withChance: function(chance) {//takes a number like 0.5

		this.array.push({

			type: "chance",

			chance: chance

		})

        return this

    },


	withWeather: function(weather) {//takes a string like 'clear'

		this.array.push({

			type: "weather",

			weather: weather

		})

        return this

	},


	withDifficulty: function(difficulty) {//takes a string like 'easy'

		this.array.push({

			type: "difficulty",

			difficulty: difficulty

		})

        return this

	},


	withTime: function(value,period) {//time takes a number like 1000 and period is optional and takes either a number like 1000 or an object like {min:0,max:10000}

		if (period == undefined) {

			this.array.push({

				type: "time",

				value: value

			})

		} else {

			this.array.push({

				type: "time",

				value: value,

				period: period

			})

		}

        return this

	},


	withCommand: function(command,range) {//command takes a string like 'fill ~-1 ~-1 ~-1 ~1 ~1 ~1 stone' and range is optional and takes either a number like 1000 or an object like {min:0,max:10000}

		if (range == undefined) {

			this.array.push({

				type: "command",

				command: command

			})

		} else {

			this.array.push({

				type: "command",

				command: command,

				value: range

			})

		}

        return this

	},


	withCallback: function(name,range,func) {//takes a name that is a string like 'cactus' or 'cactus;bean' Range is optional and takes a number like 0 or a object like {min:1,max:4} Func is an optional function that is the callback like function(ctx,value){return 1} Note: it is recomended to use the registerLycheeCallback opposed to this

		let a = name.split(';')

		if (a.length > 2) throw `name: ${name} can not have more then 1 ';', but it has ${a.length}`

		value = ''

		if (a.length == 2) value = a[1]//if name is 'cactus' a[0] is 'cactus' and value is '' If name is 'cactus;bean' a[0] is 'cactus' and value is 'bean'

		if (func != undefined) registerLycheeCallback(a[0],func)

		if (range == undefined) {

			this.array.push({

				type: "execute",

				command: `lycheeCallback ${a[0]} ${value}`

				//command: `lycheeCallback '${a[0]}' '${value}'`

			})

		} else {

			this.array.push({

				type: "execute",

				command: `lycheeCallback ${a[0]} ${value}`,

				//command: `lycheeCallback '${a[0]}' '${value}'`,

				value: range

			})

		}

        return this

	},


	withLocationPredicate: function(predicate){//takes an object like {biome:'plains'} see https://minecraft.fandom.com/wiki/Predicate#condition_location_check

		this.array.push({

			type: "location",

			predicate: predicate

		})

        return this

	},


	withBiome: function(biome){//take a string like 'plains'

		this.array.push({

			type: "location",

			predicate: {

				biome: biome

			}

		})

        return this

	},


	withBlock: function(blocks) {//takes a LycheeBlocks object like new LycheeBlock('cactus') or a string like 'sand'

		if (typeof blocks == 'string') {

			block = {

				blocks:[blocks]

			}

		} else {

			block = blocks.block

		}

		this.array.push({

			type: "location",

			predicate: {

				block: blocks.block

			}

		})

		return this

	},


	withDimension: function(dimension){//takes a string like 'the_end'

		this.array.push({

			type: "location",

			predicate: {

				dimension: dimension

			}

		})

        return this

	},


	withFluid: function(fluid, state) {//fluid takes a string like 'water' or '#water' and state is optional and takes an object like {level:0}

		let result

		if (fluid.startsWith('#')) {//'#lava'

			result = {

				type: "location",

				predicate: {

					fluid: {

						tag: fluid.replace('#', '')

					}

				}

			}

		} else {//'water'

			result = {

				type: "location",

				predicate: {

					fluid: {

						fluid: fluid

					}

				}

			}

		}

		if (state != undefined) result.predicate.fluid.state = state

		this.array.push(result)

		return this

	},


	withLight: function(value) {//takes either a number like 15 or an object like {min:2,max:5}

		this.array.push({

			type: "location",

			predicate: {

				light: value

			}

		})

        return this

	},


	withPosition: function(value) {//takes an array like [{min:-1,max:5},,2]

		let position = {}

		if (value[0] != undefined) position.x = value[0]

		if (value[1] != undefined) position.y = value[1]

		if (value[2] != undefined) position.z = value[2]

		this.array.push({

			type: "location",

			predicate: {

				position: position

			}

		})

        return this

	},


	withSmoke: function(isIt) {//takes a boolean

		this.array.push({

			type: "location",

			predicate: {

				smokey: isIt

			}

		})

        return this

	},


	withStructure: function(name) {//i think its broken

		this.array.push({

			type: "location",

			predicate: {

				structure: name

			}

		})

        return this

	},


	offset: function(offset) {//takes an array like [{min:-1,max:5},,2]

		let length = this.array.length

		if (length == 0) throw '.offset() needs to be run after a contextual condition'

		if (this.array[length - 1].type != 'location') throw `.offset() only supports location, not ${this.array[length - 1].type}`

		let position = {}

		if (offset[0] != undefined) this.array[length - 1].offsetX = offset[0]

		if (offset[1] != undefined) this.array[length - 1].offsetY = offset[1]

		if (offset[2] != undefined) this.array[length - 1].offsetZ = offset[2]

        return this

	},


	addSecret: function(isIt) {//takes an optional boolean

		let length = this.array.length

		if (length == 0) throw '.addSecret() needs to be run after a contextual condition'

		if (isIt == undefined) {

			this.array[length - 1].secret = true

		} else {

			this.array[length - 1].secret = isIt

		}

		return this

	},


	addDescription: function(descriptionIn) {//takes a string like 'When it snows'

		let length = this.array.length

		if (length == 0) throw '.addDescription() needs to be run after a contextual condition'

		this.array[length - 1].description = descriptionIn

		return this

	},


	not: function() {//use at the begining of a LycheeContextual to negate the whole thing (turn from a and to a nand) or after a contexual to negat that single one

		let length = this.array.length

		if (length== 0) this.nand = true

		this.array[length - 1] = {

			type: 'not',

			contextual: this.array[length - 1]

		}

		return this

	},


    or: function(contextArray) {//takes an array of context classes .or([new LycheeContextual(). ...,new LycheeContextual(). ... , ...])

        let newContextArray = []

        contextArray.forEach(contextPart => {

            newContextArray.push(contextPart.build())//runs .build() on all of them

        })

        this.array.push({

            type:'or',

            contextual:newContextArray//wraps them all in an or and adds it to this context array

        })

        return this

    },


	build: function() {//you never need to call this when making a recipe this is used internaly, but can be used if you want the json produced from a LycheeContextual object, do so by calling it at the end, simular to .recipe at the end of Lychee object, but this is a function, so requires a ()

		if (this.array.length == 0) result = {//if no contexual conditions makes something with 100%

			type:'chance',//recomended for debuging purpouses, anytime that this gets used your code is sub-opitmal

			chance:1

		}

		let result

		if (this.array.length == 1) result = this.array[0]//takes the first result if only one

		if (this.array.length > 1) result = {//ands it all if more then one

			type: 'and',

			contextual: this.array

		}

		if (this.nand) return {//if Context().not()... then wraps the whole thing in a not right here

			type: 'not',

			contextual: result

		}

		return result

	}

}




function LycheeBlock(blocks) {//takes either a string 'cactus' or '#logs' or an array of theese and this is all opotional so you can give it nothing too. But DO NOT give it a ItemStackJS or any other object

	if (blocks == undefined) {// undefined

		this.block ={}

	} else {

		if (typeof blocks == 'object') {// ['cactus','oak_planks']

			this.block = {

				blocks: blocks

			}

		} else {

			if (blocks.startsWith('#')) {//'#planks'

				this.block = {

					tag: blocks.replace('#', '')

				}

			} else {// 'cactus'

				this.block = {

					blocks:[blocks]

				}

			}

		}

	}

}


LycheeBlock.prototype = {

	withNbt: function(value){//takes an object like {Text1:{text:'Hello'}} (line one a sign is Hello)

		this.block.nbt = value

		return this

	},


	withState: function(value){//takes an object like {level:0}

		this.block.state = value

		return this

	}

}




function Lychee() {

	this.recipe = {

		post:[]

	}

}


Lychee.prototype = {

	recipeBlockInteracting: function() {//inItem and inBlock required after this

		this.recipe.type = 'lychee:block_interacting'

		this.recipe.maxRepeats = 1

		return this

	},


	recipeBlockClicking: function() {//inItem and inBlock required after this

		this.recipe.type = 'lychee:block_clicking'

		this.recipe.maxRepeats = 1

		return this

	},


	recipeItemBurning: function() {//inItem required after this

		this.recipe.type = 'lychee:item_burning'

		return this

	},


	recipeItemInside: function(time) {//inItem required, inBlock optional after this. The time argument is an optional number

		this.recipe.type = 'lychee:item_inside'

		if (time != undefined) this.recipe.time = time

		return this

	},


	recipeAnvilCrafting: function(itemOut, levelCost) {//1 inItem required after this, 2 (toltal) inItem optional (Do NOT use an ARRAY for this). The first inItem, count needs to be 1, but the second one the count is respected. The itemOut argument is a string like '3x cactus' or an ItemStackJS like Item.of('enchanted_book').enchant('power',1) The levelCost is a required number.

		this.recipe.type = 'lychee:anvil_crafting'

		this.recipe.item_out = Item.of(itemOut).toJson()

		this.recipe.level_cost = levelCost

		return this

	},


	recipeBlockCrushing: function(falling_block) {//inItem and inBlock (landing block) are both optional after this. The falling_block is an optional LycheeBlock object

		this.recipe.type = 'lychee:block_crushing'

		if (falling_block != undefined) {

			let block

			if (typeof falling_block == 'string') {

				block = {

					blocks:[falling_block]

				}

			} else {

				block = falling_block.block

			}

			this.recipe.falling_block = block

		}

		return this

	},


	recipeLightningChanneling: function() {//inItem optional after this

		this.recipe.type = 'lychee:lightning_channeling'

		return this

	},


	recipeItemExploding: function() {//inItem optional after this

		this.recipe.type = 'lychee:item_exploding'

		return this

	},


	recipeBlockExploding: function() {//inBlock optional after this

		this.recipe.type = 'lychee:block_exploding'

		return this

	},


	inItem: function(itemIn) {//itemIn can be either a string like 'cactus' or '#logs' or a IngredientJS like Ingredient.of('enchanted_book').enchant('power',1)

		if (this.recipe.type == 'lychee:anvil_crafting') {//if it's a anvil crafting recipe, this works in a different way becuase reasons

			if (this.recipe.item_in == undefined) {

				this.recipe.item_in = [Ingredient.of(itemIn).toJson()]

			} else {

				this.recipe.item_in.push(Ingredient.of(itemIn).withCount(1).toJson())

				this.recipe.material_cost = Ingredient.of(itemIn).count

			}

			return this

		}

		if (this.recipe.item_in == undefined) this.recipe.item_in = []

		if (Array.isArray(itemIn)) {

			result = []

			itemIn.forEach(item => {

				result.push(Ingredient.of(item).toJson())

			})

			this.recipe.item_in.push(result)

			return this

		} 

		this.recipe.item_in.push(Ingredient.of(itemIn).toJson())

		return this

	},


	inBlock: function(blockIn) {//takes a LycheeBlock object or a string

		let block

		if (typeof blockIn == 'string') {

			block = {

				blocks:[blockIn]

			}

		} else {

			block = blockIn.block

		}

		if (this.recipe.type == 'lychee:block_crushing') {

			this.recipe.landing_block = block

		} else {

			this.recipe.block_in = block

		}

		return this

	},


	setPost: function(post){//takes an array like [{type:'drop_item',item:'cactus'},{type:'drop_xp',xp:69}] Note this should only be used if you dont want to use pretty much everything that this adds, and use json for the post action part

		this.recipe.post = post

		return this

	},


	outItem: function (itemOut){//takes an string like 'cactus' or '3x apple' or an ItemStacksJS object like Item.of('stone_pickaxe',{Damage:69}).withChance(0.5)

		let item = Item.of(itemOut)

        this.recipe.post.push({

            type: 'drop_item',

            item: item.id

        })

		if (item.count != 1) this.recipe.post[this.recipe.post.length - 1].count = item.count

		if (item.hasNBT()) if (item.nbt != null) this.recipe.post[this.recipe.post.length - 1].nbt = `${item.nbt}`

		if (item.hasChance()) this.recipe.post[this.recipe.post.length - 1].contextual = {type: "chance",chance: item.chance}

        return this

	},


	withContextual: function (contextualIn){//takes a LycheeContext object

		let length = this.recipe.post.length 

		if (length == 0) {//add to the recipe as a whole

			if(this.recipe.contextual == undefined) this.recipe.contextual = []

			this.recipe.contextual.push(contextualIn.build())

		} else {//add to the output

			if(this.recipe.post[length - 1].contextual == undefined) this.recipe.post[length - 1].contextual = []

			this.recipe.post[length - 1].contextual.push(contextualIn.build())

		}

		return this

	},


	withRawContextual: function (Context) {//takes an object like {type:'chance',chance:0.5} should only be used if you do not want to use the LycheeContext with the .withContextual()

		if (this.recipe.post.length == 0) {//add to the recipe as a whole

			if(this.recipe.contextual == undefined) this.recipe.contextual = []

			this.recipe.contextual.push(Context.context)

		} else {//add to the output

			if(!this.recipe.post[this.recipe.post.length - 1].contextual) this.recipe.post[this.recipe.post.length - 1].contextual = []

			this.recipe.post[this.recipe.post.length - 1].contextual.push(Context.context)

		}

		return this

	},


	setRawContextual: function (contextualRaw) {//takes an array like [{type:'chance',chance:0.5},{type:'weather',weather:'clear'}] should only be used if you do not want to use the LycheeContext with the .withContextual()

		if (this.recipe.post.length == 0) {//add to the recipe as a whole

			this.recipe.contextual = contextualRaw

		} else {//add to the output

			this.recipe.post[this.recipe.post.length - 1].contextual = contextualRaw

		}

		return this

	},


	outBlock: function (blockOut,offset) {//blockOut needs to be a LycheeBlock object and offset is an optional array like [{min:-5,max:5},,0]

		let block

		if (typeof blockOut == 'string') {

			block = {

				blocks:[blockOut]

			}

		} else {

			block = blockOut.block

		}

		let result = {

            type:"place",

            block:block

        }

		if (offset != undefined) {

			if (offset[0] != undefined) result.offsetX = offset[0]

			if (offset[1] != undefined) result.offsetY = offset[1]

			if (offset[2] != undefined) result.offsetZ = offset[2]

		}

		this.recipe.post.push(result)

        this.recipe.max_repeats = 1 //if the block is changed then only one item can be processed at a time

        return this

    },


	outXp: function (amount) {//takes an number like 5

		this.recipe.post.push({

            type:"drop_xp",

            xp:amount

        })//add it to the recipe

		return this

	},


	outCommand: function(command) {//takes a string like 'summon cow'

		this.recipe.post.push({

			type:"execute",

			command:command

		})

		return this

	},


	outCallback: function(name,func) {//takes a name that is a string like 'cactus' or 'cactus;bean' and a optional function that is the callback like function(ctx,value){return 1}

		let a = name.split(';')

		if (a.length > 2) throw `name: ${name} can not have more then 1 ';', but it has ${a.length}`

		let value = ''

		if (a.length == 2) value = a[1]//if name is 'cactus' a[0] is 'cactus' and value is '' If name is 'cactus;bean' a[0] is 'cactus' and value is 'bean'

		if (func != undefined) registerLycheeCallback(a[0],func)

		this.recipe.post.push({

			type:"execute",

			command:`lycheeCallback '${a[0]}' '${value}'`

		})

		return this

	},


	outPreventDefualt: function (isIt) {//takes an optional boolean, defualt behavior is true

        if (isIt === undefined || isIt){

            this.recipe.post.push({

				type:"prevent_defualt"

			})

        }

        return this

	},


	outDamageItem: function (damage) {//takes an optional number

		this.recipe.max_repeats = 1 //if the item is damaged then only one item can be processed at a time

        if (damage == undefined){

			this.recipe.post.push({

				type:"damage_item"

			})

		} else {

			this.recipe.post.push({

				type:"damage_item",

				damage:damage

			})

		}

        return this

	},


	outAnvilDamageChance: function(chance) {//takes an number like 0.5

		if (this.recipe.type != 'lychee:block_crushing') throw '.anvilDamageChance() may only be used if the recipe is lychee:block_crushing'

		this.recipe.post.push({

			type:'lychee:anvil_damage_chance',

			chance:chance

		})

		return this

	},


	outRandom: function(entries,rolls){//entries takes a Lychee object, rolls is an optional number

		if (rolls == undefined) {

			this.recipe.post.push({

				type:"random",

				entries:entries.recipe.post

			})

		} else {

			this.recipe.post.push({

				type:"random",

				entries:entries.recipe.post,

				rolls:rolls

			})

		}

		return this

	},


	outExplode: function (offset,properties) {//offset is an optional array like [{min:-5,max:5},,0] or [] to skip AND properties is an object like {fire:false,radius:1,radius_step:1,block_interaction:"destroy"} learn about this more on the lychee wiki

		let result

		if (properties == undefined) {

			result = {type:"explode"}

		} else {

			result = properties

			result.type = "explode"

		}

		

		if (offset != undefined) {

			if (offset[0] != undefined && offset[0] != 0) result.offsetX = offset[0]

			if (offset[1] != undefined && offset[1] != 0) result.offsetY = offset[1]

			if (offset[2] != undefined && offset[2] != 0) result.offsetZ = offset[2]

		}

		this.recipe.post.push(result)

        return this

    },


	outHurt: function(damage,source) {//source is optional

		if (source == undefined) {

			this.recipe.post.push({

				type:"hurt",

				damage: damage

			})

		} else {

			this.recipe.post.push({

				type:"hurt",

				damage: damage,

				source:source

			})

		}

		return this

	},


	setMaxRepeats: function (maxRepeats) {//takes a number like 1

		this.recipe.max_repeats = maxRepeats

		return this

	},


	setComment: function (comment) {//takes a string like 'The best recipe ever!'

		this.recipe.comment = comment

		return this

	},


	setGhost: function (ghost){//takes an optional boolean

		if (ghost == undefined) {

			this.recipe.ghost = true

		} else {

			this.recipe.ghost = ghost

		}

        return this

    },


	setHidden: function(hidden) {//put before post actions to hide the recipe in JEI/REI OR put after an post action to hide it in JEI/REI (only works on command and callback I think) Hidden argument is optional and defualt to true

		let hide = true

		if (hidden != undefined) hide = hidden

		if (this.recipe.post.length == 0) {//add to the recipe as a whole

			this.recipe.hide_in_viewer = hide

		} else {//add to the recipe

			this.recipe.post[this.recipe.post.length - 1].hide = hide

		}

		return this

	},


	withForgeCondition: function (condition){//takes a forge condition

		if (this.recipe.conditions == undefined) this.recipe.conditions = []

        this.recipe.conditions.push(condition)

        return this

    },


	setForgeConditions: function (conditions){//takes an array of forge conditions

		this.recipe.conditions = conditions

        return this

    },

	

	setPropertiy: function (property,value) {//takes a string like 'max_repeats' and an any like 1

		this.recipe[property] = value

		return this

	}

}