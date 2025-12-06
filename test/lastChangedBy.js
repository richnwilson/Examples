// http://aotapi-prod.w3ibm.mybluemix.net/api/Initiatives?filter[where][status]=Open&filter[fields][title]=true&&filter[fields][id]=true&&filter[fields][lastChangedBy]=true
// Copy and paste result into list variable
// run script
// Open Excel and click on Date > Open txt/csv and point to lastChnageByNonAdmin.csv


const fs = require('fs');

list = [{
    id: "f93c113d42ad919000f1e76644948400",
    title: "Making IBM an essential ecosystem partner",
    lastChangedBy: [
    "richard.hopkins@uk.ibm.com - 2019-06-04T22:16:47.918Z",
    "richard.hopkins@uk.ibm.com - 2019-06-04T22:17:05.243Z",
    "richard.hopkins@uk.ibm.com - 2019-06-06T14:56:24.146Z",
    "richard.hopkins@uk.ibm.com - 2019-06-06T14:57:41.100Z",
    "schouten@us.ibm.com - 2019-07-29T17:52:39.526Z"
    ]
    },
    {
    id: "efbccc5256fd0c608c9dcee3a336a9f0",
    title: "Indoor localization and motion analysis using Bluetooth Low Energy Beacon technology",
    lastChangedBy: [
    "paridhi@us.ibm.com - 2019-05-21T13:02:22.955Z",
    "chowdhar@us.ibm.com - 2019-07-23T18:40:52.346Z",
    "chowdhar@us.ibm.com - 2019-07-23T18:42:13.657Z",
    "chowdhar@us.ibm.com - 2019-07-23T18:43:07.802Z",
    "paridhi@us.ibm.com - 2019-07-30T17:00:52.931Z"
    ]
    },
    {
    id: "87eb8d818b5816cafee4c0b05377a05f",
    title: "Cloud of the Future - Business and Technology Vision",
    lastChangedBy: [
    "borowski@us.ibm.com - 2018-12-12T18:56:03.447Z",
    "borowski@us.ibm.com - 2019-02-25T15:53:27.069Z",
    "borowski@us.ibm.com - 2019-02-25T15:53:33.027Z",
    "borowski@us.ibm.com - 2019-05-09T13:32:56.812Z",
    "borowski@us.ibm.com - 2019-07-30T22:26:08.031Z"
    ]
    },
    {
    id: "ab1bd95b1f9882eb9052dc31501cdefe",
    title: "Academic Alliance - Cloud Native Development Course Update for University Students",
    lastChangedBy: [
    "AAZRAQ@eg.ibm.com - 2019-07-27T19:54:38.729Z",
    "AAZRAQ@eg.ibm.com - 2019-07-27T19:56:08.997Z",
    "AAZRAQ@eg.ibm.com - 2019-07-31T23:07:54.056Z",
    "AAZRAQ@eg.ibm.com - 2019-07-31T23:09:08.860Z",
    "AAZRAQ@eg.ibm.com - 2019-07-31T23:43:08.825Z"
    ]
    },
    {
    id: "f9306112447f16a9636b4f7f714b8315",
    title: "Architecture and Design: Integrating for synergy and value",
    lastChangedBy: [
    "ssloan2@us.ibm.com - 2019-05-15T14:30:35.447Z",
    "ssloan2@us.ibm.com - 2019-05-15T14:53:40.874Z",
    "Dawn.N.Ahukanna@ibm.com - 2019-06-21T02:28:36.955Z",
    "ssloan2@us.ibm.com - 2019-07-23T12:28:56.705Z",
    "ssloan2@us.ibm.com - 2019-07-23T12:28:57.146Z"
    ]
    },
    {
    id: "95ccf3f40115763bd4863fe060e6a3d2",
    title: "2019 Provocative Transformation Team Initiative",
    lastChangedBy: [
    "jaschune@us.ibm.com - 2019-06-04T19:35:54.140Z",
    "jaschune@us.ibm.com - 2019-06-05T15:15:13.277Z",
    "jaschune@us.ibm.com - 2019-06-05T15:15:22.132Z",
    "Andy.M.Ramos@ibm.com - 2019-06-28T14:03:19.273Z",
    "jaschune@us.ibm.com - 2019-08-01T21:12:58.582Z"
    ]
    },
    {
    id: "f1fe8700e13677f1417c7ce70e8dc563",
    title: "Multi-Level Security for Regulated Government Clouds",
    lastChangedBy: [
    "rlavanya@in.ibm.com - 2019-07-08T07:29:43.221Z",
    "rlavanya@in.ibm.com - 2019-07-08T07:30:26.642Z",
    "rlavanya@in.ibm.com - 2019-07-08T07:31:14.546Z",
    "rlavanya@in.ibm.com - 2019-07-08T07:33:03.505Z",
    "Andy.M.Ramos@ibm.com - 2019-07-15T12:27:03.444Z"
    ]
    },
    {
    id: "6cf4830f9207d861881b31b90ba69e34",
    title: "Cloud Pak for Data Outreach for Clients and Strategic Accounts",
    lastChangedBy: [
    "Avinash.Asthana@ibm.com - 2019-07-10T20:26:49.025Z",
    "ross.judd@au1.ibm.com - 2019-07-11T12:57:35.446Z",
    "Avinash.Asthana@ibm.com - 2019-07-11T13:50:20.979Z",
    "theresac@us.ibm.com - 2019-07-24T12:37:03.419Z",
    "theresac@us.ibm.com - 2019-07-24T12:38:32.111Z"
    ]
    },
    {
    id: "e0af47c5ad36a307b62fe6a791313d0a",
    title: "Industry Affiliate AoT Focals",
    lastChangedBy: [
    "rcherch@ca.ibm.com - 2019-07-08T14:07:05.593Z",
    "sprouts@us.ibm.com - 2019-07-11T23:39:20.419Z",
    "rcherch@ca.ibm.com - 2019-07-12T13:00:05.601Z",
    "sprouts@us.ibm.com - 2019-07-12T13:05:31.055Z",
    "Andy.M.Ramos@ibm.com - 2019-07-31T14:14:49.958Z"
    ]
    },
    {
    id: "4897fd0ce43c9906ac08781f693d1d0b",
    title: "Homomorphic Encryption Mini-study",
    lastChangedBy: [
    "rwilson@us.ibm.com - 2019-06-12T16:23:10.985Z",
    "avillela@br.ibm.com - 2019-07-18T15:28:59.636Z",
    "avillela@br.ibm.com - 2019-07-18T15:30:58.683Z",
    "avillela@br.ibm.com - 2019-07-18T15:31:06.697Z",
    "jcostas@br.ibm.com - 2019-07-24T23:43:20.530Z"
    ]
    },
    {
    id: "e1cd27a6e5c1dcb6f0d66a204d740bae",
    title: "Explainability of Machine Learning models",
    lastChangedBy: [
    "skwatra@us.ibm.com - 2019-07-18T01:21:38.368Z",
    "skwatra@us.ibm.com - 2019-07-18T01:22:16.426Z",
    "skwatra@us.ibm.com - 2019-07-18T02:59:20.109Z",
    "skwatra@us.ibm.com - 2019-07-25T15:41:36.491Z",
    "skwatra@us.ibm.com - 2019-07-25T15:41:58.514Z"
    ]
    },
    {
    id: "d6c45ca512fde042200a5e0f3db44a2e",
    title: "IBM Developer Day",
    lastChangedBy: [
    "singhan@us.ibm.com - 2019-07-19T23:10:21.507Z",
    "singhan@us.ibm.com - 2019-07-19T23:11:36.777Z",
    "millerg@us.ibm.com - 2019-07-31T17:55:40.781Z",
    "singhan@us.ibm.com - 2019-08-01T06:54:54.222Z",
    "singhan@us.ibm.com - 2019-08-01T06:55:38.779Z"
    ]
    },
    {
    id: "0e0885350763c282b6dcd954b8d62420",
    title: "Cognitive Technical Enablement for Technical Sellers",
    lastChangedBy: [
    "psarwal@us.ibm.com - 2019-04-19T16:23:59.779Z",
    "psarwal@us.ibm.com - 2019-04-19T16:31:05.667Z",
    "psarwal@us.ibm.com - 2019-04-19T16:31:22.608Z",
    "psarwal@us.ibm.com - 2019-04-19T16:31:41.957Z",
    "psarwal@us.ibm.com - 2019-04-19T16:34:18.603Z"
    ]
    },
    {
    id: "98b42d3452ac97d2d03c13ec70f1d1a2",
    title: "Watson Build 2018",
    lastChangedBy: [
    "CORVDS@nl.ibm.com - 2018-10-11T09:14:13.217Z",
    "CORVDS@nl.ibm.com - 2018-10-11T09:15:10.945Z",
    "CORVDS@nl.ibm.com - 2018-10-11T09:16:13.821Z",
    "CORVDS@nl.ibm.com - 2018-10-11T09:16:25.503Z",
    "rwilson@us.ibm.com - 2019-03-02T00:24:49.927Z"
    ]
    },
    {
    id: "10212d225e6dfc72d4b7eba3e4c0479d",
    title: "Blockchain for Electronics Supply Chain",
    lastChangedBy: [
    "lammi@us.ibm.com - 2019-07-08T08:19:06.205Z",
    "lammi@us.ibm.com - 2019-07-08T08:19:12.870Z",
    "sprouts@us.ibm.com - 2019-07-15T13:48:10.387Z",
    "schouten@us.ibm.com - 2019-07-15T16:44:29.801Z",
    "schouten@us.ibm.com - 2019-07-15T16:47:19.988Z"
    ]
    },
    {
    id: "fb59671eb074b9022ab75481fe60c399",
    title: "Payment FinTechs as the Canary in the Mine",
    lastChangedBy: [
    "schouten@us.ibm.com - 2019-06-12T17:14:53.121Z",
    "apapacic@us.ibm.com - 2019-06-12T20:32:12.825Z",
    "apapacic@us.ibm.com - 2019-06-12T20:32:22.443Z",
    "apapacic@us.ibm.com - 2019-06-12T20:32:32.642Z",
    "apapacic@us.ibm.com - 2019-06-12T20:32:38.720Z"
    ]
    },
    {
    id: "ded11f5704649b92287a8675e5d7945a",
    title: "Predicting Recovery Time",
    lastChangedBy: [
    "Steve.Guendert@ibm.com - 2019-06-26T15:21:18.134Z",
    "Steve.Guendert@ibm.com - 2019-07-30T13:48:16.959Z",
    "Mikael.Lindstrom@se.ibm.com - 2019-07-31T17:44:31.679Z",
    "Mikael.Lindstrom@se.ibm.com - 2019-07-31T17:47:36.709Z",
    "Mikael.Lindstrom@se.ibm.com - 2019-07-31T17:47:44.602Z"
    ]
    },
    {
    id: "b759f0d2b22a4c1d5b29194fd3aa2fdd",
    title: "Develop the strategy for landing Watson IoT products and solutions at IBM Argentina",
    lastChangedBy: [
    "abalsamo@ar.ibm.com - 2019-06-14T17:46:16.502Z",
    "abalsamo@ar.ibm.com - 2019-06-14T17:46:20.654Z",
    "abalsamo@ar.ibm.com - 2019-06-14T17:46:27.736Z",
    "abalsamo@ar.ibm.com - 2019-06-14T17:46:48.475Z",
    "Andy.M.Ramos@ibm.com - 2019-07-11T23:13:39.898Z"
    ]
    },
    {
    id: "12db68bd0bcc1f73c4f783ec48200f46",
    title: "Quantum Community Benelux",
    lastChangedBy: [
    "eric_cattoir@be.ibm.com - 2019-02-14T08:05:28.408Z",
    "mferwerda@nl.ibm.com - 2019-04-23T15:45:41.971Z",
    "paridhi@us.ibm.com - 2019-04-23T16:55:57.198Z",
    "paridhi@us.ibm.com - 2019-04-23T16:57:21.051Z",
    "Andy.M.Ramos@ibm.com - 2019-04-23T17:59:01.533Z"
    ]
    },
    {
    id: "f6ccb3c120ac839c9539bb03e647a2b5",
    title: "Develop Patenting culture in NA Finance Centers (World Wide)",
    lastChangedBy: [
    "vanfalen@ibm.com - 2019-06-04T21:13:46.704Z",
    "vanfalen@ibm.com - 2019-06-04T21:14:10.834Z",
    "rwilson@us.ibm.com - 2019-07-03T13:36:01.461Z",
    "Andy.M.Ramos@ibm.com - 2019-07-31T00:06:08.003Z",
    "Andy.M.Ramos@ibm.com - 2019-07-31T18:12:02.065Z"
    ]
    },
    {
    id: "fe145d9625d50e119c1a6566f992840e",
    title: "Omics: The missing DNA of IBM Healthcare strategy?",
    lastChangedBy: [
    "torkroth@us.ibm.com - 2019-03-22T20:16:37.318Z",
    "torkroth@us.ibm.com - 2019-03-22T20:17:48.535Z",
    "eseabolt@us.ibm.com - 2019-03-29T13:44:30.032Z",
    "torkroth@us.ibm.com - 2019-06-20T19:09:07.000Z",
    "torkroth@us.ibm.com - 2019-06-20T19:10:28.259Z"
    ]
    },
    {
    id: "1d712af822644f5632a9c1b4b2d2b5f9",
    title: "TLC-Brazil - Promote Integration among generations and Technical Community awareness",
    lastChangedBy: [
    "avillela@br.ibm.com - 2019-02-20T19:55:51.716Z",
    "amelges@br.ibm.com - 2019-03-31T05:05:52.987Z",
    "amelges@br.ibm.com - 2019-07-01T05:02:57.528Z",
    "amelges@br.ibm.com - 2019-07-01T05:03:29.714Z",
    "amelges@br.ibm.com - 2019-07-01T05:03:34.205Z"
    ]
    },
    {
    id: "40b597d72e0e7044fc7ecc6ded7720c4",
    title: "Problem Analysis and Discovery in Backup and Storage Services",
    lastChangedBy: [
    "nicochillemi@it.ibm.com - 2019-05-02T10:19:52.213Z",
    "schouten@us.ibm.com - 2019-05-06T17:06:48.527Z",
    "Preethi.Anantharaman1@ibm.com - 2019-06-20T21:22:24.503Z",
    "Preethi.Anantharaman1@ibm.com - 2019-06-20T21:23:09.703Z",
    "Steve.Guendert@ibm.com - 2019-06-26T13:34:21.204Z"
    ]
    },
    {
    id: "a1fb43bdb947716ecd0ac9522a483e34",
    title: "2019 European Digital Business Automation Architectural Decision Point Development",
    lastChangedBy: [
    "amer.music@uk.ibm.com - 2019-07-01T14:36:43.614Z",
    "amer.music@uk.ibm.com - 2019-07-01T14:38:16.234Z",
    "amer.music@uk.ibm.com - 2019-07-01T14:39:20.078Z",
    "amer.music@uk.ibm.com - 2019-07-01T14:39:27.068Z",
    "amer.music@uk.ibm.com - 2019-07-01T14:39:33.065Z"
    ]
    },
    {
    id: "34112292f192d7f61948355a9a34891b",
    title: "Rochester TVC 2019 IBM Lego Education Outreach (ILEO) Program",
    lastChangedBy: [
    "albertaa@us.ibm.com - 2019-07-19T14:59:09.619Z",
    "albertaa@us.ibm.com - 2019-07-19T14:59:21.435Z",
    "albertaa@us.ibm.com - 2019-07-19T15:00:07.246Z",
    "albertaa@us.ibm.com - 2019-07-19T15:01:24.519Z",
    "millerg@us.ibm.com - 2019-07-31T17:56:12.213Z"
    ]
    },
    {
    id: "8ddd40440dc8969991646d4dd4e1e7c6",
    title: "study of Deep Learning",
    lastChangedBy: [
    "gandhis@au1.ibm.com - 2019-05-22T22:28:24.601Z",
    "chenyux@cn.ibm.com - 2019-07-03T15:07:46.204Z",
    "chenyux@cn.ibm.com - 2019-07-03T15:08:07.458Z",
    "chenyux@cn.ibm.com - 2019-07-03T15:15:48.002Z",
    "chenyux@cn.ibm.com - 2019-07-03T15:16:27.369Z"
    ]
    },
    {
    id: "8141d42337f3c24639a1dcacebc35390",
    title: "2019 European API Architectural Decision Point Development",
    lastChangedBy: [
    "pal.krogdahl@fi.ibm.com - 2019-06-18T14:57:48.270Z",
    "pal.krogdahl@fi.ibm.com - 2019-07-09T07:32:51.905Z",
    "pal.krogdahl@fi.ibm.com - 2019-07-09T07:33:17.700Z",
    "pal.krogdahl@fi.ibm.com - 2019-07-10T07:43:13.416Z",
    "pal.krogdahl@fi.ibm.com - 2019-07-10T07:43:18.990Z"
    ]
    },
    {
    id: "1dcdd27210320f8de2aed1b4375e8ee2",
    title: "Refactor CI/CD process with Cluster API and Tekton Pipeline",
    lastChangedBy: [
    "liugya@cn.ibm.com - 2019-07-22T06:41:26.106Z",
    "liugya@cn.ibm.com - 2019-07-22T06:41:29.840Z",
    "liugya@cn.ibm.com - 2019-07-22T06:41:37.472Z",
    "liugya@cn.ibm.com - 2019-07-22T06:42:13.593Z",
    "liugya@cn.ibm.com - 2019-07-22T06:42:18.360Z"
    ]
    },
    {
    id: "43e40ad91c5158bfc0a30b29ebac67dd",
    title: "Vulnerability management in DevSecOps",
    lastChangedBy: [
    "goenka@us.ibm.com - 2019-07-02T13:35:28.136Z",
    "goenka@us.ibm.com - 2019-07-02T13:35:33.697Z",
    "goenka@us.ibm.com - 2019-07-08T17:52:05.674Z",
    "goenka@us.ibm.com - 2019-07-08T17:53:32.516Z",
    "goenka@us.ibm.com - 2019-07-30T14:07:54.582Z"
    ]
    },
    {
    id: "46270bca13dee0ff80505e261f7c1ef8",
    title: "Business Platforms in Banking & Financial Markets",
    lastChangedBy: [
    "bharat.bhushan@uk.ibm.com - 2019-06-24T22:42:43.835Z",
    "bharat.bhushan@uk.ibm.com - 2019-07-07T22:47:18.336Z",
    "bharat.bhushan@uk.ibm.com - 2019-07-07T22:47:22.431Z",
    "bharat.bhushan@uk.ibm.com - 2019-08-01T15:32:16.157Z",
    "bharat.bhushan@uk.ibm.com - 2019-08-01T15:33:43.955Z"
    ]
    },
    {
    id: "16a455774c4e35a239283219fe8bd4d4",
    title: "Colombia TEC - Agile Advocates, Archievers, and Champions from Colombia ",
    lastChangedBy: [
    "rwilson@us.ibm.com - 2018-08-08T18:20:59.882Z",
    "rwilson@us.ibm.com - 2018-08-08T18:30:43.690Z",
    "avillela@br.ibm.com - 2018-12-20T18:34:48.053Z",
    "avillela@br.ibm.com - 2019-07-01T20:28:14.540Z",
    "avillela@br.ibm.com - 2019-07-12T00:26:53.261Z"
    ]
    },
    {
    id: "8b144fee771c9da515726afedbb412f6",
    title: "Blockchain Startup Mentor Program",
    lastChangedBy: [
    "schouten@us.ibm.com - 2018-10-22T18:58:30.488Z",
    "Arshiya.Lal@ibm.com - 2018-12-27T15:38:07.155Z",
    "Arshiya.Lal@ibm.com - 2018-12-27T15:39:02.451Z",
    "Arshiya.Lal@ibm.com - 2018-12-27T15:42:02.477Z",
    "schouten@us.ibm.com - 2019-01-21T15:36:25.366Z"
    ]
    },
    {
    id: "b046dfcafe6416038d99c4c030240cdb",
    title: "Calling all Architects! IBM Technology Roadmap Co-Creation Initiative.",
    lastChangedBy: [
    "jlascola@us.ibm.com - 2019-04-16T23:02:32.652Z",
    "jlascola@us.ibm.com - 2019-04-16T23:02:55.744Z",
    "jlascola@us.ibm.com - 2019-04-16T23:04:37.935Z",
    "jlascola@us.ibm.com - 2019-06-03T14:39:53.316Z",
    "jlascola@us.ibm.com - 2019-08-01T23:57:51.656Z"
    ]
    },
    {
    id: "d0d70a11913b869150edcc3bf4c5ebcb",
    title: "Standard vs Custom in Automation",
    lastChangedBy: [
    "nicochillemi@it.ibm.com - 2019-05-02T10:07:49.176Z",
    "schouten@us.ibm.com - 2019-05-06T17:09:32.347Z",
    "schouten@us.ibm.com - 2019-05-06T17:09:55.020Z",
    "mformato@us.ibm.com - 2019-07-05T11:33:04.033Z",
    "mformato@us.ibm.com - 2019-07-05T11:33:09.539Z"
    ]
    },
    {
    id: "445b55028162ad21a3f609e78d93415b",
    title: "TELCO DIGITAL PLATFORM",
    lastChangedBy: [
    "EYUP@tr.ibm.com - 2019-07-18T07:46:49.080Z",
    "EYUP@tr.ibm.com - 2019-07-25T09:21:32.909Z",
    "EYUP@tr.ibm.com - 2019-07-25T09:24:18.771Z",
    "EYUP@tr.ibm.com - 2019-07-25T09:24:47.892Z",
    "EYUP@tr.ibm.com - 2019-07-25T09:24:52.329Z"
    ]
    },
    {
    id: "075c7f786dac539e1e7f7c86f6710640",
    title: "The Challenges in Data Storage in Autonomous Cars",
    lastChangedBy: [
    "theresac@us.ibm.com - 2019-04-25T12:59:27.345Z",
    "nicochillemi@it.ibm.com - 2019-04-27T16:07:30.805Z",
    "mqiao@us.ibm.com - 2019-05-03T03:48:53.402Z",
    "mqiao@us.ibm.com - 2019-05-03T03:49:10.226Z",
    "mqiao@us.ibm.com - 2019-06-04T00:15:16.509Z"
    ]
    },
    {
    id: "fa65181ab7850180219972473e758330",
    title: "Geospatial Data Correlation POV ",
    lastChangedBy: [
    "njlizani@us.ibm.com - 2019-04-16T17:26:28.372Z",
    "celoessl@us.ibm.com - 2019-04-16T17:38:33.618Z",
    "njlizani@us.ibm.com - 2019-06-18T14:39:47.248Z",
    "njlizani@us.ibm.com - 2019-07-22T21:47:00.501Z",
    "njlizani@us.ibm.com - 2019-07-22T21:48:24.634Z"
    ]
    },
    {
    id: "12db68bd0bcc1f73c4f783ec481e8c79",
    title: "Machine Learning algorithms applied to EDA problems",
    lastChangedBy: [
    "pgvillar@us.ibm.com - 2018-09-24T17:52:29.150Z",
    "pgvillar@us.ibm.com - 2018-09-24T17:52:32.503Z",
    "pgvillar@us.ibm.com - 2019-06-03T17:37:33.096Z",
    "pgvillar@us.ibm.com - 2019-06-03T17:43:45.118Z",
    "pgvillar@us.ibm.com - 2019-06-03T17:59:45.171Z"
    ]
    },
    {
    id: "efbccc5256fd0c608c9dcee3a339ddde",
    title: "Rochester TVC Group Mentoring 2018 - 2019",
    lastChangedBy: [
    "fishbune@us.ibm.com - 2018-11-07T18:01:35.697Z",
    "fishbune@us.ibm.com - 2018-11-07T18:02:41.305Z",
    "fishbune@us.ibm.com - 2018-11-07T18:02:56.195Z",
    "jefferys@us.ibm.com - 2019-04-04T16:14:04.682Z",
    "jefferys@us.ibm.com - 2019-04-04T16:20:09.119Z"
    ]
    },
    {
    id: "c3744da0def48ef71e270201de4d7460",
    title: "Blockchain ecosystem 2019 Mx",
    lastChangedBy: [
    "alextrrs@mx1.ibm.com - 2019-04-22T21:37:38.839Z",
    "alextrrs@mx1.ibm.com - 2019-04-22T21:38:36.174Z",
    "avillela@br.ibm.com - 2019-04-24T02:52:29.237Z",
    "alextrrs@mx1.ibm.com - 2019-05-17T16:11:21.135Z",
    "alextrrs@mx1.ibm.com - 2019-06-20T16:45:46.958Z"
    ]
    },
    {
    id: "e8fdfd2f688b81e8644475487d9334b9",
    title: "Self-Aware Systems: Towards Resilient and Ethical AI ",
    lastChangedBy: [
    "pbose@us.ibm.com - 2019-02-22T00:07:46.251Z",
    "pbose@us.ibm.com - 2019-05-24T13:16:08.877Z",
    "pbose@us.ibm.com - 2019-05-24T13:18:10.791Z",
    "pbose@us.ibm.com - 2019-05-24T13:21:20.083Z",
    "pbose@us.ibm.com - 2019-05-24T13:24:22.231Z"
    ]
    },
    {
    id: "479163d38f0ce219bc1456256ce5369a",
    title: "Reproducibility of Machine Learning models",
    lastChangedBy: [
    "harihara@us.ibm.com - 2019-06-07T17:53:55.794Z",
    "rwilson@us.ibm.com - 2019-06-12T16:29:11.007Z",
    "harihara@us.ibm.com - 2019-07-08T14:56:45.403Z",
    "harihara@us.ibm.com - 2019-07-08T14:57:47.644Z",
    "harihara@us.ibm.com - 2019-07-08T14:58:45.532Z"
    ]
    },
    {
    id: "8b144fee771c9da515726afedbb76e2b",
    title: "Explaining Cognitive Technology To Execs",
    lastChangedBy: [
    "theresac@us.ibm.com - 2019-04-05T17:07:22.656Z",
    "james_luke@uk.ibm.com - 2019-04-13T15:43:49.782Z",
    "james_luke@uk.ibm.com - 2019-04-13T15:44:51.685Z",
    "james_luke@uk.ibm.com - 2019-04-13T15:44:56.886Z",
    "gandhis@au1.ibm.com - 2019-04-14T21:39:01.581Z"
    ]
    },
    {
    id: "690eda61098c63dc5e05ee31296b99de",
    title: "Patent Generation Initiative 2018",
    lastChangedBy: [
    "visarut@th.ibm.com - 2019-04-15T08:29:00.911Z",
    "visarut@th.ibm.com - 2019-04-15T08:29:04.333Z",
    "visarut@th.ibm.com - 2019-04-15T08:29:29.108Z",
    "visarut@th.ibm.com - 2019-04-15T08:29:49.403Z",
    "visarut@th.ibm.com - 2019-04-15T08:29:59.885Z"
    ]
    },
    {
    id: "0c4153c7bb9592ced52bc108e4d28821",
    title: "Chicagoland Technical Experts Meetups & More",
    lastChangedBy: [
    "brooksn@us.ibm.com - 2019-04-23T02:37:55.666Z",
    "slevitan@us.ibm.com - 2019-04-26T18:24:45.457Z",
    "slevitan@us.ibm.com - 2019-05-02T23:48:31.321Z",
    "slevitan@us.ibm.com - 2019-05-22T20:56:02.155Z",
    "slevitan@us.ibm.com - 2019-06-23T03:53:41.070Z"
    ]
    },
    {
    id: "37622052cc7b05f92a0999493acb965a",
    title: "IBM Mexico synergy with IBM Peru : First Peruvian patent",
    lastChangedBy: [
    "schouten@us.ibm.com - 2019-03-28T21:51:54.003Z",
    "vanfalen@ibm.com - 2019-04-23T15:57:23.938Z",
    "vanfalen@ibm.com - 2019-06-25T00:08:36.028Z",
    "vanfalen@ibm.com - 2019-06-25T00:09:36.735Z",
    "vanfalen@ibm.com - 2019-06-25T00:10:00.032Z"
    ]
    },
    {
    id: "0ca7fa3d8cb9eeff50e37065dc79f17f",
    title: "IBM Single Data Platform",
    lastChangedBy: [
    "ALEKSEEV@ru.ibm.com - 2018-04-23T12:01:29.121Z",
    "theresac@us.ibm.com - 2018-07-16T19:37:55.506Z",
    "bosmaj@us.ibm.com - 2018-07-16T19:38:26.495Z",
    "ALEKSEEV@ru.ibm.com - 2018-08-27T11:58:43.035Z",
    "ALEKSEEV@ru.ibm.com - 2018-08-27T12:06:27.541Z"
    ]
    },
    {
    id: "57197b7334b8f4a61ecfbe952b078158",
    title: "GovAround - IBM Government knowledge sharing mobile app using Watson",
    lastChangedBy: [
    "dana.abunasrah@ae.ibm.com - 2018-11-22T09:47:50.853Z",
    "dana.abunasrah@ae.ibm.com - 2018-11-22T09:47:59.540Z",
    "dana.abunasrah@ae.ibm.com - 2018-11-22T09:55:41.010Z",
    "dana.abunasrah@ae.ibm.com - 2019-04-11T08:03:40.213Z",
    "dana.abunasrah@ae.ibm.com - 2019-06-16T13:19:23.758Z"
    ]
    },
    {
    id: "a5cb04209cc535affeb995ccd08cb704",
    title: "Blockchain : Extend the Food Safety Ecosystem",
    lastChangedBy: [
    "anickels@us.ibm.com - 2018-03-27T15:17:50.313Z",
    "malaika@us.ibm.com - 2018-07-24T20:45:56.764Z",
    "malaika@us.ibm.com - 2018-08-14T23:37:43.340Z",
    "malaika@us.ibm.com - 2018-08-14T23:38:37.971Z",
    "G.Dinhof@ibm.com - 2018-12-27T13:56:59.444Z"
    ]
    },
    {
    id: "a0d5d52c9f8e921a33afdd870a911bd6",
    title: "Submit Papers, Presentations, Posters, Demos to Key Third Party Conferences in 2019",
    lastChangedBy: [
    "malaika@us.ibm.com - 2019-02-28T18:36:39.457Z",
    "malaika@us.ibm.com - 2019-04-10T13:45:25.827Z",
    "malaika@us.ibm.com - 2019-04-10T13:46:01.469Z",
    "malaika@us.ibm.com - 2019-06-26T16:52:15.246Z",
    "malaika@us.ibm.com - 2019-06-26T16:52:52.212Z"
    ]
    },
    {
    id: "e8e00afd221dea3f035c0ed7e65580b9",
    title: "Transactional Semantics in Microservices",
    lastChangedBy: [
    "laredoj@us.ibm.com - 2019-04-24T15:36:28.233Z",
    "Andy.M.Ramos@ibm.com - 2019-04-30T14:47:54.679Z",
    "laredoj@us.ibm.com - 2019-05-15T23:54:28.910Z",
    "laredoj@us.ibm.com - 2019-05-30T21:41:23.355Z",
    "Andy.M.Ramos@ibm.com - 2019-06-03T11:25:58.634Z"
    ]
    },
    {
    id: "cdc3b7b0a1acb3d2d208d6565db7ceec",
    title: "AI Compute - From Brain to Brainstorming",
    lastChangedBy: [
    "rvjoshi@us.ibm.com - 2018-11-13T03:38:41.791Z",
    "bosmaj@us.ibm.com - 2018-11-28T16:49:27.553Z",
    "theresac@us.ibm.com - 2019-05-01T12:26:13.278Z",
    "theresac@us.ibm.com - 2019-06-17T12:04:36.573Z",
    "paridhi@us.ibm.com - 2019-07-30T13:05:59.322Z"
    ]
    },
    {
    id: "89dd8b924cd7039784201fb84d7ede74",
    title: "Technical Development Day Series in Switzerland",
    lastChangedBy: [
    "stefanoo@it.ibm.com - 2018-11-29T15:50:49.511Z",
    "florian_graf@ch.ibm.com - 2019-02-11T13:07:01.448Z",
    "florian_graf@ch.ibm.com - 2019-02-11T13:07:26.948Z",
    "florian_graf@ch.ibm.com - 2019-02-11T13:07:31.985Z",
    "florian_graf@ch.ibm.com - 2019-03-04T15:01:48.261Z"
    ]
    },
    {
    id: "659dbb7797c9a1b5a88a8e7fefa356ed",
    title: "Create guidelines for crowd-sourcing datasets",
    lastChangedBy: [
    "malaika@us.ibm.com - 2019-01-14T11:08:19.246Z",
    "malaika@us.ibm.com - 2019-01-14T11:10:17.645Z",
    "malaika@us.ibm.com - 2019-01-18T11:01:25.261Z",
    "malaika@us.ibm.com - 2019-01-18T11:01:29.719Z",
    "malaika@us.ibm.com - 2019-06-20T06:30:24.175Z"
    ]
    },
    {
    id: "f7c668e07c2b6727d761ca24d0a14f25",
    title: "Pervasive Encryption (Dataset Encryption) on Linux on Z in a Real Customer",
    lastChangedBy: [
    "jean-luc.Collet@fr.ibm.com - 2019-04-29T13:05:46.698Z",
    "Andy.M.Ramos@ibm.com - 2019-04-29T15:12:53.770Z",
    "Andy.M.Ramos@ibm.com - 2019-04-29T15:13:10.375Z",
    "eugeniof@br.ibm.com - 2019-07-09T11:03:22.423Z",
    "eugeniof@br.ibm.com - 2019-07-09T11:04:51.681Z"
    ]
    },
    {
    id: "efbccc5256fd0c608c9dcee3a3382e80",
    title: "Market Quick Reference Cards for Technologists",
    lastChangedBy: [
    "rwilson@us.ibm.com - 2018-08-08T18:31:14.190Z",
    "dmorlitz@us.ibm.com - 2018-12-04T18:03:31.072Z",
    "dmorlitz@us.ibm.com - 2018-12-04T18:03:46.316Z",
    "dmorlitz@us.ibm.com - 2018-12-04T18:05:34.390Z",
    "dmorlitz@us.ibm.com - 2018-12-04T18:05:52.561Z"
    ]
    },
    {
    id: "fc11e3c134738b0dbaff3c100ce912c1",
    title: "Significantly improving discovery and reuse of code, components and tools",
    lastChangedBy: [
    "gebhardt@us.ibm.com - 2018-10-23T18:51:32.995Z",
    "jleon@us.ibm.com - 2019-01-24T13:19:22.131Z",
    "jleon@us.ibm.com - 2019-01-24T13:19:52.271Z",
    "gebhardt@us.ibm.com - 2019-06-06T23:53:36.321Z",
    "gebhardt@us.ibm.com - 2019-06-07T00:02:19.089Z"
    ]
    },
    {
    id: "0e0885350763c282b6dcd954b8d621e4",
    title: "Cognitive Networks - Applying Machine Learning to build self-learning, self-optimizing networks.",
    lastChangedBy: [
    "bhal.banavalikar@us.ibm.com - 2018-12-21T05:15:54.721Z",
    "bhal.banavalikar@us.ibm.com - 2018-12-21T05:17:42.550Z"
    ]
    },
    {
    id: "b3ed9c38e38ff9ef7031faa3be783f4b",
    title: "Rochester TVC Networking Sessions 2018-2019",
    lastChangedBy: [
    "sandy89@us.ibm.com - 2019-04-24T16:57:46.683Z",
    "sandy89@us.ibm.com - 2019-04-24T17:37:28.344Z",
    "sandy89@us.ibm.com - 2019-05-21T13:18:39.185Z",
    "sandy89@us.ibm.com - 2019-05-21T13:19:00.468Z",
    "sandy89@us.ibm.com - 2019-05-21T13:19:08.943Z"
    ]
    },
    {
    id: "a86b8966cd186d2b552b3586c088bd6f",
    title: "Know Your IBM",
    lastChangedBy: [
    "sara_weber@us.ibm.com - 2018-10-19T12:48:40.662Z",
    "schouten@us.ibm.com - 2018-12-10T16:40:49.659Z",
    "schouten@us.ibm.com - 2018-12-10T16:40:57.607Z",
    "schouten@us.ibm.com - 2018-12-11T19:35:19.776Z",
    "schouten@us.ibm.com - 2018-12-11T19:35:24.518Z"
    ]
    },
    {
    id: "e4e42adc40123b58db76c26f0911f416",
    title: "Technical Leaders Masterclass - Foundation (TLMC-f) Delivery",
    lastChangedBy: [
    "CRMIHAI1@ie.ibm.com - 2018-11-27T14:13:48.487Z",
    "CRMIHAI1@ie.ibm.com - 2018-11-27T14:19:35.640Z",
    "stefanoo@it.ibm.com - 2018-11-28T10:12:10.656Z",
    "eamonn.moriarty@ie.ibm.com - 2019-02-27T09:59:45.560Z",
    "eamonn.moriarty@ie.ibm.com - 2019-03-21T09:42:14.740Z"
    ]
    },
    {
    id: "bfa0e54e945421a0208fe2a066644b0a",
    title: "Industry Academy Affiliate & AoT Traditional Affiliate Collaboration for Client Value",
    lastChangedBy: [
    "bamiller@us.ibm.com - 2019-07-15T17:50:53.551Z",
    "bamiller@us.ibm.com - 2019-07-15T17:51:08.610Z",
    "bamiller@us.ibm.com - 2019-07-15T17:51:43.515Z",
    "bamiller@us.ibm.com - 2019-07-15T17:52:18.529Z",
    "rradclif@us.ibm.com - 2019-07-24T12:37:19.715Z"
    ]
    },
    {
    id: "8b144fee771c9da515726afedbc00e60",
    title: "We need a Virtual Agent to help us Pick which Virtual Agent solution to use",
    lastChangedBy: [
    "Andy.M.Ramos@ibm.com - 2018-06-28T16:12:20.758Z",
    "Andy.M.Ramos@ibm.com - 2018-06-28T16:41:58.813Z",
    "Andy.M.Ramos@ibm.com - 2018-06-28T16:42:30.332Z",
    "Andy.M.Ramos@ibm.com - 2018-06-28T16:42:40.558Z",
    "Andy.M.Ramos@ibm.com - 2018-06-28T16:42:49.279Z"
    ]
    },
    {
    id: "12db68bd0bcc1f73c4f783ec48207b45",
    title: "Reversible binary neural networks",
    lastChangedBy: [
    "henryeb@cn.ibm.com - 2018-09-27T06:32:54.554Z",
    "henryeb@cn.ibm.com - 2019-04-24T03:37:07.482Z",
    "henryeb@cn.ibm.com - 2019-04-24T03:57:37.096Z"
    ]
    },
    {
    id: "e88aea133c231441de8721fc3e912238",
    title: "Cognitive Patterns for VM based orchestration",
    lastChangedBy: [
    "amerchan@in.ibm.com - 2018-03-30T12:06:26.634Z",
    "schouten@us.ibm.com - 2018-07-20T18:43:12.024Z",
    "schouten@us.ibm.com - 2018-07-20T18:43:14.589Z",
    "amerchan@in.ibm.com - 2018-10-04T11:52:15.293Z",
    "amerchan@in.ibm.com - 2019-03-28T06:05:30.374Z"
    ]
    },
    {
    id: "8a899c142921b64a8997c11e3f2b1ccd",
    title: "Practical Data Science Projects in R",
    lastChangedBy: [
    "Lauren.Michelle.Leiter@ibm.com - 2019-08-01T15:06:02.671Z",
    "Lauren.Michelle.Leiter@ibm.com - 2019-08-01T15:06:08.753Z",
    "Lauren.Michelle.Leiter@ibm.com - 2019-08-01T17:28:17.456Z",
    "Lauren.Michelle.Leiter@ibm.com - 2019-08-01T17:28:21.873Z",
    "Lauren.Michelle.Leiter@ibm.com - 2019-08-01T19:36:42.846Z"
    ]
    },
    {
    id: "71d2047dfcecd55404509aac130e21ec",
    title: "TLC-BR - Sexta Tech 2019",
    lastChangedBy: [
    "eugeniof@br.ibm.com - 2019-02-06T13:06:10.406Z",
    "eugeniof@br.ibm.com - 2019-02-06T13:06:14.248Z",
    "avillela@br.ibm.com - 2019-02-06T13:20:46.164Z",
    "eugeniof@br.ibm.com - 2019-02-08T15:47:53.596Z",
    "eugeniof@br.ibm.com - 2019-02-08T15:48:57.453Z"
    ]
    },
    {
    id: "0d00b306be285eb264f9cd378a73e9be",
    title: "AI and Machine Learning Educational Roadmap",
    lastChangedBy: [
    "jdejesus@us.ibm.com - 2018-08-17T19:33:27.508Z",
    "jdejesus@us.ibm.com - 2018-12-31T06:56:25.005Z",
    "jdejesus@us.ibm.com - 2018-12-31T06:59:43.295Z",
    "jdejesus@us.ibm.com - 2019-03-21T08:43:53.230Z",
    "jdejesus@us.ibm.com - 2019-05-31T22:51:29.579Z"
    ]
    },
    {
    id: "12db68bd0bcc1f73c4f783ec481b2fea",
    title: "Drive Visual/Acoustic Insights adoption in manufacturing industry",
    lastChangedBy: [
    "heleihl@cn.ibm.com - 2018-08-20T09:38:38.758Z",
    "rwilson@us.ibm.com - 2018-08-20T17:30:36.088Z",
    "heleihl@cn.ibm.com - 2018-09-25T18:56:26.957Z",
    "heleihl@cn.ibm.com - 2018-09-25T18:58:29.450Z",
    "zhouyuc@cn.ibm.com - 2018-09-29T15:17:18.643Z"
    ]
    },
    {
    id: "a8cebc364225baf5d3a9573680a19157",
    title: "TEC Central Executive Contact Program - 2018/2019",
    lastChangedBy: [
    "Thomas.Harrer@de.ibm.com - 2019-02-04T17:50:16.891Z",
    "Thomas.Harrer@de.ibm.com - 2019-02-04T17:50:26.892Z",
    "Thomas.Harrer@de.ibm.com - 2019-02-04T17:51:22.560Z",
    "stefanoo@it.ibm.com - 2019-02-07T14:11:01.833Z",
    "Thomas.Harrer@de.ibm.com - 2019-06-28T16:19:39.345Z"
    ]
    },
    {
    id: "3248063e0a00d31e56fbde62cf202679",
    title: "Cognitive Anomaly Detection of power subsystem for next generation System z servers ",
    lastChangedBy: [
    "mccain@us.ibm.com - 2018-02-21T14:55:27.849Z",
    "mccain@us.ibm.com - 2018-07-18T21:58:36.774Z",
    "mccain@us.ibm.com - 2018-07-18T21:59:02.546Z",
    "mccain@us.ibm.com - 2018-12-28T20:01:09.182Z",
    "mccain@us.ibm.com - 2018-12-28T20:07:23.141Z"
    ]
    },
    {
    id: "43747565a710a9851a5a181f35be38b1",
    title: "TEC CZ|SK Initiative - Patenting at IBM: find and nurture our Wild Ducks",
    lastChangedBy: [
    "nicolo.sgobba@cz.ibm.com - 2019-07-09T07:41:11.738Z",
    "nicolo.sgobba@cz.ibm.com - 2019-07-09T07:41:41.232Z",
    "nicolo.sgobba@cz.ibm.com - 2019-07-09T08:00:48.021Z",
    "nicolo.sgobba@cz.ibm.com - 2019-07-09T09:40:31.551Z",
    "stefanoo@it.ibm.com - 2019-07-09T12:54:10.297Z"
    ]
    },
    {
    id: "85cbbcad0635c74fd641dceb7d673f3b",
    title: "IBM Cloud MOOC for Universities in Mexico",
    lastChangedBy: [
    "vhernanm@mx1.ibm.com - 2019-02-12T18:41:08.109Z",
    "vhernanm@mx1.ibm.com - 2019-02-12T18:41:27.608Z",
    "vhernanm@mx1.ibm.com - 2019-02-12T19:04:53.735Z",
    "vhernanm@mx1.ibm.com - 2019-02-12T19:05:33.917Z",
    "vhernanm@mx1.ibm.com - 2019-02-12T19:05:38.376Z"
    ]
    },
    {
    id: "d0952ad60e7680d3463ccb1845b4073e",
    title: "Effective performance. availability and security engineering in a DEVOPS environment",
    lastChangedBy: [
    "lydia_duijvestijn@nl.ibm.com - 2019-03-22T17:26:56.893Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-03-22T17:27:05.602Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-03-22T17:27:13.911Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-03-22T17:27:52.681Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-03-22T17:38:09.375Z"
    ]
    },
    {
    id: "12db68bd0bcc1f73c4f783ec481ec94e",
    title: "Master Inventor Dashboard: Providing a Mechanism to Technial Community to Track the Journey to Master Inventor",
    lastChangedBy: [
    "boc@us.ibm.com - 2018-06-19T19:52:43.383Z",
    "boc@us.ibm.com - 2018-06-19T19:53:18.104Z",
    "boc@us.ibm.com - 2018-06-19T19:53:21.125Z",
    "boc@us.ibm.com - 2018-06-19T19:54:05.013Z",
    "boc@us.ibm.com - 2018-09-24T01:33:48.205Z"
    ]
    },
    {
    id: "c9a6cb49b1148998fddf3062309806aa",
    title: "UAE Regional Technical Exchange 2019",
    lastChangedBy: [
    "thomasw@ae.ibm.com - 2019-07-02T09:37:22.276Z",
    "thomasw@ae.ibm.com - 2019-07-02T09:43:54.962Z",
    "thomasw@ae.ibm.com - 2019-07-02T09:45:05.135Z",
    "thomasw@ae.ibm.com - 2019-07-02T09:45:49.447Z",
    "sara_weber@us.ibm.com - 2019-07-02T23:11:13.716Z"
    ]
    },
    {
    id: "241a621471066ea19c52e05ebac38568",
    title: "AoT Initiative: Designing Mobile x API Banking Reference Architecture",
    lastChangedBy: [
    "NONAMI@jp.ibm.com - 2019-04-09T07:15:39.828Z",
    "gandhis@au1.ibm.com - 2019-04-18T04:29:53.830Z",
    "NONAMI@jp.ibm.com - 2019-04-22T05:24:46.736Z",
    "NONAMI@jp.ibm.com - 2019-04-22T05:25:37.298Z",
    "NONAMI@jp.ibm.com - 2019-04-22T05:25:39.791Z"
    ]
    },
    {
    id: "4c5b7d606ea50b9b7d56cdc649c90da9",
    title: "Grow technical knowledge through sharing of skills. ",
    lastChangedBy: [
    "svelkant@us.ibm.com - 2019-02-28T20:21:55.085Z",
    "rradclif@us.ibm.com - 2019-03-07T15:45:43.123Z",
    "svelkant@us.ibm.com - 2019-06-20T17:14:56.745Z",
    "svelkant@us.ibm.com - 2019-06-20T17:15:18.304Z",
    "svelkant@us.ibm.com - 2019-06-20T17:17:13.854Z"
    ]
    },
    {
    id: "526f5ef1185774c8884b4fb5bd645bd2",
    title: "South African Technical Exchange - MEA RTE",
    lastChangedBy: [
    "HARRYLE@za.ibm.com - 2019-07-11T08:06:41.666Z",
    "HARRYLE@za.ibm.com - 2019-07-11T08:11:21.291Z",
    "HARRYLE@za.ibm.com - 2019-07-11T08:20:12.534Z",
    "HARRYLE@za.ibm.com - 2019-07-11T08:27:19.101Z",
    "sara_weber@us.ibm.com - 2019-07-11T13:10:57.014Z"
    ]
    },
    {
    id: "8198fb10c08a06e1154c4fed232f8426",
    title: "Bringing the market valued offering /Industry Asset/Industry solution in the AI and AA space to the AoT Community thru series of the Biweekly calls with ' Know your industry AI and AA Solutions '",
    lastChangedBy: [
    "schouten@us.ibm.com - 2019-04-30T16:26:50.971Z",
    "schouten@us.ibm.com - 2019-05-08T21:13:57.434Z",
    "schouten@us.ibm.com - 2019-05-15T20:01:21.668Z",
    "sgadepal@in.ibm.com - 2019-06-06T08:36:25.830Z",
    "sgadepal@in.ibm.com - 2019-07-19T10:47:15.009Z"
    ]
    },
    {
    id: "b2b78a076936cd96af2bc59100f14be9",
    title: "Winning in the Digital Supply Chain for CP",
    lastChangedBy: [
    "wouter.denayer@be.ibm.com - 2019-04-17T07:49:34.712Z",
    "wouter.denayer@be.ibm.com - 2019-04-17T07:50:52.703Z",
    "celoessl@us.ibm.com - 2019-04-17T12:48:49.007Z",
    "rwilson@us.ibm.com - 2019-06-28T02:45:39.728Z",
    "rwilson@us.ibm.com - 2019-06-28T02:45:55.497Z"
    ]
    },
    {
    id: "8b144fee771c9da515726afedbbe2884",
    title: "TEC Talks: Sharing Best Practices & Ideas for New Business Opportunities through the Technical Communities",
    lastChangedBy: [
    "rwilson@us.ibm.com - 2018-08-07T23:36:01.841Z",
    "rwilson@us.ibm.com - 2018-08-08T18:21:02.941Z",
    "rwilson@us.ibm.com - 2018-08-08T18:30:18.973Z",
    "frank.hoerper@de.ibm.com - 2019-01-15T20:15:37.548Z",
    "frank.hoerper@de.ibm.com - 2019-01-15T20:16:08.671Z"
    ]
    },
    {
    id: "81978ec989383c81a49e9a0a7ea4fd9b",
    title: "Service Management in a Cloud and Cognitive World",
    lastChangedBy: [
    "AVERDUNK@de.ibm.com - 2019-05-21T13:00:50.856Z",
    "AVERDUNK@de.ibm.com - 2019-05-21T13:00:56.495Z",
    "AVERDUNK@de.ibm.com - 2019-05-21T13:01:04.768Z",
    "GeneBrown@us.ibm.com - 2019-06-28T19:12:58.378Z",
    "GeneBrown@us.ibm.com - 2019-06-28T19:14:56.204Z"
    ]
    },
    {
    id: "c2badf800da7ee30d4e4ded33f9ec65e",
    title: "GDL Technical Leadership Development Program",
    lastChangedBy: [
    "rogeliof@mx1.ibm.com - 2019-05-24T13:16:13.984Z",
    "rogeliof@mx1.ibm.com - 2019-05-24T13:16:17.517Z",
    "mmoises@mx1.ibm.com - 2019-06-20T22:03:16.843Z",
    "mmoises@mx1.ibm.com - 2019-07-19T17:13:31.227Z",
    "mmoises@mx1.ibm.com - 2019-07-19T17:13:40.578Z"
    ]
    },
    {
    id: "6455b2b03456676bc5900d6d499dfe69",
    title: "Securing Istio Service Mesh using IBM DataPower Gateway",
    lastChangedBy: [
    "Krithika.P@ibm.com - 2019-05-23T02:30:49.283Z",
    "Krithika.P@ibm.com - 2019-05-23T02:31:06.931Z",
    "Krithika.P@ibm.com - 2019-06-21T17:50:16.082Z",
    "Krithika.P@ibm.com - 2019-06-21T17:50:46.531Z",
    "Krithika.P@ibm.com - 2019-06-21T17:52:17.584Z"
    ]
    },
    {
    id: "278113351f0f639c428acc86a30fe70e",
    title: "AoT Technical Council on Blockchain",
    lastChangedBy: [
    "abiazett@us.ibm.com - 2019-04-19T20:39:59.397Z",
    "abiazett@us.ibm.com - 2019-04-22T13:38:20.864Z",
    "abiazett@us.ibm.com - 2019-05-13T00:13:02.752Z",
    "abiazett@us.ibm.com - 2019-05-13T00:13:12.591Z",
    "abiazett@us.ibm.com - 2019-05-13T00:14:08.167Z"
    ]
    },
    {
    id: "6b9e6f948f70c3d0eac72fc703e63aff",
    title: "Providing a storage focused component for the AoT Systems Core Team",
    lastChangedBy: [
    "SEIPP@de.ibm.com - 2019-03-27T08:26:07.817Z",
    "SEIPP@de.ibm.com - 2019-03-27T08:32:39.720Z",
    "SEIPP@de.ibm.com - 2019-03-27T08:35:49.689Z",
    "Steve.Guendert@ibm.com - 2019-06-13T14:34:53.359Z",
    "Steve.Guendert@ibm.com - 2019-06-13T14:36:31.599Z"
    ]
    },
    {
    id: "2ff694ee8518acaddbd1867ed209b5cd",
    title: "Define badging for Technical Leaders MasterClasses programme",
    lastChangedBy: [
    "chris_nott@uk.ibm.com - 2019-05-03T14:50:57.117Z",
    "chris_nott@uk.ibm.com - 2019-05-03T14:51:31.660Z",
    "mike_wilks@uk.ibm.com - 2019-05-06T10:23:28.365Z",
    "chris_nott@uk.ibm.com - 2019-06-24T13:55:52.263Z",
    "chris_nott@uk.ibm.com - 2019-06-24T13:56:37.235Z"
    ]
    },
    {
    id: "0027829acdbbc3a31f3336305eca2ef6",
    title: "TLC Brazil - Outreach 2019 - eWeek | DiscoverE Engineering (STEAM)",
    lastChangedBy: [
    "carols@br.ibm.com - 2019-04-09T23:42:24.441Z",
    "avillela@br.ibm.com - 2019-04-09T23:52:23.065Z",
    "carols@br.ibm.com - 2019-04-10T00:08:13.203Z",
    "isabelm@br.ibm.com - 2019-04-10T21:14:52.569Z",
    "isabelm@br.ibm.com - 2019-04-10T21:16:08.581Z"
    ]
    },
    {
    id: "2d525c3f093b7e78a8ce1a7011e5b85f",
    title: " Scaling the Go-To Market for Secure Data Serving with LinuxONE",
    lastChangedBy: [
    "Michele_DelSordo@it.ibm.com - 2019-04-08T12:52:16.484Z",
    "Michele_DelSordo@it.ibm.com - 2019-04-08T12:56:46.634Z",
    "Michele_DelSordo@it.ibm.com - 2019-07-11T06:29:02.979Z",
    "Michele_DelSordo@it.ibm.com - 2019-07-11T06:29:54.936Z",
    "Michele_DelSordo@it.ibm.com - 2019-07-11T06:30:06.634Z"
    ]
    },
    {
    id: "ede12d8d4bc2ab576448786243eb5f00",
    title: "PREVAIL 2019 - An #IBMAoT #WWPACoP Topical Conference addressing Performance, Availability and Security",
    lastChangedBy: [
    "lydia_duijvestijn@nl.ibm.com - 2019-04-05T09:58:24.112Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-04-05T09:58:28.524Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-07-19T06:38:47.415Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-07-19T06:39:02.280Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-07-19T06:39:11.470Z"
    ]
    },
    {
    id: "b9ccc54c9323240377f9409892ddd95d",
    title: "Chicagoland University Collaboration ",
    lastChangedBy: [
    "brooksn@us.ibm.com - 2019-03-13T14:31:35.488Z",
    "brooksn@us.ibm.com - 2019-03-13T14:36:11.952Z",
    "brooksn@us.ibm.com - 2019-03-28T14:53:24.244Z",
    "brooksn@us.ibm.com - 2019-03-28T14:53:28.416Z",
    "brooksn@us.ibm.com - 2019-06-25T15:14:19.702Z"
    ]
    },
    {
    id: "0e33b482dd537c9bf2b3bb9755c98fc0",
    title: "Shell for Client Value",
    lastChangedBy: [
    "estahl@us.ibm.com - 2019-05-07T17:51:15.018Z",
    "estahl@us.ibm.com - 2019-05-07T17:52:17.142Z",
    "estahl@us.ibm.com - 2019-05-07T17:55:12.518Z",
    "estahl@us.ibm.com - 2019-08-01T10:50:32.656Z"
    ]
    },
    {
    id: "549230ea30c8c9c1b72247e172df745c",
    title: "Federal Weather Data Innovation POV",
    lastChangedBy: [
    "ahouck@us.ibm.com - 2019-05-20T14:18:25.532Z",
    "ahouck@us.ibm.com - 2019-05-20T14:18:59.444Z",
    "lnsmith@us.ibm.com - 2019-06-06T11:57:30.691Z",
    "schouten@us.ibm.com - 2019-06-14T20:12:44.733Z",
    "ahouck@us.ibm.com - 2019-06-18T12:15:01.074Z"
    ]
    },
    {
    id: "04d40214b716d284e7cdd0a46e188806",
    title: "TEC-J Showcase #1",
    lastChangedBy: [
    "MARIA@jp.ibm.com - 2019-06-29T05:41:45.103Z",
    "MARIA@jp.ibm.com - 2019-06-29T05:42:15.884Z",
    "NATSUMIK@jp.ibm.com - 2019-07-01T00:55:26.939Z",
    "NATSUMIK@jp.ibm.com - 2019-07-02T05:27:03.224Z",
    "gandhis@au1.ibm.com - 2019-07-19T07:41:03.160Z"
    ]
    },
    {
    id: "605a7e0a1afb54b23d994bbb928df08f",
    title: "Leapfrog Initiative for Social Eminence",
    lastChangedBy: [
    "zolo@us.ibm.com - 2018-09-14T12:09:20.447Z",
    "zolo@us.ibm.com - 2018-09-14T12:10:10.750Z",
    "zolo@us.ibm.com - 2018-09-14T15:15:49.628Z",
    "stefanoo@it.ibm.com - 2018-11-06T12:26:37.943Z",
    "zolo@us.ibm.com - 2019-02-26T08:58:35.602Z"
    ]
    },
    {
    id: "d53199755c8ea0760143f34e2dc9fcaa",
    title: "Patents Development Strategy for Mexico",
    lastChangedBy: [
    "vhernanm@mx1.ibm.com - 2019-03-15T00:49:41.684Z",
    "vhernanm@mx1.ibm.com - 2019-03-19T02:35:56.804Z",
    "vhernanm@mx1.ibm.com - 2019-05-21T14:38:23.966Z",
    "vhernanm@mx1.ibm.com - 2019-05-30T21:08:11.602Z",
    "vhernanm@mx1.ibm.com - 2019-05-30T21:10:54.749Z"
    ]
    },
    {
    id: "1cd08ab718ac83db90737b6834e1342f",
    title: "Digital transformation as an accelerator of Ecological transition",
    lastChangedBy: [
    "valery.debeer@fr.ibm.com - 2019-06-27T15:04:34.321Z",
    "valery.debeer@fr.ibm.com - 2019-06-27T15:04:49.824Z",
    "valery.debeer@fr.ibm.com - 2019-06-27T15:12:33.502Z",
    "valery.debeer@fr.ibm.com - 2019-06-27T15:14:30.809Z",
    "stefanoo@it.ibm.com - 2019-07-02T12:05:54.539Z"
    ]
    },
    {
    id: "1a6278e70c346bdec3c357def359f7d0",
    title: "Edge Computing - France",
    lastChangedBy: [
    "isabelle_claverie@fr.ibm.com - 2019-07-15T15:16:34.063Z",
    "isabelle_claverie@fr.ibm.com - 2019-07-15T15:17:08.913Z",
    "isabelle_claverie@fr.ibm.com - 2019-07-15T15:17:19.617Z",
    "isabelle_claverie@fr.ibm.com - 2019-07-15T15:18:23.985Z",
    "jean-charles_cointot@fr.ibm.com - 2019-07-19T09:30:04.500Z"
    ]
    },
    {
    id: "e32b03d7eda71e3c955784b03e71c4b1",
    title: "2019 European Data Insight Architectural Decision Point Developement",
    lastChangedBy: [
    "CEDRINEMADERA@fr.ibm.com - 2019-04-05T15:46:06.574Z",
    "CEDRINEMADERA@fr.ibm.com - 2019-07-11T07:37:11.532Z",
    "CEDRINEMADERA@fr.ibm.com - 2019-07-11T07:37:48.928Z",
    "CEDRINEMADERA@fr.ibm.com - 2019-07-11T07:38:23.767Z",
    "CEDRINEMADERA@fr.ibm.com - 2019-07-11T07:38:29.924Z"
    ]
    },
    {
    id: "822b0d63467b26bd213bdfc9282752d9",
    title: "CIO Data Science Guild 2019",
    lastChangedBy: [
    "karlacano@mx1.ibm.com - 2019-05-23T13:14:56.397Z",
    "karlacano@mx1.ibm.com - 2019-05-23T13:16:00.458Z",
    "karlacano@mx1.ibm.com - 2019-05-23T13:16:56.231Z",
    "karlacano@mx1.ibm.com - 2019-05-23T13:17:57.737Z",
    "karlacano@mx1.ibm.com - 2019-08-01T22:56:23.758Z"
    ]
    },
    {
    id: "0e0885350763c282b6dcd954b8e127c5",
    title: "Virtualize PEMMX and D4A education for performance and availability engineering and management",
    lastChangedBy: [
    "lydia_duijvestijn@nl.ibm.com - 2019-03-04T09:11:53.268Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-03-04T09:14:08.575Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-03-04T09:14:51.970Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-03-04T09:15:18.965Z",
    "lydia_duijvestijn@nl.ibm.com - 2019-03-11T09:31:35.260Z"
    ]
    },
    {
    id: "724360426167d03c9a141be13cd8403f",
    title: "Ireland Patent Initiative and Summer of Patents",
    lastChangedBy: [
    "CRMIHAI1@ie.ibm.com - 2019-05-31T10:45:41.412Z",
    "stefanoo@it.ibm.com - 2019-05-31T12:01:50.370Z",
    "CRMIHAI1@ie.ibm.com - 2019-07-12T12:28:33.862Z",
    "CRMIHAI1@ie.ibm.com - 2019-07-12T12:28:45.419Z",
    "CRMIHAI1@ie.ibm.com - 2019-07-12T12:29:05.335Z"
    ]
    },
    {
    id: "7a1bf735d7621876ae678696579356b1",
    title: "AoT Core team for IoT/Edge",
    lastChangedBy: [
    "ganis@us.ibm.com - 2019-05-06T16:16:10.559Z",
    "ganis@us.ibm.com - 2019-05-06T16:16:28.557Z",
    "ganis@us.ibm.com - 2019-05-06T16:17:17.391Z",
    "ganis@us.ibm.com - 2019-05-06T16:17:21.260Z",
    "ulrike.vauth@de.ibm.com - 2019-05-16T15:16:41.890Z"
    ]
    },
    {
    id: "a00bd1ae9a39832218104b38a64dd032",
    title: "IBM Blockchain Bootcamp Mexico",
    lastChangedBy: [
    "vhernanm@mx1.ibm.com - 2018-12-14T19:48:50.693Z",
    "avillela@br.ibm.com - 2018-12-15T05:23:04.821Z",
    "vhernanm@mx1.ibm.com - 2019-06-07T16:20:10.074Z",
    "vhernanm@mx1.ibm.com - 2019-06-07T16:20:18.423Z",
    "rwilson@us.ibm.com - 2019-06-12T16:21:43.724Z"
    ]
    },
    {
    id: "843039789c307ba8852e343f60cca5a4",
    title: "Hybrid Cloud for Enterprise Customers",
    lastChangedBy: [
    "yannkindelberger@fr.ibm.com - 2019-05-13T12:39:27.165Z",
    "stefanoo@it.ibm.com - 2019-05-13T13:42:59.028Z",
    "yannkindelberger@fr.ibm.com - 2019-06-17T17:27:48.414Z",
    "yannkindelberger@fr.ibm.com - 2019-06-20T07:13:21.661Z",
    "yannkindelberger@fr.ibm.com - 2019-06-20T07:14:21.897Z"
    ]
    },
    {
    id: "e61fac5fc0f62b3ae4b0271fea7c92a2",
    title: "TLC-BR - Patent Workshop 2019",
    lastChangedBy: [
    "svarga@br.ibm.com - 2019-06-28T13:42:29.376Z",
    "svarga@br.ibm.com - 2019-06-28T13:49:00.631Z",
    "svarga@br.ibm.com - 2019-06-28T13:49:20.009Z",
    "svarga@br.ibm.com - 2019-06-28T13:49:28.001Z",
    "svarga@br.ibm.com - 2019-06-28T13:50:58.247Z"
    ]
    },
    {
    id: "6caae0d3c9a3ac5071d06ada15c7342e",
    title: "Mobility as a Service",
    lastChangedBy: [
    "celoessl@us.ibm.com - 2018-12-12T20:43:09.969Z",
    "schouten@us.ibm.com - 2019-03-21T15:19:55.525Z",
    "miro.holecy@se.ibm.com - 2019-04-30T10:26:42.095Z",
    "miro.holecy@se.ibm.com - 2019-06-28T12:40:51.483Z",
    "miro.holecy@se.ibm.com - 2019-06-28T12:42:01.736Z"
    ]
    },
    {
    id: "7d78f32dd447563c78949ee2df5f3d39",
    title: "Insurance opportunities to expand IBM's Blockchain Platform",
    lastChangedBy: [
    "fmbutt@us.ibm.com - 2019-04-22T20:53:44.990Z",
    "fmbutt@us.ibm.com - 2019-04-22T20:54:18.779Z",
    "fmbutt@us.ibm.com - 2019-07-22T13:55:47.991Z",
    "fmbutt@us.ibm.com - 2019-07-22T13:56:55.697Z",
    "fmbutt@us.ibm.com - 2019-07-22T13:57:03.159Z"
    ]
    },
    {
    id: "12db68bd0bcc1f73c4f783ec4822ada3",
    title: "Technology enablement of future cognitive systems",
    lastChangedBy: [
    "ravikuma@us.ibm.com - 2018-04-11T01:59:30.540Z",
    "ravikuma@us.ibm.com - 2018-07-19T17:52:42.846Z",
    "ravikuma@us.ibm.com - 2018-07-19T17:53:46.543Z",
    "ravikuma@us.ibm.com - 2018-07-19T17:54:12.881Z",
    "rdivakar@us.ibm.com - 2019-02-14T15:15:19.808Z"
    ]
    },
    {
    id: "2578c2ee25256b4b1aa750978f973e14",
    title: "Education series on the various Operating Systems that run on IBM Z Systems",
    lastChangedBy: [
    "natesan@us.ibm.com - 2019-06-14T15:40:32.004Z",
    "natesan@us.ibm.com - 2019-06-14T15:45:24.439Z",
    "natesan@us.ibm.com - 2019-06-14T15:45:40.836Z",
    "natesan@us.ibm.com - 2019-06-14T15:46:51.936Z",
    "rradclif@us.ibm.com - 2019-06-14T16:54:56.949Z"
    ]
    },
    {
    id: "9520f76e46a286b32cf19f361ea55700",
    title: "IBM Q Ambassadors",
    lastChangedBy: [
    "bosmaj@us.ibm.com - 2018-03-26T14:14:13.001Z",
    "CORVDS@nl.ibm.com - 2018-03-26T14:20:24.682Z",
    "CORVDS@nl.ibm.com - 2018-03-26T14:20:52.875Z",
    "CORVDS@nl.ibm.com - 2018-03-26T14:21:23.945Z",
    "anickels@us.ibm.com - 2018-03-27T15:24:05.085Z"
    ]
    },
    {
    id: "da94d10a15d8cd75cf43aeb6933da0dc",
    title: "Teach Blockchain to faculty via the IBM Skills Academy ",
    lastChangedBy: [
    "malaika@us.ibm.com - 2019-01-30T18:13:06.846Z",
    "malaika@us.ibm.com - 2019-01-30T18:16:41.952Z",
    "malaika@us.ibm.com - 2019-01-30T18:17:11.262Z",
    "chris_nott@uk.ibm.com - 2019-01-31T06:50:54.273Z",
    "malaika@us.ibm.com - 2019-02-22T10:50:11.005Z"
    ]
    },
    {
    id: "b57498a51e1f5c86c627fdac49a33b7b",
    title: "Swat Team for developing MVPs for Customer",
    lastChangedBy: [
    "bittrich@pe.ibm.com - 2019-01-03T17:07:36.315Z",
    "daniels@pe.ibm.com - 2019-01-10T17:24:29.753Z",
    "daniels@pe.ibm.com - 2019-07-12T13:25:07.456Z",
    "daniels@pe.ibm.com - 2019-07-12T13:26:01.218Z",
    "daniels@pe.ibm.com - 2019-07-12T13:26:05.289Z"
    ]
    },
    {
    id: "0e0885350763c282b6dcd954b8d62be1",
    title: "Cognitive Technical Vitality",
    lastChangedBy: [
    "rbkrishn@us.ibm.com - 2019-02-25T19:41:06.389Z",
    "rbkrishn@us.ibm.com - 2019-06-19T19:13:25.266Z",
    "rbkrishn@us.ibm.com - 2019-07-15T22:36:09.536Z",
    "rbkrishn@us.ibm.com - 2019-07-15T22:43:44.226Z",
    "rbkrishn@us.ibm.com - 2019-07-15T22:43:50.143Z"
    ]
    },
    {
    id: "3fa330bc7e2d1d5630d67d8051d608c7",
    title: "Tech Vitality and Eminence at TEC NCR ",
    lastChangedBy: [
    "debanjana.dasgupta@in.ibm.com - 2019-07-05T05:18:01.884Z",
    "debanjana.dasgupta@in.ibm.com - 2019-07-05T05:18:27.838Z",
    "debanjana.dasgupta@in.ibm.com - 2019-07-05T05:19:16.568Z",
    "debanjana.dasgupta@in.ibm.com - 2019-07-05T05:20:28.201Z",
    "gandhis@au1.ibm.com - 2019-07-24T13:07:40.620Z"
    ]
    },
    {
    id: "efbccc5256fd0c608c9dcee3a3327d69",
    title: "Develop education program of data scientists for Japanese clients",
    lastChangedBy: [
    "HIDESHI@jp.ibm.com - 2018-07-18T22:09:43.638Z",
    "rwilson@us.ibm.com - 2018-08-07T23:36:03.993Z",
    "rwilson@us.ibm.com - 2018-08-08T18:21:29.005Z",
    "rwilson@us.ibm.com - 2018-08-08T18:31:35.290Z",
    "HIDESHI@jp.ibm.com - 2018-11-22T07:03:30.540Z"
    ]
    },
    {
    id: "3c4e5f6c071267b35f3223a911ef1cb2",
    title: "Innovation SWAT Team",
    lastChangedBy: [
    "theresac@us.ibm.com - 2019-01-03T16:54:14.368Z",
    "theresac@us.ibm.com - 2019-01-03T16:55:55.217Z",
    "bittrich@pe.ibm.com - 2019-01-03T17:00:51.522Z",
    "bittrich@pe.ibm.com - 2019-01-10T16:58:37.321Z",
    "daniels@pe.ibm.com - 2019-01-10T17:16:34.447Z"
    ]
    },
    {
    id: "d3f3ddf4193c08fc7918f87677a123c1",
    title: "TCA: Ethical Impact on Artificial Intelligence",
    lastChangedBy: [
    "cgolia@ar.ibm.com - 2019-04-23T14:39:01.547Z",
    "cgolia@ar.ibm.com - 2019-04-23T18:45:17.380Z",
    "cgolia@ar.ibm.com - 2019-04-23T18:46:30.960Z",
    "cgolia@ar.ibm.com - 2019-04-24T18:20:31.973Z",
    "avillela@br.ibm.com - 2019-04-24T18:27:49.252Z"
    ]
    },
    {
    id: "15e460041a5e1c1c5b5f52ffe049eae3",
    title: "TSLC Patent Team Jumpstart !",
    lastChangedBy: [
    "smillign@us.ibm.com - 2018-12-04T16:19:08.554Z",
    "smillign@us.ibm.com - 2018-12-04T16:20:05.605Z",
    "sprouts@us.ibm.com - 2018-12-04T16:30:08.786Z",
    "smillign@us.ibm.com - 2018-12-04T17:22:48.201Z",
    "sprouts@us.ibm.com - 2018-12-04T17:27:17.829Z"
    ]
    },
    {
    id: "17fcbdc62cbf8ab1732bbf98cd490684",
    title: "University outreach program for the Government and Education Industries",
    lastChangedBy: [
    "pmanocha@in.ibm.com - 2019-01-09T13:32:57.452Z",
    "dsaugata@in.ibm.com - 2019-01-22T15:25:29.213Z",
    "rwilson@us.ibm.com - 2019-01-23T02:35:02.450Z",
    "dsaugata@in.ibm.com - 2019-06-13T13:14:03.830Z",
    "dsaugata@in.ibm.com - 2019-06-13T13:15:16.151Z"
    ]
    },
    {
    id: "e7202aeb1f6398a6cbf71619685c0bbe",
    title: "How to become succesfull within AIops technology",
    lastChangedBy: [
    "PVE@dk.ibm.com - 2019-04-12T14:29:58.023Z",
    "PVE@dk.ibm.com - 2019-04-15T10:10:57.092Z",
    "stefanoo@it.ibm.com - 2019-04-15T12:21:26.132Z",
    "PVE@dk.ibm.com - 2019-04-17T13:39:37.761Z",
    "PVE@dk.ibm.com - 2019-04-17T13:39:48.614Z"
    ]
    },
    {
    id: "b971142bd3f97125d831b787339a65aa",
    title: "POV: Capital Projects - Blockchain for management of engineering information",
    lastChangedBy: [
    "pavel.sementsov@uk.ibm.com - 2019-03-21T13:16:04.720Z",
    "pavel.sementsov@uk.ibm.com - 2019-05-01T15:51:33.786Z",
    "pavel.sementsov@uk.ibm.com - 2019-05-01T15:52:06.218Z",
    "pavel.sementsov@uk.ibm.com - 2019-05-01T15:53:00.674Z",
    "pavel.sementsov@uk.ibm.com - 2019-07-18T06:27:50.804Z"
    ]
    },
    {
    id: "2acd3ac0a215e521cbbe607fd15605bb",
    title: "Kubeflow on POWER",
    lastChangedBy: [
    "liugya@cn.ibm.com - 2019-07-24T07:26:56.210Z",
    "liugya@cn.ibm.com - 2019-07-24T07:29:50.499Z",
    "liugya@cn.ibm.com - 2019-07-25T10:23:35.608Z",
    "liugya@cn.ibm.com - 2019-07-25T10:23:40.224Z",
    "liugya@cn.ibm.com - 2019-07-25T10:25:05.887Z"
    ]
    },
    {
    id: "12db68bd0bcc1f73c4f783ec481fe542",
    title: "Practical Operational Modelling - OM Revisions",
    lastChangedBy: [
    "kevin_robson@uk.ibm.com - 2018-10-19T15:37:58.532Z",
    "kevin_robson@uk.ibm.com - 2018-10-19T15:38:05.135Z",
    "dbennet@us.ibm.com - 2018-12-14T19:51:56.566Z",
    "kevin_robson@uk.ibm.com - 2019-02-01T16:13:48.138Z",
    "kevin_robson@uk.ibm.com - 2019-02-01T16:21:25.336Z"
    ]
    },
    {
    id: "b9880e3bacda4c5bd39997184612538b",
    title: "Externally facing IBM hosted profiles for Academy Members",
    lastChangedBy: [
    "mike_wilks@uk.ibm.com - 2019-05-29T13:17:39.846Z",
    "mike_wilks@uk.ibm.com - 2019-05-29T13:17:45.964Z",
    "mike_wilks@uk.ibm.com - 2019-06-12T06:41:22.527Z",
    "mike_wilks@uk.ibm.com - 2019-06-14T13:09:17.692Z",
    "mike_wilks@uk.ibm.com - 2019-06-14T13:09:25.824Z"
    ]
    },
    {
    id: "3ae97a927bba3e5af6717d836e840730",
    title: "Quantum Computing Invention Mentor Community",
    lastChangedBy: [
    "florian_graf@ch.ibm.com - 2019-03-04T14:59:39.107Z",
    "jared.limberg@us.ibm.com - 2019-03-06T04:06:51.578Z",
    "jared.limberg@us.ibm.com - 2019-03-06T04:07:14.324Z",
    "dbennet@us.ibm.com - 2019-03-08T16:37:19.219Z",
    "frederik.floether@ch.ibm.com - 2019-03-15T09:21:30.465Z"
    ]
    },
    {
    id: "e91ce778ed797b905d40c3e0a3b96397",
    title: "TLC-BR - Technical Agenda 2019 - Introducing IBM and Career Path to the Technical Community Newcomers event",
    lastChangedBy: [
    "isabelm@br.ibm.com - 2019-04-10T22:03:23.206Z",
    "isabelm@br.ibm.com - 2019-04-10T22:04:54.925Z",
    "isabelm@br.ibm.com - 2019-04-10T22:05:16.858Z",
    "isabelm@br.ibm.com - 2019-04-10T22:05:42.182Z",
    "avillela@br.ibm.com - 2019-04-10T22:28:33.482Z"
    ]
    },
    {
    id: "13e1486a3c7160909ff8867ffbb5ab03",
    title: "Developer engagement with federal and public sector integrators",
    lastChangedBy: [
    "victor_brown@us.ibm.com - 2018-12-27T14:38:52.284Z",
    "bosmaj@us.ibm.com - 2019-02-28T15:27:08.607Z",
    "bosmaj@us.ibm.com - 2019-04-24T02:39:47.554Z",
    "bosmaj@us.ibm.com - 2019-04-24T02:39:52.547Z",
    "bosmaj@us.ibm.com - 2019-06-06T07:00:05.086Z"
    ]
    },
    {
    id: "5cf291f49bc6d757854a0c2a2b340ed5",
    title: "Rochester TVC Monthly Technical Talks 2018 - 2019 -- 'Lunch and Learn' ",
    lastChangedBy: [
    "sandy89@us.ibm.com - 2019-04-03T14:46:01.780Z",
    "sandy89@us.ibm.com - 2019-04-03T14:46:06.276Z",
    "sandy89@us.ibm.com - 2019-04-05T16:14:56.798Z",
    "sandy89@us.ibm.com - 2019-04-05T16:15:26.670Z",
    "sandy89@us.ibm.com - 2019-04-05T16:15:54.107Z"
    ]
    },
    {
    id: "e1c827def783f8ac62ad9b20962b9a83",
    title: "A Conversation about Inventing with AAAS-Lemelson Invention Ambassadors ",
    lastChangedBy: [
    "baaron@us.ibm.com - 2019-03-14T17:25:25.064Z",
    "baaron@us.ibm.com - 2019-03-14T17:25:39.666Z",
    "sprouts@us.ibm.com - 2019-03-14T17:50:35.003Z",
    "baaron@us.ibm.com - 2019-03-14T20:35:46.208Z",
    "sprouts@us.ibm.com - 2019-03-20T12:27:58.342Z"
    ]
    },
    {
    id: "b17c51d8be41b666155965a5e91043b0",
    title: "Brainstorming session toolkits",
    lastChangedBy: [
    "janah@us.ibm.com - 2019-06-27T13:09:07.244Z",
    "janah@us.ibm.com - 2019-06-27T13:10:14.827Z",
    "janah@us.ibm.com - 2019-07-25T16:39:43.511Z",
    "janah@us.ibm.com - 2019-07-25T16:40:24.367Z",
    "janah@us.ibm.com - 2019-07-25T16:42:59.668Z"
    ]
    },
    {
    id: "8b144fee771c9da515726afedbb49b5c",
    title: "Client Technical Leader (CTL) Industry Workshops Badge creation",
    lastChangedBy: [
    "rwilson@us.ibm.com - 2018-08-08T18:31:12.948Z",
    "ssloan2@us.ibm.com - 2018-08-23T09:17:43.675Z",
    "ssloan2@us.ibm.com - 2018-09-16T20:35:56.847Z",
    "ssloan2@us.ibm.com - 2018-09-16T20:37:07.986Z",
    "ssloan2@us.ibm.com - 2019-02-28T14:09:21.791Z"
    ]
    },
    {
    id: "792e9b99d5212ed51cacb8675b4fb019",
    title: "Amazon.com, Alibaba and Co – Stay away or come closer?",
    lastChangedBy: [
    "wouter.denayer@be.ibm.com - 2019-04-17T07:55:51.545Z",
    "wouter.denayer@be.ibm.com - 2019-04-17T07:56:36.229Z",
    "wouter.denayer@be.ibm.com - 2019-04-17T07:58:56.950Z",
    "wouter.denayer@be.ibm.com - 2019-04-17T08:01:26.720Z",
    "celoessl@us.ibm.com - 2019-04-17T12:49:07.582Z"
    ]
    },
    {
    id: "73e37d313513e66d7231117993c9bc44",
    title: "Chicagoland Information Exchange - Learning Summit 2019",
    lastChangedBy: [
    "brooksn@us.ibm.com - 2019-03-21T15:05:03.338Z",
    "brooksn@us.ibm.com - 2019-03-21T15:05:04.857Z",
    "brooksn@us.ibm.com - 2019-03-28T01:58:37.437Z",
    "brooksn@us.ibm.com - 2019-03-28T02:10:13.651Z",
    "brooksn@us.ibm.com - 2019-06-25T15:14:41.700Z"
    ]
    },
    {
    id: "c8cdb8cced5860c05be6a49e16c12938",
    title: "Knights of the CLOUD Table",
    lastChangedBy: [
    "Pablo.Salazar.Linares1@ibm.com - 2019-04-04T17:51:12.232Z",
    "Pablo.Salazar.Linares1@ibm.com - 2019-04-04T17:59:32.267Z",
    "Pablo.Salazar.Linares1@ibm.com - 2019-04-04T18:01:34.071Z",
    "avillela@br.ibm.com - 2019-04-04T19:10:01.431Z",
    "schouten@us.ibm.com - 2019-04-11T13:36:11.414Z"
    ]
    },
    {
    id: "ca618db183390d1ca8b4be2c9e769967",
    title: "Architectural Decision Point - CEE Market Point of View",
    lastChangedBy: [
    "laurentiu.ghergu@ro.ibm.com - 2019-03-03T21:50:10.898Z",
    "laurentiu.ghergu@ro.ibm.com - 2019-03-03T21:50:14.825Z",
    "laurentiu.ghergu@ro.ibm.com - 2019-03-28T19:37:14.289Z",
    "karolina.marzantowicz@pl.ibm.com - 2019-04-05T07:45:03.029Z",
    "karolina.marzantowicz@pl.ibm.com - 2019-04-05T07:46:30.593Z"
    ]
    },
    {
    id: "c6d4c81bcb4eec23624d7e2326ebdf1a",
    title: "REVITALIZATION OF EXISTING GDL INVENTION CIRCLES AND CREATION OF NEW ONES IN CDMX AND MTY",
    lastChangedBy: [
    "jmavalos@mx1.ibm.com - 2019-01-10T19:18:49.736Z",
    "jmavalos@mx1.ibm.com - 2019-01-10T19:21:47.078Z",
    "sara_weber@us.ibm.com - 2019-01-10T20:21:07.255Z",
    "jmavalos@mx1.ibm.com - 2019-05-24T15:17:10.371Z",
    "jmavalos@mx1.ibm.com - 2019-05-24T15:24:41.448Z"
    ]
    },
    {
    id: "7fcab0db083a55602acfdd28aa579524",
    title: "Dublin Technical Events Exchange",
    lastChangedBy: [
    "CRMIHAI1@ie.ibm.com - 2018-11-12T18:14:36.124Z",
    "CRMIHAI1@ie.ibm.com - 2018-11-13T09:58:06.755Z",
    "stefanoo@it.ibm.com - 2018-11-28T12:57:37.857Z",
    "PANPANLI@ie.ibm.com - 2019-02-06T17:19:23.732Z",
    "PANPANLI@ie.ibm.com - 2019-02-06T17:20:49.523Z"
    ]
    },
    {
    id: "67a7382aacde9b03a223daaa65006b4c",
    title: "Improving IBM's Technical Eminence in Japan Academia - Phase 2",
    lastChangedBy: [
    "OHARA@jp.ibm.com - 2019-07-04T07:44:23.408Z",
    "sprouts@us.ibm.com - 2019-07-10T13:18:51.615Z",
    "OHARA@jp.ibm.com - 2019-07-18T04:31:29.607Z",
    "OHARA@jp.ibm.com - 2019-07-18T04:33:08.384Z",
    "sprouts@us.ibm.com - 2019-07-18T10:42:15.099Z"
    ]
    },
    {
    id: "74d23f266da1de21be3104998a94593f",
    title: "2019 European Hybrid Cloud Architectural Decision Point (ADP) Development",
    lastChangedBy: [
    "roberto_raffo@it.ibm.com - 2019-06-17T13:11:34.542Z",
    "roberto_raffo@it.ibm.com - 2019-06-17T13:11:41.698Z",
    "schouten@us.ibm.com - 2019-06-17T14:54:16.814Z",
    "roberto_raffo@it.ibm.com - 2019-06-18T09:21:07.041Z",
    "roberto_raffo@it.ibm.com - 2019-07-02T14:58:25.918Z"
    ]
    },
    {
    id: "28cebf3d1a922932931eea734fbb041a",
    title: "AoT Emerging Technology 2019",
    lastChangedBy: [
    "bosmaj@us.ibm.com - 2019-05-07T17:04:10.527Z",
    "bosmaj@us.ibm.com - 2019-05-07T17:06:44.320Z",
    "bosmaj@us.ibm.com - 2019-05-07T17:08:02.365Z",
    "whchamb@us.ibm.com - 2019-05-07T17:13:02.057Z"
    ]
    },
    {
    id: "12db68bd0bcc1f73c4f783ec481ddbbd",
    title: "Integration of Blockchain with Established Technologies",
    lastChangedBy: [
    "larissa.auberger@de.ibm.com - 2018-08-06T07:52:18.599Z",
    "rwilson@us.ibm.com - 2018-08-07T23:36:31.799Z",
    "rwilson@us.ibm.com - 2018-08-08T18:22:00.328Z",
    "rwilson@us.ibm.com - 2018-08-08T18:31:43.152Z",
    "larissa.auberger@de.ibm.com - 2019-02-28T08:04:23.677Z"
    ]
    },
    {
    id: "30d04def415ffbeef29a887beec7ed9a",
    title: "DACH Inventor Circle",
    lastChangedBy: [
    "frederik.floether@ch.ibm.com - 2019-03-15T09:20:29.644Z",
    "frederik.floether@ch.ibm.com - 2019-03-24T12:43:27.965Z",
    "frederik.floether@ch.ibm.com - 2019-03-24T12:45:25.481Z",
    "gandhis@au1.ibm.com - 2019-03-24T21:10:49.961Z",
    "frederik.floether@ch.ibm.com - 2019-04-01T10:47:50.033Z"
    ]
    },
    {
    id: "4e916e2f02915adcce7c55f9183ec233",
    title: "Nordic TEC - Driving insights and value from data in the Nordic market",
    lastChangedBy: [
    "pal.krogdahl@fi.ibm.com - 2019-05-17T07:42:27.082Z",
    "pal.krogdahl@fi.ibm.com - 2019-05-17T07:43:25.096Z",
    "pal.krogdahl@fi.ibm.com - 2019-05-17T07:44:55.255Z",
    "stefanoo@it.ibm.com - 2019-05-23T15:08:47.002Z"
    ]
    },
    {
    id: "d6cc16e1b9ff3ac638107698a93149bd",
    title: "Increase IBMers awareness, adoption, and contribution to open source technologies in 2019 ",
    lastChangedBy: [
    "malaika@us.ibm.com - 2019-02-06T07:48:23.752Z",
    "malaika@us.ibm.com - 2019-02-06T08:01:14.995Z",
    "malaika@us.ibm.com - 2019-02-06T08:01:26.252Z",
    "malaika@us.ibm.com - 2019-02-13T15:03:54.479Z",
    "malaika@us.ibm.com - 2019-04-22T20:35:05.606Z"
    ]
    },
    {
    id: "de1b6b2dfe0c89268f7e212049a5d6ff",
    title: "Advancing Methods to Detect and Predict the Propagation of Wildfires",
    lastChangedBy: [
    "lloydt@us.ibm.com - 2018-10-15T01:39:14.903Z",
    "lloydt@us.ibm.com - 2018-10-17T02:04:23.366Z",
    "lloydt@us.ibm.com - 2018-10-24T00:34:53.543Z",
    "lloydt@us.ibm.com - 2018-12-20T17:39:00.985Z",
    "Andy.M.Ramos@ibm.com - 2019-04-15T15:55:28.292Z"
    ]
    },
    {
    id: "0e0885350763c282b6dcd954b8dbdcde",
    title: "Let's make it - Enablement and Best Practices for Creating Winning Prototypes",
    lastChangedBy: [
    "jens-peter.schleinitz@de.ibm.com - 2019-07-05T16:23:03.383Z",
    "jens-peter.schleinitz@de.ibm.com - 2019-07-05T16:24:36.070Z",
    "jens-peter.schleinitz@de.ibm.com - 2019-07-05T16:24:54.980Z",
    "jens-peter.schleinitz@de.ibm.com - 2019-07-05T16:25:49.929Z",
    "jens-peter.schleinitz@de.ibm.com - 2019-07-05T16:25:53.739Z"
    ]
    },
    {
    id: "9a68920cf5816d0e8c99e5f3545f89e3",
    title: "Journey to become an inventor 2019 - Middle East and Africa (MEA)",
    lastChangedBy: [
    "SALMAS@eg.ibm.com - 2019-08-02T16:44:02.427Z",
    "SALMAS@eg.ibm.com - 2019-08-02T16:44:14.636Z",
    "SALMAS@eg.ibm.com - 2019-08-06T11:54:03.693Z",
    "SALMAS@eg.ibm.com - 2019-08-06T11:54:24.179Z",
    "SALMAS@eg.ibm.com - 2019-08-06T11:58:37.460Z"
    ]
    },
    {
    id: "8e1570596970c10e4f47e9de7a8f6e74",
    title: "IBM Adobe - Single Page Application Artifacts",
    lastChangedBy: [
    "Jayakumar.Manoharan@ibm.com - 2019-05-07T13:00:25.947Z",
    "mkeen@us.ibm.com - 2019-05-13T17:03:08.175Z",
    "schouten@us.ibm.com - 2019-05-13T17:35:14.100Z",
    "schouten@us.ibm.com - 2019-05-13T17:36:46.988Z",
    "schouten@us.ibm.com - 2019-05-13T17:38:12.528Z"
    ]
    },
    {
    id: "ad697a11840b562d103508100891172d",
    title: "BlueHack ",
    lastChangedBy: [
    "alanpic@us.ibm.com - 2019-06-02T22:26:44.008Z",
    "schouten@us.ibm.com - 2019-08-02T19:40:52.225Z",
    "schouten@us.ibm.com - 2019-08-07T12:05:10.651Z",
    "schouten@us.ibm.com - 2019-08-07T12:07:21.116Z",
    "schouten@us.ibm.com - 2019-08-07T12:08:13.630Z"
    ]
    },
    {
    id: "3e5721a9f47284d70c60a49be4fe2889",
    title: "Nordic TEC - Platformification a Nordic Perspective",
    lastChangedBy: [
    "pal.krogdahl@fi.ibm.com - 2019-05-17T05:46:06.502Z",
    "pal.krogdahl@fi.ibm.com - 2019-05-22T10:48:28.904Z",
    "pal.krogdahl@fi.ibm.com - 2019-05-22T10:48:36.437Z",
    "pal.krogdahl@fi.ibm.com - 2019-06-24T06:52:29.403Z",
    "pal.krogdahl@fi.ibm.com - 2019-06-24T06:52:43.194Z"
    ]
    },
    {
    id: "3b2ae8ed158b499d0ba1e39aff192cbe",
    title: "Artificial Intelligence - Machine Learning and Deep Learning",
    lastChangedBy: [
    "Andy.M.Ramos@ibm.com - 2019-07-15T16:43:42.612Z",
    "Andy.M.Ramos@ibm.com - 2019-07-18T11:48:23.757Z",
    "Andy.M.Ramos@ibm.com - 2019-07-18T11:54:40.168Z",
    "Andy.M.Ramos@ibm.com - 2019-07-18T11:54:46.056Z",
    "Andy.M.Ramos@ibm.com - 2019-07-18T11:56:37.544Z"
    ]
    },
    {
    id: "2f5428c2551a63a9e672b5c18ecd5a30",
    title: "GTS AI/DS Guild - The art of Microservices - Lessons Learnt ",
    lastChangedBy: [
    "rongotts@au1.ibm.com - 2019-04-18T04:38:18.946Z",
    "rongotts@au1.ibm.com - 2019-04-18T04:38:59.619Z",
    "rongotts@au1.ibm.com - 2019-04-18T04:39:23.133Z",
    "rongotts@au1.ibm.com - 2019-04-18T04:39:37.003Z",
    "rongotts@au1.ibm.com - 2019-04-18T04:39:51.959Z"
    ]
    },
    {
    id: "13458b3f0fb7c5ad7f09d29210cdd2cf",
    title: "AoT support to the 'Break the Cycle' mainframe global initiative",
    lastChangedBy: [
    "nicochillemi@it.ibm.com - 2019-07-18T12:02:15.875Z",
    "nicochillemi@it.ibm.com - 2019-07-18T12:02:29.552Z",
    "nicochillemi@it.ibm.com - 2019-07-18T12:02:35.792Z",
    "nicochillemi@it.ibm.com - 2019-07-18T12:04:19.728Z",
    "nicochillemi@it.ibm.com - 2019-07-18T12:04:25.228Z"
    ]
    },
    {
    id: "8b144fee771c9da515726afedbc00937",
    title: "Watson@Nordic: Local language enablement for Watson Developer Cloud Services",
    lastChangedBy: [
    "rwilson@us.ibm.com - 2018-08-08T18:31:37.357Z",
    "loek.vredenberg@no.ibm.com - 2018-12-06T07:20:38.181Z",
    "loek.vredenberg@no.ibm.com - 2018-12-06T07:25:46.611Z",
    "loek.vredenberg@no.ibm.com - 2019-06-13T06:49:03.227Z",
    "loek.vredenberg@no.ibm.com - 2019-06-13T06:50:08.893Z"
    ]
    },
    {
    id: "26246a335e7071a6ab1461d52849e949",
    title: "TME Network Workload Activities",
    lastChangedBy: [
    "singham@us.ibm.com - 2019-06-28T19:02:30.489Z",
    "celoessl@us.ibm.com - 2019-07-10T16:07:36.398Z",
    "singham@us.ibm.com - 2019-08-06T16:09:35.599Z",
    "singham@us.ibm.com - 2019-08-06T16:12:21.474Z",
    "singham@us.ibm.com - 2019-08-06T16:12:28.847Z"
    ]
    },
    {
    id: "f5dea0a3e4738871d3c0a84873a43542",
    title: "Legacy Modernization in the Cloud era: 2018 update and IBM Point of View",
    lastChangedBy: [
    "pommier@us.ibm.com - 2018-07-25T03:03:43.536Z",
    "theresac@us.ibm.com - 2018-07-25T12:21:43.773Z",
    "pommier@us.ibm.com - 2018-12-20T07:17:13.101Z",
    "pommier@us.ibm.com - 2019-06-28T08:17:37.921Z",
    "pommier@us.ibm.com - 2019-06-28T08:18:55.070Z"
    ]
    },
    {
    id: "e88aea133c231441de8721fc3e9475c6",
    title: "Improve Invention Awareness",
    lastChangedBy: [
    "CORVDS@nl.ibm.com - 2018-09-28T16:19:57.386Z",
    "freddy_lorge@be.ibm.com - 2019-07-16T16:35:55.521Z",
    "freddy_lorge@be.ibm.com - 2019-08-08T14:59:53.921Z",
    "freddy_lorge@be.ibm.com - 2019-08-08T15:03:19.861Z",
    "freddy_lorge@be.ibm.com - 2019-08-08T15:16:49.795Z"
    ]
    },
    {
    id: "da30412e08822d2d9daf4fced446e748",
    title: "Deployment of full cycle test automation and automatic fault localization with combinatorial test design",
    lastChangedBy: [
    "debbyt@us.ibm.com - 2019-06-06T14:35:05.565Z",
    "debbyt@us.ibm.com - 2019-06-06T14:35:42.144Z",
    "debbyt@us.ibm.com - 2019-06-06T14:36:11.995Z",
    "debbyt@us.ibm.com - 2019-06-06T14:36:30.779Z",
    "debbyt@us.ibm.com - 2019-06-06T14:37:35.187Z"
    ]
    },
    {
    id: "08a933e447ddd12659d5bb16f0b72c7e",
    title: "Inspiring Talks 2019",
    lastChangedBy: [
    "YAFU@jp.ibm.com - 2019-07-31T06:20:23.220Z",
    "YAFU@jp.ibm.com - 2019-08-07T11:01:32.983Z",
    "YAFU@jp.ibm.com - 2019-08-07T11:01:38.669Z",
    "YAFU@jp.ibm.com - 2019-08-08T06:10:55.278Z",
    "YAFU@jp.ibm.com - 2019-08-08T06:11:00.998Z"
    ]
    },
    {
    id: "4fc577026f0d421c5eef1507c36c8fdb",
    title: "Edge Video Processing Platform",
    lastChangedBy: [
    "hbharmal@ca.ibm.com - 2019-06-18T16:04:33.850Z",
    "hbharmal@ca.ibm.com - 2019-06-18T16:05:01.832Z",
    "hbharmal@ca.ibm.com - 2019-06-18T16:05:14.187Z",
    "hbharmal@ca.ibm.com - 2019-06-18T16:06:17.328Z",
    "celoessl@us.ibm.com - 2019-06-18T22:28:07.485Z"
    ]
    },
    {
    id: "e88aea133c231441de8721fc3e92f841",
    title: "Global SLA Performance Platform",
    lastChangedBy: [
    "rodney.wallace@us.ibm.com - 2019-03-28T08:36:17.147Z",
    "rodney.wallace@us.ibm.com - 2019-03-28T08:45:03.829Z",
    "zolo@us.ibm.com - 2019-06-27T11:54:39.132Z",
    "zolo@us.ibm.com - 2019-06-27T11:54:46.548Z",
    "zolo@us.ibm.com - 2019-06-27T15:01:45.780Z"
    ]
    },
    {
    id: "5918db50a19e817c74a44f9c4994ad0a",
    title: "Scaling Compliance in Digital Enterprises",
    lastChangedBy: [
    "victor_brown@us.ibm.com - 2018-12-27T14:39:43.365Z",
    "bosmaj@us.ibm.com - 2019-02-28T15:26:16.722Z",
    "bosmaj@us.ibm.com - 2019-04-24T02:40:46.823Z",
    "bosmaj@us.ibm.com - 2019-04-24T02:40:50.355Z",
    "bosmaj@us.ibm.com - 2019-06-06T07:01:00.365Z"
    ]
    },
    {
    id: "0ee5e5611f838dc80997166ccb1823e1",
    title: "TLC-Brazil - Editorial 2019 - Mini Paper publication",
    lastChangedBy: [
    "svarga@br.ibm.com - 2019-04-04T20:36:08.406Z",
    "svarga@br.ibm.com - 2019-04-04T20:37:06.006Z",
    "svarga@br.ibm.com - 2019-06-28T14:24:02.766Z",
    "svarga@br.ibm.com - 2019-06-28T14:24:09.067Z",
    "svarga@br.ibm.com - 2019-06-28T14:24:28.880Z"
    ]
    },
    {
    id: "7671b92666200a1272855ce6ecba5d12",
    title: "Serverless technology for data scientist (multiple architecture)",
    lastChangedBy: [
    "Khapov.Igor@ru.ibm.com - 2018-10-17T14:35:33.520Z",
    "Khapov.Igor@ru.ibm.com - 2018-10-17T14:37:57.365Z",
    "stefanoo@it.ibm.com - 2018-10-19T07:44:04.418Z",
    "Khapov.Igor@ru.ibm.com - 2018-12-21T14:15:34.351Z",
    "Khapov.Igor@ru.ibm.com - 2018-12-27T12:22:35.437Z"
    ]
    },
    {
    id: "ae3a0f777ff1823675656ac02a0be1d7",
    title: "Consumer Industry Reference Architecture Modernization - Digital Experience (DE)",
    lastChangedBy: [
    "senapati@us.ibm.com - 2019-07-24T12:33:49.140Z",
    "senapati@us.ibm.com - 2019-08-07T12:13:14.978Z",
    "senapati@us.ibm.com - 2019-08-07T12:14:53.127Z",
    "senapati@us.ibm.com - 2019-08-07T12:16:23.593Z",
    "senapati@us.ibm.com - 2019-08-07T13:28:37.516Z"
    ]
    },
    {
    id: "49ef09161058e575f821a4167086d051",
    title: "Advanced communication for technical leaders",
    lastChangedBy: [
    "paridhi@us.ibm.com - 2019-05-03T12:51:43.671Z",
    "paridhi@us.ibm.com - 2019-05-03T12:51:53.130Z",
    "paridhi@us.ibm.com - 2019-05-03T12:53:45.221Z",
    "paridhi@us.ibm.com - 2019-05-03T12:54:35.992Z",
    "Andy.M.Ramos@ibm.com - 2019-05-23T17:10:48.617Z"
    ]
    },
    {
    id: "58628b339388cef07bf4ff0a29eaee53",
    title: "Saudi Patent Creation Initiative",
    lastChangedBy: [
    "BUTLER@ae.ibm.com - 2019-01-25T08:21:33.789Z",
    "a.alsabti@sa.ibm.com - 2019-01-30T10:02:49.176Z",
    "rwilson@us.ibm.com - 2019-03-05T17:25:12.722Z",
    "rwilson@us.ibm.com - 2019-03-05T17:25:17.385Z",
    "rwilson@us.ibm.com - 2019-03-05T17:26:10.564Z"
    ]
    },
    {
    id: "57f38d9d487f6265837d81139b4ca4d2",
    title: "Nordic TEC - Data Platform ",
    lastChangedBy: [
    "Tommie.Hallin@se.ibm.com - 2019-07-24T15:09:48.264Z",
    "Tommie.Hallin@se.ibm.com - 2019-08-08T11:55:32.145Z",
    "Tommie.Hallin@se.ibm.com - 2019-08-08T11:55:52.002Z",
    "Tommie.Hallin@se.ibm.com - 2019-08-08T11:56:11.913Z",
    "schouten@us.ibm.com - 2019-08-08T14:09:21.806Z"
    ]
    },
    {
    id: "aa258c4ac0244c7640fd9ac4d9b1ade5",
    title: "Massachusetts Affiliate Interest Groups",
    lastChangedBy: [
    "vbashyam@us.ibm.com - 2019-05-23T18:31:48.852Z",
    "maureen_kraft@us.ibm.com - 2019-06-06T14:42:23.552Z",
    "maureen_kraft@us.ibm.com - 2019-06-11T12:15:16.465Z",
    "maureen_kraft@us.ibm.com - 2019-06-28T19:36:21.582Z",
    "maureen_kraft@us.ibm.com - 2019-06-28T19:59:19.553Z"
    ]
    },
    {
    id: "c277d419c3e443a9ede80ce928bb639e",
    title: "TLC-Brazil - Outreach 2019 - Enterprise Academies",
    lastChangedBy: [
    "avillela@br.ibm.com - 2019-04-11T00:39:00.258Z",
    "avillela@br.ibm.com - 2019-04-11T01:19:02.769Z",
    "avillela@br.ibm.com - 2019-04-11T01:21:07.222Z",
    "avillela@br.ibm.com - 2019-04-11T01:21:22.452Z",
    "avillela@br.ibm.com - 2019-04-11T01:21:24.268Z"
    ]
    },
    {
    id: "7ae3079e32f17a7a128d51c0929d8d43",
    title: "Power Systems manufacturing automation",
    lastChangedBy: [
    "theresac@us.ibm.com - 2019-07-19T19:33:34.008Z",
    "theresac@us.ibm.com - 2019-07-19T19:33:58.617Z",
    "theresac@us.ibm.com - 2019-07-19T19:36:12.476Z",
    "theresac@us.ibm.com - 2019-07-19T19:37:21.092Z",
    "theresac@us.ibm.com - 2019-07-19T19:38:32.300Z"
    ]
    },
    {
    id: "cb56e0f8039b69fa94e1cf365396511e",
    title: "TCA - OpenLab - An open space for technology exploration, learning and technology assests development",
    lastChangedBy: [
    "abalsamo@ar.ibm.com - 2019-07-01T20:12:09.781Z",
    "abalsamo@ar.ibm.com - 2019-07-01T20:30:38.267Z",
    "abalsamo@ar.ibm.com - 2019-07-01T20:30:45.148Z",
    "avillela@br.ibm.com - 2019-07-01T20:34:33.961Z",
    "abalsamo@ar.ibm.com - 2019-07-04T19:45:58.814Z"
    ]
    },
    {
    id: "9f95bea23844cf244f0a2f246ad09ec8",
    title: "Technology in 100 years? Technology and social impacts.",
    lastChangedBy: [
    "KKUBA@jp.ibm.com - 2018-12-16T15:52:01.836Z",
    "KKUBA@jp.ibm.com - 2019-01-29T10:59:42.192Z",
    "KKUBA@jp.ibm.com - 2019-03-07T07:39:49.704Z",
    "KKUBA@jp.ibm.com - 2019-07-02T12:22:46.168Z",
    "KKUBA@jp.ibm.com - 2019-07-02T12:23:33.521Z"
    ]
    },
    {
    id: "e88aea133c231441de8721fc3e9afad9",
    title: "Virtual Incubator for Acquisitions",
    lastChangedBy: [
    "lydia_duijvestijn@nl.ibm.com - 2018-07-08T10:35:41.567Z",
    "lydia_duijvestijn@nl.ibm.com - 2018-07-08T10:36:15.681Z",
    "lydia_duijvestijn@nl.ibm.com - 2018-07-09T10:04:42.028Z",
    "schouten@us.ibm.com - 2018-07-24T14:22:24.061Z",
    "Taida.Buljina-Prohic@us.ibm.com - 2018-12-31T04:49:55.301Z"
    ]
    },
    {
    id: "63b05d483164a1c4f06635170b119ffe",
    title: "IoT Bootcamp - 2019",
    lastChangedBy: [
    "ganis@us.ibm.com - 2019-06-20T21:21:19.606Z",
    "ganis@us.ibm.com - 2019-06-20T21:21:37.976Z",
    "ganis@us.ibm.com - 2019-06-20T21:22:33.144Z",
    "ganis@us.ibm.com - 2019-06-20T21:22:38.343Z",
    "mattb@us.ibm.com - 2019-06-26T18:21:07.271Z"
    ]
    },
    {
    id: "9c6c2f3fb3104de8f07b0c7119a120e2",
    title: "Consumer Industry Reference Architecture Modernization - Intelligent Supply Chain (ISC)",
    lastChangedBy: [
    "schouten@us.ibm.com - 2019-05-15T12:35:17.291Z",
    "schouten@us.ibm.com - 2019-05-15T12:53:25.272Z",
    "CHRISTOPHE.SORRE@fr.ibm.com - 2019-05-16T11:54:58.253Z",
    "CHRISTOPHE.SORRE@fr.ibm.com - 2019-06-18T13:46:14.446Z",
    "CHRISTOPHE.SORRE@fr.ibm.com - 2019-06-18T13:50:41.387Z"
    ]
    },
    {
    id: "d4d6be2a5b909134a9fdfcd586a8208a",
    title: "IBM Video Intelligence, from IVA to IVI",
    lastChangedBy: [
    "angelhbravo@es.ibm.com - 2019-06-27T12:45:20.367Z",
    "angelhbravo@es.ibm.com - 2019-06-27T12:45:36.336Z",
    "angelhbravo@es.ibm.com - 2019-06-27T12:46:33.550Z",
    "angelhbravo@es.ibm.com - 2019-06-27T12:47:35.614Z",
    "stefanoo@it.ibm.com - 2019-07-02T12:11:08.745Z"
    ]
    },
    {
    id: "b1d6be5c97f1f717f53f0f7010169ad3",
    title: "Services IP Development Program",
    lastChangedBy: [
    "mattk@ca.ibm.com - 2019-02-27T19:11:28.625Z",
    "ekline@us.ibm.com - 2019-02-27T19:13:32.849Z",
    "sprouts@us.ibm.com - 2019-02-27T21:42:11.287Z",
    "ekline@us.ibm.com - 2019-04-25T16:05:03.665Z",
    "ekline@us.ibm.com - 2019-04-25T16:05:09.280Z"
    ]
    },
    {
    id: "f0cd53e93f4db71dfa4ac780fcdf1031",
    title: "Using Alicloud in China for Scalable Micro Service Applications",
    lastChangedBy: [
    "elrefai@cn.ibm.com - 2019-03-26T14:07:40.312Z",
    "elrefai@cn.ibm.com - 2019-03-26T14:12:45.577Z",
    "elrefai@cn.ibm.com - 2019-05-14T05:25:52.963Z",
    "elrefai@cn.ibm.com - 2019-07-23T05:07:30.300Z",
    "elrefai@cn.ibm.com - 2019-07-23T05:27:31.899Z"
    ]
    },
    {
    id: "4196f5b495dd6ec08ceea601a416bd0e",
    title: "TLC-BR - Technical Agenda - Regional Technical Exchange 2019 (RTE2019)",
    lastChangedBy: [
    "amelges@br.ibm.com - 2019-05-01T01:55:00.130Z",
    "amelges@br.ibm.com - 2019-05-01T01:55:12.373Z",
    "amelges@br.ibm.com - 2019-05-01T01:55:25.457Z",
    "amelges@br.ibm.com - 2019-05-01T01:55:41.423Z",
    "avillela@br.ibm.com - 2019-05-01T01:58:45.448Z"
    ]
    },
    {
    id: "56727aed4f99975a287dec0f246ad793",
    title: "Future Technology for Government",
    lastChangedBy: [
    "schouten@us.ibm.com - 2019-07-31T16:04:40.700Z",
    "chris_nott@uk.ibm.com - 2019-08-06T07:52:59.728Z",
    "chris_nott@uk.ibm.com - 2019-08-06T07:53:18.627Z",
    "chris_nott@uk.ibm.com - 2019-08-08T13:58:46.436Z",
    "chris_nott@uk.ibm.com - 2019-08-08T13:58:56.830Z"
    ]
    },
    {
    id: "2f25760c28495cab3a9e7434e57370c8",
    title: "Member Value Team 'Shell Initiative'",
    lastChangedBy: [
    "mike_wilks@uk.ibm.com - 2019-05-03T15:55:37.131Z",
    "mike_wilks@uk.ibm.com - 2019-05-03T15:57:19.578Z",
    "mike_wilks@uk.ibm.com - 2019-05-03T15:58:28.723Z",
    "kaschalk@us.ibm.com - 2019-05-03T18:32:38.068Z"
    ]
    },
    {
    id: "ccffe7649f69bdc095ce198fdcf647ab",
    title: "TVC Seminar",
    lastChangedBy: [
    "theresac@us.ibm.com - 2019-05-06T17:18:47.039Z",
    "theresac@us.ibm.com - 2019-05-06T17:20:09.437Z",
    "theresac@us.ibm.com - 2019-05-06T17:22:01.737Z",
    "schouten@us.ibm.com - 2019-05-31T18:31:29.948Z",
    "schouten@us.ibm.com - 2019-05-31T19:02:45.816Z"
    ]
    },
    {
    id: "190a3089900c74a119ebc7993a21e337",
    title: "Enhance technical skills and knowledge across technical population through knowledge sharing and hands-on activities",
    lastChangedBy: [
    "bamiller@us.ibm.com - 2019-07-15T19:11:11.444Z",
    "bamiller@us.ibm.com - 2019-07-15T19:11:16.898Z",
    "bamiller@us.ibm.com - 2019-07-15T19:11:27.876Z",
    "bamiller@us.ibm.com - 2019-07-15T19:11:37.010Z",
    "rradclif@us.ibm.com - 2019-07-24T12:38:00.503Z"
    ]
    },
    {
    id: "e4a5c328eef8b669d941d64383f0068c",
    title: "2019 GTS IS BlueHack - Value Creation",
    lastChangedBy: [
    "borger@ibm.com - 2019-06-02T22:40:21.927Z",
    "borger@ibm.com - 2019-06-02T22:42:22.199Z",
    "borger@ibm.com - 2019-06-02T22:42:55.704Z",
    "borger@ibm.com - 2019-06-02T22:43:02.756Z",
    "alanpic@us.ibm.com - 2019-06-02T22:47:04.539Z"
    ]
    },
    {
    id: "efbccc5256fd0c608c9dcee3a33b1361",
    title: "TEC Central - Workgroup Activities Management",
    lastChangedBy: [
    "UweKrauter@de.ibm.com - 2018-07-28T15:45:13.194Z",
    "UweKrauter@de.ibm.com - 2018-07-28T15:46:23.677Z",
    "rwilson@us.ibm.com - 2018-08-07T23:36:08.056Z",
    "rwilson@us.ibm.com - 2018-08-08T18:21:31.501Z",
    "rwilson@us.ibm.com - 2018-08-08T18:31:33.486Z"
    ]
    },
    {
    id: "23c3d69a1fe845871e7f89984235f15c",
    title: "Tech Schools - Colombia TEC",
    lastChangedBy: [
    "zbarrero@co.ibm.com - 2019-03-14T22:14:58.449Z",
    "zbarrero@co.ibm.com - 2019-03-14T22:15:28.156Z",
    "zbarrero@co.ibm.com - 2019-03-14T22:19:02.763Z",
    "zbarrero@co.ibm.com - 2019-03-14T22:19:34.669Z",
    "avillela@br.ibm.com - 2019-03-14T22:22:33.014Z"
    ]
    },
    {
    id: "f53be9c26aee2ddc094cd3edc9e27ae3",
    title: "Skill Set recommendations Information Architects need to support emerging Technologies",
    lastChangedBy: [
    "paridhi@us.ibm.com - 2019-04-22T13:02:59.198Z",
    "Debbie.Botha@ibm.com - 2019-06-08T13:45:46.099Z",
    "Debbie.Botha@ibm.com - 2019-06-08T14:07:27.626Z",
    "Debbie.Botha@ibm.com - 2019-06-08T14:38:02.533Z",
    "Debbie.Botha@ibm.com - 2019-06-08T14:39:22.869Z"
    ]
    },
    {
    id: "ef8c26ca97639e7bc00e5eb8cf2b188f",
    title: "Next Generation Media Platform",
    lastChangedBy: [
    "hbharmal@ca.ibm.com - 2019-05-31T20:44:53.443Z",
    "hbharmal@ca.ibm.com - 2019-05-31T20:45:12.005Z",
    "SF@jp.ibm.com - 2019-05-31T21:06:40.996Z",
    "celoessl@us.ibm.com - 2019-06-11T14:09:50.257Z",
    "rwilson@us.ibm.com - 2019-06-12T16:30:31.112Z"
    ]
    },
    {
    id: "a757de5bc2f75647bbae1c2e2390e433",
    title: "Management of AoT Affiliate programs",
    lastChangedBy: [
    "sprouts@us.ibm.com - 2019-05-07T17:34:48.882Z",
    "sprouts@us.ibm.com - 2019-05-07T17:35:23.699Z",
    "sprouts@us.ibm.com - 2019-05-07T17:36:06.810Z",
    "sara_weber@us.ibm.com - 2019-05-09T17:12:32.734Z",
    "sprouts@us.ibm.com - 2019-08-02T12:40:47.297Z"
    ]
    },
    {
    id: "e88aea133c231441de8721fc3e8fe5c7",
    title: "Attracting IBM Mindshare and Talent",
    lastChangedBy: [
    "rewiest@us.ibm.com - 2018-07-18T03:36:12.461Z",
    "rewiest@us.ibm.com - 2018-07-18T03:37:17.346Z",
    "rewiest@us.ibm.com - 2018-12-20T18:19:37.556Z",
    "rewiest@us.ibm.com - 2018-12-20T18:20:15.661Z",
    "rewiest@us.ibm.com - 2019-01-11T19:51:06.114Z"
    ]
    },
    {
    id: "323078afae9b89f2c5bf32a59d18c7fe",
    title: "Agreement with PhD students and Master students on Mexico",
    lastChangedBy: [
    "bjbaena@mx1.ibm.com - 2019-06-03T14:56:33.012Z",
    "bjbaena@mx1.ibm.com - 2019-06-03T15:00:51.219Z",
    "bjbaena@mx1.ibm.com - 2019-06-03T15:01:03.562Z",
    "bjbaena@mx1.ibm.com - 2019-06-03T15:32:29.491Z",
    "gandhis@au1.ibm.com - 2019-06-19T06:16:13.652Z"
    ]
    },
    {
    id: "8d9b8a5f018e1d2f27aa67c10169bed8",
    title: "Consumer Industry Reference Architecture Modernization - Digital Operations (DO)",
    lastChangedBy: [
    "schouten@us.ibm.com - 2019-05-15T12:52:43.188Z",
    "CHRISTOPHE.SORRE@fr.ibm.com - 2019-05-16T11:59:54.798Z",
    "CHRISTOPHE.SORRE@fr.ibm.com - 2019-06-12T10:04:16.647Z",
    "CHRISTOPHE.SORRE@fr.ibm.com - 2019-06-18T13:51:49.960Z",
    "CHRISTOPHE.SORRE@fr.ibm.com - 2019-06-18T13:54:01.070Z"
    ]
    },
    {
    id: "1462609088ebc59c47f50ae11d0b229f",
    title: "Hybrid Cloud for Financial Services Sector - Business Use Case",
    lastChangedBy: [
    "hthio@us.ibm.com - 2019-03-12T02:29:13.178Z",
    "hthio@us.ibm.com - 2019-03-12T02:31:25.703Z",
    "hthio@us.ibm.com - 2019-03-12T02:32:03.907Z",
    "hthio@us.ibm.com - 2019-03-12T02:32:15.334Z",
    "MARTINO@de.ibm.com - 2019-03-21T08:05:57.958Z"
    ]
    },
    {
    id: "99693e9b12a03bf2b67e6df45c4dbc7d",
    title: "Regional Technical Exchange 2019 GDL and MxCity",
    lastChangedBy: [
    "rosanarm@mx1.ibm.com - 2019-06-12T22:20:25.305Z",
    "rosanarm@mx1.ibm.com - 2019-06-12T22:20:37.878Z",
    "rosanarm@mx1.ibm.com - 2019-06-12T22:20:40.172Z",
    "rosanarm@mx1.ibm.com - 2019-06-12T22:20:44.697Z",
    "rosanarm@mx1.ibm.com - 2019-06-21T20:32:50.138Z"
    ]
    },
    {
    id: "0e0885350763c282b6dcd954b8dbbf4c",
    title: "IT education in primary schools",
    lastChangedBy: [
    "theresac@us.ibm.com - 2018-07-06T19:35:10.026Z",
    "Andy.M.Ramos@ibm.com - 2018-07-13T12:28:06.685Z",
    "rwilson@us.ibm.com - 2018-08-07T23:35:42.716Z",
    "rwilson@us.ibm.com - 2018-08-08T18:21:38.858Z",
    "rwilson@us.ibm.com - 2018-08-08T18:31:36.926Z"
    ]
    },
    {
    id: "5bbbe90e194e705a2c4bfece9bd6021b",
    title: "An Open Data Marketplace for Data Transactions",
    lastChangedBy: [
    "vasuv@us.ibm.com - 2019-07-28T05:52:08.306Z",
    "vasuv@us.ibm.com - 2019-07-28T06:18:17.731Z",
    "vasuv@us.ibm.com - 2019-07-30T22:51:45.819Z",
    "vasuv@us.ibm.com - 2019-08-04T05:37:26.322Z",
    "vasuv@us.ibm.com - 2019-08-04T05:37:40.941Z"
    ]
    },
    {
    id: "9cb293f75a0cace3e009ea8e4ca137bb",
    title: "Smarter Infrastructure: Modeling the Optimal Placement of Logical Partitions on IBM Z ",
    lastChangedBy: [
    "tanen@us.ibm.com - 2019-03-12T14:56:18.798Z",
    "tanen@us.ibm.com - 2019-03-12T14:59:49.319Z",
    "tanen@us.ibm.com - 2019-03-12T15:00:33.357Z",
    "tanen@us.ibm.com - 2019-03-12T15:02:34.681Z",
    "tanen@us.ibm.com - 2019-03-12T15:03:34.434Z"
    ]
    },
    {
    id: "52d1eaa84eaf3f82398a77d05b1a2cc3",
    title: "Infusing Industry into the Smarter Technical Selling Academy (STSA) 2019",
    lastChangedBy: [
    "schouten@us.ibm.com - 2019-01-21T15:00:07.552Z",
    "rwilson@us.ibm.com - 2019-01-23T02:35:24.694Z",
    "chandras@us.ibm.com - 2019-04-16T17:17:00.016Z",
    "chandras@us.ibm.com - 2019-04-16T17:17:52.168Z",
    "chandras@us.ibm.com - 2019-07-26T16:30:01.675Z"
    ]
    },
    {
    id: "f3f7788240365bdfbb017f17432adf6f",
    title: "Silicon Valley Lab Activities 2019 ",
    lastChangedBy: [
    "singhan@us.ibm.com - 2019-07-19T23:07:08.729Z",
    "singhan@us.ibm.com - 2019-07-19T23:07:23.367Z",
    "sagrawa@us.ibm.com - 2019-07-19T23:48:46.221Z",
    "sagrawa@us.ibm.com - 2019-07-19T23:52:43.616Z",
    "sagrawa@us.ibm.com - 2019-07-19T23:56:12.425Z"
    ]
    },
    {
    id: "713bfea58a77128e763837fad130d666",
    title: "Driving Innovation - IP Mash - Patenting Activities in Chicago in 2019 ",
    lastChangedBy: [
    "brooksn@us.ibm.com - 2019-04-30T13:58:12.763Z",
    "brooksn@us.ibm.com - 2019-04-30T13:58:27.961Z",
    "brooksn@us.ibm.com - 2019-05-24T12:02:36.118Z",
    "brooksn@us.ibm.com - 2019-05-24T12:02:39.212Z",
    "brooksn@us.ibm.com - 2019-06-25T15:13:52.303Z"
    ]
    },
    {
    id: "39b2643b5df7d86767f040a6ee24a7d7",
    title: "MCMP Solutioning Guide 101",
    lastChangedBy: [
    "ruediger.schulze@de.ibm.com - 2019-07-26T07:25:53.684Z",
    "ruediger.schulze@de.ibm.com - 2019-08-05T06:06:51.843Z",
    "ruediger.schulze@de.ibm.com - 2019-08-05T06:07:03.983Z",
    "ruediger.schulze@de.ibm.com - 2019-08-07T15:10:07.387Z",
    "ruediger.schulze@de.ibm.com - 2019-08-07T15:10:11.365Z"
    ]
    },
    {
    id: "50707466b8d80bab53bd424c16e57885",
    title: "AoT Ecosystems & Leadership TC Activities 2019",
    lastChangedBy: [
    "malaika@us.ibm.com - 2019-04-09T16:25:20.624Z",
    "malaika@us.ibm.com - 2019-04-09T16:26:12.651Z",
    "malaika@us.ibm.com - 2019-04-09T16:26:21.336Z",
    "walicki@us.ibm.com - 2019-04-09T16:31:04.613Z"
    ]
    },
    {
    id: "020fb2096235a9fefb5e09810ca9b441",
    title: "Business network design for supply-chain & insurance",
    lastChangedBy: [
    "LDesrosi@uk.ibm.com - 2019-06-04T13:18:15.564Z",
    "LDesrosi@uk.ibm.com - 2019-06-04T13:29:44.839Z",
    "LDesrosi@uk.ibm.com - 2019-06-04T13:30:02.978Z",
    "LDesrosi@uk.ibm.com - 2019-06-20T16:56:24.451Z",
    "LDesrosi@uk.ibm.com - 2019-06-20T16:57:26.359Z"
    ]
    },
    {
    id: "725b729bcff894fb24a6c8e35e783cc7",
    title: "IBM Cloud Status Quo",
    lastChangedBy: [
    "borowski@us.ibm.com - 2019-05-17T01:11:41.148Z",
    "borowski@us.ibm.com - 2019-05-17T01:17:17.531Z",
    "borowski@us.ibm.com - 2019-06-20T19:34:11.506Z",
    "borowski@us.ibm.com - 2019-07-15T04:56:01.182Z",
    "borowski@us.ibm.com - 2019-07-20T18:01:10.513Z"
    ]
    },
    {
    id: "943e64b0dd7ce296630b0aa626fdaa63",
    title: "PowerUp Mind Share for Cognitive Systems Innovation ",
    lastChangedBy: [
    "bunkc@us.ibm.com - 2019-07-31T19:45:48.747Z",
    "bunkc@us.ibm.com - 2019-07-31T19:46:47.860Z",
    "bunkc@us.ibm.com - 2019-07-31T19:46:50.849Z",
    "bunkc@us.ibm.com - 2019-07-31T19:56:39.007Z",
    "bunkc@us.ibm.com - 2019-07-31T19:56:57.947Z"
    ]
    },
    {
    id: "b9c244e3de47f6340b77eea480f1a4e4",
    title: "Deep Learning for image processing Workshop",
    lastChangedBy: [
    "jpmonge@cr.ibm.com - 2019-08-01T14:41:15.096Z",
    "jpmonge@cr.ibm.com - 2019-08-01T14:41:59.760Z",
    "ezamora@cr.ibm.com - 2019-08-01T15:08:23.557Z",
    "jpmonge@cr.ibm.com - 2019-08-01T15:11:32.099Z",
    "ezamora@cr.ibm.com - 2019-08-08T11:44:43.185Z"
    ]
    },
    {
    id: "a872dbb243509465a4550925f765addd",
    title: "Designing Container Solutions on IBM Z: Cloud Native Strategy and Technical Design Approach",
    lastChangedBy: [
    "utz.bacher@de.ibm.com - 2019-07-08T23:22:38.141Z",
    "utz.bacher@de.ibm.com - 2019-07-08T23:24:27.113Z",
    "utz.bacher@de.ibm.com - 2019-07-08T23:24:35.800Z",
    "utz.bacher@de.ibm.com - 2019-08-08T16:08:36.183Z",
    "utz.bacher@de.ibm.com - 2019-08-08T16:10:17.011Z"
    ]
    },
    {
    id: "25fef4bcb929840f038e74bd8ca0ad43",
    title: "IBM Design and Prototyping: how to use it for success",
    lastChangedBy: [
    "fgvelasco@es.ibm.com - 2019-05-16T13:45:26.351Z",
    "fgvelasco@es.ibm.com - 2019-05-16T13:45:34.855Z",
    "fgvelasco@es.ibm.com - 2019-05-29T12:23:19.302Z",
    "fgvelasco@es.ibm.com - 2019-05-31T10:40:28.524Z",
    "angelhbravo@es.ibm.com - 2019-06-27T06:22:59.582Z"
    ]
    },
    {
    id: "97624077a5278334dcd295ef8f7793bd",
    title: "TCA - Career@IBM 2019 - Technical Professions Certification Sessions",
    lastChangedBy: [
    "facundo.tomaselli@ar.ibm.com - 2019-05-08T16:01:01.762Z",
    "facundo.tomaselli@ar.ibm.com - 2019-05-08T16:06:48.145Z",
    "avillela@br.ibm.com - 2019-05-08T18:05:08.328Z",
    "facundo.tomaselli@ar.ibm.com - 2019-05-13T20:22:21.654Z",
    "facundo.tomaselli@ar.ibm.com - 2019-05-13T20:22:25.429Z"
    ]
    },
    {
    id: "72d48acefedf54d9b49fc3ef7551f80a",
    title: "Open Source Day @IBM Tokyo",
    lastChangedBy: [
    "OHARA@jp.ibm.com - 2019-08-06T13:28:13.946Z",
    "OHARA@jp.ibm.com - 2019-08-06T13:29:05.056Z",
    "OHARA@jp.ibm.com - 2019-08-06T13:37:18.817Z",
    "OHARA@jp.ibm.com - 2019-08-06T13:37:29.497Z",
    "sara_weber@us.ibm.com - 2019-08-07T12:59:06.914Z"
    ]
    },
    {
    id: "6f59370b62a33a7b12a09fd9276cc18a",
    title: "Using AI in Customer Support to translate human languages for customer communications",
    lastChangedBy: [
    "mmccawley@us.ibm.com - 2019-06-13T19:29:16.749Z",
    "mmccawley@us.ibm.com - 2019-06-13T19:31:50.852Z",
    "mmccawley@us.ibm.com - 2019-06-13T19:32:11.993Z",
    "mmccawley@us.ibm.com - 2019-08-01T11:40:05.815Z",
    "mmccawley@us.ibm.com - 2019-08-01T11:41:22.139Z"
    ]
    },
    {
    id: "6d6f7d3e9cbd579678bd7d3b9ed8edd6",
    title: "TLC-Brazil - Outreach 2019 - Participation in the FDC Innovation Reference Center",
    lastChangedBy: [
    "avillela@br.ibm.com - 2019-04-10T21:22:35.602Z",
    "avillela@br.ibm.com - 2019-04-10T21:27:51.690Z",
    "avillela@br.ibm.com - 2019-04-10T21:29:28.689Z",
    "avillela@br.ibm.com - 2019-04-10T22:29:51.163Z",
    "avillela@br.ibm.com - 2019-04-10T22:29:53.772Z"
    ]
    },
    {
    id: "90919c193ce0887c89d54381332ac667",
    title: "IBM zEnterprise Data Compression (zEDC) - Exploitation Use cases ",
    lastChangedBy: [
    "pechrist@in.ibm.com - 2019-03-27T09:29:34.486Z",
    "pechrist@in.ibm.com - 2019-03-27T09:29:53.608Z",
    "pechrist@in.ibm.com - 2019-04-22T11:27:10.072Z",
    "pechrist@in.ibm.com - 2019-04-22T11:29:46.551Z",
    "pechrist@in.ibm.com - 2019-04-22T11:30:05.378Z"
    ]
    },
    {
    id: "6f8f02eedde9cb8e30dd87b22cb23643",
    title: "AoT Emergent Technology Report on Blockchain",
    lastChangedBy: [
    "rwilson@us.ibm.com - 2019-06-12T16:20:11.386Z",
    "abiazett@us.ibm.com - 2019-06-20T18:02:06.044Z",
    "abiazett@us.ibm.com - 2019-06-20T18:02:17.444Z",
    "abiazett@us.ibm.com - 2019-07-30T21:46:17.722Z",
    "abiazett@us.ibm.com - 2019-07-30T21:46:19.817Z"
    ]
    },
    {
    id: "db0daa198b9b798918f18d4f7fdbcf7f",
    title: "2019 Global BlueHack - Value Creation",
    lastChangedBy: [
    "borger@ibm.com - 2019-06-02T22:21:22.850Z",
    "borger@ibm.com - 2019-06-02T22:22:03.219Z",
    "borger@ibm.com - 2019-06-02T22:22:14.718Z",
    "borger@ibm.com - 2019-06-02T22:22:56.853Z",
    "alanpic@us.ibm.com - 2019-06-02T22:29:29.348Z"
    ]
    },
    {
    id: "cc1bb28e82a917c608fea471a6f5d7ec",
    title: "Jumpstart for IT Architect Certification",
    lastChangedBy: [
    "isabelm@br.ibm.com - 2019-04-12T17:17:57.455Z",
    "isabelm@br.ibm.com - 2019-04-12T17:18:14.125Z",
    "isabelm@br.ibm.com - 2019-04-12T17:19:10.120Z",
    "isabelm@br.ibm.com - 2019-04-12T17:21:33.087Z",
    "avillela@br.ibm.com - 2019-04-15T02:55:47.185Z"
    ]
    },
    {
    id: "0a72813fa471c18ff9615f4314513492",
    title: "Mt Whitney - Ontology Defined Cognitive System",
    lastChangedBy: [
    "kreulen@us.ibm.com - 2018-07-25T17:39:49.211Z",
    "kreulen@us.ibm.com - 2018-10-10T13:43:58.329Z",
    "kreulen@us.ibm.com - 2018-10-10T13:44:22.059Z",
    "kreulen@us.ibm.com - 2018-10-10T13:45:33.390Z",
    "kreulen@us.ibm.com - 2018-10-10T13:45:57.363Z"
    ]
    },
    {
    id: "8f660fd703db1aa1ac6d01e076b498e1",
    title: "Grow GBS Ireland capability on technical growth areas ",
    lastChangedBy: [
    "mcfadden@ie.ibm.com - 2019-07-23T12:15:13.192Z",
    "mcfadden@ie.ibm.com - 2019-07-23T12:17:01.480Z",
    "mcfadden@ie.ibm.com - 2019-07-23T12:18:12.904Z",
    "mcfadden@ie.ibm.com - 2019-07-23T12:18:21.441Z",
    "Andy.M.Ramos@ibm.com - 2019-08-08T13:41:43.206Z"
    ]
    },
    {
    id: "e6ad3816e98c08448965945fb7560951",
    title: "AoT Technical Council on DevOps ",
    lastChangedBy: [
    "rradclif@us.ibm.com - 2019-05-07T13:48:09.402Z",
    "rradclif@us.ibm.com - 2019-05-07T13:49:36.387Z",
    "rradclif@us.ibm.com - 2019-05-07T13:49:55.311Z",
    "rradclif@us.ibm.com - 2019-05-07T13:50:50.877Z",
    "rradclif@us.ibm.com - 2019-05-07T14:11:40.149Z"
    ]
    },
    {
    id: "11ad093631b02ca68d0a452a99e5baef",
    title: "Incentive women in the path of invention",
    lastChangedBy: [
    "apappel@br.ibm.com - 2019-08-08T15:54:23.418Z",
    "apappel@br.ibm.com - 2019-08-08T15:57:38.921Z",
    "apappel@br.ibm.com - 2019-08-08T15:57:52.261Z",
    "apappel@br.ibm.com - 2019-08-08T16:01:24.875Z",
    "apappel@br.ibm.com - 2019-08-08T16:04:23.435Z"
    ]
    },
    {
    id: "2ce99e3c97d9a9398d6b299d7d11e17d",
    title: "Conversational AI: Plan, Implementation, Evolution",
    lastChangedBy: [
    "nicolo.sgobba@cz.ibm.com - 2019-06-21T06:01:09.902Z",
    "nicolo.sgobba@cz.ibm.com - 2019-07-08T07:18:21.426Z",
    "nicolo.sgobba@cz.ibm.com - 2019-07-17T10:14:38.621Z",
    "nicolo.sgobba@cz.ibm.com - 2019-08-07T16:08:34.514Z",
    "nicolo.sgobba@cz.ibm.com - 2019-08-07T16:08:57.020Z"
    ]
    }];

    var isAdmin = [ "rwilson@us.ibm.com", "schouten@us.ibm.com", "paridhi@us.ibm.com", "pmoreno@us.ibm.com", "theresac@us.ibm.com", "andy.m.ramos@ibm.com"];

    let newList = "";
    let name,date,isFound;

    list.forEach(e => {
        isFound = false;
        newList += `${e.id}##${e.title}`;
        for (var user = e.lastChangedBy.length-1; user >= 0; user--) {
            name = e.lastChangedBy[user].replace(/(.*) - .*/i,'$1').toLowerCase();
            date = e.lastChangedBy[user].replace(/.* - (.*)/i,'$1');
            if (isAdmin.indexOf(name) === -1) {
                newList += `##${name}##${date}\n`;
                isFound = true;
                break;
            }   
        }
        if (!isFound) {  newList += '####\n';}
           
    })        

    try {
        const data = fs.writeFileSync('lastChangedByNonAdmin.csv', newList)
        //file written successfully
      } catch (err) {
        console.error(err)
      }