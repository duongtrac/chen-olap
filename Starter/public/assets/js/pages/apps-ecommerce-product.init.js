var options={valueNames:["product_code","product_name","category","price","stock","revenue","status","action"],page:7,pagination:!0,plugins:[ListPagination({left:2,right:2})]};function eventListenerDropdown1(e,t,o,n){t.classList.toggle("show"),Popper.createPopper(t,o.querySelector("#productListTable .dropdown-menu"),{placement:n}),1!=t.classList.contains("show")?(o.querySelector("#productListTable .dropdown-menu").classList.remove("block"),o.querySelector("#productListTable .dropdown-menu").classList.add("hidden")):(dismissDropdownMenu(),o.querySelector("#productListTable .dropdown-menu").classList.add("block"),o.querySelector("#productListTable .dropdown-menu").classList.remove("hidden"),o.querySelector("#productListTable .dropdown-menu").classList.contains("block")?t.classList.add("show"):t.classList.remove("show"),e.stopPropagation())}function dismissDropdownMenu(){Array.from(document.querySelectorAll("#productListTable .dropdown-menu")).forEach((function(e){e.classList.remove("block"),e.classList.add("hidden")})),Array.from(document.querySelectorAll(".dropdown-toggle")).forEach((function(e){e.classList.remove("show")}))}function dropdownEvent1(e,t,o=null){o?e.forEach((function(e){e.removeEventListener("click",eventListenerDropdown1)})):Array.from(e).forEach((function(e){e.querySelectorAll(".dropdown-toggle").forEach((function(o){o.addEventListener("click",(function(n){eventListenerDropdown1(n,o,e,t)}))}))}))}function updateDropdown(){setTimeout((()=>{drawerSetting();var e=document.querySelectorAll("#productListTable .dropdown"),t=Array.from(e).filter((function(e){return!e.onclick}));t&&dropdownEvent1(t,"bottom-start",!0),dropdownEvent1(t,"bottom-start")}),250)}var productListTable=new List("productListTable",options).on("updated",(function(e){document.getElementsByClassName("noresult")&&document.getElementsByClassName("noresult")[0]&&(0==e.matchingItems.length?document.getElementsByClassName("noresult")[0].style.display="block":document.getElementsByClassName("noresult")[0].style.display="none",e.matchingItems.length>0?document.getElementsByClassName("noresult")[0].style.display="none":document.getElementsByClassName("noresult")[0].style.display="block");var t=1==e.i,o=e.i>e.matchingItems.length-e.page;document.querySelector(".pagination-prev.disabled")&&document.querySelector(".pagination-prev.disabled").classList.remove("disabled"),document.querySelector(".pagination-next.disabled")&&document.querySelector(".pagination-next.disabled").classList.remove("disabled"),t&&document.querySelector(".pagination-prev").classList.add("disabled"),o&&document.querySelector(".pagination-next").classList.add("disabled");const n=productListTable.listContainer.querySelector(".total-records"),a=productListTable.listContainer.querySelector(".showing");n&&(n.innerHTML=productListTable.items.length),a&&(a.innerHTML=productListTable.visibleItems.length),document.querySelector(".pagination-next").addEventListener("click",(function(){document.querySelector(".pagination.listjs-pagination")&&document.querySelector(".pagination.listjs-pagination").querySelector(".active")&&null!=document.querySelector(".pagination.listjs-pagination").querySelector(".active").nextElementSibling&&document.querySelector(".pagination.listjs-pagination").querySelector(".active").nextElementSibling.children[0].click()})),document.querySelector(".pagination-prev").addEventListener("click",(function(){document.querySelector(".pagination.listjs-pagination")&&document.querySelector(".pagination.listjs-pagination").querySelector(".active")&&null!=document.querySelector(".pagination.listjs-pagination").querySelector(".active").previousSibling&&document.querySelector(".pagination.listjs-pagination").querySelector(".active").previousSibling.children[0].click()})),lucide.createIcons(),collapseComponent()}));function isStatus(e){switch(e){case"Scheduled":return"status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20 dark:border-transparent";case"Publish":return"status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent";case"Inactive":return"status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent"}}const xhttp=new XMLHttpRequest;xhttp.onload=function(){var e=JSON.parse(this.responseText);Array.from(e).forEach((function(e){productListTable.add({product_code:`<a href="#!" class="transition-all duration-150 ease-linear product_code text-custom-500 hover:text-custom-600">${e.product_code}</a>`,product_name:'<a href="apps-ecommerce-product-overview.html" class="flex items-center gap-2">\n                            <img src="'+e.img+'" alt="Product images" class="h-6">\n                            <h6 class="product_name">'+e.product_name+"</h6>\n                        </a>",category:'<span class="category px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-zink-200">'+e.category+"</span>",price:e.price,stock:e.stock,revenue:e.revenue,status:'<span class="'+isStatus(e.status)+'">'+e.status+"</span>",action:'<div class="relative dropdown">\n                    <button class="flex items-center justify-center w-[30px] h-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="productAction1" data-bs-toggle="dropdown"><i data-lucide="more-horizontal" class="w-3 h-3"></i></button>\n                    <ul class="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="productAction1">\n                        <li>\n                            <a class="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="apps-ecommerce-product-overview.html"><i data-lucide="eye" class="inline-block w-3 h-3 mr-1"></i> <span class="align-middle">Overview</span></a>\n                        </li>\n                        <li>\n                            <a class="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="apps-ecommerce-product-create.html"><i data-lucide="file-edit" class="inline-block w-3 h-3 mr-1"></i> <span class="align-middle">Edit</span></a>\n                        </li>\n                        <li>\n                            <a data-modal-target="deleteModal" class="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!"><i data-lucide="trash-2" class="inline-block w-3 h-3 mr-1"></i> <span class="align-middle">Delete</span></a>\n                        </li>\n                    </ul>\n                </div>'})})),lucide.createIcons(),collapseComponent(),drawerSetting();var t=document.querySelectorAll("#productListTable .dropdown"),o=Array.from(t).filter((function(e){return!e.onclick}));setTimeout((()=>{dropdownEvent1(o,"bottom-start")}),250),document.querySelectorAll("#productListTable .listjs-pagination .page").forEach((function(e){e.addEventListener("click",updateDropdown)}))},xhttp.open("GET","assets/json/product-list.json"),xhttp.send();