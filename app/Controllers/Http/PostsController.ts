import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import PostValidator from 'App/Validators/PostValidator'

export default class PostsController {
	public async index({}: HttpContextContract) {
		const post = await Post.all()
		return post
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(PostValidator)
		console.log('resltado', data)
		const post = await Post.create(data)
		return post
	}

	public async show({ params }: HttpContextContract) {
		const post = await Post.findOrFail(params.id)
		return post
	}
	public async update({ params, request }: HttpContextContract) {
		const post = await Post.findOrFail(params.id)
		const data = await request.validate(PostValidator)
		post.merge(data)
		await post.save()
		return post
	}

	public async destroy({ params }: HttpContextContract) {
		const post = await Post.findOrFail(params.id)
		await post.delete()
	}
}
