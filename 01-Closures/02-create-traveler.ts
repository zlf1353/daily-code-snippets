const createTraveler = (name: string) => {
    let destination: string = "Amsterdam";

    return {
        fly: () => console.log(`${name} is flying to ${destination}`),
        changeDestination: (newDest: string) => {
            destination = newDest
        }

    }
}

const Traveler = createTraveler('lulu')
Traveler.fly()
Traveler.changeDestination('beijing')
Traveler.fly()
