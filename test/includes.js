const data = ['Member - IBM Academy of Technology', 'IBM Academy of Technology', 'Leadership Team - IBM Academy of Technology', 'Emeritus Member - IBM Academy of Technology', 'Initiative Star Contributor', 'Initiative Leadership - Bronze Level', 'Initiative Leadership - Silver Level', 'Initiative Leadership - Gold Level']

const string = 'Honary Award (2017) - IBM Academy of Technology';

const isTrue  = data.filter((i) => {
    return string.toLowerCase().includes(i.toLowerCase())
})

console.log(isTrue);