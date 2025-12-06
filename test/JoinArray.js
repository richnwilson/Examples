const affiliateName = [
    "TEC France"
  ];

// const industryName = [
//     "Travel and Transportation"
//   ];


arrayAffilateName= [];
arrayIndustryName= [];
if (typeof affiliateName !== undefined) {
    arrayAffilateName = affiliateName;
}
if (typeof industryName !== undefined) {
    arrayIndustryName = industryName;
}
console.log(arrayAffilateName.concat(arrayIndustryName));
