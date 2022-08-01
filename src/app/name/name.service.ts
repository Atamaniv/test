import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  list = ['Ex-Calibur', 'Ex-Ternal', 'Fx-Mobil']
  eList :string[] = []
  editName='Ex-Ample'
  constructor() {
    this.getEList()
  }

  onInput(event:any){
    this.editName=event.target.value
  }

  onPush(){
    this.list.push(this.editName)
    this.getEList()
  }

  getEList(){
    this.eList = [];
    for (let i=0; i<this.list.length; i++){
      if (this.list[i].toUpperCase().includes('E')){
        this.eList.push(this.list[i])
      }       
    }    
  }
}

