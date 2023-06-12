interface User {
    name: string;
    age: number;
    email?: string;
}

//partial
type UserOptional = Partial<User>;

const merge = (user: User, overrides: UserOptional): User => {
    return {
        ...user,
        ...overrides
    };
};

console.log(
    merge(
        {
            name:'edgar',
            age: 24,
            email: 'someemail'
        }, {
            email: 'someemail2'
        }
    )

);


//required
type RequiredUser = Required<User>;

const user1: RequiredUser = {
    name: 'john doe',
    age: 27,
    email: 'johndoe@gmail.com'
};
console.log(user1);


//pick
type OnlyNameAndAge = Pick<User, "name" | "age">;

const user3: OnlyNameAndAge = {
    name: 'John',
    age: 25
};


//omit
type UserName = Omit<User, 'email' | 'age'>;
const user4: UserName = {
    name: 'John'
}
console.log(user4);


//record
type Jobs = "IT" | "Marketing" | "Sales";

const someUsers: Record<Jobs, UserOptional> = {
    IT: { name: 'John', age: 28 },
    Marketing: {name: 'Doe', age: 20},
    Sales: {}
};

console.log(someUsers);