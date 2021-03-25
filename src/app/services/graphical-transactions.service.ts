import { Injectable, ElementRef } from '@angular/core';

@Injectable()
export class GraphicalTransactionsService {

  allNodes: { [name: string]: ElementRef } = {};
  nodesInTx: ElementRef[];
  cash: boolean;

  constructor() { }

  setMarkers(...nodes: string[]) {
    if (nodes.length > 1) {
      this.nodesInTx = [];
      for (let node of nodes) {
        let name = node.split(' ').join('');
        this.nodesInTx.push(this.allNodes[name]);
      }
    }
  }
}
