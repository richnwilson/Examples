import axios from 'axios'

(async () => {
    try {
      let teams = {}
      let status = []
      const { data } = await axios.get("https://www.theleeg.com/api/participants?filter=%7B%22participant_type%22:%22players%22%7D")
      for (const { status, user_first_name = '', user_last_name = '', away_jersey, home_jersey, team_name, user_email = '' } of data) {
        if (!teams[team_name]) teams[team_name] = []
        if (status !== 'waived') {
          const msg = status === 'new' ? 'invited, just not joined and accepted waiver' : status === 'joined' ? 'joined, but not accepted waiver' : 'declined';
          teams[team_name].push(`${user_first_name} ${user_last_name} (${user_email}) - '${msg}'`)
        } else {
          if (away_jersey === null || home_jersey === null) {
            teams[team_name].push(`${user_first_name} ${user_last_name} (${user_email}) - 'Missing jersey number assignments'`)
          }
        }
      }
      console.log(teams)
    } catch (e) { 
      console.log(e)
    }
})()
