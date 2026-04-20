let globlecontroller: AbortController | null = null;

const fetchRes = async (id: number) => {
    if (globlecontroller) {
        globlecontroller.abort()
    }
    console.log(`#${id} start`)
    const currentcontroller = new AbortController()
    globlecontroller = currentcontroller
    const { signal } = globlecontroller;

    let delay = id == 1 ? 2000 : 500
    await new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, delay);
        signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(new Error('Aborted'));
        });
    });

    if (signal.aborted) return;

    console.log(`Request #${id} successfully updated the UI!`)

}

fetchRes(1)
setTimeout(() => fetchRes(2), 500)