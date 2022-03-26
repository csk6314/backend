const continents = [
    {
        "_id":1,
        "name" : "Africa"
    },
    {
        "_id":2,
        "name" : "Europe"
    },
    {
        "_id":3,
        "name" : "Asia"
    },
    {
        "_id":4,
        "name" : "North America"
    },
    {
        "_id":5,
        "name" : "South America"
    },
    {
        "_id":6,
        "name" : "Australia"
    },
    {
        "_id":7,
        "name" : "Antarctica"
    },
];

const price = [
    {
        "_id" : 0,
        "name" : "Any",
        "array" : []
    },
    {
        "_id" : 1,
        "name" : "$0 to $100",
        "array" : [0,100]
    },
    {
        "_id" : 2,
        "name" : "$101 to $200",
        "array" : [101,200]
    },
    {
        "_id" : 3,
        "name" : "$201 to $300",
        "array" : [201,300]
    },
    {
        "_id" : 4,
        "name" : "$301 to $400",
        "array" : [301,400]
    },
    {
        "_id" : 5,
        "name" : "More than  $400",
        "array" : [301,15000]
    },
]

export {
    continents,
    price
}