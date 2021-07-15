import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Acl {
	public async handle(
		{ auth, response }: HttpContextContract,
		next: () => Promise<void>,
		allowRoules: string[]
	) {
		const user = await auth.authenticate()

		if (!allowRoules.includes(user.rule)) {
			return response.unauthorized({ error: { message: 'not authorized' } })
		}

		await next()
	}
}
