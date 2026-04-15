type Procedure = (...args: any[]) => void

const debounce = (fn: Procedure, delay: number) => {
    let timer: ReturnType<typeof setTimeout> | null = null

    return (...args: any[]) => {
        if (timer) clearTimeout(timer)

        timer = setTimeout(() => { fn(...args) }, delay)
    }
}
const longSearch = (name: string) => console.log(`Looking for ${name}`)
const optimizedSearch = debounce(longSearch, 5000)

optimizedSearch('lulu')
optimizedSearch('lululemon')