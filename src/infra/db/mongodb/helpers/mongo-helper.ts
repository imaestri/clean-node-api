/* eslint-disable no-unused-vars */
import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
	client: null as MongoClient,

	async connect(uri: string): Promise<void> {
		this.client = await MongoClient.connect(process.env.MONGO_URL)
	},

	async disconnect(): Promise<void> {
		await this.client.close()
	},

	getCollection (name: string): Collection {
		return this.client.db().collection(name)
	},

	map: (collection: any): any => {
		const { _id, ...collectionWithoutId } = collection;
		const account = Object.assign({}, collectionWithoutId, {
			id: _id.toHexString(),
		})

		return account;
	}
}
