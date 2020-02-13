import React from 'react'
const axios = require('axios').default;

export default async function Email(dictionary) {
    const URL = "https://e0qzispugi.execute-api.us-east-1.amazonaws.com/production"
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Host': "e0qzispugi.execute-api.us-east-1.amazonaws.com",
            'Accept': '*/*',
            "Accept-Encoding": "gzip, deflate"
        }
    }
    var res = await axios({
        method: 'post',
        url: URL,
        data: JSON.stringify(dictionary),
        config: config
    })
    return await res.status === 200
}

