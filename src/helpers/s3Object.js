import { Auth } from 'aws-amplify'
import * as S3 from 'aws-sdk/clients/s3'
import awsconfig from '../aws-exports'

export default async function createS3Object() {
  const credentials = await Auth.currentCredentials()

  return new S3({
    params: {
      Bucket: awsconfig.aws_user_files_s3_bucket,
    },
    region: awsconfig.aws_user_files_s3_bucket_region,
    credentials
  })
}