// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
//console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
const summaryElement = document.createElement('summary')
summaryElement.append("KATA " + kataNumber)
detailsElement.append(summaryElement)
// http://mdn.io/json.stringify
const stringifiedObject = JSON.stringify(object)
detailsElement.append(stringifiedObject)
}


//filter

const kataOne = users.filter(function (user){
    return user.isActive === true
})

printKata(1,kataOne)

//map() Method

const kataTwo = users.map(function(user){
    return user.email 

})

printKata(2,kataTwo)


//some()


const kataThree = users.some(function(user){
    return user.company === "OVATION"
})

printKata(3,kataThree)

//find()


const kataFour = users.find(function(user){
    return user.age === 38
})

printKata(4,kataFour)

//filter() and find()



const kataFive = users.find(function (user){
       return user.age > 39
       

        
})


printKata(5,kataFive,kataOne)





// .filter() and .map()



const kataSix = 

users.filter(function(user){
     return user.company === 'ZENCO'
     
}).map(function (user){
    return user.balance 
})





printKata(6,kataSix)




//.filter and includes and map

const kataSeven = users.filter(function(user){
    return user.tags.includes('fugiat')
   

}).map(function (user){
    return user.age 
})



printKata(7,kataSeven)