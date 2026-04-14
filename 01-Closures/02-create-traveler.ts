const createTraveler = (name: string) => {
    let destination: string = "Amsterdam";

    return () => {
        console.log(`${name} is flying to ${destination}`),
        
    }
}

const fly = createTraveler('lulu')
fly()

