function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponse.BatchCreate = function (email){
  return email.map(function (question) {
    return new IcebreakerResponse (question)
  })
<<<<<<< HEAD
}
=======
}
>>>>>>> 5ede721c442b322579701064e8d1b5ca738d9f4c
