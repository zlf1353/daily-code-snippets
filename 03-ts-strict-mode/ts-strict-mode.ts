interface lululemonMember {
    name: string,
    vipNumber?: {
        discount: number
    }
}

const getDiscount = (menber: lululemonMember) => {
    // ❌
    // console.log(menber.vipNumber.discount)

    console.log(menber.vipNumber?.discount)

    if (menber.vipNumber) {
        console.log(menber.vipNumber.discount)
    } else {
        console.log("not discount")
    }

}