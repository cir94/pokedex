let pokeStats = document.getElementById('stats')
let pokeName = document.getElementById('pokeName')
let pokeHP = document.getElementById('HP')
let pokeAtk = document.getElementById('Atk')
let pokeDef = document.getElementById('Def')
let pokesDef = document.getElementById('sDef')
let pokesAtk = document.getElementById('sAtk')
let pokeSpd = document.getElementById('Spd')
let pokeAbility = document.getElementById('Abilities')
let pokedexspriteDiv = document.getElementById('pokedexSprite')

let pokemonAPI = async (id) => {
    
    
    let req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
    let data = await req.json()

    console.log(data)

    
    showPokemon = () => {       
        
        let pokedexSprite = document.createElement('img')
        
        pokeName.innerText = ''
        pokeHP.innerText = 'HP: '
        pokeAtk.innerText = 'Attack: '
        pokeDef.innerText = 'Defense: '
        pokesDef.innerText = 'S.Defense: '
        pokesAtk.innerText = 'S.Attack: '
        pokeSpd.innerText = 'Speed: '
        pokeAbility.innerText = 'Abilities: '
        
        
        pokedexspriteDiv.innerHTML = ''
        
        pokeName.appendChild(document.createTextNode(`${data.name}`))
        
        pokeHP.appendChild(document.createTextNode(`${data.stats[5].base_stat}`))
        
        pokeAtk.appendChild(document.createTextNode(`${data.stats[4].base_stat}`))
        
        pokeDef.appendChild(document.createTextNode(`${data.stats[3].base_stat}`))
        
        pokesDef.appendChild(document.createTextNode(`${data.stats[2].base_stat}`))
        
        pokesAtk.appendChild(document.createTextNode(`${data.stats[1].base_stat}`))
        
        pokeSpd.appendChild(document.createTextNode(`${data.stats[0].base_stat}`,))
        
        pokeAbility.appendChild(document.createTextNode(''))
        
        for (let i = 0; i < data.abilities.length; i++) {
            pokeAbility.appendChild(document.createTextNode([`${data.abilities[i].ability.name},`]))
        }
        
        pokedexSprite.setAttribute('src', `${data.sprites.front_default}`)
        
        pokeStats.appendChild(pokeName)
        pokeStats.appendChild(pokeHP)
        pokeStats.appendChild(pokeAtk)
        pokeStats.appendChild(pokeDef)
        pokeStats.appendChild(pokesDef)
        pokeStats.appendChild(pokesAtk)
        pokeStats.appendChild(pokeSpd)
        pokeStats.appendChild(pokeAbility)
        pokedexspriteDiv.appendChild(pokedexSprite)
        
        if (id == 54) {
            console.log('We live in a society')
        }
        
    }
    showPokemon() 
}

class Pokemon {
    constructor(name, hp, atk, def, sDef, sAtk, spd, abilities) {
        this.name = name
        this.hp = hp
        this.atk = atk
        this.def = def
        this.sDef = sDef
        this.sAtk = sAtk
        this.spd = spd
        this.abilities = abilities
}
    
}

let pokeBall = new Pokemon()

let catchSylvie = async ()  => {
let req = await fetch("https://fizal.me/pokeapi/api/v2/id/700.json")
let data = await req.json()

    let sylveon = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        data.stats[2].base_stat,
        data.stats[1].base_stat,
        data.stats[0].base_stat,
        data.abilities[0].ability.name + ', ' + data.abilities[1].ability.name
    )
    console.log(sylveon)
    
}

catchSylvie()

let catchMeloetta = async ()  => {
    let req = await fetch("https://fizal.me/pokeapi/api/v2/id/648.json")
    let data = await req.json()
    
        let meloetta = new Pokemon(
            data.name,
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat,
            data.stats[2].base_stat,
            data.stats[1].base_stat,
            data.stats[0].base_stat,
            data.abilities[0].ability.name
        )
        console.log(meloetta)

    }

catchMeloetta()

let catchMawile = async ()  => {
    let req = await fetch("https://fizal.me/pokeapi/api/v2/id/303.json")
    let data = await req.json()
    
        let mawile = new Pokemon(
            data.name,
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat,
            data.stats[2].base_stat,
            data.stats[1].base_stat,
            data.stats[0].base_stat,
            data.abilities[0].ability.name + ', ' + data.abilities[1].ability.name + ', ' + data.abilities[2].ability.name
        )
        console.log(mawile)
        
        
    }

catchMawile()


class Pokemon1 extends Pokemon {
    constructor(name) {
        super(name)
        sylveon()
    }    
}

class Pokemon2 extends Pokemon {
    constructor(name) {
        super(name)
    }
}
class Pokemon3 extends Pokemon {
    constructor(name) {
        super(name)
    }
}

let pokemon1 = new Pokemon('sylveon')
let pokemon2 = new Pokemon2('meloetta')
let pokemon3 = new Pokemon3('mawile')

class Trainer {
    constructor() {
        this.name = "Kirigiri"
        this.party = [pokemon1, pokemon2, pokemon3]
    }
    all(){
        return this.party
    }
    get(name){
        return this.pokeBall
    }
}


let trainer = new Trainer('Kirigiri')