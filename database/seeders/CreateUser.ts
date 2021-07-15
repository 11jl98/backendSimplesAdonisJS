import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
export default class CreateUserSeeder extends BaseSeeder {
	public async run() {
		await User.createMany([
			{
				email: 'admin@gmail.com',
				password: 'secret',
				rule: 'admin'
			},
			{
				email: 'normal@gmail.com',
				password: 'secret',
				rule: 'normal'
			}
		])
	}
}
