
{
  console.log('z = ' + z); // undefined
  const x = 1;
  {
    console.log("x = " + x); // 1
  }
  {
    console.log('z = ' + z);
    {
      const y = 4;
      var z = 8;
    }
    console.log('z = ' + z); // 8
    // console.log(y); // ReferenceError: y is not defined
  }
  console.log('z = ' + z); // 8
}