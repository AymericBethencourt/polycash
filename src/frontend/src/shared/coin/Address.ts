export type Address = {
    "paymentNetwork": string,
    "environment": string,
    "addressDetailsType": string,
    "addressDetails": {
        "address": string,
        "tag"?: string
    }
    "compat"?: boolean
}