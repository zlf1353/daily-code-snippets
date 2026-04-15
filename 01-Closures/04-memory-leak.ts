const heaveMemory = () => {
    let heaveData: string | null = ('').repeat(1000000)

    return () => {
        console.log('data is still keeping')
        return heaveData
    }
}
let  leak:any=heaveMemory()
leak()
leak = null