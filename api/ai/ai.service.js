require('dotenv').config()
const storageService = require('../storage/storage.service')
const logger = require('../../services/logger.service')
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
// import fetch from 'node-fetch'

const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const Replicate = require('replicate')
const replicate = new Replicate({
	auth: process.env.REPLICATE_API_TOKEN,
})

async function dallEGenImg(prompt) {
	try {
		// const response = await openai.createImage({
		// 	prompt,
		// 	n: 1,
		// 	size: '1024x1024',
		// })
		// const genImgUrl = response.data.data[0].url
		// return genImgUrl
	} catch (err) {
		logger.error('cannot add image', err)
		throw err
	}
}
async function genImg(prompt) {
	try {
		const output = await replicate.run(
			'cloneofsimo/realistic_vision_v1.3:db1c4227cbc7f985e335b2f0388cd6d3aa06d95087d6a71c5b3e07413738fa13',
			{
				input: {
					prompt: `perfect, best, high quality, ${prompt}, 8k high detail, trending, 2020, masterpiece, cinematic`,
					negative_prompt: `nude, naked, porn, lowres, low quality, blurry, disfigured, malformed, poorly hands, text, signature, watermark, logo, copyright, disfigured hands, duplicate`,
					width: 512,
					height: 512,
					num_outputs: 1,
					num_inference_steps: 40,
					guidance_scale: 4,
				},
			}
		)
		return output[0]
	} catch (err) {
		logger.error('cannot add image', err)
		throw err
	}
}

async function uploadImg(imgUrl) {
	try {
		const newImgUrl = await storageService.uploadImg(imgUrl)

		return newImgUrl
	} catch (err) {
		logger.error('cannot add image', err)
		throw err
	}
}

module.exports = {
	genImg,
	uploadImg,
}
