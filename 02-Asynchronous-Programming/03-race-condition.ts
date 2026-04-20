let globleRequestId = 0;

const fetchRes = async (id: number) => {
    const currentID = ++globleRequestId
    console.log(`#${id} start`)

    let delay = id == 1 ? 2000 : 500
    await new Promise(resolve => setTimeout(resolve, delay))

    if (currentID !== globleRequestId) {
        console.log(`#${id} out of time `)
        return;
    }
    console.log(`Request #${id} successfully updated the UI!`)

}

fetchRes(1)
setTimeout(() => fetchRes(2), 500)