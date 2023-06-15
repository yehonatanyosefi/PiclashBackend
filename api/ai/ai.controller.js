const aiService = require('./ai.service')
const logger = require('../../services/logger.service')

async function postImg(req, res) {
	try {
		const body = req.body
		console.log(`body:`, body)
		const { prompt } = req.body
		console.log(`prompt:`, prompt)
		const imgUrl = await aiService.postImg(prompt)
		console.log(`imgUrl:`, imgUrl)
		res.json(imgUrl)
	} catch (err) {
		logger.error('Failed to post image', err)
		res.status(500).send({ err: 'Failed to post image' })
	}
}

module.exports = {
	postImg,
}
