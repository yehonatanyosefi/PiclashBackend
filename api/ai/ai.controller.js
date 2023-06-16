const aiService = require('./ai.service')
const logger = require('../../services/logger.service')

async function postImg(req, res) {
	try {
		const { prompt } = req.body
		const imgUrl = await aiService.genImg(prompt)
		const newImgUrl = await aiService.uploadImg(imgUrl)
		res.json(newImgUrl)
	} catch (err) {
		logger.error('Failed to post image', err)
		res.status(500).send({ err: 'Failed to post image' })
	}
}

module.exports = {
	postImg,
}
