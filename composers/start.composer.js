const { Composer } = require('telegraf')
const text = require('../constants/text')

const composer = new Composer()

composer.command('start', async (ctx) => {
	try {
		ctx.users.push(ctx.from.id)
		await ctx.replyWithHTML(`${text.start}`, {
			reply_markup: {
				inline_keyboard: [
					[{ text: '📕About Aleo', callback_data: 'about' }],
					[{ text: '🫂Ambassador Program', callback_data: 'ambassador' }],
					[{ text: '⚙️Testnet', callback_data: 'testnet' }],
				]
			}
		})
	} catch (e) {
		console.error('error start command')
	}
})

composer.action('about', async (ctx) => {
	await ctx.replyWithHTML(`${text.about}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '💡Technology', callback_data: 'technology' }],
				[{ text: '💰Investors', callback_data: 'investors' }],
				[{ text: '🗺Roadmap', callback_data: 'roadmap' }],
				[{ text: '👥Team', callback_data: 'team' }],
				[{ text: '📤Links', callback_data: 'social_media' }],
				[{ text: '❓FAQ', callback_data: 'faq_aleo' }],
				[{ text: '⬅️ Back', callback_data: 'back_start' }],
			]
		}
	})
})

composer.action('technology', async (ctx) => {
	await ctx.replyWithHTML(`${text.technology}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'about' }],
			]
		}
	})
})

composer.action('investors', async (ctx) => {
	await ctx.replyWithHTML(`${text.investors}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '🌱SERIES A - $ 28,000,000', callback_data: 'series_a' }],
				[{ text: '🐳SERIES B - $ 200,000,000', callback_data: 'series_b' }],
				[{ text: '🦈EXTENDED SERIES B - $ 70,000,000', callback_data: 'extended_series_b' }],
				[{ text: '⬅️ Back', callback_data: 'about' }],
			]
		}
	})
})

composer.action('series_a', async (ctx) => {
	await ctx.replyWithHTML(`${text.series_a}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'investors' }],
			]
		}
	})
})

composer.action('series_b', async (ctx) => {
	await ctx.replyWithHTML(`${text.series_b}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'investors' }],
			]
		}
	})
})

composer.action('extended_series_b', async (ctx) => {
	await ctx.replyWithHTML(`${text.extended_series_b}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'investors' }],
			]
		}
	})
})

composer.action('roadmap', async (ctx) => {
	await ctx.replyWithHTML(`${text.roadmap}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'about' }],
			]
		}
	})
})

composer.action('team', async (ctx) => {
	await ctx.replyWithHTML(`${text.team}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '🪞Raymond Chu', callback_data: 'chu' }],
				[{ text: '🪞Michael Beller', callback_data: 'beller' }],
				[{ text: '🪞Howard Wu', callback_data: 'wu' }],
				[{ text: '🪞Collin Chin ', callback_data: 'chin' }],
				[{ text: '⬅️ Back', callback_data: 'about' }],
			]
		}
	})
})

composer.action('chu', async (ctx) => {
	await ctx.replyWithHTML(`${text.raymond_chu}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'team' }],
			]
		}
	})
})

composer.action('beller', async (ctx) => {
	await ctx.replyWithHTML(`${text.michael_beller}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'team' }],
			]
		}
	})
})

composer.action('wu', async (ctx) => {
	await ctx.replyWithHTML(`${text.howard_wu}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'team' }],
			]
		}
	})
})

composer.action('chin', async (ctx) => {
	await ctx.replyWithHTML(`${text.collin_chin}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'team' }],
			]
		}
	})
})

composer.action('social_media', async (ctx) => {
	await ctx.replyWithHTML(`${text.social_media}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'about' }],
			]
		}
	})
})

composer.action('faq_aleo', async (ctx) => {
	await ctx.replyWithHTML(`${text.faq_aleo}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'about' }],
			]
		}
	})
})

composer.action('ambassador', async (ctx) => {
	await ctx.replyWithHTML(`${text.ambassador}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '📕About', callback_data: 'about_ambassador' }],
				[{ text: '🎭Roles', callback_data: 'roles_ambassador' }],
				[{ text: '🏆Rewards', callback_data: 'rewards_ambassador' }],
				[{ text: '🚪How to join', callback_data: 'join_ambassador' }],
				[{ text: '⬅️ Back', callback_data: 'back_start' }],
			]
		}
	})
})

composer.action('about_ambassador', async (ctx) => {
	await ctx.replyWithHTML(`${text.about_ambassador}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'ambassador' }],
			]
		}
	})
})

composer.action('roles_ambassador', async (ctx) => {
	await ctx.replyWithHTML(`${text.roles_ambassador}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'ambassador' }],
			]
		}
	})
})

composer.action('rewards_ambassador', async (ctx) => {
	await ctx.replyWithHTML(`${text.rewards_ambassador}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'ambassador' }],
			]
		}
	})
})

composer.action('join_ambassador', async (ctx) => {
	await ctx.replyWithHTML(`${text.join_ambassador}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'ambassador' }],
			]
		}
	})
})

composer.action('testnet', async (ctx) => {
	await ctx.replyWithHTML(`${text.install}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '💻Set up your node', callback_data: 'node' }],
				[{ text: '⚙️System Requirements', callback_data: 'requirements' }],
				[{ text: '❓FAQ', callback_data: 'faq' }],
				[{ text: '⬅️ Back', callback_data: 'back_start' }],
			]
		}
	})
})

composer.action('requirements', async (ctx) => {
	await ctx.replyWithHTML(`${text.requirements}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'testnet' }],
			]
		}
	})
})

composer.action('faq', async (ctx) => {
	await ctx.replyWithHTML(`${text.faq}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '⬅️ Back', callback_data: 'testnet' }],
			]
		}
	})
})

composer.action('node', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_methods}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '💿Installation', callback_data: 'installation' }],
				[{ text: '📢Update', callback_data: 'update' }],
				[{ text: '❌Uninstalling', callback_data: 'uninstalling' }],
				[{ text: '🤖Useful Commands', callback_data: 'commands' }],
				[{ text: '⬅️ Back', callback_data: 'testnet' }],
			]
		}
	})
})

composer.action('back_start', async (ctx) => {
	await ctx.replyWithHTML(`${text.start}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '📕About Aleo', callback_data: 'about' }],
				[{ text: '🫂Ambassador Program', callback_data: 'ambassador' }],
				[{ text: '⚙️Testnet', callback_data: 'testnet' }],
			]
		}
	})
})

composer.action('installation', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_type}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '✋Linux (manual)', callback_data: 'installation_manual' }],
				[{ text: '🖥Linux (automatic)', callback_data: 'installation_automatic' }],
				[{ text: '⬅️ Back', callback_data: 'node' }],
			]
		}
	})
})

composer.action('installation_manual', async (ctx) => {
	await ctx.replyWithHTML(`${text.installation_manual.start}`, {
		reply_markup: {
			inline_keyboard: [
				[{ text: '💻Step 1 : Server preparation', callback_data: 'server_preparation' }],
				[{ text: '🛠Step 2 : Node installation', callback_data: 'node_installation' }],
				[{ text: '💼Step 3 : Create a wallet', callback_data: 'create_wallet' }],
				[{ text: '📝Step 4 : Adding a wallet', callback_data: 'adding_wallet' }],
				[{ text: '🎉Step 5 : Creating and running a service file', callback_data: 'creating_service' }],
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
				[{ text: '✋Manual', callback_data: 'update_manual' }],
				[{ text: '⚙️Automatic', callback_data: 'update_automatic' }],
				[{ text: '👨‍💻Semi-Automatic', callback_data: 'update_semi' }],
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
