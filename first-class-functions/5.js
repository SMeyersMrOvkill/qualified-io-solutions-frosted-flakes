function checkPermissions(user) {
    const allowedUserIds = [512, 675, 1901, 2310, 3849]
    return user.admin || allowedUserIds.includes(user.id)
  }
  
  function filterUserList(users) {
    return users.filter(checkPermissions())
  }
  
  function callNTimes(n, call) {
    for(let i = 0; i < n; i++) {
      call();
    }
  }
  
  function runForOldUser(user, call) {
    if(user.id < 1000) {
      call(user);
    }
  }
  
  function runConditionally(user, f1, f2) {
    if(f1(user)) {
      f2(user);
    }
  }
  
  function maxById(users) {
    let max = {id: 0};
    users.forEach((user) => {
      if(user.id > max.id) {
        max = user;
      }
    });
    return max;
  }
  
  function maxBy(users, fun) {
    let userVal = {user: {}, val: 0};
    users.forEach((user) => {
      if(fun(user) > userVal.val) {
        userVal.user = user;
        userVal.val = fun(user);
      }
    });
    return userVal.user;
  }