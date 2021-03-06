// User storage
var users = [
    {
        id: 1,
        firstName: 'Dmitry',
        lastName: 'Kozlov',
        birthDay: '16.07.1990',
        phones: [
            '89001234567',
            '83431234567'
        ]
    },
    {
        id: 2,
        firstName: 'Ivan',
        lastName: 'Petrov',
        birthDay: '08.06.1956',
        phones: [
            '89001234567',
            '83431234567'
        ]
    }
];

function addUser(users) {
    var user = {};
    var maxId = users.reduce(function(prev,cur) {
        return cur.id>prev.id?cur:prev;
    },{id:-Infinity});
    user.id = maxId.id + 1;
    user.firstName = prompt('ааВаЕаДаИбаЕ аИаМб:');
    user.lastName = prompt('ааВаЕаДаИбаЕ баАаМаИаЛаИб:');
    user.birthDay = prompt('ааАбб баОаЖаДаЕаНаИб:');
    user.phones = [];
    while (true) {
        var phone = prompt('ааОаМаЕб баЕаЛаЕбаОаНаА:(аДаЛб аВббаОаДаА аВаВаЕаДаИбаЕ аПбббаОаЙ аНаОаМаЕб)');
        if (!phone) break;
        user.phones.push(phone);
    }
    users.push(user);
}
function deleteUser(id, users){
    var delIndex = '';
    users.every(function(item, i){
        if (item.id == id) {
            delIndex = i;
            return false;
        }
        return true;
    });
    if (delIndex == '') return false;
    users.splice(delIndex, 1);
    return true;
}
function csvFormat(users) {
    return users.map(function(user) {
        return Object.keys(user).map(function(key) {
            if(typeof user[key] == 'string' || typeof user[key] == 'number') return '"' + user[key] + '"';
            else return user[key].map(function(phone) { return '"' + phone + '"'; }).join(';');
        }).join(';');
    }).join('\r\n');
}
function search(value, users) {
    var result = [];
    var re = new RegExp(value, 'i');

    users.forEach(function(item){
        var findString =  item.firstName + ' ' + item.lastName;
        if (re.test(findString)) {
            result.push(item);
        }
    })
    return result;
}

addUser(users);

for (var i = 0; i < users.length; ++i) {
    console.log('ID' + users[i].id + ' ааМб: ' + users[i].firstName, ' аЄаАаМаИаЛаИб: ' + users[i].lastName, ' ааАбаА баОаЖаДаЕаНаИб: ' + users[i].birthDay, ' аЂаЕаЛаЕбаОаНб: ' + users[i].phones.join(', '));
}
console.log('абаВаОаД CSV:')
console.log(csvFormat(users));

console.log(deleteUser(2, users) ? 'аПаОаЛбаЗаОаВаАбаЕаЛб б id 2 баДаАаЛаЕаН': 'аПаОаЛбаЗаОаВаАбаЕаЛб аНаЕ аНаАаЙаДаЕаН');
console.log('абаВаОаД CSV:')
console.log(csvFormat(users));
console.log('ааОаИбаК');
console.log(JSON.stringify(search('bond', users)));
console.log(JSON.stringify(search('anna', users)));
