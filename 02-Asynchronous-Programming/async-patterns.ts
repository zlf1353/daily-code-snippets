const featchUserData = (): Promise<string> =>
    new Promise((resolve) => setTimeout(() => resolve('data'), 1000))

const featchUserPost = (): Promise<string[]> =>
    new Promise((resolve) => setTimeout(() => resolve(['data1', 'data2']), 1000))

//串行等待
const getProfileInefficient = async () => {
    const data = featchUserData()
    const post = featchUserPost()
    return { data, post }
}

async function getProfileEfficient() {
    const [data, post] = await Promise.all([featchUserData(), featchUserPost()])
    return { data, post }
}