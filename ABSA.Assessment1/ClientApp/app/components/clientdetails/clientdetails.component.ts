import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from "../shared/Person"
import { IdentityType } from "../shared/identity-type-enum"
import { ClientDetailsApi } from "../api/client.api"

@Component({
    selector: 'clientdetails',
    templateUrl: './clientdetails.component.html'
})
export class ClientDetailsComponent {
    public clients: Person[];
    public currentClient: Person;
    public errorMessage: string;
    public successMessage: string;
    public idtypes = [
        { key: 1, value: 'Identity Document' },
        { key: 2, value: 'Passport' }
    ];

    constructor(private clientAPI: ClientDetailsApi) {
        //this.currentClient = new Person();
    }
    ngOnInit() {
        this.clientAPI.getClientDetails()
            .subscribe((result: Person) => {
                this.currentClient = result
                console.log(this.currentClient.firstNames);
            }
            ,
            error => this.errorMessage = <any>error
        );
    }

    EditClient(clientDetails: Person) {
        this.clientAPI.updateClientDetails(clientDetails)
            .subscribe(result => this.currentClient = result,
            error => this.errorMessage = <any>error,
            () => this.successMessage = "Saved");
    }
}

