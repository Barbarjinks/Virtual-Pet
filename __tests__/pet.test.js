const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
 expect(new Pet('Eric')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Eric');
        
        expect(pet.name).toEqual('Eric');
    });

    it('has starting age of 0',() => {
        const pet = new Pet('Eric');

        expect(pet.age).toEqual(0);
    });
});

describe('growUP', () => {
    it('increase age by 1',() => {
        const pet = new Pet('Eric');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });
    it('increase hunger by 5',() => {
        const pet = new Pet('Eric');

        pet.growUp();

        expect(pet.hunger).toEqual(5);

    })
});