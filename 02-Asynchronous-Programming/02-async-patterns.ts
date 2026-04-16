function fetchGoodData(): Promise<string> {
    return Promise.resolve('goodData')
}

function fetchBadData(): Promise<string> {
    return Promise.reject(new Error('badData'))
}

async function robustFetch() {
    const results = await Promise.allSettled([fetchGoodData(), fetchBadData()])

    const processedData = results.map(result => {
        if (result.status == 'fulfilled') return result.value
        else {
            console.error(`Field failed: ${result.reason.message}`);
            return "Fallback Placeholder"; // 错误隔离：给一个保底值
        }
    })
    console.log(processedData)
}

robustFetch()
