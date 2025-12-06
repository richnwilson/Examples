/*
> use aotdb
> db.getCollectionNames()

Rule is to keep last 7 and then one per month

> db.<collectionName>.drop()    
*/

const y = [
    "Affiliate",
    "Affiliate-bkp-2020-11-01-1604210406871",
    "Affiliate-bkp-2020-11-01-1604257207905",
    "Affiliate-bkp-2020-11-02-1604343606620",
    "Affiliate-bkp-2020-11-03-1604386811558",
    "Affiliate-bkp-2020-11-03-1604430011333",
    "Affiliate-bkp-2020-11-04-1604473208920",
    "Affiliate-bkp-2020-11-04-1604516407112",
    "Affiliate-bkp-2020-11-05-1604559610046",
    "Affiliate-bkp-2020-11-05-1604602806985",
    "AffiliateMembers",
    "Idea",
    "Initiative",
    "Member",
    "Member-bkp-2020-08-29-1604293255359",
    "Member-bkp-2020-08-29-1604293255359",
    "Member-bkp-2020-09-29-1604293255359",
    "Member-bkp-2020-09-29-1604293255359",        
    "Member-bkp-2020-10-29-1604293255359",
    "Member-bkp-2020-10-29-1604293255359",
    "Member-bkp-2020-10-30-1604293255359",
    "Member-bkp-2020-10-30-1604293255359",
    "Member-bkp-2020-10-31-1604293255359",
    "Member-bkp-2020-10-31-1604293255359",
    "Member-bkp-2020-11-01-1604293255359",                        
    "Member-bkp-2020-11-01-1604293255359",
    "Member-bkp-2020-11-02-1604296807771",
    "Member-bkp-2020-11-02-1604340092540",
    "Member-bkp-2020-11-03-1604383263615",
    "Member-bkp-2020-11-03-1604426516248",
    "Member-bkp-2020-11-04-1604469660841",
    "Member-bkp-2020-11-04-1604512894233",
    "Member-bkp-2020-11-05-1604599270812",
    "Member-bkp-2020-11-05-1604599270812",
    "Member-bkp-2020-11-06-1604599270812",
    "Member-bkp-2020-11-06-1604599270812",
    "Member-bkp-2020-11-07-1604599270812",
    "Member-bkp-2020-11-07-1604599270812",                
    "Member-bkp-2020-11-08-1604599270812",
    "Member-bkp-2020-11-08-1604599270812",  
    "Member-bkp-2020-11-09-1604599270812",
    "Member-bkp-2020-11-09-1604599270812",      
    "MembershipRequest",
    "NonIBMer",
    "Pulse",
    "Request",
    "ScannedInitiativeBox",
    "Sprint",
    "TimezoneValueSet",
    "UserLog",
    "ValueSet",
    "ValueSetCovid19",
    "VolunteerCall",
    "aotNet",
    "aotPeople",
    "apiProfile",
    "focalTeam"
];

const collectionSet = y.filter(i=> i.startsWith("Member-bkp"));
const today = new Date('2020-11-09');
const monthAndYearToday = `${today.getFullYear()}-${('0' + (today.getMonth()+1)).slice(-2)}`;
let onePerMonth = [];
const dateOfFileFilter = new RegExp(/.*([0-9]{4})-([0-9]{2})-([0-9]{2})-.*/, "i");
for (let eachCollection of collectionSet) {
    let dateOfCollection = new Date(eachCollection.replace(dateOfFileFilter,"$1,$2,$3"));
    let monthAndYearCollection = `${dateOfCollection.getFullYear()}-${('0' + (dateOfCollection.getMonth()+1)).slice(-2)}`;
    // If not in same month
    if (monthAndYearToday !== monthAndYearCollection) {
        if (onePerMonth.indexOf(monthAndYearCollection) < 0) {
            //We'll keep one per month
            onePerMonth.push(monthAndYearCollection);
            console.log(`Kept collection from previous month - ${eachCollection}`);
        } else {
            //We'll remove all others
            console.log(`Removed collection from previous month - ${eachCollection}`);
        }
    } else 
    // In current month
    {
        let diffInDays = parseInt((today - dateOfCollection)/(1000 * 60 * 60 * 24));
        // if more than 7 days old let's remove them
        if (diffInDays >=3) {
            //remove collection
            console.log(`Removed collection from current month - ${eachCollection}`);
        } else {
            console.log(`Kept collection from current month - ${eachCollection}`);
        }
    }
}
console.log(`Array of months to store - ${JSON.stringify(onePerMonth)}`);