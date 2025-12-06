import axios from "axios"

const { data: { profiles = []}} = await axios.post(`https://w3-unified-profile-api.ibm.com/v3/profiles/bulk/profile`, { "ids" : ["rwilson@us.ibm.com","Kami.Haynes@ibm.com"]}, {headers: {'X-UP-API-KEY': "b3Blbl9pbm5vdmF0aW9uX2NvbW11bml0eTpjVTUyZUFZTTRId3lhOGJNNUFPd3BsQnhPa293T1YxMTFXQmZZQmI1OFVnbG1PMTk="}})
console.log(profiles)