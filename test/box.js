import BoxSDK from 'box-node-sdk';
import fs from 'fs';
import path from 'path';

// Dev account
//const sdk = new BoxSDK({"clientID": "ucb65ksy0v231ecjeg78bivi8ctvvz4x","clientSecret": "oVbfOnWoM6Nd1WcmDxmUhso7objPTdQQ","appAuth": {"keyID": "w2o1236o","privateKey": "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFHDBOBgkqhkiG9w0BBQ0wQTApBgkqhkiG9w0BBQwwHAQIRw6QaT2Foj0CAggA\nMAwGCCqGSIb3DQIJBQAwFAYIKoZIhvcNAwcECGWjoxdDRe7TBIIEyLABp626prVh\nvKKeJT3sIYxTcF2294+nhL29144PBDNd1yi21RfrnQX9m2wBMMy10yAI0WlYbwTP\nVq4gMXVlW8ZIXkJ27AUZx/2/A72A2BKT00eOUElIO529WjZrj6+HNG9G76/2yo7n\nzX740409yr+cIf7DqtO4YQIz84DCzkDQK0VSe1RcSJshvte8GUuHx1sJvOiJDa86\nFJFQZ+WfOJ6nnHT6/jfdIdG+K20JeG8LCM1WCAuWX/GKTzvgHgVvq+wD4Uoc9+UB\n5usoJc0XVb4XzDKjKUKHvDziOCH3/9peP8oRHOPwSkDSY0w8zubzMfk7QfIYAGMK\n0sdjKWbdalink4yJJ5FomVbYTQfCK+8bBUJKvxfKrwxty+SEvhxSlEjmIDryWpFc\nmJAq07Ro4j5JbCfYZd5mn5Bu9nzVrvKLwwIuCBG5ytbIyTyd8FIp6C1JKUqC88xu\n708lRSjnGB4tUD71CYiXpLeeLLznY7HAn0qh2TMxuKkCaa6+pTbeMz6QzbwKG74a\nOkRbYpH22VpaCu2BH0ItNz6hEx4dt6kmg7K50Z1Rpf8OGQa1y9ZYuK0K9wDCmT0f\nUgUcrN22wujiAgyWJP1B/BW53RzEPsseEdRjToaLlfJS448UTGrxyCmBTHcgIEBD\nDcmw4FknsDIGugqfwDTVevU6vonotNJFMVdBOqO4kvpUOeTN2LbcBzgYl1mhwMzb\n3Ef0XWifXNaxHBfAND/Ly5zREwttwqFMteyjSin1b65F6CvXAcI0MKVKLO9KaX6I\nMC3tuY4fOySgSj7/isYhMlToXQO5NnAeq2ikQkxsSoPv9DmvepMlDtfPvGFvFRWQ\nB+RxM7cu6VHO6NDmQiPUS1f3HGZ9b6YaWR4dj+DdjCkD8JVK5Cbinqlriz8JBPEP\nmwM2Qq01WvcRueWdK3K+o0dshnuX9leIjdxLG0S5bEC79tvfkFfMkY6HzoT4+OHT\nL+Cy2muhFaPg6AawzK4aaQK7XqAAfM2OnwoD2AtEIAcvK0inm/2OIfQamwmmhxaJ\nrne4mRtyY+EcsDSyvVMmbemU7+AkraH6T1lSPZuRIa5+treN78qGYWsN9UNMSKJj\nbcT1xCPc0XLehjsBQ0Y+1ydsVByh9rsEPKQVePu6tLbBeUmaJHZAHLXkIzU1hXhS\n45M2j96a3qW+a8+/03x8vm33/+gDO8jGu6DG0rtXYOyMiEF8VxItkX75G7IsEL4P\nspNIIXHlAoLYAXepjkFZwsf+aHs/9Pb+GZs/1g1u+Ze5w+9yRg8wadeNvRWAyVdG\n0A9TN+FZF99NbslHJU6KLkIAusJmIk/sdVF/zqFE8fN9VZKAKeeMzyBV39jzx3F2\n3GofoZ/yy7kWi1T4aigNxIAzBThjYoHPPP3qf8RS4Tt+YpFjleKKiWuHwhrRw1JX\nS/GPDk7FlcR7lgUY4H98G/TKyOIaXVkVkz5RjJPbKsOpJtilmmqHZTSFiA3hUuIg\nMozvUlQ0C3xHV34dIBkcq7paKtvySLzVxdkgv//ZIoG7iXm37o8mQ6Yoy5dMXdzc\nxbWnBnvIyxv9/DYs0IsHDLAqLAMPO2ThhioHpE22aPUs+tsDdVDNbDzaSCB3u3YT\nfPl5f2K/2IOwG9e+YAMEhQ==\n-----END ENCRYPTED PRIVATE KEY-----\n","passphrase": "d0e76c4c97b4b64f2dadad081c3d18df"}});

// Prod account
const sdk = new BoxSDK({"clientID": "027kvp8xir880rbcnz1speqas0wfhdaj","clientSecret": "eZ6GVk8gpm8OHHRHXFo8Z67f54KT0UId","appAuth": {"keyID": "t8owlhgb","privateKey": "-----BEGIN ENCRYPTED PRIVATE KEY-----\nMIIFDjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQINygR75Gb50wCAggA\nMBQGCCqGSIb3DQMHBAicR0gqpNCNVgSCBMhLOO6Yi1QwwNZGWQJAvFZqLVWxWIaN\nsovQfN6A53t612DnCScOJnqK67fP7/+bh4TNar7h2Dg9zPHinH2TGDtRR9pzSLBK\nFC9V1/Y8T3BW83E5sm7lPQoXL3OCZVs1fgJNH/PL/bwcLhVFDz51PE1kr0cKb0ki\nuv5A7Zd94YsF716Pd79pawOX/v6ErsUNY21DMTG9FDDq5C+k+Z2qHG6U/On5bdOQ\nS9zXhnSos1WPhWLECg5sScEOKpnc9YCpYL0n0KqLdUJ259FgLGub7t/waAZgq0d+\nJA5grXioWi84nA0x+GCy8nyylnlT/TNUgUy3Ne3Y7YEILp62kF9WT1bmZhOubmrd\nlilCOm4FcUB6MmZQAmfm5g7eWPsydIW5Q3ODFPqVm5tgtgJcVMx9Vn2ULfUT+UBy\naR6EI+jdYi8k3LY975qvrdhCg7M8f1ariNWUL56yDAoIXidGmAjx7H4G0gZF3MAT\nraP2ZNor9ccMiVoGYtKhUg1vGV5jfCiU8WAU5I4NUKGVqNTvG3jSD88pUzrq1PD6\nWTeo/ouJsX129l9g3r8Pdgpaagw4S0sInY4iH1VanyRmOgk6XIYfYPiffNL5mCIK\necdUe4yAC9SlmAzUKE8VaSS/oytWf08HVGt93f5jENDCV0MigHi67k+gnp51U4xH\nhOWPwcPT4O7AWMd9yqzOvYs5AP30QbyPSpo2gG5NATSwM5Ai3+zg1QoXLk/LS+AH\nOmsu9Iase/RYZrmHJfgbYO3IXrIs3k3GiFz0lFhhzxllRMHjaQaHHZuZsDg+qAB2\nkz7ukJiBbn9FxB+7Gmxo9d0XmDSMT7IyLjVvSC/QupOfmoyKoPnbqzSXSo7sZxlu\nzf/qo/spNTLc3pi1DyyJJOayT1sB5h127mGHt4G7xXj9OSwuQRHbpISHNO+JrjJX\nUK9EpyE2tbILNajyyYmGRvP5ht1C2gVUqxNw13Ox+H+YUWtE98tA8jRtalIwPb44\njH9PT9y4xPx1sGH8pXedUvqjR1VBpU4Z7IXWGEFhEGd+DkM/jwPCAkBVhNhDPwd0\n40kwU6wG9JFrs9EKa2Uu+PPBOj1UagW4hVRyN+NMuQnN1s0rDLM178nTNeOg/aZR\nZYdt4ROn8dv1qGBQN+rwWAzC+NFEoNagte6hnsiIICUYhyEKDKOuNGaKb61jeJ35\nkCHubYbWfUB94MP1W6T2C4J6vyG2W93AOf3fy4I1AcT0D5ZRON0cvhjMvvqwai0z\nDJzG2fQK6qDKxDWbzNfkpiABqlPZsa2LWTcIx45OOFLJZHMp02SukXIPzi/noEez\ny/PT/OBs74QZHhAvkxcQPwWDGOOxRGgG3fBxm/3yEqSRslBcNG/52aBSnNhSJ/6i\nk8rsPBhSq4k3jtPylZIXLIOXm1EjXIV1kK3Hq0GuZ1LbacYzrGjpUsPdHI8Fqz6s\n7Hr8Znp03ooEp9FfsrmokxYbDFZigOY29TjPhw8ugZrargxyMOU6tB/FcHp8LbyQ\n/GhGa+CMtl2+nwvBuoE9EP9+RaNK4H+g3n9lgmq5ejtFT6x+5+1wPe/eG5fB2ZhM\ngWxbn6YgUq79rSgbpa3YSqQdbu6n4r/OlT0+4PuC4wiZfCGE9u4z7ABaVD6IbQua\nsSs=\n-----END ENCRYPTED PRIVATE KEY-----\n","passphrase": "22f71af4261e02c4c9e838ad6fefb0d6"}});

const serviceAccountClient = sdk.getAppAuthClient('enterprise', '455328');

(async () => {
    try {   
        // List of folders that are missing 'Publication' folder
        let subfolders = []
        let offset = 0
        let total_count = 0
        let entries = []
        const INC = 1000
        do {
            ({ item_collection : { entries, total_count }}  = await serviceAccountClient.folders.get("33701465463", {limit: INC, offset}))
            offset += INC
            subfolders.push(...entries.map(i => i.id))
        } while (offset < total_count)
        
        let missingPublication = []    
        for (const folder of subfolders) {
            try {
                const { item_collection: { entries }} = await serviceAccountClient.folders.get(folder)
                const link = entries.find(i => i.type === 'web_link' && i.name === 'Initiative Link')?.url || "dal1a"
                if (entries.filter(i => i.type === 'folder' && i.name === 'Publication').length === 0 && link.search(/.*dal1a.*/) === -1) { missingPublication.push(folder)}
            } catch(e) {
                console.log(`Error for ${folder}`)
            }
        }

        console.log(missingPublication)
        // const stream = fs.createReadStream('tgaParticipation_2024-12.xlsx');
        
        // const { total_count = 0 } = await serviceAccountClient.files.uploadFile("308221931359",'tgaParticipation_2024-12.xlsx', stream)
        // const x = 1
        // const addCollaboratorsToBoxFolder = async (members, folderId) => {
        //     try {
        //         for (const member of members) {
        //             try {
        //                 const addUser = await serviceAccountClient.collaborations.createWithUserEmail(
        //                     member,
        //                     folderId,
        //                     serviceAccountClient.collaborationRoles.EDITOR
        //                 )
        //             } catch(e) {
        //                 console.log(e)   
        //             }
        //         }
        //     } catch(e){
        //         console.log(e)
        //     }
        // };

        // const removeCollaboratorsFromBoxFolder = async (members, folderId) => {
        //     try {
        //         for (const member of members) {
        //             try {
        //                 const { entries = []} = await serviceAccountClient.folders.getCollaborations(folderId)
        //                 const idToRemove = entries.filter(i => i?.accessible_by?.login?.toLowerCase() === member.toLowerCase() && i?.item?.id === folderId).map(i => i.id).toString()
        //                 if (idToRemove !== '') {
        //                     const removeEmailFromFolder = await serviceAccountClient.collaborations.delete(idToRemove)
        //                     if (removeEmailFromFolder === undefined) { 
        //                         continue
        //                     }
        //                 }
        //             } catch(e) {
        //                 console.log(e)
        //             }     
        //         }
        //     } catch(e){
        //         console.log(e)
        //     }
        // };        
        //await removeCollaboratorsFromBoxFolder(["Antonio.olvera@ibm.com"], "291952711036")
        //await addCollaboratorsToBoxFolder(["rwilson@us.ibm.com"], "286714086628") //286714086628

        // const createFolder = async (privateBoxFolderId, folderName ) => {
        //     try {
        //         const { id: folderId, folderNameExists = false} = await serviceAccountClient.folders.create( privateBoxFolderId, folderName)
        //         return { folderId, folderNameExists }
        //     } catch(e) {
        //         console.log(e)       
        //         return { folderId: null, folderNameExists: e?.response?.body?.code === 'item_name_in_use' ? true : false }
        
        //     }    
        // }

        // const assembleFolderBaseName = (title) => {
        //     let folderName = truncate(title,90)
        //     return folderName.replaceAll('/','').replaceAll('\\\\','')
        // }

        // const truncate = (string, len = 20) => {
        //     return string.length > len ? `${string.substring(0, len)}...` : string
        // }

        // const { folderId, folderNameExists } = await createFolder( "286714086628", assembleFolderBaseName("xxxxx"))
    } catch(e) {
        console.log(e)
    }
})();