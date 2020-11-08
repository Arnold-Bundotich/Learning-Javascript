function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('prof', 'vancouver', 'Sang', 2);
tellFortune('Astro', 'USA', 'Mdodos', 3);
tellFortune('Accountant', 'UK', 'Hep', 0);
