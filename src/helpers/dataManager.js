import createS3Object from "../helpers/s3Object"
import { Auth } from 'aws-amplify';

class DataManager {
    constructor() {

    }

    async saveChats (chats) {
        const user = await Auth.currentCredentials()
        const s3 = await createS3Object()
        const preSignedUrl = await s3.getSignedUrl("putObject", {
            Bucket: s3.config.Bucket,
            Key: `private/${user.identityId}/chat_history.json`,
            ContentType: 'application/json',
            Expires: 5 * 60
        })
        return fetch(preSignedUrl, {
            method: 'PUT',
            body: JSON.stringify(chats),
            headers: { "Content-Type": 'application/json' }
        })
    }

    async getChats () {
        const user = await Auth.currentCredentials()
        const s3 = await createS3Object()
        const preSignedUrl = s3.getSignedUrl('getObject', {
            Bucket: s3.config.Bucket,
            Key: `private/${user.identityId}/chat_history.json`
        })
        return fetch(preSignedUrl).then(res => {
            return res.json()
        }).catch(() => {
            //Chats dont exist yet
            return this.saveChats({}).then(() => {return {}})
        })
    }
}

const dataManager = new DataManager()

export default dataManager