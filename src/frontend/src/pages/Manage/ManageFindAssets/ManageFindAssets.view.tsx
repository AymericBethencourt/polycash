import { Button } from 'app/App.components/Button/Button.controller'
import { ButtonLoadingIcon } from 'app/App.components/Button/Button.style'
import { Input } from 'app/App.components/Input/Input.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState } from 'react'
import { Address } from 'shared/coin/Address'
import { Coin } from 'shared/coin/Coin'

//prettier-ignore
import { ManageFindAssetsInput, ManageFindAssetsList, ManageFindAssetsListElem, ManageFindAssetsStyled } from './ManageFindAssets.style'

type ManageFindAssetsViewProps = {
  assets: Address[]
  checkCallback: (payId: string) => void
}

export const ManageFindAssetsView = ({ assets, checkCallback }: ManageFindAssetsViewProps) => {
  const [payId, setPayId] = useState<string>('')

  return (
    <ManageFindAssetsStyled>
      <ManageFindAssetsInput>
        <Input
          icon="fuse"
          name="payid"
          placeholder="PayID"
          type="text"
          onChange={(e) => {
            setPayId(e.target.value)
          }}
          value={payId}
          onBlur={() => {}}
          inputStatus={undefined}
          errorMessage={undefined}
        />
        <Button type="button" text="Submit" icon="check" loading={false} onClick={() => checkCallback(payId)} />
      </ManageFindAssetsInput>
      <ManageFindAssetsList>
        {assets.map((asset: Address) => (
          <>
            {asset.compat ? (
              <ManageFindAssetsListElem>
                <div>{asset.paymentNetwork.replace('XRPL', 'XRP')}</div>
                <div>{asset.environment}</div>
                <div>{asset.addressDetails?.address}</div>
              </ManageFindAssetsListElem>
            ) : (
              <div />
            )}
          </>
        ))}
      </ManageFindAssetsList>
    </ManageFindAssetsStyled>
  )
}

ManageFindAssetsView.propTypes = {
  coin: PropTypes.object,
  coinIndex: PropTypes.number,
  walletSize: PropTypes.number,
}

ManageFindAssetsView.defaultProps = {}
