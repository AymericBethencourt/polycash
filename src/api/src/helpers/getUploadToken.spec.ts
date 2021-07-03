import { GetTokenOutputs } from '../shared/upload/GetToken'
import { getUploadToken } from './getUploadToken'

describe('Helper', () => {
  it('gets upload token', async () => {
    const uploadCredentials: GetTokenOutputs = await getUploadToken()

    expect(uploadCredentials.uploadUrl).toBeDefined()
    expect(uploadCredentials.uploadAuthorizationToken).toBeDefined()
  })
})
