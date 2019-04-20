import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MyinMemoryDataService implements InMemoryDbService {
    createDb(){
        const heroes = [
            {id: 1, name: 'Long pk'},
            {id: 2, name: 'Nam'},
            {id: 3, name: 'Chien'},
            {id: 4, name: 'Quang'},
            {id: 5, name: 'Le Manh'},
            {id: 6, name: 'Tran Qui'},
            {id: 7, name: 'Nguyen Cuong'},
            {id: 8, name: 'Kieu Ba'},
            {id: 9, name: 'Xuan Truong'},
            {id: 10, name: 'Duong Nguyen'},
        ];

        return {heroes};
    }
}