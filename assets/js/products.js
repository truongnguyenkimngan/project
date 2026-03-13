const products = [

    {
    id:1,
    name:"Áo Thun Basic",
    price:199000,
    image:"assets/image/products/sp1.jpg",
    desc:"Áo thun cotton thoáng mát, phù hợp mọi phong cách."
    },
    
    {
    id:2,
    name:"Quần Jean Nam",
    price:399000,
    image:"assets/image/products/sp2.jpg",
    desc:"Quần jean nam trẻ trung, bền đẹp."
    },
    
    {
    id:3,
    name:"Đầm Nữ Xinh",
    price:499000,
    image:"assets/image/products/sp3.jpg",
    desc:"Đầm nữ phong cách nhẹ nhàng."
    },
    
    {
    id:4,
    name:"Áo Khoác Hoodie",
    price:350000,
    image:"assets/image/products/sp4.jpg",
    desc:"Hoodie ấm áp cho mùa lạnh."
    },
    
    {
    id:5,
    name:"Áo Sơ Mi Nam",
    price:280000,
    image:"assets/image/products/sp5.jpg",
    desc:"Sơ mi nam lịch lãm."
    },
    
    {
    id:6,
    name:"Chân Váy",
    price:250000,
    image:"assets/image/products/sp6.jpg",
    desc:"Chân váy nữ tính."
    },
    
    {
    id:7,
    name:"Khăn Đeo Cổ",
    price:150000,
    image:"assets/image/products/sp7.jpg",
    desc:"Khăn thời trang phong cách."
    },
    
    {
    id:8,
    name:"Áo Khoác Mùa Đông",
    price:460000,
    image:"assets/image/products/sp8.jpg",
    desc:"Áo khoác giữ ấm mùa đông."
    },
    
    {
    id:9,
    name:"Áo Thun",
    price:120000,
    image:"assets/image/products/sp9.jpg",
    desc:"Áo thun đơn giản."
    },
    
    {
    id:10,
    name:"Áo Len",
    price:270000,
    image:"assets/image/products/sp10.jpg",
    desc:"Áo len mềm mại."
    },
    
    {
    id:11,
    name:"Khăn Quàng Cổ",
    price:190000,
    image:"assets/image/products/sp11.jpg",
    desc:"Khăn quàng cổ mùa đông."
    },
    
    {
    id:12,
    name:"Áo Sơ Mi Nữ",
    price:250000,
    image:"assets/image/products/sp12.jpg",
    desc:"Sơ mi nữ thanh lịch."
    }
    
    ];
    
    
    
    /* HIỂN THỊ DANH SÁCH SẢN PHẨM */
    
    const productList = document.getElementById("product-list");
    
    if(productList){

        productList.innerHTML = products.map(product =>

            `
            <div class="product">
            
            <a href="product-detail.html?id=${product.id}">
            <img src="${product.image}">
            </a>
            
            <h3>${product.name}</h3>
            
            <p>${product.price.toLocaleString()}đ</p>
            
            <button onclick="addToCart(${product.id})">
            Mua ngay
            </button>
            
            </div>
            `
            
            ).join("");
    }

    
    
    
    
    /* TRANG CHI TIẾT SẢN PHẨM */
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    
    const product = products.find(p => p.id == id);
    
    if(product){
    
    const img = document.getElementById("product-img");
    const name = document.getElementById("product-name");
    const price = document.getElementById("product-price");
    const desc = document.getElementById("product-desc");
    
    if(img) img.src = product.image;
    if(name) name.innerText = product.name;
    if(price) price.innerText = product.price.toLocaleString() + "đ";
    if(desc) desc.innerText = product.desc;
    
    }
    
    
    
    /* THÊM VÀO GIỎ HÀNG */
    
    function addToCart(id){

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        let item = cart.find(p => p.id == id);
        
        if(item){
        
        item.qty += 1;
        
        }else{
        
        cart.push({
        id:id,
        qty:1
        });
        
        }
        
        localStorage.setItem("cart", JSON.stringify(cart));
        
        alert("Đã thêm vào giỏ hàng");
        
        }