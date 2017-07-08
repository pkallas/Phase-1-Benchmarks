'use strict'
const print = require('node-print')
const data = [{
  "first_name": "Tanny",
  "last_name": "Vibert",
  "email": "tvibert0@illinois.edu"
}, {
  "first_name": 55,
  "last_name": "Myall",
  "email": "tmyall1@instagram.com"
}, {
  "first_name": "Engracia",
  "last_name": "Folger",
  "email": "efolger2@epa.gov"
}, {
  "first_name": "Conroy",
  "last_name": "Honsch",
  "email": "chonsch3@sohu.com"
}, {
  "first_name": "Virgina",
  "last_name": "Cankett",
  "email": true
}, {
  "first_name": "Mateo",
  "last_name": "Da Costa",
  "email": "mdacosta5@about.com"
}, {
  "first_name": "Ambrose",
  "last_name": "Scullard",
  "email": "ascullard6@timesonline.co.uk"
}, {
  "first_name": "Shaylah",
  "last_name": "Fairney",
  "email": "sfairney7@stumbleupon.com"
}, {
  "first_name": "Pier",
  "last_name": "Waine",
  "email": "pwaine8@unc.edu"
}, {
  "first_name": "Karita",
  "last_name": "Bough",
  "email": "kbough9@angelfire.com"
}, {
  "first_name": "Marguerite",
  "last_name": "Lafayette",
  "email": "mlafayettea@bravesites.com"
}, {
  "first_name": "Northrop",
  "last_name": "Bauchop",
  "email": "nbauchopb@pagesperso-orange.fr"
}, {
  "first_name": "Devon",
  "last_name": "Bocking",
  "email": "dbockingc@comcast.net"
}, {
  "first_name": "Willdon",
  "last_name": 22,
  "email": "whedleyd@purevolume.com"
}, {
  "first_name": "Charil",
  "last_name": "Clegg",
  "email": "cclegge@weibo.com"
}, {
  "first_name": "Nessi",
  "last_name": "Bywaters",
  "email": "nbywatersf@shop-pro.jp"
}, {
  "first_name": "Mercy",
  "last_name": "Browncey",
  "email": "mbrownceyg@yelp.com"
}, {
  "first_name": "Didi",
  "last_name": "Grose",
  "email": "dgroseh@google.com.hk"
}, {
  "first_name": "Niccolo",
  "last_name": "Spruce",
  "email": "nsprucei@wordpress.com"
}, {
  "first_name": "Winston",
  "last_name": "Hixley",
  "email": "whixleyj@homestead.com"
}]

let allContacts = [];
let failedContacts = [];

const addContact = (firstName, lastName, email) => {
    if (typeof(firstName) !== 'string' || typeof(lastName) !== 'string' || typeof(email) !== 'string') {
      throw new Error('Could not import ' + failedContacts.length + ' contacts');
    }
    let contact = new Object();
    contact.name = firstName + " " + lastName;
    contact.email = email;
    allContacts.push(contact);
}

const addContacts = (contactData) => {
  contactData.forEach(function (m) {
    let first = m.first_name
    let last = m.last_name
    let mail = m.email
    try {
      addContact(first, last, mail)
    } catch(error) {
      failedContacts.push(m)
    }
  })
    // try { let i = 0
    //   do {
    //       let first = contactData[i].first_name
    //       let last = contactData[i].last_name
    //       let mail = contactData[i].email
    //       addContact(first, last, mail)
    //       i++
    //     } while (i < contactData.length) }
    // catch (error) {
    //   console.log(error);
    //   console.log(failedContacts);
    // }
}

const printContacts = (contacts) => {
    let arr = []
    let finalSort = {}
    let sorted = allContacts.sort((a,b) => {

      if (a.name < b.name ) {
        return -1
      }

      if (a.name > b.name) {
        return 1
      }

      return 0
    })

    console.log("Loading contact data...")
    console.log("...Finished loading contact data.")
    print.pt(sorted)
    if (failedContacts.length > 0) {
      console.log('Could not import ' + failedContacts.length + ' contacts')
      console.log(failedContacts)
    }
}

addContacts(data)
printContacts()
