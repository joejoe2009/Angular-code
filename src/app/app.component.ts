import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
  // styles:[`
  // h3{
  //   color: dodgerblue;
  // }
  
  // `]
})
export class AppComponent implements OnInit {
  // username = '';
  // showSecret = false;
  // log = [];
  // serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}]; 

  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  // onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type:'blueprint',
  //     name: blueprintData.serverName,
  //     content:blueprintData.serverContent
  //   })

  // }

  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed!';
  // }

  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }

  // onToggleDetails() {
  //   this.showSecret = !this.showSecret;
  //   //this.log.push(this.log.length + 1); 
  //   this.log.push(new Date()); 
  // } 

  // oddNumbers: number[] = [];
  // evenNumbers: number[] = [];

  // onIntervalFired(firedNumber: number) {
  //   if (firedNumber % 2 === 0) {
  //     this.evenNumbers.push(firedNumber);
  //   } else {
  //     this.oddNumbers.push(firedNumber);
  //   }
  // }

  // numbers = [1, 2, 3, 4, 5];
  // oddNumbers = [1, 3, 5];
  // evenNumbers = [2, 4];
  // onlyOdd = false;
  // value = 5;

  // onAccountAdded(newAccount:{name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo:{id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }

  // accounts: {name: string, status: string}[] = [];

  // constructor(private accountsService: AccountsService) {}

  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  ngOnInit() {
    // this.accounts = this.accountsService.accounts;
  }

}