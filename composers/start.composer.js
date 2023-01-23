const { Composer, Markup } = require('telegraf')
const text = require('../constants/text')

const composer = new Composer()

composer.command('start', async (ctx) => {
	try {
		ctx.users.push(ctx.from.id)
		await ctx.replyWithHTML(`${text.start}`, {
			reply_markup: {
				inline_keyboard: [
					[{ text: 'Set up your node', callback_data: 'node' }],
					[{ text: 'System Requirements', callback_data: 'requirements' }],
					[{ text: 'FAQ', callback_data: 'faq' }],
				]
			}
		})
	} catch (e) {
		console.error('error start command')
	}
})

composer.action('requirements', async (ctx) => {
	await ctx.replyWithHTML(`${text.requirements}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'back_start' }],
			]
		}
	})
})

composer.action('faq', async (ctx) => {
	await ctx.replyWithHTML(`${text.faq}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'back_start' }],
			]
		}
	})
})

composer.action('node', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_methods}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Installation', callback_data: 'installation' }],
				[{ text: 'Update', callback_data: 'update' }],
				[{ text: 'Uninstalling', callback_data: 'uninstalling' }],
				[{ text: 'Useful Commands', callback_data: 'commands' }],
				[{ text: '⬅️ Back', callback_data: 'back_start' }],
			]
		}
	})
})

composer.action('back_start', async (ctx) => {
	await ctx.replyWithHTML(`${text.start}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Set up your node', callback_data: 'node' }],
				[{ text: 'System Requirements', callback_data: 'requirements' }],
				[{ text: 'FAQ', callback_data: 'faq' }],
			]
		}
	})
})

composer.action('installation', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_type}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Linux (manual)', callback_data: 'installation_manual' }],
				[{ text: 'Linux (automatic)', callback_data: 'installation_automatic' }],
				[{ text: '⬅️ Back', callback_data: 'node' }],
			]
		}
	})
})

composer.action('installation_manual', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_manual.start}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Step 1 : Server preparation', callback_data: 'server_preparation' }],
				[{ text: 'Step 2 : Node installation', callback_data: 'node_installation' }],
				[{ text: 'Step 3 : Create a wallet', callback_data: 'create_wallet' }],
				[{ text: 'Step 4 : Adding a wallet', callback_data: 'adding_wallet' }],
				[{ text: 'Step 5 : Creating and running a service file', callback_data: 'creating_service' }],
				[{ text: '⬅️ Back', callback_data: 'installation' }],
			]
		}
	})
})

composer.action('installation_automatic', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_automatic}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'installation' }],
			]
		}
	})
})

composer.action('server_preparation', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_manual.step1}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'installation_manual' }, { text: 'Next ➡️', callback_data: 'node_installation' }],
				[{ text: '🗂 Menu', callback_data: 'node' }]
			]
		}
	})
})

composer.action('node_installation', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_manual.step2}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'server_preparation' }, { text: 'Next ➡️', callback_data: 'create_wallet' }],
				[{ text: '🗂 Menu', callback_data: 'node' }]
			]
		}
	})
})

composer.action('create_wallet', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_manual.step3}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'node_installation' }, { text: 'Next ➡️', callback_data: 'adding_wallet' }],
				[{ text: '🗂 Menu', callback_data: 'node' }]
			],
		}
	})
})

composer.action('adding_wallet', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_manual.step4}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'create_wallet' }, { text: 'Next ➡️', callback_data: 'creating_service' }],
				[{ text: '🗂 Menu', callback_data: 'node' }]
			],
		}
	})
})

composer.action('creating_service', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_manual.step5}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'adding_wallet' }, { text: 'Useful commands ➡️', callback_data: 'commands' }],
				[{ text: '🗂 Menu', callback_data: 'node' }]
			],
		}
	})
})

composer.action('update', async (ctx) => {
	await ctx.replyWithHTML(`${text.update_type}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Manual', callback_data: 'update_manual' }],
				[{ text: 'Automatic', callback_data: 'update_automatic' }],
				[{ text: 'Semi-Automatic', callback_data: 'update_semi' }],
				[{ text: '⬅️ Back', callback_data: 'node' }],
			]
		}
	})
})

composer.action('update_manual', async (ctx) => {
	await ctx.replyWithHTML(`${text.update_manual}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'update' }],
				[{ text: '🗂 Menu', callback_data: 'node' }]
			]
		}
	})
})

composer.action('update_automatic', async (ctx) => {
	await ctx.replyWithHTML(`${text.update_automatic}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'update' }],
				[{ text: '🗂 Menu', callback_data: 'node' }]
			]
		}
	})
})

composer.action('update_semi', async (ctx) => {
	await ctx.replyWithHTML(`${text.update_semi}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'update' }],
				[{ text: '🗂 Menu', callback_data: 'node' }]
			]
		}
	})
})

composer.action('uninstalling', async (ctx) => {
	await ctx.replyWithHTML(`${text.uninstalling}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'node' }]
			]
		}
	})
})

composer.action('commands', async (ctx) => {
	await ctx.replyWithHTML(`${text.commands}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'node' }]
			]
		}
	})
})

module.exports = composer