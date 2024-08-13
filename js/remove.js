function remove(id) {
    let pro = JSON.parse(localStorage.getItem("addedcart"));
    if (pro) {
      for (let i = 0; i < pro.length; i++) {
        if (pro[i].id == id) {
          pro[i].qun -= 1;
          localStorage.setItem("addedcart", JSON.stringify(pro));
          newdraw(pro);
          drawaddedcartUi();
  
          if (pro[i].qun == 0) {
            let filter = pro.filter((item) => item.id !== id);
            localStorage.setItem("addedcart", JSON.stringify(filter));
  
            // newdraw(filter);
            console.log(pro[i].qun);
            drawaddedcartUi(filter);
            newdraw(filter);
          }
        }
      }
    }
  }
  