import {FgMember} from "../types/FgMember";
import {DataManager, SIGNED_IN_MEMBER_ID} from "../DataManager";

export class FgProfileService {

  static createMember(member) {
    return fetch('http://localhost:5000/api/v1/profile/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: member.firstName ? member.firstName : null,
        lastName: member.lastName ? member.lastName : null,
        schoolName: member.schoolName ? member.schoolName : null,
        gradYear: member.gradYear ? member.gradYear : null,
        inspiration: member.inspiration ? member.inspiration : null
      })
    })
    .then((response) => response.json())
    .then((data) => {
      return data.id;
    })
    .catch( (error) => console.log(error.message));
  }

  //hardcoded chapter ids and profile ids for now
  static async getMemberById() {
    const id = await DataManager.getItemWithKey(SIGNED_IN_MEMBER_ID);
    return new Promise(async (resolve) => {
      try {
        const response = await fetch(`http://localhost:5000/profiles/${id}`, { // here the profile id would be concatanated
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        })

        const data = await response.json();

        resolve(new FgMember(
          data.firstName ? data.firstName : null,
          data.lastName ? data.lastName : null,
          data.schoolName ? data.schoolName : null,
          data.gradYear ? data.gradYear : null,
          data.inspiration ? data.inspiration : null,
          data.bannerSource ? data.bannerSource : null,
          data.avatarSource ? data.avatarSource : null,
          "e374ab22-5e20-47f1-9cba-fc1f9d928af0" // chapterId
        )
      )
    } catch(e) {
      console.log(e.message)
    }
  })
}
}
