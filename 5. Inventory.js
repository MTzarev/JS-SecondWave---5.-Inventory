function inventory(arr) {
    let newArr = [];
    for (let line of arr) {
        line = line.split(` / `);
        let heroObject = {};
        let heroName = line.shift()
        heroObject.name = heroName;
        let heroLevel = line.shift()
        heroObject.level = heroName;
        let heroItems = line.shift();
        heroObject.items = heroItems
        newArr.push(heroObject)
        for (let newHero of newArr) {
            if (newHero.name === heroName) {
                newHero.level = heroLevel;
                newHero.items = heroItems;
            }
        }

    }
    let sorted  = newArr.sort((a,b)=>a.level-b.level)
for (let object of sorted){
    // if(object.hasOwnProperty(`name`)&&object.hasOwnProperty(`level`)&& object.hasOwnProperty(`items`)){
    //     let finalResult = JSON.stringify(object)
    //     console.log(object);
        
    // }
    console.log(`Hero: ${object.name}\nlevel => ${object.level}\nitems => ${object.items}`);
    
    }

}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
