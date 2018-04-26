// function getTempCallback (location, callback){
//   callback(undefined, 78);
//   callback('location not found');
// }
//
// getTempCallback('lagos',function(err, temp){
//   if(err){
//     console.log('Error found');
//   } else {
//     console.log('Success');
//   }
// });


function getTempPromise(location){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("string");
      reject('City not found');
    },1000);
  });
}




getTempPromise('Lagos').then(function(temp){
  console.log('Promise Success',temp);
}, function(err){
  console.log("Promise Error",err);

});
