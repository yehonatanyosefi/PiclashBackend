const storageService = require('../storage/storage.service')
const logger = require('../../services/logger.service')
require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

async function postImg(prompt) {
	try {
		const response = await openai.createImage({
			prompt,
			n: 1,
			size: '1024x1024',
		})

		const genImgUrl = response.data.data[0].url
		console.log(`genImgUrl:`, genImgUrl)

		const imgUrl = await storageService.uploadImg(genImgUrl)
		console.log(`imgUrl:`, imgUrl)

		return imgUrl
	} catch (err) {
		logger.error('cannot add image', err)
		throw err
	}
}

module.exports = {
	postImg,
}
