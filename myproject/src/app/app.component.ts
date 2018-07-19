import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
           team = [
                    {
                        "id": 1,
                        "firstName": "Tamara",
                        "lastName": "Kovalchuk"
                    },
                    {
                        "id": 2,
                        "firstName": "Anna",
                        "lastName": "Dron"
                    },
                    {
                        "id": 3,
                        "firstName": "Maksym",
                        "lastName": "Javir"
                    },
                    {
                        "id": 4,
                        "firstName": "Andrii",
                        "lastName": "Korin"
                    },
                    {
                        "id": 5,
                        "firstName": "Iurii",
                        "lastName": "Besidka"
                    },
                    {
                        "id": 6,
                        "firstName": "Vitalii",
                        "lastName": "Dvorian"
                    },
                    {
                        "id": 7,
                        "firstName": "Volodja",
                        "lastName": "Pitchuk"
                    },
                    {
                        "id": 8,
                        "firstName": "Artur",
                        "lastName": "Khomenko"
                    }
                            ];

};