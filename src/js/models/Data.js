class Data {
    constructor() {
        this.user = {
            name: '',
            lastName: '',
            job: '',
            age: 0
        }
    }

    setData() {
        this.user.name = 'John';
        this.user.lastName = 'Smith';
        this.user.job = 'Teacher';
        this.user.age = 45;
    }

    getData() {
        return this.user;
    }
}

export default Data;