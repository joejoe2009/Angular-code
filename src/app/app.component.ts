import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles:[`
  // h3{
  //   color: dodgerblue;
  // }
  
  // `]
})
export class AppComponent {
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
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 5;

}