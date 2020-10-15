function checkPermissions(user) {
    const allowedUserIds = [512, 675, 1901, 2310, 3849]
    return user.admin || allowedUserIds.includes(user.id)
  }
  
  function filterUserList(users) {
    return users.filter(checkPermissions);
  }
  
  function findAuthorizedUser(users) {
    return users.find(checkPermissions);
  }
  
  function doIfAuthorized(user, call) {
    if(checkPermissions(user)) {
      call(user);
    }
  }