import {FgEvent} from "../types/FgEvent";

export class EventService {

    
    async getEvents(month = null) {
      var append
      if(date === null) append = ''; //all dates
      else              append = '?exactDate=' + date; //exact date
        return new Promise(async (resolve) => {
          try {
              var result = await fetch('http://localhost:5000/hangouts' + append, {
                  method: 'GET'
              })
              resolve(result.json())
          } catch (e) {
              console.log('error been caught')
              resolve(new FgEvent('', '', '', '', '', '', ['']))
          }
      })
    }
}