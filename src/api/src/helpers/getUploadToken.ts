import axios from 'axios'
import { ResponseError } from '../shared/mongo/ResponseError'
import { GetTokenOutputs } from '../shared/upload/GetToken'

export const getUploadToken = async (): Promise<GetTokenOutputs> => {
  const accountId = process.env.B2_ACCOUNT_ID
  const applicationKey = process.env.B2_APP_KEY
  const encodedBase64 = Buffer.from(`${accountId}:${applicationKey}`).toString('base64')

  const authorizeAccountResponse = await axios({
    method: 'get',
    url: 'https://api.backblazeb2.com/b2api/v2/b2_authorize_account',
    timeout: 30000,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      Authorization: `Basic ${encodedBase64}`,
    },
  })

  if (!(authorizeAccountResponse && authorizeAccountResponse.data && authorizeAccountResponse.data.apiUrl))
    throw new ResponseError(400, 'Could not get B2 Authorization')

  const credentials = {
    accountId,
    applicationKey,
    apiUrl: authorizeAccountResponse.data.apiUrl,
    authorizationToken: authorizeAccountResponse.data.authorizationToken,
    downloadUrl: authorizeAccountResponse.data.downloadUrl,
    recommendedPartSize: authorizeAccountResponse.data.recommendedPartSize,
  }

  const getUploadUrlResponse = await axios({
    method: 'get',
    url: `${credentials.apiUrl}/b2api/v2/b2_get_upload_url`,
    timeout: 30000,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      Authorization: credentials.authorizationToken,
    },
    params: {
      bucketId: process.env.B2_BUCKET,
    },
  })

  if (!(getUploadUrlResponse && getUploadUrlResponse.data && getUploadUrlResponse.data.uploadUrl))
    throw new ResponseError(400, 'Could not get B2 Upload URL')

  const uploadUrl = getUploadUrlResponse.data.uploadUrl
  const uploadAuthorizationToken = getUploadUrlResponse.data.authorizationToken

  return {
    uploadUrl,
    uploadAuthorizationToken,
  }
}
