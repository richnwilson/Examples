const axios = require('axios');

(async () => {
    try {
        const players = [
            {id: "e2c0c718-a79b-5444-974b-4a230745cf38", name: "Sarorian"},
            {id: "486f88f1-22d1-52a9-9f1e-11896635a629",name: "Milkdrake"},
            {id: "71f15507-7683-5cf9-bd57-3afccd19beb7", name: "YahuThe7th"}
        ];
        const playerArr = players.reduce((acc,cur)=> {
            acc[cur.name] = 0;
            return acc;
        },{})
        const { data: { data : { rounds } }} = await axios("https://api.henrikdev.xyz/valorant/v2/match/44c23cee-7716-4f4e-a8c4-9e9e44c42872")
        const finalData = rounds.reduce((acc,cur) => {
            const firstKill =  cur.player_stats
                .map(i => ({puuid: i.player_puuid, killTime: i.kill_events[0]?.kill_time_in_round}))
                .filter(i => typeof i.killTime !== 'undefined')
                .sort((a,b) => a.killTime - b.killTime)[0]
            for (const player of players) {
                if (player.id === firstKill.puuid) {
                    acc[player.name]++
                }
            }
            return acc;
        },playerArr)
        console.log(finalData)
    } catch (e) {
        console.log(e)
    }
})();