const person = {
    meet: function() {
        console.log(`My name is ${this.firstname} ${this.lastname}`);
    },
    greet: function(age, punctuation) {
        console.log(`I am ${age} old${punctuation}`);
    }
}

const person2 = {
    firstname: 'Matei',
    lastname: 'Box'
}

// person.meet.call(person2);
// person.greet.call(person2, 24, '.');

const bound = person.greet.bind(person2, 24);

bound('.');