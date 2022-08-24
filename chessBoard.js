let length = 8;
for (let index = 0; index < length; index++) {
  for (let subIndex = 0; subIndex < length; subIndex++) {
    //    Method  1
    //    if (index % 2 == 0) {
    //      if (subIndex % 2 == 0)
    //        process.stdout.write(' ');
    //      else
    //        process.stdout.write('#');
    //    } else {
    //      if (subIndex % 2 == 0)
    //        process.stdout.write('#');
    //      else
    //        process.stdout.write(' ');
    //    }
    // Method 2
    if ((index + subIndex) % 2 == 0)
      process.stdout.write(' ');
    else
      process.stdout.write('#');
  }
  console.log();
}
