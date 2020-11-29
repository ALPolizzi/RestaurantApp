
//cart system
// Dynamically populate the table with shopping list items.
function ClearAll(){
    sessionStorage.removeItem("Chicken Sandwhich");
	sessionStorage.removeItem("Burger");
	sessionStorage.removeItem("Double CheeseBurger");
    doShowAll();
}
function doShowAll() {
    
      
        var list = "<tr><th>Item</th><th>Value</th></tr>\n"+ "<tr><td>" 
			if(sessionStorage.getItem("Chicken Sandwhich")!=null){
					list+= "Chicken Sandwhich" + "</td>\n<td>"
					+ sessionStorage.getItem("Chicken Sandwhich") + "</td></tr>\n"
				}
			if(sessionStorage.getItem("Burger")!=null){
				list += "<tr><td>" + "Burger" + "</td>\n<td>"
				+ sessionStorage.getItem("Burger") + "</td></tr>\n"
			}
			if(sessionStorage.getItem("Duoble CheeseBurger")!=null){
				list+= "<tr><td>" + "Double CheeeseBurger" + "</td>\n<td>"
				+ sessionStorage.getItem("Double CheeeseBurger") + "</td></tr>\n";
			}

        //If no item exists in the cart.
        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        document.getElementById('list').innerHTML = list;
		
}
function SaveItem() {

    var name = document.forms.ShoppingList.name.value;
    var data = document.forms.ShoppingList.data.value;
    sessionStorage.setItem(name, data);
    doShowAll();

}


function ModifyItem() {
    var name1 = document.forms.ShoppingList.name.value;
    var data1 = document.forms.ShoppingList.data.value;

            if (sessionStorage.getItem(name1) !=null)
            {
              sessionStorage.setItem(name1,data1);
              document.forms.ShoppingList.data.value = sessionStorage.getItem(name1);
            }

    doShowAll();
}

function RemoveItem()
{
var name=document.forms.ShoppingList.name.value;
document.forms.ShoppingList.data.value=sessionStorage.removeItem(name);
doShowAll();
}



//Cart system above by Matt Zand of smashing magazine.com
