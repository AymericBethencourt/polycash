import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { ERROR } from 'app/App.components/Toaster/Toaster.constants'
import axios from 'axios'
import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'
import { Address } from 'shared/coin/Address'
import { Jwt } from 'shared/user/Jwt'

import { ManageFindAssetsView } from './ManageFindAssets.view'

export const ManageFindAssets = () => {
  const jwt: Jwt | undefined = useSelector((state: State) => state.auth.jwt)
  const dispatch = useDispatch()
  const [assets, setAssets] = useState<Address[]>([])

  const checkCallback = async (payId: string) => {
    try {
      const response: any = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACKEND_URL}/coin/compare-assets`,
        headers: {
          authorization: 'Bearer ' + jwt,
          'Content-Type': 'application/json',
        },
        data: {
          payId: payId,
        },
      })
      console.log(response.data)
      if (response && response.data && response.data.addresses) setAssets(response.data.addresses)
    } catch (e) {
      dispatch(showToaster(ERROR, e, 'Please contact support'))
    }
  }

  return <ManageFindAssetsView assets={assets} checkCallback={checkCallback} />
}
