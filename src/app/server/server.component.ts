import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: `
    .online {
      color: white;
    }

    .offline {
      color: yellow;
    }

    h4 {
      line-height: 2rem;
      width:30vw;
    }

    p {
      box-sizing: border-box;
      padding: 2.2px;
    }
  `,
})
export class ServerComponent {
  serverId: number;
  serverStatus: string = 'online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverId = Math.trunc(Math.random() * 100);
  }

  getServerId() {
    return this.serverId > 9 ? this.serverId : '0' + this.serverId;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
